import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [side, setSide] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState('');

  function startCalc() {
    const res = 1.0/3.0*Math.pow(side, 2) * height;
    setVolume(res);
  }

  return (
    <View style={styles.container}>
      <Text>Gula térfogata</Text>
      <Text>Oldal</Text>
      <TextInput
      style={styles.input}
      onChangeText={side => setSide(side)}
      />
      <Text>Magasság</Text>
      <TextInput
      style={styles.input}
      onChangeText={height => setHeight(height)}
      />
      <Button
      onPress={startCalc}
      title="Számít"
      />
      <Text>Térfogat</Text>
      <TextInput
      style={styles.input}
      value={volume}
      />
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

  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderStyle: 'solid',
  }
});
