import { View, Text, StyleSheet } from "react-native";
import Colors from "../contstants/Colors";

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.dark,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Colors.primary,
        flexDirection: "row",
        marginVertical: 8,
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingVertical: 15,
        paddingHorizontal: 20

    },
    text: {
        fontFamily: "open-sans",
        color: "#fff",
        fontSize: 16
    }
})

const GuestItem = ({roundNumber, guess}) => {
    return (
        <View key={roundNumber} style={styles.listItem}>
            <Text style={styles.text}>
            #{roundNumber}
            </Text>
            <Text style={styles.text}>
            Opponents guess {guess}
            </Text>
        </View>
    )
}
export default GuestItem;