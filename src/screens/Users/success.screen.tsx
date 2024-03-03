
import { View, Text, SafeAreaView } from "react-native";

// Lottie Animation
import LottieView from 'lottie-react-native';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { successUserStyles } from "../../styles/screens/success-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const SuccessScreen: React.FC = () => {

    const navigation = useNavigation();  // The navigation instance

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={[ homeUsersScreenStyles.body, successUserStyles.container ]}>
                <View>
                    <LottieView 
                        source={require('../../../assets/Animations/success.json')} 
                        autoPlay
                        loop={ false } 
                        style={ successUserStyles.lottieStyle }
                    />
                </View>

                <Text style={ successUserStyles.congratsTxt }>Congratulations</Text>
                <Text style={ successUserStyles.congratsSubTxt }>
                    You successfully maked a payment, enjoy our service!
                </Text>
            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <FormBtnComponent 
                    title="TRACK ORDER"
                    func={ () => {
                        navigation.navigate("Orders");
                    } }
                />
            </View>
        </SafeAreaView>
    )
}
