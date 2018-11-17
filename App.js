import React, { Component } from 'react';
import { createBottomTabNavigator, TabNavigator, createSwitchNavigator, createStackNavigator} from 'react-navigation';
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
import Languages from './src/Languages';
import Call from './src/Call';
 
const TabScreenNavigator = createBottomTabNavigator({
  
  Secured: { screen: Secured,
    navigationOptions:{
      tabBarLabel:'Menu',
      tabBarIcon:({tintcolor}) => (
        <Ionicons name='ios-home' size={24} color="#001c34"/>
      )  }} ,
      Configurations: {screen: Configurations,
        navigationOptions:{
          activeTintColor: '#000',
          tabBarLabel:'Configurações',
          tabBarIcon:({tintcolor}) => (
            <Ionicons name='ios-settings' size={24} color="#001c34"/>
          )  }} ,
   
  
});


const MainScreenNavigator = createStackNavigator({
  Login: { screen: Login },
  Edit: { screen: Edit },
  Tab: { screen: TabScreenNavigator },
  Register: { screen: Register},
  Camera: { screen: CameraExample},
  Password: { screen: Password},
  KnowHow: {screen: KnowHow},
  Languages: {screen: Languages},
  Call: {screen: Call}
},
{
  navigationOptions: {
     headerStyle: { backgroundColor: '#00897b' },
     title: 'EyeSee',
     headerTintColor: '#fff', 
     
  },
});

const CREATE = createSwitchNavigator({
  MainScreenNavigator: { screen: MainScreenNavigator },
  Tab: { screen: TabScreenNavigator },
})
export default MainScreenNavigator;


