import React, {Component} from 'react';
import {
    StyleSheet
    ,
    TouchableOpacity,
    View,
    Button,
    Image,
    Text
} from 'react-native';

import {
    Ionicons, MaterialIcons, MaterialCommunityIcons, Feather
} from "@expo/vector-icons";

import {Camera, Permissions} from 'expo';

export default class Secured2 extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    //menu
    render() {
        return (
            <View style={[style.parent]}>
                <TouchableOpacity style={[style.child, {backgroundColor: '#086580'}]} onPress={() =>
                    this.props.navigation.navigate('Camera')}>
                    <MaterialIcons name="video-call" size={80} color="white"/>
                    <Text style={{color: 'white', fontSize: 35}}>Chamar voluntários</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.child, {backgroundColor: '#029c88'}]} onPress={() =>
                    this.props.navigation.navigate('Camera')}>
                    <View>
                        <Ionicons name='md-qr-scanner' size={80} color="white"/>
                    </View>
                    <View>
                        <Text style={{color: 'white', fontSize: 35}}>Abrir scanner</Text>
                    </View>
                </TouchableOpacity>
            </View>)

    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
    child: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        minWidth: 120,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5
    },
});