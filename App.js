import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, { useState } from 'react';
export default function App() {
  // let a= 10;
  const [a, setA] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput style={{ borderwidth: 2, borderColor: 'black'}} placeholder='Add'/>
      <Text>Open up App.js to start working on your app! {a}</Text>
      <Button onPress={() => setA(a + 1)} title="Click me" />
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
  },
});
