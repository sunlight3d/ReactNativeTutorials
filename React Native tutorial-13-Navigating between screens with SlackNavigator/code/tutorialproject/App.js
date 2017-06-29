import React from 'react';
import {Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import  FirstScreen  from './screens/FirstScreen'
import  SecondScreen  from './screens/SecondScreen'

const Navigation = StackNavigator({
    First: {screen: FirstScreen},
    Second: {screen: SecondScreen}
});

export default Navigation; // Export your root navigator as the root component


