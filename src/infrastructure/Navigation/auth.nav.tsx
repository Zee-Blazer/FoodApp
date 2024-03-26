import React, { useState, useEffect } from 'react';

// Main Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens 
import { LoginScreen } from "../../screens/Auth/login.screen";
import { SignupScreen } from "../../screens/Auth/signup.screen";
import { OnboardingScreen } from "../../screens/Auth/onboarding.screen";
import { ForgotPasswordScreen } from "../../screens/Auth/forgot-password.screen";
import { OtpVerificationScreen } from "../../screens/Auth/otp-verification.screen";

// The Auth stack instance
const AuthStack = createStackNavigator();

export const AuthNavigation: React.FC = () => {

    // The screen that would be displayed in the Auth stack either "Onboarding screen" || "Login screen"
    const [screen, setScreen] = useState<string>("Onboarding");

    // This useEffect helps see the screen that should be displayed
    useEffect( () => {
        const checkData = async () => setScreen(await AsyncStorage.getItem("Screen"));
        checkData();
    }, [] )

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
