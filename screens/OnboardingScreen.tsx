import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from 'navigation/tab-navigation';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type OnboardingScreenNavigationProps = StackNavigationProp<StackParamList, 'Onboarding'>;
const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProps>();
  const navigateHome = () => {
    navigation.navigate('App');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={navigateHome}>
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
