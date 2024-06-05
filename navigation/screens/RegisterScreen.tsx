import PasswordInput from 'components/PasswordInput';
import { Field, Formik } from 'formik';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

const RegisterScreen = () => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const initialValues = {
    fullName: '',
    funFact: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const submitFunc = (value: any) => {
    console.log(value);
  };

  return (
    <SafeAreaView style={[styles.mainContainer, { height: SCREEN_HEIGHT }]}>
      <Text style={styles.contentTitle}>LETS GET STARTED</Text>
      <Text style={styles.subText}>Create your new account</Text>
      <View style={styles.contentContainer}>
        <Formik initialValues={initialValues} onSubmit={submitFunc}>
          {({ handleSubmit, handleChange, values, isValid }) => (
            <>
              <TextInput
                style={styles.inputField}
                placeholder="Full name"
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Fun Fact about you"
                onChangeText={handleChange('funFact')}
                value={values.funFact}
                multiline
                numberOfLines={3}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <PasswordInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
              />
              <PasswordInput
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                placeholder="Confirm Password"
              />
              <Pressable style={styles.btn} onPress={() => handleSubmit()}>
                <Text style={styles.btnText}>Sign In</Text>
              </Pressable>
            </>
          )}
          {/* {({ handleSubmit, isValid, values }) => ( */}
          {/* // <>
            //   <Field component={CustomInput} name="fullName" placeholder="Full Name" />
            //   <Field
            //     component={CustomInput}
            //     name="funFact"
            //     placeholder="Fun fact about you"
            //     multiline
            //     numberOfLines={3}
            //     editable
            //   />
            //   <Field
            //     component={CustomInput}
            //     name="email"
            //     placeholder="Email"
            //     keyboardType="email-address"
            //   />
            //   <Field component={CustomInput} name="password" placeholder="Password" />
            //   <Field
            //     component={CustomInput}
            //     name="confirmPassword"
            //     placeholder="Confirm Password"
            //   />
            //   {/* <Button title="Submit" onPress={() => handleSubmit()} /> */}
          {/* //   <Pressable style={styles.btn} disabled={isValid} onPress={() => console.log('true')}>
            //     <Text style={styles.btnText}>Sign In</Text>
            //   </Pressable>
            // </> */}
        </Formik>
        <Text
          style={{
            fontFamily: 'BubblegumSans',
            color: 'grey',
            alignSelf: 'center',
            margin: 25,
            fontSize: 20,
          }}>
          Already have an account?
          <Pressable>
            <Text
              style={{
                color: 'orange',
                marginLeft: 4,
                fontFamily: 'BubblegumSans',
                fontSize: 20,
              }}
              onPress={() => console.log('true')}>
              Login
            </Text>
          </Pressable>
        </Text>
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
    // height: 40,
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
