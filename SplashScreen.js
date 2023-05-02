import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            <View>
                <Text>Splash Screen</Text>
            </View>
        );
    }
}

export default Home;