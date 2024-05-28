import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasErrors = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.inputField, hasErrors && styles.errorInput]}
        value={value}
        onChange={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasErrors && <Text style={styles.errorText}> {errors[name]}</Text>}
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
