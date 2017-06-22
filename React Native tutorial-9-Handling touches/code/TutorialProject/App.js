/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View, TouchableHighlight, Text, TouchableOpacity,
    TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    handlePressButton = () => {
        Alert.alert("You pressed the button !")
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    style={styles.insideButton}
                    onPress={this.handlePressButton}
                    underlayColor="red">
                    <View>
                        <Text style={styles.insideButton}>This is TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    insideButton: {
        margin: 20,
        justifyContent: 'center'
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('Button and handling touches', () => App);