import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StackScreenProps } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Map, ProfileCircle, Setting3 } from 'iconsax-react-native';

// import { RootStackParamList } from '.';
import CameraScreen from 'screens/cameraScreen';

import Home from './(tabs)/home';
import Profile from './(tabs)/profile';
import Settings from './(tabs)/settings';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarStyle: {
          paddingTop: 20,
          paddingBottom: 20,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 50,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Map"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color }) => <Map color={color} />,
          tabBarLabelStyle: { marginTop: 10, fontSize: 14 },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileCircle color={color} />,
          tabBarLabelStyle: { marginTop: 10, fontSize: 14 },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <Setting3 color={color} />,
          tabBarLabelStyle: { marginTop: 10, fontSize: 14 },
        }}
      />
    </Tab.Navigator>
  );
}
