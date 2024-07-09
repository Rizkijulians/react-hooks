import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assets/styles';

function AssetExample() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Anda sudah ngetik ${count} kali`;
  }, [count]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Anda sudah ngetik {count} kali</Text>
      <TextInput ref={inputRef} style={styles.input} placeholder="Ketik di sini" />
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Klik Aku</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={focusInput}>
        <Text style={styles.buttonText}>Fokus Input</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AssetExample;
