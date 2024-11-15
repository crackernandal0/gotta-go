import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation for navigation

const ThanksScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const navigateToHome = () => {
    navigation.navigate('Home'); // Navigate to home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>
        Your message has been sent successfully.
      </Text>
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
  },
  button: {
    backgroundColor: '#4CAF50', // Green background
    padding: 10,
    borderRadius: 5,
    marginTop: 50, // Space above the button
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 16,
    textAlign: 'center', // Center the text
  },
});

export default ThanksScreen;
