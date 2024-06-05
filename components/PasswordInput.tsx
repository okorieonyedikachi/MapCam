import { Eye, EyeSlash } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

interface PaswordInputProps {
  value: string;
  onChangeText: (e: any) => void;
  // onBlur: (e: any) => void;
  placeholder: string;
}
const PasswordInput = ({ value, onChangeText, placeholder }: PaswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
  };
  return (
    <View>
      <TextInput
        style={styles.inputField}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        // onBlur={onBlur}
        secureTextEntry={!isPasswordVisible}
      />
      <Pressable onPress={handlePasswordVisibility}>
        {isPasswordVisible ? (
          <EyeSlash color="orange" style={{ position: 'absolute', right: 20, bottom: 30 }} />
        ) : (
          <Eye color="orange" style={{ position: 'absolute', right: 20, bottom: 30 }} />
        )}
      </Pressable>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
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
});
