/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import AppNavigator from './tab-navigation';

export default function RootStack() {
  const [fontsLoaded] = useFonts({
    BubblegumSans: require('../assets/fonts/BubblegumSans-Regular.ttf'),
  });
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
