import React, {useState} from 'react';
// import { GoalInputProps } from '../projects/goalProject';
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
interface GoalInputProps{
  modalVisibility:boolean;
  cancelModal:(modalVisibility:boolean)=>void;
  userGoalInputData:(userGoal:string)=>void;
  updateGoal:boolean;
  upDateGoalText?:string;
  onUpdatGoalRequest:()=>void;
} 
// interface goalInputProps{
//     modalVisibility : Boolean;
//     cancelModal :(modalVisibility:boolean)=>void;
//     updateGoal : Boolean;
//     upDateGoalText:string;
//   }

const GoalInput = (props:GoalInputProps) => {
  const updateGoalrequest = props.updateGoal;
  const [goal, setGoal] = useState<string>('');



  const goalHandler = (enteredText:string) => {

      setGoal(enteredText);
  }
  const goalListHandler = () => {
      // if(updateGoalrequest===true)
      // {
      //     props.upDateGoalKey.goalList.findIndex((goal)=>)
      // }
      props.userGoalInputData(goal);
      setGoal('');
      // console.log(props.upDateGoalKey);
      props.cancelModal(false);
      props.onUpdatGoalRequest();
  }
  const cancelModal = () => {
      props.cancelModal(false);
    //   props.onUpdatGoalRequest();
  }

  return (
    <Modal visible={props.modalVisibility} animationType="fade">
      <View style={styles.inputTextContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}></Image>
        {!updateGoalrequest && (
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Goal"
            onChangeText={goalHandler}
            defaultValue={props.upDateGoalText}
            value={goal}
          />
        )}
        {updateGoalrequest && (
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Goal"
            defaultValue={props.upDateGoalText}
            onChangeText={goalHandler}
          />
        )}
        <View style={styles.buttonContainer}>
          {!updateGoalrequest && (
            <View style={styles.button}>
              <Button
                color="#b180f0"
                title="Add Goal"
                onPress={goalListHandler}
              />
            </View>
          )}
          {updateGoalrequest && (
            <View style={styles.button}>
              <Button
                color="#b180f0"
                title="Update Goal"
                onPress={goalListHandler}
              />
            </View>
          )}
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" 
            onPress={cancelModal} 
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputTextContainer: {
    backgroundColor: '#311b6b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    marginBottom: 30,
    padding: 8,
    borderRadius: 6,
    color: '#120438',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
