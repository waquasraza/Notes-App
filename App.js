import { NativeBaseProvider } from 'native-base';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<AuthNavigator />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
