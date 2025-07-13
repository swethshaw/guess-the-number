import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({ step, setStep, userNumber, setUserNumber }) => {
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.title}>Guess The Number</Text>
        <Text style={styles.subtitle}>Pick a number between 1 and 99</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="Enter a number"
          placeholderTextColor="#aaa"
          onChangeText={(text) => setUserNumber(Number(text))}
          value={userNumber ? String(userNumber) : ""}
        />
        <View style={styles.buttonRow}>
          <PrimaryButton onPressFunction={() => setUserNumber(null)}>
            Reset
          </PrimaryButton>
          <PrimaryButton
            onPressFunction={() => {
              if (
                userNumber == null ||
                isNaN(userNumber) ||
                userNumber < 1 ||
                userNumber > 99
              ) {
                return;
              } else {
                setStep(2);
              }
            }}
          >
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

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
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 18,
    textAlign: "center",
  },
  textInput: {
    width: 80,
    fontSize: 28,
    color: "#333",
    borderBottomColor: "#1976d2",
    borderBottomWidth: 2,
    marginBottom: 24,
    textAlign: "center",
    backgroundColor: "#f0f4c3",
    borderRadius: 8,
    padding: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
    gap: 12,
  },
});