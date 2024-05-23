import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>LoginScreen: something else</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
  },
});
