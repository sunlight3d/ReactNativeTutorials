/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView horizontal={true}>
                <Text
                    style={
                        {
                            fontSize: 30,
                            padding: 20,
                            backgroundColor: "red"
                        }
                    }>
                    This is a text in a scrollView
                </Text>
                <Text
                    style={
                        {
                            fontSize: 30,
                            padding: 20,
                            backgroundColor: "green"
                        }
                    }>
                    This is second line
                </Text>
                <Image
                    source={require('./images/my_display.jpg')}
                    style={
                        {
                            width: 414,
                            height: 414
                        }
                    }
                    >
                </Image>
                <Text
                    style={
                        {
                            fontSize: 30,
                            padding: 20,
                            backgroundColor: "yellow"
                        }
                    }>
                    This is 3rd line
                </Text>
                <Image
                    source={require('./images/my_display.jpg')}
                    style={
                        {
                            width: 414,
                            height: 414
                        }
                    }
                >
                </Image>
                <Text
                    style={
                        {
                            fontSize: 30,
                            padding: 50,
                            backgroundColor: "blue"
                        }
                    }>
                    This is line 4
                </Text>
                <Image
                    source={require('./images/my_display.jpg')}
                    style={
                        {
                            width: 414,
                            height: 414
                        }
                    }
                >
                </Image>
            </ScrollView>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Example of ScrollView', () => App);