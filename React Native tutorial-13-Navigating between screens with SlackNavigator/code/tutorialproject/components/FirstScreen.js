/**
 * Created by hoangnd on 6/27/17.
 */
import React from 'react';
import { Text, View, Button } from 'react-native';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}
// module.exports = FirstScreen;