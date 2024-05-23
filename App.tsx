import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

import RootStack from './navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    BubblegumSans: require('./assets/fonts/BubblegumSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>App Loading</Text>;
  }
  return <RootStack />;
}
