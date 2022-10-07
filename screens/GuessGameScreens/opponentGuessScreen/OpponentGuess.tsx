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
import OpponentGuessItem from './components/OpponentGuessItem';
import GameOver from '../gameoverScreen/GameOver';

interface opponentGuessProps {
  modalVisibility: boolean;
  userEnteredNumber?: number;
  onGameOverVisibility: (visibilityStatus: boolean) => void;
}

const OpponentGuess = (props: opponentGuessProps) => {
  const [guessAttemptsNumber, setguessAttemptsNumber] = useState<number>(1);

  const setguessAttemptsNumberHandler = () => {
    setguessAttemptsNumber(priviousValue => priviousValue + 1);
  };

  const guessRandomNumber = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [botGuessedNumber, setBotGuessedNumber] = useState<number>(
    guessRandomNumber(99, 1),
  );
  const [guessValueList, setGuessValueList] = useState<number[]>([
    botGuessedNumber,
  ]);
  const [maxGuessedValue, setMaxGuessedValue] = useState<number>(99);
  const [minGuessedValue, setMinGuessedValue] = useState<number>(1);
  const [gameOverModalVisibility, setGameOverModalVisibility] =
    useState<boolean>(false);
  const [temp, setTemp] = useState<boolean>(false);

  useEffect(() => {
    console.log(props.userEnteredNumber);
    console.log(botGuessedNumber);
    if (botGuessedNumber == props.userEnteredNumber) {
      // console.log(props.userEnteredNumber);
      // console.log(botGuessedNumber);

      setGameOverModalVisibility(true);
      setGuessValueList([]);
      setTemp(true);
    }
  }, [botGuessedNumber]);

  // const addGuessedValueListHandler=()=>{
  //     setGuessValueList((privousList)=>[...privousList,botGuessedNumber]);
  // }
  const guessHigherNumberHandler = () => {
    if (props.userEnteredNumber) {
      if (props.userEnteredNumber > botGuessedNumber) {
        let randomNum = guessRandomNumber(maxGuessedValue, botGuessedNumber);
        setMinGuessedValue(botGuessedNumber);
        setBotGuessedNumber(randomNum);
        setGuessValueList(privousList => [...privousList, randomNum]);
        setguessAttemptsNumberHandler();
      } else {
        Alert.alert("Don't Lie!", 'You know this is wrong...');
      }
    }
  };
  const guessLowerNumberHandler = () => {
    if (props.userEnteredNumber) {
      if (props.userEnteredNumber < botGuessedNumber) {
        let randomNum = guessRandomNumber(botGuessedNumber, minGuessedValue);
        setMaxGuessedValue(botGuessedNumber);
        setBotGuessedNumber(randomNum);
        setGuessValueList(privousList => [...privousList, randomNum]);
        setguessAttemptsNumberHandler();
      } else {
        Alert.alert("Don't Lie!", 'You know this is wrong...');
      }
    }
  };
  const startNewGameHandler = (visibilityStatus: boolean) => {
    setGameOverModalVisibility(visibilityStatus);
    // props.onGameOverVisibility(visibilityStatus);
  };
  useEffect(() => {
    if (gameOverModalVisibility === false && temp === true)
      props.onGameOverVisibility(false);
  }, [gameOverModalVisibility, temp]);

  return (
    <Modal visible={props.modalVisibility} animationType="fade">
      <View style={styles.container}>
        <GameOver
          gameOverModalVisibility={gameOverModalVisibility}
          guessAttemptsNumber={guessAttemptsNumber}
          userEnteredNumber={props.userEnteredNumber}
          onStartNewGame={startNewGameHandler}></GameOver>
        <View style={styles.opponentGuessContainer}>
          <Text style={styles.opponentGuessText}>Opponent's Guess</Text>
        </View>
        <View style={styles.opponentGuessValueContainer}>
          <Text style={styles.opponentGuessValue}>{botGuessedNumber}</Text>
        </View>
        <View style={styles.numberContainer}>
          <View style={styles.guessNumberHeadingContainer}>
            <Text style={styles.guessNumberHeading}>Enter a Number</Text>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="-" onPress={guessLowerNumberHandler}></Button>
            </View>
            <View style={styles.button}>
              <Button title="+" onPress={guessHigherNumberHandler}></Button>
            </View>
          </View>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={guessValueList}
            inverted={true}
            renderItem={guessNumber => {
              return (
                <OpponentGuessItem
                  guessValue={guessNumber.item}></OpponentGuessItem>
                // <Text>{guessNumber.item}</Text>
              );
            }}></FlatList>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  opponentGuessContainer: {
    borderWidth: 4,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  opponentGuessText: {
    fontSize: 25,
  },
  opponentGuessValueContainer: {
    borderWidth: 4,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  opponentGuessValue: {
    fontSize: 25,
  },
  numberContainer: {
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
  },
  guessNumberHeadingContainer: {
    padding: 5,
    alignItems: 'center',
  },
  guessNumberHeading: {
    fontSize: 20,
  },
  guessNumberText: {
    alignItems: 'center',
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '40%',
    marginHorizontal: 10,
  },
  flatList: {
    marginTop: 10,
  },
});

export default OpponentGuess;
