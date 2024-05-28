import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import PaswordInput from 'components/PasswordInput';
import { Formik } from 'formik';
import { StackParamList } from 'navigation/tab-navigation';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type LoginScreenNavigationProps = StackNavigationProp<StackParamList, 'Login'>;

const LoginScreen = () => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const navigation = useNavigation<LoginScreenNavigationProps>();
  // Toggle visibility not functioning yet

  const navigateRegisterScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.mainContainer, { height: SCREEN_HEIGHT }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.contentTitle}>WELCOME BACK</Text>
      <Text style={styles.subText}>Login to your account</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              placeholder="Email"
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <PaswordInput
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              placeholder="Password"
            />
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <Text
        style={{
          fontFamily: 'BubblegumSans',
          color: 'grey',
          alignSelf: 'center',
          margin: 25,
          fontSize: 20,
        }}>
        Don't have an account?
        <Pressable onPress={navigateRegisterScreen}>
          <Text
            style={{ color: 'orange', marginLeft: 4, fontFamily: 'BubblegumSans', fontSize: 20 }}>
            Sign Up
          </Text>
        </Pressable>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    padding: 10,
    height: 60,
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
