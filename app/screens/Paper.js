import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    ScrollView,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { Tile, List, ListItem } from 'react-native-elements';

class News extends Component {
    static navigationOptions = {
        title:'Content',
    };
    render(){
        const { image_url, subtitle, content, date } = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                <Image
                    source = {{uri:image_url}}
                />
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <View style={styles.containerPanel}>
                        <Text>{subtitle}</Text>
                        <Text>{content}</Text>
                        <Text>{date}</Text>
                    </View>
                </ScrollView>
            </View>
            /*<List>
             <Image
             source={{ uri: image_url}}
             />
             <ListItem
             title="subtitle"
             rightTitle={subtitle}
             hideChevron
             />
             <ListItem
             title="content"
             rightTitle={content}
             hideChevron
             />
             <ListItem
             title="date"
             rightTitle={date}
             hideChevron
             />
             </List>*/
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    newsImage: {
        backgroundColor: 'gray',
        flex: 1
    },
    containerPanel: {
        flex: 1,
        flexDirection: 'column',
        padding: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    content: {
        fontSize: 14,
        paddingTop: 10
    },
    date: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'orange',
        paddingTop: 10
    }
});
export default News;
AppRegistry.registerComponent('News', () => News);