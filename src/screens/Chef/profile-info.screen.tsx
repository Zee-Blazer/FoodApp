
import { View, SafeAreaView, Text } from "react-native"

// Stylings
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles"

export const ProfileChefInfoScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View  style={ homeChefScreenStyles.body }>
                <Text>Profile Info Screen</Text>
            </View>
        </SafeAreaView>
    )
}
