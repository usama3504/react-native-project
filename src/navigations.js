import React from 'react';
import GameProject from '../projects/gameProject';
import GoalProject from '../projects/GoalProject';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '../projects/MainPage';
const Drawer = createDrawerNavigator();

export default () => {
    return <Drawer.Navigator initialRouteName='Welcome'>
    <Drawer.Screen name="Welcome" component={MainPage}/>
    <Drawer.Screen name="gameProject" component={GameProject}/>
    <Drawer.Screen name="GoalProject" component={GoalProject}/>
    </Drawer.Navigator>
}
