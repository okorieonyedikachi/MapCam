import { Formik } from 'formik';
import { Eye, EyeSlash } from 'iconsax-react-native';
import { useState } from 'react';
import {
  // SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = () => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle visibility not functioning yet
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
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
            <View>
              <TextInput
                style={styles.inputField}
                autoCapitalize="none"
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={!isPasswordVisible}
              />
              <Pressable onPress={handlePasswordVisibility}>
                {isPasswordVisible ? (
                  <EyeSlash
                    color="orange"
                    style={{ position: 'absolute', right: 20, bottom: 30 }}
                  />
                ) : (
                  <Eye color="orange" style={{ position: 'absolute', right: 20, bottom: 30 }} />
                )}
              </Pressable>
            </View>

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
        <Pressable>
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
