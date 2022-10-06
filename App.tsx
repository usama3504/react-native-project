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



 import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigations';

const HelloWorldApp = () => {
  const [userEnteredNumber, setUserEnteredNumber] = useState();





  return (
    
      <NavigationContainer>
     <View style={{flex: 1}}>
      <Navigator />
     </View>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default HelloWorldApp;
