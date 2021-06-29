import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const dice = {
  1: require('./assets/Dice1.png'),
  2: require('./assets/Dice2.png'),
  3: require('./assets/Dice3.png'),
  4: require('./assets/Dice4.png'),
  5: require('./assets/Dice5.png'),
  6: require('./assets/Dice6.png'),

}

export default function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(6);
  const rollTheDice = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(dice1);
    setDice2(dice2);
  }
  return (
    <View style={styles.container}>
      <View style={styles.diceView}>
        <Image source={dice[dice1]} style={styles.dice} />
        <Image source={dice[dice2]} style={styles.dice} />
      </View>
      <TouchableOpacity onPress={rollTheDice}>
        <View style={styles.diceBtn}>
          <Text style={styles.diceBtnText}>ROLL THE DICE</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071715',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dice: {
    width: 128,
    height: 128
  },
  diceView: {
    flexDirection: "row"
  },
  diceBtn: {
    backgroundColor: '#71C7AC',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10
  },
  diceBtnText: {
    color: '#fff',
    fontSize: 18
  }
});
