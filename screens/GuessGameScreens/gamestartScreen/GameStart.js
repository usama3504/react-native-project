// import { Button, TextInput,StyleSheet,View,Text,Alert } from "react-native"
// import {useState} from 'react';
// import OpponentGuess from "../opponentGuessScreen/OpponentGuess";


// const GameStart=()=>{


//     const [modalIsVisibal,setModalIsVisibal]=useState(false);
//     const [enteredNumber,setEnteredNumber]=useState();

//     const enteredTexthandler=(enteredText)=>{
//         setEnteredNumber(enteredText);
//         checkEnteredNumberIsValid(enteredText)
//     }

//     const checkEnteredNumberIsValid=(number)=>{
//         if(number<1)
//         {
//             Alert.alert(
//                 "Invalid Number!",
//                 "Number has to be a number between 1 and 99",
//                 )
//         }
//     }
//     const resetNumber=()=>{
//         setEnteredNumber('');

//     }
//     const confirmNumber=()=>{
//         setModalIsVisibal(true);

//     }
//     const startNewGameHandler=(visibilityStatus)=>{
//         setEnteredNumber('');
//         setModalIsVisibal(visibilityStatus);
//     }


//     return(

//         <View style={styles.container}>
//             <OpponentGuess modalVisibility={modalIsVisibal} userEnteredNumber={enteredNumber} onGameOverVisibility={startNewGameHandler}></OpponentGuess>
//             <View style={styles.guessmynumberContainer}>
//                 <Text style={styles.guessmynumberText}>Guess My Number</Text>
//             </View>
//             <View style={styles.numberContainer}>
//                 <View style={styles.guessNumberHeadingContainer}>
//                     <Text style={styles.guessNumberHeading}>Enter a Number</Text>
//                 </View>
//                 <View style={styles.guessNumberText}>
//                     <TextInput value={enteredNumber} keyboardType='numeric' style={styles.guessNumberText}  placeholder="Enter Number" onChangeText={enteredTexthandler} ></TextInput>
//                 </View>
                
//                 <View style={styles.buttonContainer}>
//                     <View style={styles.button}>
//                     <Button onPress={resetNumber} title="Reset"></Button>
//                     </View>
//                     <View style={styles.button}>
//                     <Button onPress={confirmNumber} title="Confirm"></Button>
//                     </View>
                    
//                 </View>
//             </View>
//         </View>
//     )
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         padding:10,
//       // justifyContent: "center",
//         // alignItems: "center"

//     },
//     guessmynumberContainer:{
//        borderWidth:4,
//        margin:10,
//        padding:10,
//        alignItems: "center",   
//     },
//     guessmynumberText:{
//         fontSize:25,
//     },
//     numberContainer:{
        
//         marginTop:50,
//         borderWidth:1,
//         padding:10,
//     },
//     guessNumberHeadingContainer:{
//         padding:5,
//         alignItems: "center", 
//     },
//     guessNumberHeading:{
//         fontSize:20,
//     },
//     guessNumberText:{
//         alignItems: "center", 
//         fontSize:15,
//     },
//     buttonContainer:{
//         marginTop:10,
//         flexDirection:'row',
//         justifyContent:'center',
   
//     },
//     button:{
//         width: '40%',
//         marginHorizontal:10,
//     }
// })
// export default GameStart;