import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Text,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import {useState, useEffect} from 'react';

interface gameOverProps{
  userEnteredNumber:string
  botguessedAttempts:number
}




const GameOver = (props:gameOverProps) => {
    // const startNewGameHandler=()=>{
    //     props.onStartNewGame(false);
    // }
  return (
   
      <View style={styles.container}>
        <View style={styles.guessAttemptsContainer}>
          <Text style={styles.guessAttemptsText}>Your phone needed {props.botguessedAttempts} rounds to guess the number {props.userEnteredNumber}</Text>
        </View>
        <View style={styles.startNewGameContainer}>
          <Button title={"Start New Game"} ></Button>
        </View>

      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 30,
  },
  gameOverTextContainer: {
   flex:1,
    borderWidth: 4,
    margin: 50,
    padding: 10,
    alignItems: 'center',
  },
  gameOverText:{
    fontSize:25,
  },
  guessAttemptsContainer:{
    flex:9,
  },
  guessAttemptsText:{
    fontSize:15,
  },
  startNewGameContainer:{
    flex:7,
  }
  
});
export default GameOver;
