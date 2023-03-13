import { Text, StyleSheet } from "react-native";
import Colors from "../contstants/Colors";

const { primary, darkRed } = Colors;

const styles = StyleSheet.create({
    text: {
        fontFamily: "open-sans-bold",
        color: "white",
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
        borderRadius: 15,
        letterSpacing: 1,
        maxWidth: "85%",
        width: 300
    }
})

const TitleNumber = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default TitleNumber;

