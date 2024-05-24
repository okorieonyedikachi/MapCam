import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from 'react-native';

const RegisterScreen = () => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.mainContainer, { height: SCREEN_HEIGHT }]}>
      <Text style={styles.contentTitle}>WELCOME BACK</Text>
      <Text style={styles.subText}>Login to your account</Text>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.inputField}
          autoCapitalize="none"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput style={styles.inputField} autoCapitalize="none" placeholder="Password" />
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
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
  subText: {
    textAlign: 'center',
    fontFamily: 'BubblegumSans',
    color: 'grey',
    fontSize: 18,
    marginTop: 12,
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
  btn: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 8,
    marginTop: 18,
    width: '40%',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'BubblegumSans',
    alignSelf: 'center',
  },
});
