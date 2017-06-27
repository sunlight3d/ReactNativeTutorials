import React from 'react';
import {Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';

const App = StackNavigator({
    Home: {screen: FirstScreen},
    Chat: {screen: SecondScreen},
});


// AppRegistry.registerComponent('Example of SlackNavigator', () => App);
export default App; // Export your root navigator as the root component


