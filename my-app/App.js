import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Montserrat': require('./assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
//     'Montserrat-Bold': require('./assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
//   });
// };

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
});
