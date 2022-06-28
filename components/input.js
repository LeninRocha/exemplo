import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

export default function Input({props}){
  return(
    <TextInput
    style={styles.input}
      mode="outlined"
      label={props}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '85%',
    backgroundColor: '#fff',
    borderColor: "red",
    marginTop: 15
  },
})