import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../contstants/Colors";

const NumberContainer = ({children}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        padding: screenWidth < 390 ? 12 : 24,
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