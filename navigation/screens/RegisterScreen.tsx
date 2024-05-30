import CustomInput from 'components/CustomInput';
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
    // email: '',
    // password: '',
    // confirmPassword: '',
  };
  const submitFunc = (value: any) => {
    console.log(value);
  };

  return (
    <SafeAreaView style={[styles.mainContainer, { height: SCREEN_HEIGHT }]}>
      <Text style={styles.contentTitle}>LETS GET STARTED</Text>

      <View style={styles.contentContainer}>
        <Formik initialValues={initialValues} onSubmit={submitFunc}>
          {({ handleSubmit, handleChange, values }) => (
            <>
              <TextInput
                style={styles.inputField}
                placeholder="full name"
                onChangeText={handleChange}
                value={values.fullName}
              />
              <CustomInput onChangeText={handleChange} value={values.funFact} name="funFact" />
              <Pressable onPress={() => handleSubmit()}>
                <Text>Submit</Text>
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
