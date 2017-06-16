/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShownText: true};

        setInterval(
            () => {
                this.setState(previousState => {
                    return {isShownText: !previousState.isShownText}
                });
            },
            500
        );
    }
    render() {
        var textToDisplay = this.state.isShownText ? this.props.textContent : '';
        return(
            <Text>{textToDisplay}</Text>
        );
    }
}

export default class TextBlinkApp extends React.Component {
    render() {
        return (
            <Blink textContent={
            `


            Hello, I am Hoang`
            }/>

        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('BlinkApp', () => TextBlinkApp);