import {View, StyleSheet, Text} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const PrimaryButton = ({children,onPress}) => {
  const pressHandler = () => {
    console.log('nothing serious.');
  };
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed
          ? [style.pressedButton, style.buttonContainer]
          : style.buttonContainer
      }>
      <View>
        <Text style={style.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    
    margin: 4,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#72063c',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  pressedButton:{
    opacity:0.75
  }
});
export default PrimaryButton;
