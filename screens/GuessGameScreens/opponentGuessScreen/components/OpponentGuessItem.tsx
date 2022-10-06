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

  interface OpponentGuessItemProps{
    guessValue:number;
  }


  

const OpponentGuessItem=(props:OpponentGuessItemProps)=>{
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.guessValueText}>Opponent's Guess: {props.guessValue} </Text>
        </View>
    )

}
const styles=StyleSheet.create({
    itemContainer:{
        margin:8,
        borderRadius:6,
        backgroundColor:"gray",
        
        alignItems:'center',
    },
    guessValueText:{
        ontent:'center',
        padding:5,
        color:"white",
    },
})

export default OpponentGuessItem;