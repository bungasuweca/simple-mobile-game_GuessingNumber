import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Primarybtn from '../components/ui/Primarybtn';
import Colors from '../consts/colors';

function Start({onPickNumber}){
    const [enteredValue, setEnteredValue] = useState ('');

    function valueInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function resetValueHandler(){
        setEnteredValue('');
    }

    function confirmValueHandler() {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert('Invalid Number!', 'Sowwy, the entered number has to be between 1 to 99 !! o(￣┰￣*)ゞ', [{text: 'I understand', style:'default', onPress: resetValueHandler}]);
            return;
        }

       onPickNumber(chosenNumber);
    }


    return (
        <View style={styles.root}>
            <Text style={styles.taitel}>ヾTebak-tebak Angka!!✧</Text>
            <Text style={styles.yuk}>ayo main tebak-tebakan denganku! aku akan menebak angka pilihanmu ο(=•ω＜=)ρ⌒☆</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.instruction}>Ketik angkamu..</Text>
                <TextInput 
                    style={styles.inputNumber}       
                    maxLength={2} 
                    keyboardType="numeric"
                    onChangeText={valueInputHandler}
                    value={enteredValue}
                />
                <View style={styles.btnsContainer}>
                    <View style={styles.btnContainer} >
                        <Primarybtn onPress={resetValueHandler}> Hapus </Primarybtn>
                    </View>
                    <View style={styles.btnContainer}>
                        <Primarybtn onPress={confirmValueHandler}> Mulai! </Primarybtn>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Start;

const styles = StyleSheet.create({
    root:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },

    taitel:{
        marginTop: 50,
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#EEEEEE',
        elevation: 20,
        borderRadius: 8,
        color: Colors.primary2
    },

    yuk:{
        margin: 12,
        textAlign:'center',
        fontSize: 11,
        color: Colors.primary2,
        borderTopWidth: 0.5,
    },

    instruction:{
        color: 'white',
        fontSize: 20,
    },

    inputContainer: {
        justifyContent:  'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 20,
        marginTop: 36,
        backgroundColor: Colors.primary2,
        borderRadius: 10,
        elevation: 40,
    },

    inputNumber: {
        height: 60,
        width: 70,
        textAlign: 'center',
        fontSize: 35,
        borderBottomColor: Colors.primary4 ,
        borderBottomWidth: 2,
        color: Colors.primary4,
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