import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../consts/colors';

function numberContainer(){
    return(
    <View style={styles.container}>
        <Text style={styles.numText}>{children}</Text>
    </View>
    );
}

export default numberContainer;

const styles=StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.primary3,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numText:{
        color: Colors.primary3,
        fontSize: 36,
        fontWeight: 'bold',
    },
});