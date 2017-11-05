import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    KeyboardAvoidingView,
    StatusBar,
    Dimensions,
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';

export default class Login extends Component {
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
                <StatusBar
                    barStyle='light-content'
                    />
                <TextInput
                    placeholder="username/email/phone number"
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="input password"
                    style={styles.input}
                    secureTextEntry
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                />


                <TouchableHighlight style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableHighlight>
            </KeyboardAvoidingView>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
   container:{
     padding:20,
       flex:1,
   },
    input:{
       width:DEVICE_WIDTH-40,
        height:40,
        backgroundColor:'rgba(236, 240, 241,1.0)',
        marginBottom:20,
        color:'#000000',
        paddingHorizontal:10,
        borderRadius: 20,

    },
    buttonContainer:{
        backgroundColor:'#666666',
        paddingVertical:15,
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFF00',
        fontWeight: '700',
    },
});