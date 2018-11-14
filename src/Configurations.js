import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base'
export default class Configurations extends Component {
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
                        <CardItem button>              
                            <Text>Alterar idioma</Text>
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
                    <CardItem button onPress={() =>
            this.props.navigation.navigate('Login')}> 
                    <Icon name="logout" style={{ color: '#C83083' }} />                       
                            <Text>Sair</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}