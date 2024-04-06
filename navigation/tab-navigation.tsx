import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
// import { Heart, Home2, Notification, ShoppingBag } from 'iconsax-react-native';
// import { StyleSheet } from 'react-native';

import { RootStackParamList } from '.';
import Home from './(tabs)/home';
import Settings from './(tabs)/settings';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabNavigator({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarStyle: { paddingTop: 20, borderTopWidth: 0 },
        // headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          //   tabBarIcon: ({ color }) => <Home2 color={color} />,
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
