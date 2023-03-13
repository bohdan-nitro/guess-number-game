import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../contstants/Colors";

const PrimaryButton = ({children, onPress, isReset}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.btnContainer, styles.pressedIos] : [styles.btnContainer, isReset ? styles.isReset : null]}>
            <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    btnContainer:{
        margin: 4,
        backgroundColor: "#000",
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 20,
        elevation: 2
    },
    container: {
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        letterSpacing: 1.5,
    },
    pressedIos:{
        opacity: 0.7,
        backgroundColor: "#680747"
    },
    isReset: {
        backgroundColor: Colors.darkRed
    }
})