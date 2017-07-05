import React from 'react';
import FadeView from './Animations/FadeView'
import AnimatedView from './Animations/AnimatedView'
import {Animated, Text, View} from 'react-native';

class App extends React.Component {
    render() {
        var fadeView =  <FadeView style={{width: 250, height: 50, backgroundColor: 'green'}}>
                            <Text style={{fontSize: 28, textAlign: 'center', margin: 10, color: 'white'}}>Fade text</Text>
                        </FadeView>
        var animatedView =  <AnimatedView style={{width: 250, height: 50, backgroundColor: 'green'}}>
                                <Text style={{fontSize: 28, textAlign: 'center', margin: 10, color: 'white'}}>Animated View</Text>
                            </AnimatedView>
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                 {/*fadeView*/}
                 {animatedView}
            </View>
        )
    }
}

export default App;