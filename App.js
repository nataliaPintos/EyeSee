import React, { Component } from 'react';
import { createBottomTabNavigator, TabNavigator, StackNavigator, createStackNavigator} from 'react-navigation';
import {
  AppRegistry
} from 'react-native';
import { Ionicons, MaterialIcons , MaterialCommunityIcons, Feather
} from "@expo/vector-icons";
import Login from './src/Login';
import Secured from './src/Secured';
import AppNavigator from './src/AppNavigator';
import CameraExample from './src/CameraExample';
import Register from './src/Register';
import Configurations from './src/Configurations';
import Edit from './src/Edit';
import Password from './src/Password';
import Secured2 from './src/Secured2';
import KnowHow from './src/KnowHow';
 
const TabScreenNavigator = createBottomTabNavigator({
  
  Secured: { screen: Secured,
    navigationOptions:{
      tabBarLabel:'Menu',
      tabBarIcon:({tintcolor}) => (
        <Ionicons name='ios-home' size={24} color="#000"/>
      )  }} ,
      Configurations: {screen: Configurations,
        navigationOptions:{
          activeTintColor: '#000',
          tabBarLabel:'Configurações',
          tabBarIcon:({tintcolor}) => (
            <Ionicons name='ios-settings' size={24} color="#000"/>
          )  }} ,
   
  
});

const MainScreenNavigator = createStackNavigator({
  Login: { screen: Login },
  Edit: { screen: Edit },
  Tab: { screen: TabScreenNavigator },
  Register: { screen: Register},
  Camera: { screen: CameraExample},
  Password: { screen: Password},
  KnowHow: {screen: KnowHow}
},
{
  navigationOptions: {
     headerStyle: { backgroundColor: '#00897b' },
     title: 'EyeSee',
     headerTintColor: '#fff', 
     
  },
});

export default MainScreenNavigator;


