import { StyleSheet, View } from "react-native";
import Colors from "../contstants/Colors";

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}
export default Card;

const styles = StyleSheet.create({
    inputContainer: {
      
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 40,
        padding: 18,
       
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginHorizontal: 24,
        elevation: 4,
        shadowColor: Colors.dark,
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 7,
        shadowOpacity: 0.3,
       
    },
})