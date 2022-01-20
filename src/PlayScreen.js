import { View, Text, Button, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from "react-native";

const rock = require('./signs/rock.png');
const scissors = require("./signs/scissors.png");
const paper = require("./signs/paper.png");

const imageRand = () => {
    const emojis = [rock, paper, scissors];

    const random = Math.round(Math.random()*2);

    return emojis[random];
}

const bgColors = ["#1abc9c", "#e67e22", "#e74c3c", "#3498db"];

const PlayScreen = () => {
    const [counter, setCounter] = useState(3);

    useEffect(() => {
      //console.log(counter);
      if(counter < 1) return;
      const timer = setTimeout(() =>{
        setCounter(prev => prev - 1);
      }, 500)

      return () =>{
          clearTimeout(timer);
      }
      
    }, [counter]);
    
  return (
    <View
      style={StyleSheet.compose(
        {
          backgroundColor: bgColors[counter],
        },
        styles.container
      )}
    >
      {counter < 1 ? (
        <>
          <Image style={styles.sign} source={imageRand()} />
          <View style={styles.btnContainer}>
            <Button onPress={() => setCounter(3)} title="Play Again" />
          </View>
        </>
      ) : (
        <Text style={styles.counter}>{counter}</Text>
      )}
    </View>
  );
}
export default PlayScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 150,
  },
  sign: {
    width: 220,
    height: 220,
  },
  btnContainer: {
    marginTop: 60,
    width: 240,
  },
});
