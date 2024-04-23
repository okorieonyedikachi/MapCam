import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from 'navigation/tab-navigation';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type OnboardingScreenNavigationProps = StackNavigationProp<StackParamList, 'Onboarding'>;
const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProps>();

  return (
    <SafeAreaView>
      <Text>OnboardingScreen</Text>
      <View>
        <Pressable onPress={() => navigation.navigate('App')}>
          <Text>Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
