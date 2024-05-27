import { Eye, EyeSlash } from 'iconsax-react-native';
import { useEffect, useState } from 'react';
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle visibility not functioning yet
  const handlePasswordVisibility = () => {
    console.log('Before ' + isPasswordVisible);
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
    // console.log('After ' + isPasswordVisible);
  };

  // Log the updated state value
  useEffect(() => {
    console.log('Password visibility changed to: ', isPasswordVisible);
  }, [isPasswordVisible]);

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

        <View>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            placeholder="Password"
            // value={values.password}
            // onChangeText={handleChange('password')}
            // onBlur={handleBlur('password')}
            secureTextEntry={!isPasswordVisible}
          />
          <Pressable onPress={handlePasswordVisibility}>
            {isPasswordVisible ? (
              <Eye color="orange" style={{ position: 'absolute', right: 20, bottom: 30 }} />
            ) : (
              <EyeSlash color="orange" style={{ position: 'absolute', right: 20, bottom: 30 }} />
            )}
          </Pressable>
        </View>
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
