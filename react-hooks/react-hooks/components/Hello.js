import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assets/styles';

function HelloWorld({ nama }) {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View>
      <Text style={styles.text}>Hello, {nama}!</Text>
      <TextInput ref={inputRef} style={styles.input} placeholder={`Ketik nama ${nama}`} />
      <TouchableOpacity style={styles.button} onPress={focusInput}>
        <Text style={styles.buttonText}>Fokus Input</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HelloWorld;
