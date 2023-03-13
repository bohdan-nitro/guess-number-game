import { View, Text, Image, StyleSheet } from "react-native";
import TitleNumber from "../components/TitleNumber";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../contstants/Colors";

const GameOverScreen = ({gameReset, roundsNumber, userNumber}) => {
    
    return (
        <View style={styles.container}>
            
            <TitleNumber>Game Over</TitleNumber>
           
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} resizeMode={"cover"}/>
            </View>
            <View style={{marginTop: 15}}>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}> {roundsNumber} </Text> Rounds to guess the number
                <Text style={styles.highlight}>  {userNumber}</Text>
                </Text>
            </View>
            <View style={{marginTop: 20, width: 180}}>
            <PrimaryButton onPress={gameReset}>Restart</PrimaryButton>
            </View>
            
        </View>
    )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    },
    imageContainer:{
        marginTop: 30,
        justifyContent: "center",
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: Colors.dark,
        borderWidth: 3,
        overflow: "hidden"
    },
    container:{
        flexGrow: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    summaryText: {
        fontFamily: "open-sans",
        color: "white",
        fontSize: 24,
        textAlign: "center"
    },
    highlight: {
        color: Colors.darkRed,
        fontFamily: "open-sans-bold",
       
    }
})