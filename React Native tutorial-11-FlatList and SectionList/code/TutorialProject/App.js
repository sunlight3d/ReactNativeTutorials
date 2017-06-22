/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React from 'react';
import { AppRegistry, View, Image, Text, FlatList, SectionList } from 'react-native';
/*
export default class FlatListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var flowers = [
            {key: "Lily"},
            {key: "Holly"},
            {key: "Jasmine"},
            {key: "Daisy"},
            {key: "Alyssum"},
            {key: "Poppy"},
            {key: "Violet"},
            {key: "Ivy"}
        ];
        return (
            <View style={{flex:1, paddingTop: 30}}>
                <FlatList
                    data={flowers}
                    renderItem={
                        ({item}) => <Text style={{padding: 10, fontSize: 20, height: 44, color: "red"}}>Each item is: {item.key}</Text>
                    }
                >
                </FlatList>
            </View>
        );
    }
}
*/
export default class SectionlistComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sectionData = [
            {title: "A", data: [{key: "Alexander"}, {key: "Alan Turing"}], key: "A"},
            {title: "B", data: [{key: "Brooke"}, {key: "Barbara"}, {key: "Brenda"}], key: "B"},
            {title: "D", data: [{key: "David"}, {key: "Dylan"}, {key: "Diego"}, {key: "Dakota"}], key: "C"}
        ];
        return (
            <View style={{flex:1, paddingTop: 30}}>
                <SectionList
                    sections={sectionData}
                    renderItem={
                        ({item}) => <Text style={{padding: 10, color:"green"}}>{item.key}</Text>
                    }
                    renderSectionHeader={
                        ({section}) => <Text style={{padding: 10, color:"blue"}}>{section.title}</Text>
                    }
                >
                </SectionList>
            </View>
        );
    }
}
// skip this line if using Create React Native App
// AppRegistry.registerComponent('Example of FlatList', () => FlatListComponent);
AppRegistry.registerComponent('Example of Sectionlist', () => SectionlistComponent);