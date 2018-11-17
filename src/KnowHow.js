import React, {Component} from 'react';
import {Container, Content, H1, H2, H3, Text, Card, CardItem} from 'native-base';

export default class KnowHow extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Sobre a chamada: </Text>
                        </CardItem>

                        <CardItem>
                            <Text>
                                Não se preocupe se não puder atender, cada chamada é feita a vários voluntários ao mesmo
                                tempo, e a conexão será estabelecida com o primeiro que atender.
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Ative as notificações por push, lembre-se de ativá-las para o EyeSee nas configurações
                                do seu celular.
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Pode levar um tempo até que você receba a sua primeira chamada </Text>
                        </CardItem>

                        <CardItem header>
                            <Text>Em cada chamada que receber, siga estas orientações:</Text>
                        </CardItem>
                        <CardItem>
                            <Text>Fale com clareza.</Text>
                        </CardItem>
                        <CardItem>
                            <Text>Faça o possível para ajudar o usuário a apontar a câmera para o lugar certo e garantir
                                que você veja bem o objeto de interesse. Peça para ele mover a câmera conforme
                                necessário.</Text>
                        </CardItem>
                        <CardItem>
                            <Text>Somente atenda se tiver um bom sinal de internet ou conexão à Wi-Fi.</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}