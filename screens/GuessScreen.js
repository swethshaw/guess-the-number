import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GuessScreen = ({ userNumber, setStep, restartGame }) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(99);
  const [guess, setGuess] = useState(getRandomNumber(1, 99));
  const [guessCount, setGuessCount] = useState(1);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (minValue > maxValue) {
      setStep(3); // Game Over
      return;
    }
    if (guessCount > 10) {
      setStep(3); // Game Over after 10 tries
      return;
    }
    setGuess(getRandomNumber(minValue, maxValue));
    
  }, [minValue, maxValue]);

  useEffect(() => {
    if (guess === userNumber) {
      setStep(4); // Win
    }
    
  }, [guess, userNumber, setStep]);

  // Increment guessCount when Lower or Higher is pressed
  const handleLower = () => {
    if (userNumber < guess) {
      setMaxValue(guess - 1);
      setGuessCount((prev) => prev + 1);
    } else if (userNumber > guess) {
      Alert.alert("Don't lie", "Your number is higher!");
    }
  };

  const handleHigher = () => {
    if (userNumber > guess) {
      setMinValue(guess + 1);
      setGuessCount((prev) => prev + 1);
    } else if (userNumber < guess) {
      Alert.alert("Don't lie", "Your number is lower!");
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <Text style={styles.guess}>{guess}</Text>
        <Text style={styles.tries}>Try: {guessCount} / 10</Text>
        <View style={styles.buttonRow}>
          <PrimaryButton onPressFunction={handleLower}>
            Lower
          </PrimaryButton>
          <PrimaryButton onPressFunction={handleHigher}>
            Higher
          </PrimaryButton>
        </View>
        <PrimaryButton onPressFunction={restartGame}>Restart</PrimaryButton>
      </View>
    </View>
  );
};

export default GuessScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f8fc",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
    width: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 1,
  },
  guess: {
    fontSize: 44,
    color: "#1976d2",
    marginVertical: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  tries: {
    fontSize: 16,
    color: "#888",
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 18,
    gap: 12,
  },
});