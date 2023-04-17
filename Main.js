import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Primarybtn from "../components/ui/Primarybtn";
import Card from "../components/ui/card";
import Instruction from "../components/ui/instruction";
import GuessLog from "../components/game/GuessLog";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum ===  exclude){
        return generateRandomBetween(min, max, exclude);
    } else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function Main({userNumber, onGameOver}) {
    const initial = generateRandomBetween( 1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initial);
    const [guessRound, setGuessRounds] = useState([initial]);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1,
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction){
        if (
                (direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)
            ) {
                Alert.alert("bOhOoNkK!!", 'affh iyh dek', [
                    { text: 'mff kak', style: 'cancel'},
            ]);
                return;
            }

        if (direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber); 

        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRound => [newRndNumber, ...prevGuessRound]);
    }

    const guessRoundList = guessRound.length;
    
    return (
        <View style={styles.screen}>
            <Title>Tebakan aq ♪(^∇^* : </Title>
            <NumberContainer>{currentGuess}</NumberContainer>                
                <Card>
                    <Instruction style={styles.Instruction}>Lebih tinggi atw lebih kecil?</Instruction>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Primarybtn onPress={nextGuessHandler.bind(this, 'lower')}> - </Primarybtn>
                        </View>
                        <View style={styles.button}>
                            <Primarybtn onPress={nextGuessHandler.bind(this, 'greater')}> + </Primarybtn>
                        </View>
                    </View>
                </Card>
            <View>
                {/* {guessRound.map(guessRound => <Text key={guessRound
                }>{guessRound} </Text>)} */}
                <FlatList data={guessRound} renderItem={(itemData) => <GuessLog roundNum={guessRoundList - itemData.index} guess={itemData.item}/>} keyExtractor={(item) => item}/>
            </View>
        </View>

    );
}

export default Main;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
    },

    Instruction:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 12,
        paddingTop: 2
    },

    button: {
        flex: 1,
    },
    
    buttons:{
        flexDirection: 'row',
    },

    
})