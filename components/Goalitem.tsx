import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './GoalInput';
import { GoalItemProps } from '../App';

const GoalItem=(props:GoalItemProps)=>{

    // const [modalIsVisible,setModalIsVisibal]=useState(false);

    const deleteGoalHandler=()=>{
        props.deleteGoal(props.data.item.key); 
    }
    const updateGoalHandler=()=>{
        props.onUpdateGoal(props.data.item.key);

    }


    return(
        
            <View style={styles.goalList}>
                {/* <Pressable android_ripple={{color:'#cccccc'}} onPress={deleteGoalHandler} style={({pressed})=>pressed && styles.pressedItem}> */}
                <Text style={styles.goalListText}>{props.data.item.text}</Text>
                <View style={styles.deleteGoalContainer}>
                    <Text style={styles.deleteGoal} onPress={deleteGoalHandler}>Delete</Text>
                </View>
                <View style={styles.updateGoalContainer}>
                    <Text style={styles.updateGoal} onPress={updateGoalHandler}>Update</Text>
                    {/* <GoalInput modalVisibility={modalIsVisible} cancelModal={cancelModal} userGoalInputData={goalInputHandler}></GoalInput> */}
                </View>
                
                {/* </Pressable> */}
            </View> 
        
    )
    }

const styles= StyleSheet.create({
    goalList:{
        margin:8,
        flexDirection:'row',
        borderRadius:6,
        backgroundColor:"#5e0acc",
    },
    goalListText:{
        width:'55%',
        padding:5,
        color:"white",
    },
    pressedItem:{
        opacity:0.5,

    },
    deleteGoal:{
        padding:5,
    },
    updateGoal:{
        padding:5
    },
    deleteGoalContainer:{
        backgroundColor:'#b180f0',
        marginHorizontal:10,
        borderRadius:10,
    },
    updateGoalContainer:{
        backgroundColor:'#b180f0',
        marginHorizontal:3,
        borderRadius:10,
    }
    

})
export default GoalItem;