import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CountryPicker from 'react-native-country-picker-modal';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import voice1 from '../../assets/voice//FemaleGetHomeNow.mp3';
import voice2 from '../../assets/voice/MaleGetHomeNow.mp3';
import voice3 from '../../assets/voice/FemaleINeedYourHelp.mp3';
import voice4 from '../../assets/voice/MaleINeedYourHelp.mp3';
import voice5 from '../../assets/voice/FemalePickMeUpPlease.mp3';
import voice6 from '../../assets/voice/MalePickMeUpPlease.mp3';
import voice7 from '../../assets/voice/FemaleWhereAreYou.mp3';
import voice8 from '../../assets/voice/MaleWhereAreYou.mp3';
import voice9 from '../../assets/voice/FemaleYourFriendIsIntheHospital.mp3';
import voice10 from '../../assets/voice/MaleYourFriendIsIntheHospital.mp3';
import Sound from 'react-native-sound';

const CallScreen = () => {
  const navigation = useNavigation();

  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [voiceError, setVoiceError] = useState('');
  const [timeError, setTimeError] = useState('');

  let currentSound: Sound | null = null;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: {
    toLocaleTimeString: (
      arg0: never[],
      arg1: {hour: string; minute: string},
    ) => any;
  }) => {
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setSelectedTime(time);
    hideDatePicker();
  };

  const playVoice = (voiceFile: string) => {
    // Stop and release the current sound if it's playing
    if (currentSound) {
      currentSound.stop(() => {
        currentSound.release();
        currentSound = null; // Ensure currentSound is reset
      });
    }

    // Load and play the new sound
    currentSound = new Sound(voiceFile, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }

      // Play the sound
      currentSound?.play((success: any) => {
        if (success) {
          console.log('Successfully finished playing');
        } else {
          console.log('Playback failed');
        }
        // Release the sound resource when done
        currentSound.release();
        currentSound = null; // Reset currentSound after playing
      });
    });
  };

  // const playSound = () => {
  //   const sound = new Sound(voice3, error => {
  //     if (error) {
  //       console.log('Failed to load the sound', error);
  //       return;
  //     }

  //     // Play the sound
  //     sound.play(success => {
  //       if (success) {
  //         console.log('Successfully finished playing');
  //       } else {
  //         console.log('Playback failed');
  //       }
  //       // Release the sound resource when done
  //       sound.release();
  //     });
  //   });
  // };

  // playSound();

  // Function to validate inputs
  const validateInputs = () => {
    let isValid = true;

    // Reset error messages
    setPhoneError('');
    setVoiceError('');
    setTimeError('');

    if (!phoneNumber) {
      setPhoneError('Phone number is required.');
      isValid = false;
    }
    if (!selectedVoice) {
      setVoiceError('Voice selection is required.');
      isValid = false;
    }
    if (!selectedTime) {
      setTimeError('Time selection is required.');
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.container}>
      {/* Display error message if validation fails */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <ImageBackground
          style={{
            width: 45,
            height: 45,
            // backgroundColor: 'black',
          }}
          source={require('../../assets/images/35bdbd10-1838-46c7-bb01-a222223942a9.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          width: 84,
          height: 42,
          backgroundColor: '#efebeb',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          position: 'absolute',
          top: 13,
          left: 254,
          zIndex: 1,
        }}>
        <ImageBackground
          style={{
            width: 40,
            height: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'absolute',
            top: 1,
            // left: 43,
            zIndex: 3,
          }}
          source={require('../../assets/images/c9434724-ada3-45ee-b27b-3e7d5f81ee19.png')}
          resizeMode="cover">
          <View
            style={{
              width: 24,
              height: 24,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 5,
              marginTop: 8,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 8,
            }}>
            <ImageBackground
              style={{
                width: 22.138,
                height: 20.843,
                position: 'relative',
                zIndex: 6,
                marginTop: 1.579,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0.93,
              }}
              source={require('../../assets/images/Vector_1.png')}

              // source={require('../../assets/images/Vector.png')}
            />
          </View>
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ImageBackground
            style={{
              width: 24,
              height: 24,
              position: 'absolute',
              top: 9,
              left: 48,
              overflow: 'hidden',
              zIndex: 4,
            }}
            source={require('../../assets/images/Vector.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
        <Text style={styles.subtitle}>Message From</Text>
        <LinearGradientText
          colors={['#f2a4eb', '#1e95fd']}
          text="9856321470"
          start={{x: 0.5, y: 0}} // Optional
          end={{x: 1, y: 1}} // Optional
          textStyle={{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center', // Center the text
            fontFamily: 'Krona One',
            paddingTop: 10,
            marginBottom: 20,
            // Set the font style
          }} // Optional
          textProps={{allowFontScaling: true}} // Optional
        />
        <Text style={styles.label}>Insert Your Number</Text>
        <View style={styles.phoneInputContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCountryNameButton={false}
            withCallingCode
            onSelect={country => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
            }}
          />
          <Text style={styles.callingCodeText}>+{callingCode}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

        <Text style={styles.label}>Select the Recording you want to hear</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 50,
            width: '98%',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            marginBottom: 20,
          }}>
          <Picker
            selectedValue={selectedVoice}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedVoice(itemValue);
              if (itemValue) {
                playVoice(itemValue);
              }
            }}
            style={{
              flex: 1,
              color: 'black',
            }}
            dropdownIconColor="black">
            <Picker.Item label="Select Voice" value="" />
            <Picker.Item label="Female - Get Home Now" value={voice1} />
            <Picker.Item label="Male - Get Home Now" value={voice2} />
            <Picker.Item label="Female - I Need Your Help" value={voice3} />
            <Picker.Item label="Male - I Need Your Help" value={voice4} />
            <Picker.Item label="Female - Pick Me Up Please" value={voice5} />
            <Picker.Item label="Male - Pick Me Up Please" value={voice6} />
            <Picker.Item label="Female - Where Are You" value={voice7} />
            <Picker.Item label="Male - Where Are You" value={voice8} />
            <Picker.Item
              label="Female - Your Friend Is In the Hospital"
              value={voice9}
            />
            <Picker.Item
              label="Male - Your Friend Is In the Hospital"
              value={voice10}
            />
          </Picker>
        </View>
        {voiceError ? <Text style={styles.errorText}>{voiceError}</Text> : null}

        <Text style={styles.label}>Select the Time you Want the Call</Text>
        <View style={styles.timePickerContainer}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.timePickerButton}>
            <View style={styles.timePickerButton}>
              <ImageBackground
                style={{
                  width: 26,
                  height: 27,
                }}
                source={require('../../assets/images/93dcdc42-540f-4f99-9cde-6233d7a8d7dc.png')}
              />
              <Text style={styles.timePickerText}>
                {selectedTime || 'Select Time'}
              </Text>
            </View>
            <View style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Schedule</Text>
            </View>
          </TouchableOpacity>
        </View>
        {timeError ? <Text style={styles.errorText}>{timeError}</Text> : null}

        <TouchableOpacity
          onPress={() => {
            if (validateInputs()) {
              navigation.navigate('Thanks');
            }
          }}>
          <ImageBackground
            style={{
              width: 320,
              height: 110,
              borderRadius: 40,
              overflow: 'hidden',
            }}
            source={require('../../assets/images/a0528180-6ede-45f8-9d14-758b261d24cf.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20, // Add padding to the bottom if needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#FF69B4', // Example gradient color
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 25,
    color: 'black',
    fontSize: 18,
    fontFamily: 'sans-serif',
    // fontWeight: 'bold',
  },
  phoneNumber: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FF69B4', // Example gradient color
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontSize: 16,

    marginVertical: 10,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    // padding: 10,
  },
  phoneInput: {
    flex: 1,
    color: 'black',
    borderLeftWidth: 1,
    borderColor: '#ccc',
    marginLeft: 10,
  },
  messageInput: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  callingCodeText: {
    color: 'black',
    marginRight: 5,
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  timePickerButton: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  timePickerText: {
    color: 'gray',
    fontSize: 18,
    paddingLeft: 10,
    marginLeft: 10,
    borderLeftWidth: 1.5,
    borderColor: '#ccc',
  },
  scheduleButton: {
    backgroundColor: '#add8e6',
    padding: 10,
  },
  scheduleButtonText: {
    color: 'black',
  },
  errorText: {
    color: 'red',
    textAlign: 'left', // Align text to the left
    marginBottom: 10,
  },
});

export default CallScreen;
