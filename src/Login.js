import React, { Component } from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Button, 
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    AsyncStorage    
} from 'react-native';

import Register from './Register';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state  ={
            username:'',
            password:''
        }
    }

    componentDidMount() {
        this._loadInitialState()
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user')
        if( value != null){

            this.props.navigation.navigate('Secured')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style= {styles.wrap}>
              <View style={styles.container}>
				<Image  style={{width:500, height: 140}}
          			source={require('../images/logo.png')}/>
              <Text 
                    style={{fontSize: 20, color: "#545654"}}>
                    Bem-Vindo ao EyeSee!
                </Text>
                <View>
                <TextInput style= {styles.inputBox} placeholder='Username' 
                underlineColorAndroid='rgba(0,0,0,0)' 
                selectionColor="#fff"
                autoCapitalize="none"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                onChangeText={(username) => this.setState({username})}/>
                <TextInput secureTextEntry={true}
                 onChangeText={(password) => this.setState({password})}
                 style= {styles.inputBox} placeholder='Senha' autoCapitalize="none"/>
                </View>
                <View style={{margin:7}} />
                <Button style= {styles.button} 
                           onPress={
                            this.login
                          }
                          title="Entrar"
                          color='#00897b'
                      />
                <Text 
                    style={{fontSize: 20, color: '#545654'}}>
                    ou               
                </Text>
                  <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Register')
                          }>
                    <Text 
                        style={{fontSize: 23, color: '#00897b'}}>
                        cadastre-se               
                    </Text>
                  </TouchableOpacity>
               
              </View>
              </KeyboardAvoidingView>   
            )
    }
    login = () => {
        fetch('http://192.168.1.10:8000/oauth/token',{
            method: 'POST', 
            headers: {
            
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                grant_type:'password',
                client_id: 2,
                client_secret: 'wtiCwiIXfMdPYxo7ri70SZY1roRKtAaio7ssU00j',
                username:this.state.username,
                password:this.state.password,
                scope:''
            })
        }).then((response) => response.json()).then((res) => {
           // console.log(this.state.password)
            console.log('json', res)
           // alert(res.user)
            if(res.hasOwnProperty('error')){
                alert(res.message)
            }
            else{
                AsyncStorage.setItem('user', res.access_token)
                this.props.navigation.navigate('Secured')
            }
        }).done();

        }
}


const SecondScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>
                THIS IS THE SECOND SCREEN.
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    wrap:{
        flex:1
    },
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox: {
        width:300,
        backgroundColor:'#F0F0F0',
        borderRadius: 10,
        paddingHorizontal:15,
        fontSize:18,
        marginVertical: 10
    },
    button: {
        width:90,
          marginVertical: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#212121',
        textAlign:'center'
      }
  });