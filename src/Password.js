import React, { Component } from 'react';
import { Container, Content, H1, H2, H3, Text } from 'native-base';

export default class Password extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <H3  style={{fontSize: 16, margin: 10}}>Um link para redefinição de senha foi enviado para seu email!</H3>
                </Content>
            </Container>
        );
    }
}