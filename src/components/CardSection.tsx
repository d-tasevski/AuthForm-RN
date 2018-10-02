import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface Style {
	container: ViewStyle;
}
const CardSection: React.StatelessComponent<{}> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create<Style>({
	container: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
	},
});

export default CardSection;
