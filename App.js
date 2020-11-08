import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { MainScreen } from "./Screens/MainScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App