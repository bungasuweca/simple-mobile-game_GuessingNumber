import { StyleSheet, View, ImageBackground } from 'react-native';
import Start from './screens/Start';

export default function App(){
    return(
        <View  style={styles.rootScreen}>
            <ImageBackground source={require('./img/bg.jpeg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.bg}>
                <Start/>
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