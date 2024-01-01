import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const AuthApp = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="AppNavigator" component={AppNavigator} />
		</Stack.Navigator>
	);
};
export default AuthApp;
