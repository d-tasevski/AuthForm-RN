import React from 'react';
import {
	View, ActivityIndicator, StyleSheet, ViewStyle,
} from 'react-native';

interface Style {
	spinner: ViewStyle;
}

interface Props {
	size?: 'large' | 'small' | number | undefined;
}

const Spinner = ({ size = 'large' }: Props) => (
	<View style={styles.spinner}>
		<ActivityIndicator size={size} />
	</View>
);

const styles = StyleSheet.create<Style>({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Spinner;
