import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlayScreen from './src/PlayScreen';

export default function App() {
  const [play, setPlay] = useState(true)
  return (
    <>
    {
      play ? 
       ( 
       <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={styles.emoji}>✊ ✋ ✌️</Text>
      <View style={styles.btnContainer}>
        <Button onPress={() => setPlay(false)} title={"PLAY"} />
      </View>
      <StatusBar style="auto" />
    </View> ): <PlayScreen />
    
    }
    </>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    margin: 10,
  },
  emoji: {
    fontSize: 60,
  },
  btnContainer: {
    marginTop: 60,
    width: 240,
  },
  srcCode: {
    position: "absolute",
    bottom: 20,
    color: "#0069c0",
    textDecorationLine: "underline",
  },
});
