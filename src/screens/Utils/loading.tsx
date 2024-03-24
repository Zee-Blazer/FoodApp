
import { View } from 'react-native';

// Animation component
import LottieView from 'lottie-react-native';

export const LoadingFoodApp = () => {

    return (
        <View>
            <LottieView source={require('../../../assets/Animations/foodloading.json')} autoPlay loop />
        </View>
    )
}
