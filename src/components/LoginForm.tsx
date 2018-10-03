import React, { Component } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { auth } from 'firebase';

import Button from './Button';
import Card from './Card';
import Input from './Input';
import CardSection from './CardSection';
import Spinner from './Spinner';

interface State {
	email: string;
	password: string;
	error: string;
	isLoading: boolean;
}

interface Style {
	errorText: TextStyle;
}

class LoginForm extends Component<State> {
	state = {
		email: '',
		password: '',
		error: '',
		isLoading: false,
	};

	onPress = () => {
		const { email, password } = this.state;

		this.setState({ error: '', isLoading: true });
		return auth()
			.signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess)
			.catch(() => auth()
				.createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess)
				.catch(this.onLoginFailure));
	};

	onLoginSuccess = () => this.setState({
		email: '',
		password: '',
		error: '',
		isLoading: false,
	});

	onLoginFailure = () => this.setState({ error: 'Authentication Failed!', isLoading: false });

	onChangeEmail = (email: string) => this.setState({ email });

	onChangePass = (password: string) => this.setState({ password });

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="email@mailbox.com"
						label="Email"
						value={this.state.email}
						onChange={this.onChangeEmail}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="************"
						secure
						label="Password"
						value={this.state.password}
						onChange={this.onChangePass}
					/>
				</CardSection>
				<CardSection>
					{this.state.isLoading ? <Spinner /> : <Button text="Authenticate" onPress={this.onPress} />}
				</CardSection>
				<Text style={styles.errorText}>{this.state.error}</Text>
			</Card>
		);
	}
}

const styles = StyleSheet.create<Style>({
	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	},
});

export default LoginForm;
