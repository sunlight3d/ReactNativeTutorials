import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, ListView, Text, View} from 'react-native';

export default class MoviesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            clonedMovies: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 25}}>
                <Text style={styles.textInside}>
                    This is a Platform module example
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (Platform.OS === "ios") ? 25 : 50
    },
    textInside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
AppRegistry.registerComponent('Example of using Platform module to both IOS and Android', () => MoviesComponent);