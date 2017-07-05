
import React from 'react';
import {Button, Text, Platform, ScrollView, StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const DrawerExample = DrawerNavigator(
    {
        First: {
            path: '/',
            screen: FirstScreen,
        },
        Second: {
            path: '/sent',
            screen: SecondScreen,
        },
    },
    {
        initialRouteName: 'First',
        drawerPosition: 'left',
        // drawerWidth: 200,
        contentOptions: {
            activeTintColor: 'red',
        }
    }
);

export default DrawerExample;