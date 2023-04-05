import { View, Text, StyleSheet, Pressable } from "react-native";

function Primarybtn({children, onPress}){
    return (
        
        <View style={styles.outerContainer}>
            <Pressable style={({pressed}) => pressed 
                ? [styles.container, styles.pressed] 
                : styles.container
            }
            onPress={onPress}android_ripple={{color: '#21cad1'}} >
                 <Text style={styles.btntxt}>{children}</Text>
            </Pressable>
         </View>
    );
}

export default Primarybtn;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },

    container:  {
        backgroundColor: '#0E8388',
        borderRadius: 60,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 3,
        elevation: 2,

    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        // opacity: 0.75
    }
})