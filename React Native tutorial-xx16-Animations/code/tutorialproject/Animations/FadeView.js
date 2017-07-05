/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import {Animated, Text, View} from 'react-native';

export default class FadeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start();
    }

    render() {
        return (
            <Animated.View
                style={{
                        ...this.props.style,
                        opacity: this.state.fadeAnim,
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}