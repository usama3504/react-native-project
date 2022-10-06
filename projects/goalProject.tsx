import React, { useState } from 'react';
import { Button, FlatList, ListRenderItemInfo, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from '../components/Goalitem';
import GoalInput from '../components/GoalInput';



export interface goalListInterface{
  text:string,
  key:string,
}
// export interface GoalInputProps{
//   modalVisibility:boolean;
//   cancelModal:(modalVisibility:boolean)=>void;
//   userGoalInputData:(userGoal:string)=>void;
//   updateGoal:boolean;
//   upDateGoalText?:string;
//   onUpdatGoalRequest:()=>void;
// }
// export interface GoalItemProps{
//   data7:ListRenderItemInfo<goalListInterface>;
//   data:ListRenderItemInfo<goalListInterface>;
//   deleteGoal:(goalKey:string)=>void;
//   onUpdateGoal:(goalKey:string)=>void;

// }

const GoalProject = () => {

  // const [goal, setGoal]= useState("");
  const [goalList,setGoalList]=useState<goalListInterface[]>([]);
  const [modalIsVisible,setModalIsVisibal]=useState<boolean>(false);

  const [updateGoalRequest, setUpdateGoalRequest]= useState<boolean>(false);
  const [updateGoalKey,setUpdateGoalKey]=useState<string>();
  const [updatGoalText,setUpdateGoalText]=useState<string>();


  // const goalHandler=(enteredText)=>{
  //   setGoal(enteredText);
  // }

  // const goalListHandler=()=>{
  //   setGoalList((previousList)=>[...previousList,{text:goal,key:Math.random().toString()}]);

  // }

  const goalInputHandler=(userGoal:string)=>{

    if(updateGoalRequest===true)
    {
      let foundIndex = goalList.findIndex(element => element.key === updateGoalKey)
      if(updateGoalKey)// Checking updateGoleKey has a key, that could be assigned to updated goal.
     { 
      goalList.splice(foundIndex, 1, {text:userGoal,key:updateGoalKey.toString()})
    }
      
    }
    else
    {setGoalList((previousList)=>[...previousList,{text:userGoal,key:Math.random().toString()}]);}
  }

  const deleteGoalhandler=(goalKey:string)=>{

    setGoalList((previousList)=>{
      return(
        previousList.filter((goal)=>goal.key!=goalKey)
      )
    })
    // const indexOfDeletedGoal=goalList.findIndex((goal)=>goal.key===goalKey)
    // setGoalList((previousList)=>previousList.splice(indexOfDeletedGoal,1));
    // // goalList.splice(indexOfDeletedGoal,1);
  }
  const modalViewHandler=()=>{
    setModalIsVisibal(true);
  }
  const cancelModal=(modalVisibility:boolean)=>{
    setModalIsVisibal(false);
  }
  const updateGoalHandler=(goalKey:string)=>{
    setUpdateGoalRequest(true);
    setModalIsVisibal(true);
    setUpdateGoalKey(goalKey);

    let foundIndex = goalList.findIndex(element => element.key === goalKey)
    
    console.log(goalList[foundIndex].text);
    setUpdateGoalText(goalList[foundIndex].text);
    
      

  }
  const updateGoalRequestHandler=()=>{
    setUpdateGoalRequest(false);
    setUpdateGoalKey("");
  }

  
  
  return (
    <View style={styles.container}>
     
      <Button color="#b180f0" title="Add Goal" onPress={modalViewHandler}></Button>
      <GoalInput modalVisibility={modalIsVisible} cancelModal={cancelModal} userGoalInputData={goalInputHandler} updateGoal={updateGoalRequest} upDateGoalText={updatGoalText} onUpdatGoalRequest={updateGoalRequestHandler} ></GoalInput>
      {/* <View style={styles.inputTextContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your Goal' onChangeText={goalHandler} />
        <Button title="Add Goal" onPress={goalListHandler}/>
      </View> */}
      <View style={styles.goalListContainer}>
        <FlatList data={goalList} renderItem={(goalItem)=>
          <GoalItem data={goalItem} deleteGoal={deleteGoalhandler} onUpdateGoal={updateGoalHandler}></GoalItem>
          // <View style={styles.goalList}>
          //   <Text style={styles.goalListText}>{goalItem.item.text}</Text>
          // </View> 
        }
          keyExtractor={(item,index)=>{
            return item.key
          }}>
        </FlatList> 
      </View>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    padding:30,
    backgroundColor:"#311b6b",
        // justifyContent: "center",
        // alignItems: "center"
  },
  inputTextContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"

  },
  textInput:{
    width:"70%",
    borderWidth:1,
    borderColor:"#cccccc",

  },
  goalListContainer:{
    flex:5,
    marginTop:8,
    // padding:5,
    // borderRadius:6,
    // backgroundColor:"#5e0acc",
  },
  goalList:{
    margin:8,
    padding:5,
    borderRadius:6,
    backgroundColor:"#5e0acc",
    

  },
  goalListText:{
    color:"white",
  }

})

 


export default GoalProject;
