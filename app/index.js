import React, { Component } from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';

import Home from './screens/Home';
import Paper from './screens/Paper';
import Me from './screens/Me';

const Jiekenavi = StackNavigator ({
    Home: {
        screen: Home,
        navigationOptions:{
            title:'Home'
        },
    },
    Paper:{
        screen:Paper,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
        }),
    },
    });

const JiekenaviTab = TabNavigator({
    Home:{
        screen:Jiekenavi,
        navigationOptions: {
        tabBarLabel: 'Home',
        icon: ({ tintColor }) => <Icon name='list' size={24} color={tintColor}/>,
        },
    },
    Me:{
        screen:Me,
        navigationOptions:{
            title:'Account'
        },
    },
});

export default JiekenaviTab;
