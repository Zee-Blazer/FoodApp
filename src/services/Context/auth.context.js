import React, { useState, createContext, useEffect } from 'react';

// Internet Connnection
import NetInfo from '@react-native-community/netinfo';

// Firebase Authentication
import { auth, database, googleProvider } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase Realtime database
import { ref, onValue } from 'firebase/database';

// Firebase functions
import { newUser } from '../Firebase/user';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [errMsg, setErrMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [internetConn, setInternetConn] = useState(true);

    useEffect( () => {
        isUserLoggedIn();
    }, [] ) 

    useEffect( () => {
        NetInfo.addEventListener( state => {
            setInternetConn(state.isConnected);
        } )
    }, [] )

    const isUserLoggedIn = async () => {
        onAuthStateChanged(auth, ( user ) => {
            if(user){
                console.log(user.uid);
                onValue( ref( database, `Users/${user.uid}` ), (snapshot) => {
                    const data = snapshot.val();
                    console.log(data);
                    setUser({
                        username: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        phoneNumber: user.phoneNumber,
                        uid: user.uid,
                        bio: data.userInfo.bio && data.userInfo.bio,
                        phoneNumber: data.userInfo.phone && data.userInfo.phone
                    });
                } )    
            }
            else{
                setUser(false);
            }
            
        })
    }

    const signUpWithEmailPassword = (username, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then( res => {

                updateProfile(
                    auth.currentUser, {
                        displayName: username
                    }
                )
                .then( async data => {
                    newUser(username, email, auth.currentUser.uid);
                    await AsyncStorage.setItem("@user_details", JSON.stringify(res));
                    setUser({
                        username: res.displayName,
                        email: res.email,
                        photoURL: res.photoURL,
                        phoneNumber: res.phoneNumber,
                        uid: res.uid,
                    });

                    setIsLoading(false);
                    isUserLoggedIn();
                } )
                .catch( err => console.log(err) );

                setIsLoading(false);

            } )
            .catch( err => {
                if (err.code === 'auth/email-already-in-use') {
                    setErrMsg('Email address is already in use.');
                } else if (err.code === 'auth/invalid-email') {
                    setErrMsg('Invalid email address.');
                } else if (err.code === 'auth/weak-password') {
                    setErrMsg('Password is too weak.');
                } else if(!internetConn){
                    setErrMsg("You are not connected to the internet!!");
                } else {
                    setErrMsg('Registration failed. Please try again later.');
                }
                setIsLoading(false);
            } );
        setErrMsg("");
    }

    const loginWithEmailPassword = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then( async res => {
                await AsyncStorage.setItem("@user_details", JSON.stringify(res.user));
                setUser({
                    username: res.user.displayName,
                    email: res.user.email,
                    photoURL: res.user.photoURL,
                    phoneNumber: res.user.phoneNumber,
                    uid: res.user.uid,
                });
                isUserLoggedIn();
                setIsLoading(false);
            } )
            .catch( err => {
                if (err.code === 'auth/user-not-found') {
                    setErrMsg('User not found. Check email and password');
                } else if (err.code === 'auth/wrong-password') {
                    setErrMsg('Incorrect password');
                } else if(!internetConn){
                    setErrMsg("You are not connected to the internet!!");
                } else {
                    setErrMsg("An error occured, please try again");
                }
                setIsLoading(false);
            } )
        setErrMsg("");
    }

    const serviceNotAvailiable = () => {
        setErrMsg("Service not availiable at the moment");
    }

    const logoutApp = () => {
        signOut(auth)
        .then( async res => {
            await AsyncStorage.setItem("@user_details", "");
            await AsyncStorage.setItem("@user_id", "");
            setUser(null);
            console.log("Done perfectly");
            console.log(user);
        } )
        .catch( err => console.log(err) );
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: user,
                signUpWithEmailPassword,
                loginWithEmailPassword,
                serviceNotAvailiable,
                isUserLoggedIn,
                logoutApp,
                internetConn,
                isLoading,
                user,
                errMsg
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
