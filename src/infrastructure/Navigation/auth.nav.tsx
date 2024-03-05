import React, { useState, useEffect } from 'react';

import { createStackNavigator } from "@react-navigation/stack";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens 
import { LoginScreen } from "../../screens/Auth/login.screen";
import { SignupScreen } from "../../screens/Auth/signup.screen";
import { OnboardingScreen } from "../../screens/Auth/onboarding.screen";
import { ForgotPasswordScreen } from "../../screens/Auth/forgot-password.screen";
import { OtpVerificationScreen } from "../../screens/Auth/otp-verification.screen";

const AuthStack = createStackNavigator();

export const AuthNavigation: React.FC = () => {

    const [screen, setScreen] = useState<string>("Onboarding");

    useEffect( () => {
        const checkData = async () => setScreen(await AsyncStorage.getItem("Screen"));
        checkData();
    }, [] )

    console.log(screen)

    // if(screen.length > 1 && screen != "Login"){
    //     return (
    //         <AuthStack.Navigator
    //             initialRouteName="Onboarding"
    //             screenOptions={{
    //                 headerShown: false
    //             }}
    //         >
    //             <AuthStack.Screen name="Login" component={ LoginScreen } />
    //             <AuthStack.Screen name="Signup" component={ SignupScreen } />
    //             <AuthStack.Screen name="Onboarding" component={ OnboardingScreen } />
    //             <AuthStack.Screen name="ForgotPassword" component={ ForgotPasswordScreen } />
    //             <AuthStack.Screen name="OtpVerification" component={ OtpVerificationScreen } />
    
    //         </AuthStack.Navigator>
    //     )
    // }
    // else{
    //     return (
    //         <AuthStack.Navigator
    //             initialRouteName="Login"
    //             screenOptions={{
    //                 headerShown: false
    //             }}
    //         >
    //             <AuthStack.Screen name="Login" component={ LoginScreen } />
    //             <AuthStack.Screen name="Signup" component={ SignupScreen } />
    //             <AuthStack.Screen name="Onboarding" component={ OnboardingScreen } />
    //             <AuthStack.Screen name="ForgotPassword" component={ ForgotPasswordScreen } />
    //             <AuthStack.Screen name="OtpVerification" component={ OtpVerificationScreen } />
    
    //         </AuthStack.Navigator>
    //     )
    // }

    return (
        <AuthStack.Navigator
            initialRouteName={ screen }
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen name="Login" component={ LoginScreen } />
            <AuthStack.Screen name="Signup" component={ SignupScreen } />
            { screen != "Login" && <AuthStack.Screen name="Onboarding" component={ OnboardingScreen } /> }
            <AuthStack.Screen name="ForgotPassword" component={ ForgotPasswordScreen } />
            <AuthStack.Screen name="OtpVerification" component={ OtpVerificationScreen } />

        </AuthStack.Navigator>
    )

}
