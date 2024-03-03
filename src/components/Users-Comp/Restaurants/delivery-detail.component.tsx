
import { View, Text } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styling 
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles"

interface Props {
    rating: string,
    time: number
}

export const DeliveryDetailsComponent: React.FC<Props> = ({ rating, time }) => {

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.spaceTopLittle 
            ]}
        >
            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    homeUsersScreenStyles.iconTextCont 
                ]}
            >
                <FontAwesome name="star-o" size={20} color="#FF7622" />
                <Text style={ homeUsersScreenStyles.iconText }>{ rating }</Text>
            </View>
            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay,
                    homeUsersScreenStyles.iconTextCont 
                ]}
            >
                <MaterialCommunityIcons name="truck-fast-outline" size={22} color="#FF7622" />
                <Text style={ homeUsersScreenStyles.iconText }>Free</Text>
            </View>
            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay,
                    homeUsersScreenStyles.iconTextCont 
                ]}
            >
                <MaterialCommunityIcons name="clock-outline" size={20} color="#FF7622" />
                <Text style={ homeUsersScreenStyles.iconText }>{ time } min</Text>
            </View>
        </View>
    )
}
