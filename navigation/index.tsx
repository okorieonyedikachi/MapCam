import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './tab-navigation';

export default function RootStack() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
