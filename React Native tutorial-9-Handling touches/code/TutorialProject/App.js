/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View, StatusBar, TextInput} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    /*
    handleChangeText = (typedText) => {
        this.setState({text: typedText});
    }
    */
    render() {
        return (
            <View style={
                {
                    padding: 10
                }
            }>
                <TextInput
                    style={
                        {
                            height: 50
                        }
                    }
                    placeholder="Type your text here"
                    onChangeText={
                        (typedText) => {
                            this.setState({text: typedText});
                        }
                    }
                    value={this.state.text}
                />
                <Text
                    style={
                        {
                            padding: 20,
                            fontSize: 30
                        }
                    }>
                    You type: {this.state.text}
                </Text>
                <StatusBar hidden={true}/>
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Example of text input', () => App);