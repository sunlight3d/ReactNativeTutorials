import React, {Component} from 'react';
import {Platform, StyleSheet, ListView, Text, View, Alert} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const osName = (Platform.OS === "ios") ? "ios" : "android";
        Alert.alert(osName + ". Version is: " + Platform.Version);
        return (
            <View style={styles.mainView}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: (Platform.OS === 'ios' ? 20 : 100),
            ...Platform.select({
                ios: {
                    backgroundColor: 'green',
                },
                android: {
                    backgroundColor: 'red',
                }
            }),
    }
});
export default App;