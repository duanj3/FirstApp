import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-native';
import Login from './Login';

export default class Me extends Component {
    static navigationOptions = {
        title:'Settings',
    };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <Login />
        )
    }
};
AppRegistry.registerComponent('Me', () => Me);