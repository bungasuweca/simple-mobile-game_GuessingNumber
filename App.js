import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import Start from './screens/Start';

import Main from './screens/Main';

export default function App(){
    const [userNumber, setUserNumber] = useState();
    
    function pickedNumberHandler(pickedNUmber){
        setUserNumber(pickedNUmber)
    }

    let screen = <Start onPickNumber={pickedNumberHandler}/>;

    if(userNumber) {
        screen = <Main/>
    }

    return(
        <View  style={styles.rootScreen}>
            <ImageBackground source={require('./img/bg.jpeg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.bg}>
                <SafeAreaView>{screen}</SafeAreaView>

            </ImageBackground>
        </View>   
    );
}

const styles =  StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: '#CBE4DE'
    },

    bg: {
        flex: 1,
        opacity: 0.15
    }
})