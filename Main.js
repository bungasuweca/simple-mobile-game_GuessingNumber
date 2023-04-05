import { View, Text, StyleSheet, Sa } from "react-native";

function Main() {
    return <View style={styles.screen}>
         <Text> My Guess (￣y▽￣)╭ Ohohoho..... </Text>
         {/* Tebak */}
        <View>
            <Text>Higher or Lower?</Text>
            {/* + - nya disini nggeh */}
        </View>
    {/* <View>Log Rounds!</View> */}
    </View>
   
}

export default Main;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12, 
    },
})