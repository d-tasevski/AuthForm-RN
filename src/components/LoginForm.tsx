import React, { Component } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { auth } from 'firebase';

import Button from './Button';
import Card from './Card';
import Input from './Input';
import CardSection from './CardSection';

interface State {
	email: string;
	password: string;
	error: string;
}

interface Style {
	errorText: TextStyle;
}

class LoginForm extends Component<State> {
	state = {
		email: '',
		password: '',
		error: '',
	};

	onPress = () => {
		const { email, password } = this.state;
		auth()
			.signInWithEmailAndPassword(email, password)
			.catch(() => {
				auth()
					.createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({ error: 'Authentication Failed!' });
					});
			});
	};

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
					<Input secure label="Password" value={this.state.password} onChange={this.onChangePass} />
				</CardSection>
				<CardSection>
					<Button text="Authenticate" onPress={this.onPress} />
				</CardSection>
				{this.state.error && <Text style={styles.errorText}>{this.state.error}</Text>}
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
