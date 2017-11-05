import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class Details extends Component {
    render() {
        const { title,content } = this.props.navigation.state.params;

        return (
            <ScrollView>

                <List>
                    <ListItem
                        title="title"
                        rightTitle={Newstitle}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Username"
                        rightTitle={login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={location.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

export default Details;