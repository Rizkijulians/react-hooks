import React from 'react';
import { View } from 'react-native';
import HelloWorld from './components/Hello';
import AssetExample from './components/AssetExample'; // Adjusted the path to AssetExample.js
import styles from './assets/styles'; // Adjusted the path to styles.js

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld nama="Rizki" />
      <HelloWorld nama="Shinta" />
      <AssetExample />
    </View>
  );
}
