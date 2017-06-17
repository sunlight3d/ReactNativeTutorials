import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

class ContentComponent extends React.Component {
  render() {
    return (
        <Text>This is {this.props.content}</Text>
    );
  }
}

export default class DinosaurComponent extends React.Component {
  render() {
    let myImage = {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/LA-Triceratops_mount-2.jpg/1920px-LA-Triceratops_mount-2.jpg"};
    let size = {width: 390, height: 90};
    return (
        <View>
          <Text>props in React Native - Nguyen Duc Hoang</Text>
          <Image
              source={myImage}
              style={size}
          />
          <ContentComponent content="Triceratops skeleton."/>
        </View>
    );
  }
}


AppRegistry.registerComponent("This is a dinosour",() => DinosaurComponent);