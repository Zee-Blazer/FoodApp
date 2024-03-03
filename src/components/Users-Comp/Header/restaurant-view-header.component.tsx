
import { View, Text, TouchableOpacity } from "react-native";

// Icon
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

interface Props {
    title: string
    func: () => void
}

export const RestaurantViewHeaderComponent: React.FC<Props> = ({ title, func }) => {

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
                    <Ionicons 
                        name="chevron-back-sharp" size={22} color="#5E616F" 
                        style={{ marginTop: 8, marginLeft: 8 }} 
                    />
                </TouchableOpacity>
                <Text style={ searchUsersStyles.serachHeaderTxt }>
                    { title }
                </Text>
            </View>

            <TouchableOpacity 
                style={[ searchUsersStyles.backNavOpt, { marginTop: 2, marginRight: 2 } ]} 
                onPress={ func }
            >
                <SimpleLineIcons 
                    name="options" size={22} color="#181C2E" 
                    style={{ marginTop: 8, marginLeft: 8 }} 
                />
            </TouchableOpacity>
        </View>
    )
}
