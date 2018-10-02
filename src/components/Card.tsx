import React from 'react';
import { View } from 'react-native';

// Adding the "React.StatelessComponent<{}>"
// type suffices to make the compiler understand the passed object,
// because the resulting parameter type becomes:
// {} & { children?: ReactNode; }
const Card: React.StatelessComponent<{}> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = {
	container: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},
};

export default Card;
