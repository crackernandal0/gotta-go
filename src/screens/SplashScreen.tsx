import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import {useNavigation} from '@react-navigation/native';
import {SignalWire} from '@signalwire/realtime-api'; // Added import

const SplashScreen = () => {
  const navigation = useNavigation();
  const initSignalWire = async () => {
    try {
      console.log('hi');
      const client = await SignalWire({
        project: 'c7b164f0-bc92-490f-aa2c-2e9dbecdb0ff',
        token: 'PTb7213b222dea360aad70ca3b80790ff244ba352d28f30b41',
      });

      if (client) {
        console.log('Successfully connected to SignalWire');
      } else {
        console.error('Failed to connect to SignalWire');
      }

      console.log('he');
      const messageClient = client.messaging;

      await messageClient.listen({
        topics: ['office'],
        async onMessageReceived(message) {
          console.log('Received message:', message);

          const response = await messageClient.send({
            from: message.to,
            to: message.from,
            body: 'Hello World!',
          });

          console.log('Sent message:', await response);
        },
      });

      console.log('Listening for messages...');
    } catch (error) {
      console.error('SignalWire initialization error:', error);
    }
  };
  useEffect(() => {
    initSignalWire();
  }, []);

  // Get screen dimensions
  const {width, height} = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    scrollViewContent: {
      alignItems: 'center',
      paddingBottom: 20,
    },
    closeButton: {
      alignSelf: 'flex-end',
      fontSize: width * 0.15, // Adjust font size based on screen width
      color: '#000',
    },
    welcomeText: {
      color: 'black',
      fontSize: width * 0.05, // Adjust font size based on screen width
      fontWeight: 'bold',
      marginVertical: 10,
    },
    appName: {
      fontSize: width * 0.08, // Adjust font size based on screen width
      fontWeight: 'bold',
      color: '#FF69B4',
    },
    description: {
      color: 'black',
      textAlign: 'center',
      marginVertical: 15,
      paddingHorizontal: width * 0.05, // Adjust padding based on screen width
    },
    freeText: {
      fontSize: width * 0.06, // Adjust font size based on screen width
      fontWeight: 'bold',
      color: '#6495ED',
      marginVertical: 10,
    },
    reviewText: {
      color: 'black',
      textAlign: 'center',
      marginVertical: 15,
      paddingHorizontal: width * 0.05, // Adjust padding based on screen width
    },
    boldText: {
      color: '#0486F9',
      fontWeight: 'bold',
    },
    image: {
      width: width * 0.25, // Adjust image size based on screen width
      height: width * 0.25, // Maintain aspect ratio
      marginVertical: 20,
    },
    opinionText: {
      color: 'black',
      fontSize: width * 0.04, // Adjust font size based on screen width
      fontWeight: 'bold',
      marginVertical: 10,
    },
    subText: {
      color: 'black',
      textAlign: 'center',
      marginVertical: 10,
      paddingHorizontal: width * 0.05, // Adjust padding based on screen width
    },
    button: {
      backgroundColor: '#1E90FF',
      padding: width * 0.04, // Adjust padding based on screen width
      borderRadius: 25,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('Call')}>
        <Text style={styles.closeButton}>×</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <LinearGradientText
          colors={['#f2a4eb', '#1e95fd']}
          text="GOTTA GO"
          start={{x: 0.5, y: 0}} // Optional
          end={{x: 1, y: 1}} // Optional
          textStyle={{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center', // Center the text
            fontFamily: 'Krona One',
            paddingTop: 20,
            // Set the font style
          }} // Optional
          textProps={{allowFontScaling: true}} // Optional
        />
        <Text style={styles.description}>
          Originally created as a fun gift for a friend back in 2021, this app
          unexpectedly became a handy escape plan for many! While it took a little
          break, we're excited to bring it back, fully recharged and ready to help
          you make a smooth exit from any awkward situation.
        </Text>
        <LinearGradientText
          colors={['#f2a4eb', '#1e95fd']}
          text="No ads. Completely Free."
          start={{x: 0.5, y: 0}} // Optional
          end={{x: 1, y: 1}} // Optional
          textStyle={{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center', // Center the text
            fontFamily: 'Krona One',
            paddingTop: 20,
            // Set the font style
          }} // Optional
          textProps={{allowFontScaling: true}} // Optional
        />
        <Text style={styles.reviewText}>
          All we ask is for a
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.navigate('Review')}>
            <Text style={styles.boldText}>QUICK REVIEW</Text>
          </TouchableOpacity>
          if you find it helpful. It really makes a difference and helps others
          discover the app too!.{'\n'} Thank you for using Gotta Go! Now, let's
          make your escape easy and seamless!
        </Text>
        <Image
          source={require('../../assets/images/paystore.png')} // Replace with your image URL
          style={styles.image}
        />
        <Text style={styles.opinionText}>Your opinion matters to us!</Text>
        <Text style={styles.subText}>
          We work super hard to serve you better and would love to know what you
          think of our app.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Review')} >
          <Text style={styles.buttonText}>Rate us on the Playstore</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SplashScreen;
