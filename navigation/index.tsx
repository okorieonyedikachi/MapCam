/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

import AppNavigator from './tab-navigation';

const AppContent = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default function RootStack() {
  const [fontsLoaded] = useFonts({
    BubblegumSans: require('../assets/fonts/BubblegumSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>App Loading</Text>;
  }
  return <AppContent />;
}
