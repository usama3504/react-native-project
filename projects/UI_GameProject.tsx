// import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GoalInput from '../components/GoalInput';
import GameOver from '../src/screens/GuessGame/GameOverScreen/GameOver';
import OpponentGuessScreen from '../src/screens/GuessGame/OpponentsGuessScreen/OpponentGuessScreen';
import StartGameScreen from '../src/screens/GuessGame/StartGameScreen/StartGameScreen';

//  import { NavigationContainer } from '@react-navigation/native';
// import Navigator from './src/navigations';

const UIGameProject = () => {
  const [userEnteredNumber, setUserEnteredNumber] = useState<string>();
  const [pageHeading, setpageHeading] = useState<string>('Guess My Number');
  const [botguessedAttempts, setBotguessedAttempts] = useState<number>();
  
  let temp: string = 'Guess My Number';
  const confirmedEnteredNumberHandler = (confirmedNumber: string) => {
    setUserEnteredNumber(confirmedNumber);
  };
  const botGuessAttemptsHandler = (botGuessAttempts: number) => {
    setBotguessedAttempts(botGuessAttempts);
  };
  const changeHeadingText = () => {
    console.log('gggg');
  };

  let screen = <StartGameScreen onConfirm={confirmedEnteredNumberHandler} />;
  if (userEnteredNumber && !botguessedAttempts) {
    (temp = 'Opponent Guess'),
      (screen = (
        <OpponentGuessScreen
          userEnteredValue={userEnteredNumber}
          onGameOver={botGuessAttemptsHandler}></OpponentGuessScreen>
      ));
    // setpageHeading("Opponent Guess");
  } else if (userEnteredNumber && botguessedAttempts) {
    // setpageHeading("Game Over");
    (temp = 'Game Over'),
      (screen = (
        <GameOver
          userEnteredNumber={userEnteredNumber}
          botguessedAttempts={botguessedAttempts}></GameOver>
      ));
  }
  

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        <View style={styles.guessmynumberContainer}>
          <Text style={styles.guessmynumberText}>{temp}</Text>
        </View>
      
       

        {screen}
      </ImageBackground>
    </LinearGradient>
    //   <NavigationContainer>
    //  <View style={{flex: 1}}>
    //   <Navigator />
    //  </View>
    //   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // backgroundColor:"#ddb52f",
    // backgroundGradient: "vertical",
    // backgroundGradientTop: "#333333",
    // backgroundGradientBottom: "#666666"
  },
  backgroundImage: {
    opacity: 0.15,
  },
  guessmynumberContainer: {
    borderWidth: 4,
    marginTop: 80,
    marginHorizontal: 40,
    padding: 10,
    alignItems: 'center',
    // backgroundColor: '#72063C',
    borderColor: 'white',
  },
  guessmynumberText: {
    fontSize: 25,
    color: 'white',
  },
  BotNumberContainer: {
    borderWidth: 2,
    marginTop: 40,
    marginHorizontal: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#72063C',
    borderColor: '#4e0329',
  },
});

export default UIGameProject;
