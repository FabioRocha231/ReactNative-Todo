import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({ onChangeText, value }) => (
  <TextInput style={input} onChangeText={onChangeText} value={value} />
);

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000026',
    paddingLeft: 15,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3,
  },
});

const { input } = styles;

export default Input;
