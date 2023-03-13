import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './contstants/Colors';
import GameOverScreen from './screens/GameoverScreen';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading"




export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guesRounds, setGuesRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })

  if(!fontsLoaded){
    <AppLoading/>
  }

  const {primary, dark} = Colors;

  const numberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber)
    setGameIsOver(false)
  }

  const gameHandler = (numberOfRounds) => {
    setGameIsOver(true)
    setGuesRounds(numberOfRounds)
  }
  const gameReset = () => {
    setGameIsOver(false)
    setUserNumber(null)
    setGuesRounds(0)
  }

  let screen = <StartGameScreen numberHandler={numberHandler}/>

  if(userNumber){
    screen = <GameScreen onGameOver={gameHandler} userNumber={userNumber} numberHandler={numberHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guesRounds} userNumber={userNumber} gameReset={gameReset}/>
  }

  return (
    <LinearGradient colors={[dark, primary]} style={styles.container}>
      <ImageBackground 
      imageStyle={styles.backgroundContainer} 
      style={styles.container} 
      source={require("./assets/images/background.png")} 
      resizeMode={"cover"}>
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer:{
    opacity: 0.2
  }
});
