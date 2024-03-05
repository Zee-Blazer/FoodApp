
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation 
import { useNavigation } from '@react-navigation/native';

import { Text, View, TouchableOpacity } from "react-native";

// Styling
import { onboardingScreenStyles } from '../../styles/screens/onboarding-auth.styles';

export const OnboardingScreen = () => {

    const navigation = useNavigation();

    const doneButton = ({ ...props }) => (
        <TouchableOpacity style={ onboardingScreenStyles.doneButton } {...props}>
            <Text style={ onboardingScreenStyles.btnText }>Get Started</Text>
        </TouchableOpacity>
    )

    const nextButton = ({ ...props }) => (
        <TouchableOpacity 
            style={ onboardingScreenStyles.nextButton } {...props}
        >
            <Text style={ onboardingScreenStyles.btnText }>Next</Text>
        </TouchableOpacity>
    )

    const skipButton = ({ ...props }) => (
        <TouchableOpacity style={ onboardingScreenStyles.skipButton } {...props}>
            <Text>Skip</Text>
        </TouchableOpacity>
    )

    const handleDone = async () => {
        await AsyncStorage.setItem("Screen", "Login");
        navigation.navigate("Login");
    }

    return (
        <View style={ onboardingScreenStyles.container }>
            <Onboarding
                onDone={ handleDone }
                onSkip={ handleDone }
                bottomBarHighlight={ false }
                containerStyles={{ paddingHorizontal: 15 }}
                DoneButtonComponent={ doneButton }
                SkipButtonComponent={ skipButton }
                NextButtonComponent={ nextButton }
                titleStyles={ onboardingScreenStyles.titleOnboarding }
                subTitleStyles={ onboardingScreenStyles.subTitleOnboarding }
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <View>
                                <LottieView source={require('../../../assets/Animations/phone.json')} autoPlay loop  style={ onboardingScreenStyles.lottie } />
                            </View>,
                        title: 'All your favorites',
                        subtitle: 'Get all your loved foods in one once place, you just place the orer we do the rest',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <View>
                                <LottieView source={require('../../../assets/Animations/food.json')} autoPlay loop  style={ onboardingScreenStyles.lottie } />
                            </View>,
                        title: 'All your favorites',
                        subtitle: 'Get all your loved foods in one once place, you just place the orer we do the rest',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <View>
                                <LottieView source={require('../../../assets/Animations/order.json')} autoPlay loop  style={ onboardingScreenStyles.lottie } />
                            </View>,
                        title: 'Order from choosen chef',
                        subtitle: 'Get all your loved foods in one once place, you just place the orer we do the rest',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <View>
                                <LottieView source={require('../../../assets/Animations/delivery.json')} autoPlay loop  style={ onboardingScreenStyles.lottie } />
                            </View>,
                        title: 'Free delivery offers',
                        subtitle: 'Get all your loved foods in one once place, you just place the orer we do the rest',
                    },
                ]}
            />
        </View>
    )
}
