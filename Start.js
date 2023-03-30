import { Text, TextInput, View, StyleSheet } from 'react-native';
import Primarybtn from '../components/Primarybtn';

function Start(){
    return <View style={styles.inputContainer}>
        <TextInput 
            style={styles.inputNumber}       
            maxLength={2} 
            keyboardType="numeric"/>
         <Primarybtn> Reset </Primarybtn>
         <Primarybtn> Confirm </Primarybtn>
    </View>
}

export default Start;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        padding: 20,
        marginTop: 90,
        backgroundColor: '#0E8388',
        borderRadius: 10,
        elevation: 40,
    },

    inputNumber: {
        height: 60,
        width: 70,
        textAlign: 'center',
        fontSize: 35,
        borderBottomColor: '#CBE4DE',
        borderBottomWidth: 2,
        color: '#CBE4DE',
        marginVertical: 5,
        fontWeight: 'bold',
    },
});