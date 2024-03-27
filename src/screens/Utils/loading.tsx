import React, { useContext } from 'react';

import { View, Text } from 'react-native';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Animation component
import LottieView from 'lottie-react-native';

// Styling
import { onboardingScreenStyles } from '../../styles/screens/onboarding-auth.styles';

export const LoadingFoodApp = () => {

    const { internetConn } = useContext(AuthContext);

    console.log(internetConn);

    return (
        <View style={[ onboardingScreenStyles.container, onboardingScreenStyles.loadingContainerCenter ]}>
            <LottieView 
                source={require('../../../assets/Animations/foodloading.json')} 
                autoPlay 
                loop 
                style={ onboardingScreenStyles.loadingLottie }
            />
            { 
                !internetConn && 
                <Text
                    style={ onboardingScreenStyles.noInternet }
                >No Internet Connection, Please check your network!!</Text> 
            }
        </View>
    )
}
