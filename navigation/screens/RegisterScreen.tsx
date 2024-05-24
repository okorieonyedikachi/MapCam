import { SafeAreaView, StyleSheet, TextInput, Text, View, useWindowDimensions } from 'react-native';

const RegisterScreen = () => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.mainContainer, { height: SCREEN_HEIGHT }]}>
      <Text style={styles.contentTitle}>LETS GET STARTED</Text>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.inputField}
          autoCapitalize="none"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput style={styles.inputField} autoCapitalize="none" placeholder="Password" />
        <TextInput style={styles.inputField} autoCapitalize="none" placeholder="Confirm Password" />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffaeb',
    justifyContent: 'center',
  },
  contentTitle: {
    color: 'orange',
    fontFamily: 'BubblegumSans',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
  },
  inputField: {
    padding: 20,
    height: 40,
    marginVertical: 12,
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 10,
    borderBottomColor: 'grey',
    fontSize: 18,
    fontFamily: 'BubblegumSans',
  },
});
