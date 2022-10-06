import React from 'react';
import GameProject from '../projects/gameProject';
 import GoalProject from '../projects/goalProject';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '../projects/MainPage';
import UIGameProject from '../projects/UI_GameProject';

const Drawer = createDrawerNavigator();

export default () => {
    return <Drawer.Navigator initialRouteName='Welcome'       >
    <Drawer.Screen name="Welcome" component={MainPage} options={{headerShown: false}}/>
    <Drawer.Screen name="gameProject" component={GameProject} options={{headerShown: false}}/>
    <Drawer.Screen name="GoalProject" component={GoalProject} options={{headerShown: false}}/>
    <Drawer.Screen name="GoalProject_UI" component={UIGameProject} options={{headerShown: false}}/>
    </Drawer.Navigator>
}
