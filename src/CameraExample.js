import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, NativeModules, Alert} from 'react-native';
import {Camera, Permissions} from 'expo';
import ImageResizer from 'react-native-image-resizer';
import {Ionicons} from "@expo/vector-icons";
import config from './config';

export default class CameraExample extends React.Component {
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
            return <Text>Sem acesso à camera</Text>;
        } else {
            return (
                <View style={styles.container}>
                    <Camera style={{flex: 1}} type={this.state.type}
                     ref={(cam) => {
                        this.camera = cam;
                    }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                    style={styles.capture}
                                    onPress={this.takePicture.bind(this)}/>
                        </View>
                    </Camera>
                </View>
            );
        }
    }

    takePicture(){
        
        
        function callback(a){
            return function(){
                Alert.alert(
                    'Texto Encontrado:',
                    'Textinho da mensagem',
                    [
                      {text: 'Tentar Novamente', onPress: () => console.log('Ask me later pressed')},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                    )
            }
        }
        var a = "world";
        setTimeout(callback(a), 5000);
        a = "Stack Overflow";
        /*
        const options = { base64: true};
        this.camera.takePictureAsync({options})
            .then((data) => {

             //   const actions = [resize={width: 640, height:480 }]

              //  const saveOptions = {base64:true}

                console.log(data)

            
              
                setTimeout(alert("TEXTO MENSAGEM"), 10000)
                     //   let filteredResult = filterLabelsList(result.responses[0], 0.3);
                      //  displayResult(filteredResult);

                })
            
            .catch(err => console.error(err));
            */
    } 
    
}

// API call to google cloud
async function checkForLabels(base64) {
    console.log("URLLLLLLLLLL", config.googleCloud.api)
    console.log("TOKENNNNNNN", config.googleCloud.apiKey)

    return await
        fetch(config.googleCloud.api + config.googleCloud.apiKey, {
            method: 'POST',
            body: JSON.stringify({
                
                    "requests":[
                      {
                        "image":{
                          "source":{
                            "imageUri":
                              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                          }
                        },
                        "features":[
                          {
                            "type":"TEXT_DETECTION",
                            "maxResults":10
                          }
                        ]
                      }
                    ]
                  })
        }).then((response) => {
            console.log("APIIIIIIIIII", response)
            return response.json();
        }, (err) => {
            console.error('promise rejected')
            console.error(err)
        });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        marginTop: '55%',
        marginLeft: '35%',  
        height: 100,
        width: 100,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 15
    },
    loadingMsg: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    loadingText: {
        fontSize: 18,
        padding: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 30
    },
    spinner: {
        marginBottom: 50
    },
});