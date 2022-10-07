import {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Alert, Text,FlatList} from 'react-native';
import PrimaryButton from '../../../../components/GuessGameComponents/PrimaryButton';
import OpponentGuessItem from './component/OpponentGuessItem';

interface OpponentGuessScreenProps {
  userEnteredValue: string;
  onGameOver:(botGuessAttemptNumber:number)=>void
}

const OpponentGuessScreen = (props: OpponentGuessScreenProps) => {
  // const [guessAttemptsNumber, setguessAttemptsNumber] = useState<number>(1);

  // const setguessAttemptsNumberHandler = () => {
  //   setguessAttemptsNumber(priviousValue => priviousValue + 1);
  // };

  const guessRandomNumber = (max: string, min: string) => {
    return Math.floor(
      Math.random() * (Number(max) - Number(min) + 1) + Number(min),
    ).toString();
  };

  const [botGuessedNumber, setBotGuessedNumber] = useState<string>(
    guessRandomNumber('99', '1'),
  );
  const [guessValueList, setGuessValueList] = useState<string[]>([
    botGuessedNumber,
  ]);
  const [maxGuessedValue, setMaxGuessedValue] = useState<string>('99');
  const [minGuessedValue, setMinGuessedValue] = useState<string>('1');

  // const [temp, setTemp] = useState<boolean>(false);

  useEffect(() => {
    console.log(props.userEnteredValue);
    console.log(botGuessedNumber);
    if (botGuessedNumber === props.userEnteredValue) {
      // console.log(props.userEnteredNumber);
      // console.log(botGuessedNumber);
      props.onGameOver(guessValueList.length);
      setGuessValueList([]);
      console.log('Game Over');
      // setTemp(true);
    }
  }, [botGuessedNumber]);

  // const addGuessedValueListHandler=()=>{
  //     setGuessValueList((privousList)=>[...privousList,botGuessedNumber]);
  // }
  const guessHigherNumberHandler = () => {
    if (props.userEnteredValue) {
      if (Number(props.userEnteredValue) > Number(botGuessedNumber)) {
        let randomNum = guessRandomNumber(maxGuessedValue, botGuessedNumber);
        setMinGuessedValue(botGuessedNumber);
        setBotGuessedNumber(randomNum);
        setGuessValueList(privousList => [...privousList, randomNum]);
        // setguessAttemptsNumberHandler();
      } else {
        Alert.alert("Don't Lie!", 'You know this is wrong...');
      }
    }
  };
  const guessLowerNumberHandler = () => {
    if (props.userEnteredValue) {
      if (Number(props.userEnteredValue) < Number(botGuessedNumber)) {
        let randomNum = guessRandomNumber(botGuessedNumber, minGuessedValue);
        setMaxGuessedValue(botGuessedNumber);
        setBotGuessedNumber(randomNum);
        setGuessValueList(privousList => [...privousList, randomNum]);
        // setguessAttemptsNumberHandler();
      } else {
        Alert.alert("Don't Lie!", 'You know this is wrong...');
      }
    }
  };
  // const startNewGameHandler = (visibilityStatus: boolean) => {
  //   setGameOverModalVisibility(visibilityStatus);
  //   // props.onGameOverVisibility(visibilityStatus);
  // };
  // useEffect(() => {
  //   if (gameOverModalVisibility === false && temp === true)
  //     props.onGameOverVisibility(false);
  // }, [gameOverModalVisibility, temp]);

  return (
    <View>
      <View style={styles.BotNumberContainer}>
        <Text style={styles.guessmynumberText}>{botGuessedNumber}</Text>
      </View>
      <View style={styles.inputContainer}>
      <View style={styles.guessNumberHeadingContainer}>
            <Text style={styles.guessNumberHeading}>Enter a Number</Text>
          </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={guessLowerNumberHandler}>-</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={guessHigherNumberHandler}>+</PrimaryButton>
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
            }
            keyExtractor={(item,index)=>{
                          return index
        
            }
          }></FlatList>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    padding: 16,
    backgroundColor: '#4e0329',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  numberInput: {
    // height:50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  numberInputContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  guessmynumberText: {
    fontSize: 25,
    color: 'white',
  },
  BotNumberContainer: {
    borderWidth: 4,
    marginTop: 40,
    marginHorizontal: 80,
    paddingVertical: 20,
    alignItems: 'center',
    // backgroundColor: '#72063C',
    borderColor: 'white',
  },
  guessNumberHeadingContainer: {
    padding: 5,
    alignItems: 'center',
  },
  guessNumberHeading: {
    fontSize: 25,
    color:"white",
    marginBottom:10
  },
  flatList: {
    marginTop: 10,
  },
  
});

export default OpponentGuessScreen;
