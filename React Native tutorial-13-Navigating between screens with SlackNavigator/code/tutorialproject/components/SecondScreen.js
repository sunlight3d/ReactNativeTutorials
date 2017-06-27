/**
 * Created by hoangnd on 6/27/17.
 */
import React from 'react';
import {Text, View, Button} from 'react-native';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}
// module.exports = SecondScreen;