import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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
