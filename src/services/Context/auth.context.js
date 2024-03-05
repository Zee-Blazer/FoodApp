import React, { useState, createContext, useEffect } from 'react';

// Firebase Authentication
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [errMsg, setErrMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const signUpWithEmailPassword = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then( async res => {
                await AsyncStorage.setItem("@user_details", JSON.stringify(res));
                await AsyncStorage.setItem("@user_id", res.uid);
                setUser(res);
                setIsLoading(false);
            } )
            .catch( err => {
                if (err.code === 'auth/email-already-in-use') {
                    setErrMsg('Email address is already in use.');
                } else if (err.code === 'auth/invalid-email') {
                    setErrMsg('Invalid email address.');
                } else if (err.code === 'auth/weak-password') {
                    setErrMsg('Password is too weak.');
                } else {
                    setErrMsg('Registration failed. Please try again later.');
                }
                setIsLoading(false);
            } );
    }

    const loginWithEmailPassword = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then( async res => {
                await AsyncStorage.setItem("@user_details", JSON.stringify(res));
                await AsyncStorage.setItem("@user_id", res.user.uid);
                setUser(res);
                setIsLoading(false);
                console.log("Done");
            } )
            .catch( err => {
                if (err.code === 'auth/user-not-found') {
                    setErrMsg('User not found. Check email and password');
                } else if (err.code === 'auth/wrong-password') {
                    setErrMsg('Incorrect password');
                } else {
                    // setErrMsg('Error signing in: ', err.code);
                    console.log(err);
                }
                setIsLoading(false);
            } )
    }

    const logoutApp = () => {
        signOut()
        .then( async res => {
            await AsyncStorage.setItem("@user_details", "");
            await AsyncStorage.setItem("@user_id", "");
            setUser();
        } )
        .catch( err => console.log(err) );
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                signUpWithEmailPassword,
                loginWithEmailPassword,
                logoutApp,
                isLoading,
                errMsg
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
