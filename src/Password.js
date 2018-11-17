import React, {Component} from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    CheckBox,
    AsyncStorage
} from 'react-native';

export default class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            senha: '',
            nome: '',
            sobrenome: '',
            email: '',
            password: ''
        };
    }

    componentWillMount() {
        console.log('oioioioi')
        this.getUser()
    }

    getUser = async () => {
        var value = await AsyncStorage.getItem('usuario')
        this.setState({usuario: JSON.parse(value)})
    }

    render() {


        return (
            <View style={styles.container}>
                <View style={{margin: 10}}>
                    <Text
                        style={{fontSize: 18}}>
                        Editar senha:
                    </Text>
                    <TextInput style={styles.inputBox} placeholder='Senha atual'
                               onChangeText={(senha) => this.setState({senha})} secureTextEntry={true}
                               autoCapitalize="none"/>
                    <TextInput style={styles.inputBox} placeholder='Nova senha'
                               onChangeText={(password) => this.setState({password})} secureTextEntry={true}
                               autoCapitalize="none"/>
                    <TextInput style={styles.inputBox} placeholder='Confirmar nova senha' secureTextEntry={true}
                               autoCapitalize="none"/>
                    <Button style={styles.button}
                            onPress={this.save}
                            title="Salvar nova senha"
                            color='#00897b'
                    />
                </View>
            </View>

        )
    }

    save = async () => {

        var value = await AsyncStorage.getItem('user')
        if (this.state.nome === '') {
            this.state.nome = this.state.usuario.nome
        }
        if (this.state.email === '') {
            this.state.email = this.state.usuario.email
        }
        if (this.state.sobrenome === '') {
            this.state.sobrenome = this.state.usuario.sobrenome
        }

        this.update();

    }

    async update() {
        var value = await AsyncStorage.getItem('user')

        fetch('http://192.168.15.5:8000/api/user', {
            method: 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + value
            },
            body: JSON.stringify({
                email: this.state.email,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                password: this.state.password,
            })
        }).then((response) => response.json()).then((res) => {
            console.log(res)
            alert(res.mensagem)
            this.props.navigation.navigate('Configurations')

        }).done();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    inputBox: {
        height: 40,
        backgroundColor: '#F0F0F0',
        borderRadius: 7,
        padding: 10,
        fontSize: 18,
        marginVertical: 10
    },
    button: {
        width: 90,
        margin: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#212121',
        textAlign: 'center'
    },
});