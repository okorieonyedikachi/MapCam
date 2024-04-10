import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tab-navigation';

export default function RootStack() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
