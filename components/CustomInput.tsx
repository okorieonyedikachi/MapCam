import React, { ChangeEvent } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface CustomInputProps {
  onChangeText: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T
    ): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
  };
  name: string;
  value: string;
}

const CustomInput = ({ onChangeText, value, name }: CustomInputProps) => {
  return (
    // <>
    //   <TextInput
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     style={[styles.inputField, hasErrors && styles.errorInput]}
    //     value={value}
    //     onChange={onChange(name)}
    //     onBlur={() => {
    //       setFieldTouched(name);
    //       onBlur(name);
    //     }}
    //     {...inputProps}
    //   />
    //   {hasErrors && <Text style={styles.errorText}> {errors[name]}</Text>}
    // </>
    <>
      <TextInput onChangeText={onChangeText(value)} value={value} style={styles.inputField} />
    </>
  );
};

export default CustomInput;

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
  errorText: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'BubblegumSans',
  },
  errorInput: {
    borderBottomWidth: 1,
    borderColor: 'red',
  },
});
