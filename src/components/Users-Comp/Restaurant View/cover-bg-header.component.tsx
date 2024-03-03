
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { restaurantViewUsersStyles } from "../../../styles/screens/restaurant-view-users.styles";

interface Props {
    func: () => void
}

export const CoverBgHeaderComponent: React.FC<Props> = ({ func }) => {

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                { marginTop: 10 } 
            ]}
        >
            <Text 
                style={ restaurantViewUsersStyles.insideBgHeaderTxt }
            >
                Filter your search
            </Text>
            <TouchableOpacity onPress={ func }>
                <MaterialIcons name="cancel" size={35} color="#181C2E" />
            </TouchableOpacity>
        </View>
    )
}
