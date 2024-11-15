import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SignalWire} from '@signalwire/realtime-api'; // Added import

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>GOTTA GO</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome to <Text style={styles.boldText}>Gotta Go!</Text>
        </Text>
        <Text style={styles.linkText}>Let’s Know More About It</Text>
        <Text style={styles.description}>
          Gotta Go was originally designed as a birthday surprise for a friend,
          but it quickly became a go-to solution for anyone needing a graceful
          exit from awkward dates or sticky situations. Now, it's here to help
          you too!
        </Text>
        <Text style={styles.sectionTitle}>Need an excuse to leave?</Text>
        <Text style={styles.description}>
          Gotta Go has your back—completely free and with no ads! All we ask is
          that you leave a review on the App Store if you enjoy the app.
        </Text>
        <Text style={styles.sectionTitle}>How to Use Gotta Go:</Text>
        <Text style={styles.description}>
          Enter Your Number: Start by entering the phone number where you’d like
          to receive the call or text (usually your own).
        </Text>
        <Text style={styles.description}>
          <Text style={styles.boldText}>Choose Your Excuse:</Text> Whether you
          need an urgent pickup or a call from a "hospital," we’ve got a variety
          of voice recordings to choose from. If you prefer a text, you can type
          your custom message!
        </Text>
        <Text style={styles.description}>
          <Text style={styles.boldText}> Set the Timer: </Text>
          Decide how long you want to stay before your "emergency" arrives. The
          call or text will reach you right on time.
        </Text>
        <Text style={styles.description}>
          <Text style={styles.boldText}> Press "Start": </Text>
          Now, just sit back, wait for your call, and when it comes in, say,
          “Gotta Go!”
        </Text>
        <Text style={styles.proTip}>
          💡 Pro Tip: Notice the number at the top of the home screen?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Review')}
          style={styles.feedbackButton}>
          <Text style={styles.feedbackButtonText}>Leave Feedback</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    // justifyContent:'center'
  },
  backButton: {
    
    color: '#fff',
    fontSize: 24,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  linkText: {
    color: 'black',

    color: '#007AFF',
    marginBottom: 20,
  },
  description: {
    color: 'black',

    fontSize: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    color: 'black',

    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 20,
    // marginBottom: 10,
  },
  proTip: {
    color: 'black',
    fontSize: 16,
    marginTop: 20,
    fontStyle: 'italic',
  },
  feedbackButton: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  feedbackButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WelcomeScreen;
