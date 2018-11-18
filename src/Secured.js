import React, { Component } from 'react';
import {
    StyleSheet
    ,
    TouchableOpacity,
    View,
    Button,
    Image,
    Text,
    AsyncStorage
} from 'react-native';

import { FontAwesome, MaterialIcons , Ionicons, Feather
} from "@expo/vector-icons";

import { Camera, Permissions } from 'expo';

import { createBottomTabNavigator } from 'react-navigation';
import Secured2 from './Secured2';

export default class Secured extends Component {
    state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    showThisText:'',
    noBlind:'',
    blind:''
  };

  componentWillMount() {
    const { status } =  Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.getUser();
    this.getNoBlind();
   
  }

   getUser = async () => {
    var value = await AsyncStorage.getItem('user')

    fetch('http://192.168.1.10:8000/api/user',{
        method:'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' :'application/json',
            'Authorization' : 'Bearer '+ value
        }
    }).then((response) => response.json()).then((res) => {
       // console.log(this.state.password)
        console.log('json', res)
       // alert(res.user)
        if(res.hasOwnProperty('error')){
            alert(res.message)
        }
        else{
            console.log('chegou aqui')
            AsyncStorage.setItem('usuario', JSON.stringify(res))
            this.setState({showThisText:res})
        }
    }).done();

    
}

getNoBlind = async () => {
    var value = await AsyncStorage.getItem('user')

    fetch('http://192.168.1.10:8000/api/user/noblind/all',{
        method:'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' :'application/json',
            'Authorization' : 'Bearer '+ value
        }
    }).then((response) => response.json()).then((res) => {
       // console.log(this.state.password)
        console.log('json', res)
       // alert(res.user)
        if(res.hasOwnProperty('error')){
            alert(res.message)
        }
        else{
            console.log('chegou aqui 2222222')
            AsyncStorage.setItem('info', JSON.stringify(res))
            this.setState({noBlind:res})
        }
    }).done();

    fetch('http://192.168.1.10:8000/api/user/blind/all',{
        method:'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' :'application/json',
            'Authorization' : 'Bearer '+ value
        }
    }).then((response) => response.json()).then((res) => {
       // console.log(this.state.password)
        console.log('json', res)
       // alert(res.user)
        if(res.hasOwnProperty('error')){
            alert(res.message)
        }
        else{
            console.log('chegou aqui 333333')
            AsyncStorage.setItem('info', JSON.stringify(res))
            this.setState({blind:res})
        }
    }).done();

    
}

    showSecured(){
        if(this.state.showThisText.deficiente ===1){
            return (
                <View style={[style.parent]}>
                    <TouchableOpacity style={[style.child, {backgroundColor: '#0b4b5e', flex:0.5} ]} onPress={() =>
                    this.props.navigation.navigate('Call')
                  }>
                        <MaterialIcons name="video-call" size={80} color="white" />
                        <Text style={{color: 'white', fontSize: 35}}>Chamar voluntários</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.child, {backgroundColor: '#029c88', flex:0.5} ]} onPress={() =>
                    this.props.navigation.navigate('Camera')
                  }> 
                        <View >
                        <Ionicons name='md-qr-scanner' size={80} color="white"/>
                        </View>
                        <View>
                        <Text style={{color: 'white', fontSize: 35}}>Abrir scanner</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
        }else{
           return ( 
           <View style={[style.parent]}>
                <TouchableOpacity style={[style.child, {backgroundColor: '#0b4b5e', flex: 0.6} ]}>
                <FontAwesome name="globe" size={120} color="white" />
                    <View style={{ flex: 1,
                        flexDirection: 'row',
                        marginTop: 12}}>
                    <Text style={{color: 'white', fontSize: 18}}>Deficientes Visuais: {this.state.blind.usuarios} </Text>
                    <Text style={{color: 'white', fontSize: 18}}>Voluntários: {this.state.noBlind.usuarios}  </Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.child, {backgroundColor: '#E8E8E8', flex: 0.3} ]} >
                
                    <Text style={{color: '#000', fontSize: 20}}> {this.state.showThisText.nome}</Text>
                    <Text style={{color: 'grey', fontSize: 16}}> Membro desde novembro de 2018</Text>
                    <Text style={{color: 'grey', fontSize: 16}}> Idioma: Português</Text>

                
                </TouchableOpacity>
                <TouchableOpacity style={[style.child, {backgroundColor: '#F0F0F0', flex: 0.2} ]} >
                
                    <Text style={{color: 'grey', fontSize: 15, padding: 10}}>Você receberá uma notificação quando alguém precisar de ajuda!</Text>
            
                </TouchableOpacity>
                <TouchableOpacity style={[style.child, {backgroundColor: '#029c88', flex: 0.2} ]} onPress={() =>
                this.props.navigation.navigate('KnowHow')}>
                    <View>
                    <Text style={{color: 'white', fontSize: 20}}>Saiba Como Atender Uma chamada</Text>
                    </View>
                </TouchableOpacity>
            </View>)
        }
    }
    //menu
    render() {
        return (
         this.showSecured() )
               
    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
    child: {
        margin: 10,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center" ,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Android
        shadowOffset: {
          height: 1,
          width: 1
        }    
    },
})
