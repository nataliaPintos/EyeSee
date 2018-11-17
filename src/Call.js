import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Camera, Permissions} from 'expo';
import {Ionicons} from "@expo/vector-icons";

export default class Call extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    render() {
        const {hasCameraPermission} = this.state;
        if (hasCameraPermission === null) {
            return <View/>;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{flex: 1}}>
                    <Camera style={{flex: 1}} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    margin: 10
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                            </TouchableOpacity>
                            <Text
                                style={{fontSize: 25, color: "#fff", margin: 10}}>
                                Ligando para voluntários...
                            </Text>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}