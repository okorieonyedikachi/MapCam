import PasswordInput from 'components/PasswordInput';
import { Formik } from 'formik';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  funFact: Yup.string().max(60, 'Too long!'),
  phoneNumber: Yup.string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

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
        <Formik
          initialValues={initialValues}
          onSubmit={submitFunc}
          validationSchema={RegisterSchema}>
          {({ handleSubmit, handleChange, values, errors, touched }) => (
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
