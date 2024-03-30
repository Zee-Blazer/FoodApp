import 'react-native-gesture-handler';

// Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './src/firebaseConfig';

// Authentication Context Provider
import { AuthContextProvider } from './src/services/Context/auth.context';

// Restaurant Context Provider
import { RestaurantContextProvider } from './src/services/Context/restaurant.context';

import { StatusBar } from 'expo-status-bar';
import {  Text } from 'react-native';

// Expo fonts
import { useFonts } from 'expo-font';

// Navigation
import { Navigation } from './src/infrastructure/Navigation';

export default function App() {
  
  let [ fontsLoaded ] = useFonts({
    "Sen-Bold": require("./assets/Fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("./assets/Fonts/Sen-Regular.ttf"),
    "Sen-Medium": require("./assets/Fonts/Sen-Medium.ttf"),
    "Sen-SemiBold": require("./assets/Fonts/Sen-SemiBold.ttf"),
    "Sen-ExtraBold": require("./assets/Fonts/Sen-ExtraBold.ttf"),
  })

  if(!fontsLoaded){
    return <Text>Hello My Nigga's</Text>
  }

  return (
    <AuthContextProvider>
      <RestaurantContextProvider>
        <Navigation />
      </RestaurantContextProvider>
    </AuthContextProvider>
  );
}
