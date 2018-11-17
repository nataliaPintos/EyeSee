import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base'
import {
    AsyncStorage
} from 'react-native';
export default class Configurations extends Component {
  
    logout = async () => {
        var value = await AsyncStorage.getItem('user')
    
        fetch('http://192.168.15.5:8000/api/user/logout',{
            method:'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' :'application/json',
                'Authorization' : 'Bearer '+ value
            }
        }).then((response) => response.json()).then((res) => {
           this.props.navigation.navigate('Login')
        }).done();
        
    }

    render() {
        return (
            <Container>
                <Content>
                <Card>
                    <CardItem header>                        
                            <Text>Sobre você</Text>
                        </CardItem>
                        <CardItem button onPress={() =>
                            this.props.navigation.navigate('Edit')}>              
                            <Text>Dados pessoais</Text>
                        </CardItem>
                        <CardItem button>              
                            <Text onPress={() =>
                            this.props.navigation.navigate('Password')}>Alterar senha</Text>
                        </CardItem >
                        <CardItem  button>              
                            <Text onPress={() =>
                            this.props.navigation.navigate('Languages')}>Alterar idioma</Text>
                        </CardItem >
                   </Card>
                    <Card>
                        <CardItem header>                        
                            <Text>Compartilhe o EyeSee</Text>
                        </CardItem>
                        <CardItem button>              
                            <Icon name="logo-googleplus" style={{ color: '#DD5044' }} />
                            <Text>Google Plus</Text>
                        </CardItem>
                        <CardItem button>              
                            <Icon name="logo-facebook" style={{ color: '#3B5998' }} />
                            <Text>Facebook</Text>
                        </CardItem >
                        <CardItem button>              
                            <Icon name="logo-twitter" style={{ color: '#0091F6' }} />
                            <Text>Twitter</Text>
                        </CardItem>
                        <CardItem button>              
                            <Icon name="logo-linkedin" style={{ color: '#0069B0' }} />
                            <Text>LinkedIn</Text>
                        </CardItem>
                        <CardItem button>              
                            <Icon name="logo-instagram" style={{ color: '#C83083' }} />
                            <Text>Instagram</Text>
                        </CardItem>
                   </Card>
                   <Card>
                    <CardItem header button onPress={this.logout}>                       
                            <Text>Sair</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}