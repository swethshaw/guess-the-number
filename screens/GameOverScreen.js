import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function GameOverScreen({ restartGame }) {
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.emoji}>😢</Text>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.subtitle}>No numbers left to guess!</Text>
        <PrimaryButton onPressFunction={restartGame}>
          Restart
        </PrimaryButton>
      </View>
    </View>
  );
}

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
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
    width: 300,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d84315",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#b71c1c",
    marginBottom: 24,
    textAlign: "center",
  },
});