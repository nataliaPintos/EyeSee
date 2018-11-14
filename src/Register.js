import React, { Component } from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Button, 
    StyleSheet, 
    CheckBox   
} from 'react-native';

export default class Register extends Component {
    constructor() {
        super();

        this.state= {
            check: true
        }
    }
    CheckBoxTest(){
        this.setState({
            check:!this.state.check
        });
    }

    

    render() {
        return (
              <View style={styles.container}>

                <Image  
                    style={{width:500, height: 140}}
                    source={require('../images/logo.png')}
                />
                <Text 
                    style={{fontSize: 20}}>
                    Editar dados cadastrais: 
                </Text>
                <View>
                    <TextInput style= {styles.inputBox} placeholder='Username' 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onSubmitEditing={()=> this.password.focus()}/>
                    <TextInput style= {styles.inputBox} placeholder='Email' />
                    <TextInput style= {styles.inputBox} secureTextEntry={true} placeholder='Senha' />
                    <TextInput style= {styles.inputBox} secureTextEntry={true} placeholder='Confirmar Senha' />
                 <View style={styles.checkBox}>
                 <CheckBox
                        title='Deficiente Visual'
                       value={this.state.check}
                       onChange={()=>this.CheckBoxTest()}
                    />
                    <Text>Sou deficiente Visual</Text>
                 </View>
                </View>
                <View 
                    style={{margin:7}}/>
                    <Button style= {styles.button} 
                            onPress={this.props.onPress}
                            title="Cadastrar"
                            color='#00897b'
                            onPress={() =>
            this.props.navigation.navigate('Secured')
          } />
 </View>
                 
            )
    }
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
      },
      checkBox: {
          flexDirection: 'row',
          alignItems: 'center'
      }
  });