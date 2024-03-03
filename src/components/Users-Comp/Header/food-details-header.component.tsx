
import { View, Text, TouchableOpacity } from "react-native";

// Icon
import { Ionicons } from '@expo/vector-icons';

// Navigation 
import { useNavigation } from "@react-navigation/native";

// Styling 
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

interface Props {
    screen: string,
    icon: boolean
}

export const FoodDetailsHeaderComponent: React.FC<Props> = ({ screen, icon }) => {

    const navigation = useNavigation();

    return (
        <View
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                { marginTop: 6 } 
            ]}
        >
            <View style={[ homeUsersScreenStyles.flexDisplay ]}>
                <TouchableOpacity 
                    onPress={ () => navigation.goBack() }
                    style={ searchUsersStyles.backNavOpt }
                >
                    { icon ? 
                        <Ionicons 
                            name="chevron-back-sharp" size={22} color="#5E616F" 
                            style={{ marginTop: 8, marginLeft: 8 }} 
                        /> 
                        : 
                        <Ionicons 
                            name="close-sharp" size={22} color="#5E616F" 
                            style={{ marginTop: 8, marginLeft: 8 }} 
                        /> 
                    }
                </TouchableOpacity>
                <Text style={ searchUsersStyles.serachHeaderTxt }>
                    { screen }
                </Text>
            </View>
        </View>
    )
}
