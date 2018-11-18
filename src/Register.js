import React, {Component} from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    CheckBox,
    KeyboardAvoidingView
} from 'react-native';

import {BASE_API_URL, BASE_URL} from './config/url';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            check: true,
            nome: '',
            sobrenome: '',
            email: '',
            password: '',
            deficiente: ''
        }
    }

    CheckBoxTest() {
        this.setState({
            check: !this.state.check
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrap}>
                <View style={styles.container}>

                    <Image
                        style={{width: 500, height: 140}}
                        source={require('../images/logo.png')}
                    />
                    <Text
                        style={{fontSize: 20}}>
                        Cadastre-se ao EyeSee:
                    </Text>
                    <View>
                        <TextInput style={styles.inputBox} placeholder='Nome'
                                   onChangeText={(nome) => this.setState({nome})}/>
                        <TextInput style={styles.inputBox} placeholder='Sobrenome'
                                   onChangeText={(sobrenome) => this.setState({sobrenome})}/>
                        <TextInput style={styles.inputBox} placeholder='Email'
                                   keyboardType="email-address"
                                   autoCapitalize="none"
                                   onChangeText={(email) => this.setState({email})}/>
                        <TextInput style={styles.inputBox} placeholder='Senha'
                                   secureTextEntry={true}
                                   autoCapitalize="none"
                                   onChangeText={(password) => this.setState({password})}/>
                        <TextInput style={styles.inputBox} autoCapitalize="none" secureTextEntry={true}
                                   placeholder='Confirmar Senha'/>
                        <View style={styles.checkBox}>
                            <CheckBox
                                title='Deficiente Visual'
                                value={this.state.check}
                                onChange={() => this.CheckBoxTest()}
                            />
                            <Text>Sou deficiente Visual</Text>
                        </View>
                    </View>
                    <View
                        style={{margin: 7}}/>
                    <Button style={styles.button}
                            onPress={this.save}
                            title="Cadastrar"
                            color='#00897b'
                    />
                </View>
            </KeyboardAvoidingView>

        )
    }

    save = async () => {
        if (this.state.check === true) {
            this.state.deficiente = '1'
        } else {
            this.state.deficiente = '0'
        }
        fetch(BASE_API_URL+'/register', {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                password: this.state.password,
                deficiente: this.state.deficiente
            })
        }).then((response) => response.json()).then((res) => {
            if (res.hasOwnProperty('error')) {
                alert(res.messagem)
            }
            else {
                this.props.navigation.navigate('Login')
            }


        }).done();

    }
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        marginVertical: 10
    },
    button: {
        width: 90,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#212121',
        textAlign: 'center'
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});