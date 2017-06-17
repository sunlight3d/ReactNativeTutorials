/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class AutoLayoutComponent extends React.Component {
    render() {
        return (
            <View
                style={
                    {
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end'
                    }
                }>
                <StatusBar hidden={true} />
                <View
                    style={
                        {
                            width: 60,
                            height: 60,
                            backgroundColor: 'red'
                        }
                    }/>
                <View
                    style={
                        {
                            width: 60,
                            height: 60,
                            backgroundColor: 'green'
                        }
                    }/>
                <View
                    style={
                        {
                            width: 60,
                            height: 60,
                            backgroundColor: 'blue'
                        }
                    }/>
            </View>
        );
    }
}

AppRegistry.registerComponent('Style a component ?', () => AutoLayoutComponent);