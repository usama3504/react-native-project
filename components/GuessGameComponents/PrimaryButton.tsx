import {View, StyleSheet, Text, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withSafeAreaInsets} from 'react-native-safe-area-context';



interface PrimaryButton{
    onPress:()=>void
    children:any
}



const PrimaryButton = (props:PrimaryButton) => {
  const pressHandler = () => {
    console.log('nothing serious.');
  };
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.button}
      >
      <View>
        <Text style={style.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  
  buttonText: {
    color: 'white',
  },
  pressedButton:{
    opacity:0.75
  },
  button: {
    margin: 4,
    backgroundColor: '#72063C',
    marginHorizontal: 4,
    paddingVertical: 8,
    elevation: 2,
    borderRadius: 28,
    alignItems: 'center',
}
});
export default PrimaryButton;
