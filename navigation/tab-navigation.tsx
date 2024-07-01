import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StackScreenProps } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Map, ProfileCircle, Setting3 } from 'iconsax-react-native';

// import OnboardingScreen from 'screens/OnboardingScreen';
import Home from './(tabs)/home';
import Profile from './(tabs)/profile';
import Settings from './(tabs)/settings';
// import LoginScreen from './screens/LoginScreen';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import RegisterScreen from './screens/RegisterScreen';
import CameraScreen from './screens/cameraScreen';

export type StackParamList = {
  App: undefined;
  CameraScreen: undefined;
  Auth: undefined;
};
export type CameraParamList = {
  Camera: undefined;
};
export type AuthParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
};
const Tab = createBottomTabNavigator();
const CamStack = createStackNavigator<CameraParamList>();
const AppStack = createStackNavigator<StackParamList>();
const AuthStack = createStackNavigator<AuthParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Auth" children={AuthNavigator} />
      <AppStack.Screen name="App" children={TabNavigator} />
      <AppStack.Screen name="CameraScreen" children={CameraNavigator} />
    </AppStack.Navigator>
  );
}

// function GuestStack (){
//   return ()
// }

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarStyle: {
          paddingTop: 20,
          paddingBottom: 20,
          borderTopWidth: 0.2,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 50,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Map color={color} />,
          tabBarLabelStyle: { marginTop: 10, fontSize: 12, fontFamily: 'BubblegumSans' },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileCircle color={color} />,
          tabBarLabelStyle: { marginTop: 10, fontSize: 12, fontFamily: 'BubblegumSans' },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <Setting3 color={color} />,
          tabBarLabelStyle: { marginTop: 10, fontSize: 12, fontFamily: 'BubblegumSans' },
        }}
      />
    </Tab.Navigator>
  );
}

function CameraNavigator() {
  return (
    <CamStack.Navigator>
      <CamStack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
    </CamStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
