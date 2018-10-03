import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import config from './config';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Button from './components/Button';
import Spinner from './components/Spinner';
import CardSection from './components/CardSection';

interface State {
	isLoggedIn: boolean | null;
}

export default class App extends Component<State> {
	state = {
		isLoggedIn: null,
	};

	componentDidMount() {
		firebase.initializeApp(config.firebaseConfig);

		firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
			if (!user) return this.setState({ isLoggedIn: false });

			this.setState({ isLoggedIn: true });
		});
	}

	logoutUser = () => firebase.auth().signOut();

	renderContent = () => {
		switch (this.state.isLoggedIn) {
		case null:
			// https://github.com/Microsoft/TypeScript/issues/8971
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		case true:
			return (
				<CardSection>
					<Button text="Logout" onPress={this.logoutUser} />
				</CardSection>
			);
		default:
			return <LoginForm />;
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Header text="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		// flex: 1,
	},
	instructions: {
		color: '#333333',
		marginBottom: 5,
		textAlign: 'center',
	},
	welcome: {
		fontSize: 20,
		margin: 10,
		textAlign: 'center',
	},
});
