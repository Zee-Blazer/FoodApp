
import { View, TouchableOpacity, Text } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Icon
import { Ionicons } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";

interface Props {
    title: string,
    screenType?: string,
    action?: boolean
}

export const UsersCartHeaderComponent: React.FC<Props> = ({ title, screenType, action }) => {

    const navigation = useNavigation();

    const checkAndNavigate = () => {
        if(screenType === "ProfileInfo"){
            navigation.navigate("EditProfile");
        }
    }

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
                    style={[ 
                        searchUsersStyles.backNavOpt, 
                        { backgroundColor: screenType == "Cart" ? "rgba(255,255,255,0.2)" : "#ECF0F4" } 
                    ]}
                >
                    <Ionicons 
                        name="chevron-back-sharp" size={22} 
                        color={ screenType == "Cart" ? "#FFFFFF" : "#181C2E" } 
                        style={{ marginTop: 6, marginLeft: 8 }} 
                    />
                </TouchableOpacity>
                <Text 
                    style={[ 
                        searchUsersStyles.serachHeaderTxt, 
                        { color: screenType == "Cart" ? "white" : "#181C2E" } 
                    ]}
                >
                    { title }
                </Text>
            </View>

            {
                screenType ?
                <TouchableOpacity
                    onPress={ checkAndNavigate }
                >
                    <Text style={[ usersCartUsersStyles.upperEditTxt, { color: "#FF7622" } ]}>
                        { screenType == "Cart" ?  "EDIT ITEMS" : "EDIT" }
                    </Text>
                </TouchableOpacity> :
                <View style={{ marginVertical: 18 }}></View>
            }
        </View>
    )
}
