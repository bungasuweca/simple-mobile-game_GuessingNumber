import { Text, StyleSheet } from "react-native";

function Instruction ({children}) {
    return <Text style={styles.instruction}>{children}</Text>
}

export default Instruction;

const styles = StyleSheet.create({
    instruction:{
        color: 'white',
        fontSize: 20,
    },

});