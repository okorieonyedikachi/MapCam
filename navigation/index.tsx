import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './(tabs)/home';
import Settings from './(tabs)/settings';

// const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function RootStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Overview">
//         <Stack.Screen name="Overview" component={Overview} />
//         <Stack.Screen
//           name="Details"
//           component={Details}
//           options={({ navigation }) => ({
//             headerLeft: () => <BackButton onPress={navigation.goBack} />,
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
