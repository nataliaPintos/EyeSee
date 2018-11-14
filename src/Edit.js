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

export default class Edit extends Component {
    render() {
        return (
              <View style={styles.container}>
                <View style= {{margin:10}}>
                    <Text 
                        style={{fontSize: 18}}>
                    Seus dados cadastrais:
                    </Text>
                    <TextInput style= {styles.inputBox} placeholder='Username'/>
                    <TextInput style= {styles.inputBox} placeholder='Email' />
                    <Button style= {styles.button} 
                            onPress={this.props.onPress}
                            title="Salvar Alterações"
                            color='#00897b'
                            onPress={() =>
                            this.props.navigation.navigate('Configurations')
                    } />
                </View>
             </View>
                 
            )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      flex: 1,
    },
    inputBox: {
        height: 40,
        backgroundColor:'#F0F0F0',
        borderRadius: 7,
        padding:10,
        fontSize:18,
        marginVertical: 10
    },
    button: {
        width:90,
          margin: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#212121',
        textAlign:'center'
      },
  });