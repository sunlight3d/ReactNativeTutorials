/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import {Animated, Easing, Text, View} from 'react-native';

export default class AnimatedView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            xPosition: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.xPosition,
            {
                toValue: 200,
                easing: Easing.back,
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