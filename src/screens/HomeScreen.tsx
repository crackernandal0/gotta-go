import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    phoneNumber: '',
    message: '',
    selectedTime: '',
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setSelectedTime(time);
    hideDatePicker();
  };

  const handleStartPress = () => {
    let valid = true;
    const newErrorMessages = { phoneNumber: '', message: '', selectedTime: '' };

    if (!phoneNumber) {
      newErrorMessages.phoneNumber = 'Phone number is required';
      valid = false;
    }
    if (!message) {
      newErrorMessages.message = 'Message is required';
      valid = false;
    }
    if (!selectedTime) {
      newErrorMessages.selectedTime = 'Time is required';
      valid = false;
    }

    setErrorMessages(newErrorMessages);

    if (valid) {
      navigation.navigate('Thanks');
    }
  };

  return (
    <View style={styles.container}>
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
            left: 43,
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
              source={require('../../assets/images/e50d7e52-66a1-4a5a-a15c-71595ef03075.png')}
            />
          </View>
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <ImageBackground
            style={{
              width: 24,
              height: 24,
              position: 'absolute',
              top: 9,
              left: 9,
              overflow: 'hidden',
              zIndex: 4,
            }}
            source={require('../../assets/images/98bc1633-bd67-4cd1-803e-72e41e6823a2.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
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
      {errorMessages.phoneNumber ? (
        <Text style={styles.errorText}>{errorMessages.phoneNumber}</Text>
      ) : null}

      <Text style={styles.label}>Write the text you want to send</Text>
      <TextInput
        style={styles.messageInput}
        placeholder="Write your Text (160 Characters Max.)"
        multiline
        placeholderTextColor="black"
        maxLength={160}
        value={message}
        onChangeText={setMessage}
      />
      {errorMessages.message ? (
        <Text style={styles.errorText}>{errorMessages.message}</Text>
      ) : null}

      <Text style={styles.label}>Select the Time you Want the Call</Text>
      <View style={styles.timePickerContainer}>
        <View style={styles.timePickerButton}>
          <ImageBackground
            style={{
              width: 26,
              height: 27,
              //  backgroundColor:'black'
            }}
            source={require('../../assets/images/93dcdc42-540f-4f99-9cde-6233d7a8d7dc.png')}
          />
          <Text style={styles.timePickerText}>
            {selectedTime || 'Select Time'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Schedule</Text>
        </TouchableOpacity>
      </View>
      {errorMessages.selectedTime ? (
        <Text style={styles.errorText}>{errorMessages.selectedTime}</Text>
      ) : null}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity onPress={handleStartPress}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    fontSize: 14,
    marginTop: 5,
    textAlign: 'left',
  },
});

export default HomeScreen;
