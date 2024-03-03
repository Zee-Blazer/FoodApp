
import { View, Text, Image } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

interface Props {
    resName: string,
    rating: string,
    imgUri: string
}

export const MiniRestaurantSuggestioncomponent: React.FC<Props> = ({ resName, rating, imgUri }) => {

    return (
        <View style={ searchUsersStyles.miniRestCont }>
            <Image 
                source={ imgUri }
                style={ searchUsersStyles.miniResImg }
            />
            <View>
                <Text style={ searchUsersStyles.minResDescrip }>{ resName }</Text>
                <View
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        homeUsersScreenStyles.iconTextCont 
                    ]}
                >
                    <FontAwesome name="star-o" size={20} color="#FF7622" />
                    <Text style={ searchUsersStyles.iconText }>{ rating }</Text>
                </View>
            </View>
        </View>
    )
}
