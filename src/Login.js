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
    SafeAreaView
    
} from 'react-native';

import Register from './Register';


export default class Login extends Component {

    render() {
        return (
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
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                <TextInput secureTextEntry={true} style= {styles.inputBox} placeholder='Senha' />
                </View>
                <View style={{margin:7}} />
                <Button style= {styles.button} 
                           onPress={() =>
                            this.props.navigation.navigate('Secured')
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
                 
            )
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