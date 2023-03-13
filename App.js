import { useState, useCallback } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './contstants/Colors';
import GameOverScreen from './screens/GameoverScreen';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';



SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guesRounds, setGuesRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
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
    <LinearGradient onLayout={onLayoutRootView} colors={[dark, primary]} style={styles.container}>
      <ImageBackground 
      imageStyle={styles.backgroundContainer} 
      style={styles.container} 
      source={require("./assets/images/background.png")} 
      resizeMode={"cover"}>
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style='light' colors={"#fff"}/>
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
