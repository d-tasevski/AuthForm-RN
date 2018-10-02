import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import config from './config';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

export default class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config.firebaseConfig);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header text="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flex: 1,
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
