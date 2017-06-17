/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class SizeComponent extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={false} />
                <View style={
                    {
                        flex: 1,
                        backgroundColor: 'chartreuse'
                    }
                } />
                <View style={
                    {
                        flex: 2,
                        backgroundColor: 'chocolate'
                    }
                }/>
                <View style={
                    {
                        flex: 4,
                        backgroundColor: 'coral'
                    }
                }/>
                <Text style={{fontSize: 30, color: 'red'}}>Thang linh kia</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Style a component ?', () => SizeComponent);