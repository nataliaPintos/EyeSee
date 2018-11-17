import React, {Component} from 'react';
import {
    Image, TextInput,
    View,
    Button,
    StyleSheet,
    CheckBox,
    AsyncStorage
} from 'react-native';
import {Container, Content, H1, H2, CardItem, Text, Card, List, ListItem} from 'native-base';

export default class Languages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contrys: ''
        };
    }

    componentWillMount() {
        console.log('oioioioi')
        this.getCountrys()
    }

    getCountrys() {
        fetch('https://restcountries.eu/rest/v2/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).then((res) => {
            // console.log(this.state.password)
            //console.log('json', res)
            let result = res;
            this.setState({contrys: result})
            console.log('json', result)

            // alert(res.user

        }).done();


    }

    render() {
        console.log(this.state.contrys)

        return (
            <Container>
                <Content>
                    <Card>
                        <List>
                            <CardItem header>
                                <Text>Seus idiomas </Text>
                            </CardItem>
                            <ListItem>
                                <Text>Português</Text>
                            </ListItem>
                            <CardItem header>
                                <Text>Outros idiomas </Text>
                            </CardItem>
                            <ListItem>
                                <Text>Africâner</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Akan</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Albanês</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Alemão</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Amárico</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Árabe</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Armênio</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Assamês</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Assírio</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Azeri</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bambara</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Basco</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bashkir</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bengalês</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bielo-russo</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Birmanês</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bósnio</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bravanês</Text>
                            </ListItem>
                        </List>
                    </Card>
                </Content>
            </Container>

        )
    }
}
