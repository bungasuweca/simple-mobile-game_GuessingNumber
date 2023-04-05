import { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Primarybtn from '../components/Primarybtn';

function Start(){
    const [enteredValue, setEnteredValue] = useState ('');

    function valueInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function confirmValueHandler() {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            //show alert
            return
        }
    }


    return <View style={styles.inputContainer}>
        <TextInput 
            style={styles.inputNumber}       
            maxLength={2} 
            keyboardType="numeric"
            onChangeText={valueInputHandler}
            value={enteredValue}
        />
        <View style={styles.btnsContainer}>
            <View style={styles.btnContainer} >
                <Primarybtn> Reset </Primarybtn>
            </View>
            <View style={styles.btnContainer}>
                <Primarybtn onPress={confirmValueHandler}> Confirm </Primarybtn>
            </View>
         </View>
    </View>
}

export default Start;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:  'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 20,
        marginTop: 90,
        backgroundColor: '#2E4F4F',
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

    btnsContainer:  {
        flexDirection: 'row',
    },

    btnContainer: {
        flex: 1,
    },
});