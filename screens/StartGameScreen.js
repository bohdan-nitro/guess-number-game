import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text, useWindowDimensions} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import TitleNumber from "../components/TitleNumber";
import Colors from "../contstants/Colors";


const {primary, dark} = Colors;

const StartGameScreen = ({numberHandler}) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    const {width, height} = useWindowDimensions();

    const changeNumber = (num) => {
        setEnteredNumber(num)
    }

    const resetInputhandler = () => {
        setEnteredNumber("")
    }

    const confirmHandlerInput = () => {
        const chosedNumber = parseInt(enteredNumber);
    
        if(isNaN(chosedNumber) || chosedNumber <= 0 || chosedNumber > 99){
            Alert.alert("Your Number inccorect", 
            "Number has to be a number between 1 and 99",
            [{text: "Okey", style: "destructive", onPress: resetInputhandler}]
            )
            return;
        }

        numberHandler(chosedNumber)
    }

   
    const marginTopLandscape = height < 380 ? 30 : 100;
    return (
        <View style={[styles.rootContainer, {marginTop: marginTopLandscape}]}>
            <TitleNumber>Guess My Number</TitleNumber>
            <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Enter a Number</Text>
            <TextInput style={styles.numberInput} 
                maxLength={2} 
                keyboardType={"number-pad"} 
                autoCapitalize={"none"} 
                placeholder={"0"}
                value={enteredNumber}
                onChangeText={changeNumber}
            />
            <View style={styles.btnRow}>
                <View style={styles.btnContainer}>
                <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                 <PrimaryButton onPress={confirmHandlerInput}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
        </View>
        
    )
}
export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    inputTitle:{
        fontSize: 20,
        color: "white",
        fontWeight: "700",
        letterSpacing: 2,
      
    },
    inputContainer: {
        alignItems: "center",
        marginTop: 40,
        padding: 18,
        
        backgroundColor: primary,
        borderRadius: 10,
        marginHorizontal: 24,
        elevation: 4,
        shadowColor: dark,
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 7,
        shadowOpacity: 0.3,
       
    },
    wrapper:{
        marginTop: 50,
    },
    numberInput:{
        height: 50,
        width: 60,
        fontSize: 30,
        borderBottomColor: "#113f67",
        borderBottomWidth: 2,
        marginVertical: 9,
        color: "#113f67",
        fontWeight: "bold",
        textAlign: 'center',
    },
    btnRow:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnContainer: {
        flex: 1
    }
})