/**
 * Created by hoangnd on 6/27/17.
 */

import React from 'react';
import {Text, View, Button, Image} from 'react-native';
const util = require('util');

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/icon-home.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}
            />
        ),
    };

    render() {
        return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
            <Text style={{fontSize: 30}}>This is tab 1</Text>
        </View>
    }
}

