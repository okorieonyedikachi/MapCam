/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './tab-navigation';

const AppContent = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default function RootStack() {
  return <AppContent />;
}
