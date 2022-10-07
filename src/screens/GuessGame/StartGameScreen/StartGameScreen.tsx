import { useState } from 'react';
import {View, StyleSheet,TextInput, Alert,Text} from 'react-native';

// import {TextInput} from 'react-native-gesture-handler';
import PrimaryButton from '../../../../components/GuessGameComponents/PrimaryButton';

interface StartGameScreenProps{
    onConfirm:(enteredNumber:string)=>void
}


const StartGameScreen = (props:StartGameScreenProps) => {
    const [enteredNumber,setEnteredNumber]=useState("");
    
    const resetNumberHandler=()=>{
        console.log("reset number");
        setEnteredNumber("");

    }
    const confirmNumberHandler=()=>{
        if(enteredNumber==="")
        {
            Alert.alert(
                "Pleaze Enter a number",

            )
        }
        else if(Number(enteredNumber)<1)
        {
            Alert.alert(
                "Invalid Number!",
                "It has to be a number between 1 and 99",
                )
        }
        else if(isNaN(Number(enteredNumber)))
        {
            Alert.alert(
                "Error!",
                "It has to be a number between 1 and 99",
                )
        }
        else{
          props.onConfirm(enteredNumber);
        }
    }
    const enteredTextHandler=(enteredText:string)=>{
        setEnteredNumber(enteredText);
        //checkEnteredNumberIsValid(enteredText)
    }
    // const checkEnteredNumberIsValid=(number)=>{
    //     if(number<1)
    //     {
    //         Alert.alert(
    //             "Invalid Number!",
    //             "Number has to be a number between 1 and 99",
    //             )
    //     }
    // }


    return (
    <View style={styles.inputContainer}>
      <View style={styles.guessNumberHeadingContainer}>
          <Text style={styles.guessNumberHeading}>Enter a Number</Text>
        </View>
      <View style={styles.numberInputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="numeric"
          onChangeText={enteredTextHandler}
          value={enteredNumber}>
          </TextInput>
          
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetNumberHandler} >Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 80,
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
  button:{
    flex:1,
  },
  guessNumberHeadingContainer:{
    padding:5,
        alignItems: "center", 
  },
  guessNumberHeading:{
    fontSize:25,
    color:"white",
  },
});

export default StartGameScreen;
