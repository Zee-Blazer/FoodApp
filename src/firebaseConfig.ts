import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
    apiKey: "AIzaSyCH2BVUL3xK7VuEL6x4Ro2htq05w5j-LM0",
    authDomain: "food-app-project-mobile.firebaseapp.com",
    projectId: "food-app-project-mobile",
    storageBucket: "food-app-project-mobile.appspot.com",
    messagingSenderId: "184949755733",
    appId: "1:184949755733:web:7da2b1806df33888c729dc",
    measurementId: "G-V6X01J37B0"
  };

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const database = getDatabase();

export const googleProvider = new GoogleAuthProvider();
