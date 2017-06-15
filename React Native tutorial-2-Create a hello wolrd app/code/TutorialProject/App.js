import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!. This is me - Nguyen Duc Hoang</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('This is Hello World', () => App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
