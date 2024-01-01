import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';

import Home from '../screens/Home';
import About from '../screens/About';
import Notes from '../screens/Notes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<Foundation name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Notes"
				component={Notes}
				options={{
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<Foundation
							name="clipboard-notes"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="About"
				component={About}
				options={{
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<Foundation name="info" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
