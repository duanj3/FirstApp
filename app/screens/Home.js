import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Stylesheet,
} from 'react-native';
import {Newstitle} from '../config/data';
import {List, ListItem} from 'react-native-elements';

export default class Home extends Component {
    onClickNews = (news) => {
        this.props.navigation.navigate('Paper', { ...news });
    };
    render() {
        return (
            <ScrollView>
                <List>
                    {Newstitle.map((news) => (
                        <ListItem
                            key={news.name}
                            roundAvatar
                            avatar={{ uri: news.image_url }}
                            title={ news.name }
                            subtitle={news.subtitle}
                            onPress={() => this.onClickNews(news)}
                        />
                    ))}
                </List>
            </ScrollView>
        );
    };
};
AppRegistry.registerComponent('Home', () => Home);