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

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            nome: '',
            sobrenome: '',
            email: ''
        };
    }

    componentWillMount() {
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
                        Editar dados cadastrais:
                    </Text>
                    <TextInput style={styles.inputBox} placeholder='Nome' defaultValue={this.state.usuario.nome}
                               autoCapitalize="none"
                               onChangeText={(nome) => this.setState({nome})}/>
                    <TextInput style={styles.inputBox} placeholder='Sobrenome'
                               defaultValue={this.state.usuario.sobrenome}
                               autoCapitalize="none"
                               onChangeText={(sobrenome) => this.setState({sobrenome})}/>
                    <TextInput style={styles.inputBox} placeholder='Email' defaultValue={this.state.usuario.email}
                               autoCapitalize="none"
                               onChangeText={(email) => this.setState({email})}/>
                    <Button style={styles.button}
                            onPress={this.save}
                            title="Salvar Alterações"
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
                password: '',
            })
        }).then((response) => response.json()).then((res) => {
            alert(res.mensagem);
            this.props.navigation.navigate('Configurations');
            this.getUser();
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