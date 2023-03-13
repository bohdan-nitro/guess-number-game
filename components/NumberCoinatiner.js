import { View, Text, StyleSheet } from "react-native";
import Colors from "../contstants/Colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        padding: 20,
        borderColor: Colors.primary,
        borderRadius: 15,
        margin: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        color: Colors.primary,
        fontFamily: "open-sans-bold"
    }
})