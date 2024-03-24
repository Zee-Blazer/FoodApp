
import { View } from 'react-native';

// Animation component
import LottieView from 'lottie-react-native';

// Styling
import { onboardingScreenStyles } from '../../styles/screens/onboarding-auth.styles';

export const LoadingFoodApp = () => {

    return (
        <View style={[ onboardingScreenStyles.container, onboardingScreenStyles.loadingContainerCenter ]}>
            <LottieView 
                source={require('../../../assets/Animations/foodloading.json')} 
                autoPlay 
                loop 
                style={ onboardingScreenStyles.loadingLottie }
            />
        </View>
    )
}
