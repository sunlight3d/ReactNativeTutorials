import React from 'react';
import {Text, View } from 'react-native';

import FirstScreen from './tabs/FirstScreen'
import SecondScreen from './tabs/SecondScreen'
import {TabNavigator} from "react-navigation";

var MainScreenNavigator = TabNavigator({
    Tab1: {screen: FirstScreen},
    Tab2: {screen: SecondScreen}
});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

export default MainScreenNavigator; // Export your root navigator as the root component


