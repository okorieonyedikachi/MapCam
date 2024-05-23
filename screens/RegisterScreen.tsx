import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';

const RegisterScreen = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  console.log('true');

  return (
    <SafeAreaView style={[styles.mainContainer, { width: SCREEN_WIDTH }]}>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
  },
});
