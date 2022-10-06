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
import OpponentGuessScreen from '../src/screens/GuessGame/OpponentsGuessScreen/OpponentGuessScreen';
import StartGameScreen from '../src/screens/GuessGame/StartGameScreen/StartGameScreen';



//  import { NavigationContainer } from '@react-navigation/native';
// import Navigator from './src/navigations';

const UIGameProject = () => {
  const [userEnteredNumber, setUserEnteredNumber] = useState<string>();



  const confirmedEnteredNumberHandler=(confirmedNumber:string)=>{
    setUserEnteredNumber(confirmedNumber);
  }

  let screen = <StartGameScreen onConfirm={confirmedEnteredNumberHandler} />;
  if(userEnteredNumber){
    screen=<OpponentGuessScreen userEnteredValue={userEnteredNumber}></OpponentGuessScreen>
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}>
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
});

export default UIGameProject;
