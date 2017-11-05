import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from ',/app/screens/Home';
import Me from './app/screens/Me';
import News from './app/screens/News';

export const HomeStack = StackNavigator({
    Home:{
      screen:Home,
      navigationOptions: {
      title: 'News',
      }
    },
    News:{
      screen:News,
    },
});

export const TabsStack = TabNavigator({
    Home:{
      screen:HomeStack,
    },
    Me:{
      screen:'Me',
    },
});