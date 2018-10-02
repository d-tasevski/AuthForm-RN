import React, { Component } from 'react';

import Button from './Button';
import Card from './Card';
import Input from './Input';
import CardSection from './CardSection';

interface State {
	email: string;
	password: string;
}

class LoginForm extends Component<State> {
	state = {
		email: '',
		password: '',
	};

	onPress = (e: any) => {
		console.log(e);
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
			</Card>
		);
	}
}

export default LoginForm;
