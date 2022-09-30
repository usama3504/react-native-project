import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GameStart from '../screens/GuessGameScreens/gamestartScreen/GameStart';





const GameProject = () => {


  
  return (
    <View style={styles.container}>
      <GameStart style={styles.gameStart} ></GameStart>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{ 
    flex: 1,
    padding:30,
    backgroundColor:"white",
        // justifyContent: "center",
        // alignItems: "center"
  },
  gameStart:{
    flex:1,
  }
  

})

 


export default GameProject;
