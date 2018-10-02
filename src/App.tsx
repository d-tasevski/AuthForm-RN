import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header text="Authentication" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
