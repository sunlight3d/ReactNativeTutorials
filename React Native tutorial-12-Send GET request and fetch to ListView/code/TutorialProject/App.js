/*
Nguyen Duc Hoang - sunlight4d@gmail.com
React Native tutorial video
 */
import React, {Component} from 'react';
import { AppRegistry, ActivityIndicator, ListView, Text, View } from 'react-native';

export default class MoviesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            clonedMovies: []
        }
    }

    componentDidMount() {
        fetch("https://facebook.github.io/react-native/movies.json")
            .then((response) => response.json())
            .then((responseJson) => {
                var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                /*
                var movies = [
                    {
                        title: "Star Wars",
                        releaseYear: "1977"
                    },
                    {
                        title: "The Matrix",
                        releaseYear: "1999"
                    }
                ];
                */
                //this.state.clonedMovies = standardDataSource.cloneWithRows(responseJson.movies);
                this.setState({
                    isLoading: false,
                    clonedMovies: standardDataSource.cloneWithRows(responseJson.movies)
                 }
                );
            })
    }

    render() {
        console.log("1. Getting data");
        if(this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }
        console.log("2. Already get data");
        return (
            <View style={{flex: 1, paddingTop: 25}}>
                <ListView
                    dataSource={this.state.clonedMovies}
                    renderRow={
                        (rowData) => <Text>Title: {rowData.title}, release year: {rowData.releaseYear}</Text>
                    }
                >

                </ListView>
            </View>
        );
    }
}
AppRegistry.registerComponent('Example of getting data and fetch to Listview', () => MoviesComponent);