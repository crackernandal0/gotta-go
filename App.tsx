import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import CallScreen from './src/screens/CallScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ThanksScreen from './src/screens/ThanksScreen';
import ReviewScree from './src/screens/ReviewScree';
// import AboutScreen from './screens/AboutScreen';
// import ContactScreen from './screens/ContactScreen';

// Create a Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Call"
          component={CallScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Thanks"
          component={ThanksScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Review"
          component={ReviewScree}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="About" component={AboutScreen} /> */}
        {/* <Stack.Screen name="Contact" component={ContactScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
