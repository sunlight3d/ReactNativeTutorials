/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class StyleComponent extends React.Component {
    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <Text style={styles.redColor}>This is a styled text - RED</Text>
                <Text style={[styles.greenColor, styles.redColor]}>This is a styled text - GREEN</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    redColor: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    greenColor: {
        color: 'green',
        fontSize: 30
    }
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('Style a component ?', () => StyleComponent);