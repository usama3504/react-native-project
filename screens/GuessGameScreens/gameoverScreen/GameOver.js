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

const GameOver = props => {
    const startNewGameHandler=()=>{
        props.onStartNewGame(false);
    }
  return (
    <Modal visible={props.gameOverModalVisibility} animationType="fade">
      <View style={styles.container}>
        <View style={styles.gameOverTextContainer}>
          <Text style={styles.gameOverText}>Game Over</Text>
        </View>
        <View style={styles.guessAttemptsContainer}>
          <Text style={styles.guessAttemptsText}>Your phone needed {props.guessAttemptsNumber} rounds to guess the number {props.userEnteredNumber}</Text>
        </View>
        <View style={styles.startNewGameContainer}>
          <Button title={"Start New Game"} onPress={startNewGameHandler}></Button>
        </View>

      </View>
    </Modal>
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
