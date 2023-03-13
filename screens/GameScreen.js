import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Alert, FlatList, Dimensions, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import TitleNumber from "../components/TitleNumber";
import NumberContainer from "../components/NumberCoinatiner";
import Card from "../components/Card";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../contstants/Colors";
import GuestItem from "../components/GuesItem";

const generateRandomNumber = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * max - min + min);

    if(randomNum === exclude){
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNum;
    }
}
let minBouandry = 1;
let maxBoundary = 100;
const lower = "lower";
const greater = "greater";

const GameScreen = ({numberHandler, userNumber, onGameOver}) => {
    const intialNumber = generateRandomNumber(minBouandry, maxBoundary, userNumber)
    const [currentNumber, setCurrentNumber] = useState(intialNumber);
    const [guesRounds, setGuesRounds] = useState([intialNumber])


    useEffect(() => {
        if(currentNumber === userNumber){
            onGameOver(guesRounds.length)
        }
    }, [currentNumber, userNumber, onGameOver])

    const nextGuesHandler = (direction) => {
        if((direction === "lower" && currentNumber < userNumber) || direction === "greater" && currentNumber > userNumber){
            Alert.alert("Is a Lie", "You Know is inccorect number do you?", 
            [{text: "Sorry", style: "cancel"}])
            return;
        }
        
        if(direction === "lower"){
            maxBoundary = currentNumber;
        } else {
            minBouandry = currentNumber + 1;
        }
        const newRndNumber = generateRandomNumber(minBouandry, maxBoundary, currentNumber);
        setCurrentNumber(newRndNumber);
        setGuesRounds(prebGuessRounds => [newRndNumber, ...prebGuessRounds])
    }

    const roundLenght = guesRounds.length;

    return (
        <View style={styles.container}>
            <TitleNumber children={"Opponent Guess"}/>
            <NumberContainer>{currentNumber}</NumberContainer>
            <View style={{alignItems: "center", width: "100%"}}>
            <PrimaryButton onPress={() => numberHandler(null)}>Restart</PrimaryButton>
                <Card>
                <Text style={styles.inputTitle}>Higher or Lower</Text>
                    <View style={styles.btnRow}>
                    <View style={styles.btnContainer}>
                    <PrimaryButton onPress={() => nextGuesHandler(greater)}>
                        <Ionicons name="md-add" size={22} color={Colors.primary}/>
                    </PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                    <PrimaryButton onPress={() => nextGuesHandler(lower)}>
                        <Ionicons name="md-remove" size={22} color={Colors.darkRed}/>
                    </PrimaryButton>
                    </View>
        
                    </View>
                </Card>
                <View style={{padding: 20}}>
                    <FlatList keyExtractor={(item, index) => item} contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} style={styles.listContainer} data={guesRounds} 
                    renderItem={(itemRound) => <GuestItem 
                    roundNumber={roundLenght - itemRound.index}
                    guess={itemRound.item} />}
                    />
                </View>
            </View>
            <View style={{marginTop: "auto"}}>
            
            </View>
            
        </View>
        
    )
}
export default GameScreen;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingHorizontal: 25,
        alignItems: "center", 
        marginTop: screenWidth > 380 ? 40 : 0
    },
    row: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    inputTitle:{
        fontSize: 22,
        color: "white",
        fontWeight: "700",
        letterSpacing: 2,
        marginBottom: 12,
        fontFamily: "open-sans"
    },
    btnRow:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        flexGrow: 1,
        marginTop: 20,
        paddingBottom: 50
    }
})