import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Welcome = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('AppNavigator')}
			>
				<Text style={styles.buttonText}>Open App</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: 'orange',
		paddingVertical: 20,
		paddingHorizontal: 100,
		borderRadius: 25,
	},
	buttonText: {
		fontSize: 18,
	},
});
