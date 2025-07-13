import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GuessScreen from './screens/GuessScreen';
import GameOverScreen from './screens/GameOverScreen';
import WinScreen from './screens/WinScreen';

export default function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState(null);

  const restartGame = () => {
    setStep(1);
    setUserNumber(null);
  };

  return (
    <LinearGradient
      colors={["#e0ffe0", "#b2f7ef", "#f0f4c3"]}
      style={{ flex: 1 }}
    >
      {step === 1 && (
        <StartGameScreen
          step={step}
          setStep={setStep}
          userNumber={userNumber}
          setUserNumber={setUserNumber}
        />
      )}
      {step === 2 && (
        <GuessScreen
          userNumber={userNumber}
          setStep={setStep}
          restartGame={restartGame}
        />
      )}
      {step === 3 && <GameOverScreen restartGame={restartGame} />}
      {step === 4 && <WinScreen restartGame={restartGame} />}
      <StatusBar hidden />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});