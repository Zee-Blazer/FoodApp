
import { View, Text, Image, TouchableOpacity } from "react-native";

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styling
import { foodDetailsUserStyles } from "../../../styles/screens/food-details-users.styles";
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { foodUserStyles } from "../../../styles/screens/food-users.styles";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

export const FoodRestaurantInfo = () => {

    return (
        <View style={ foodDetailsUserStyles.spaceTop }>
            <Image 
                source={ require("../../../../assets/Images/Restaurants/camp.jpg") }
                style={ foodDetailsUserStyles.resDetailsImg }
            />
            <TouchableOpacity style={ foodDetailsUserStyles.heartBox }>
                {/* <AntDesign name="hearto" size={28} color="white" style={{ marginTop: 4 }} /> */}
                <AntDesign name="heart" size={28} color="white" style={{ marginTop: 4 }} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    searchUsersStyles.searchKeyWordCont,
                    foodUserStyles.optionHighlight,
                    { width: 222, paddingBottom: 10, marginTop: -21 }
                ]}
            >
                <Image 
                    source={ require("../../../../assets/Images/cheff.png") }
                    style={[ foodUserStyles.spaceTop, foodUserStyles.spaceRight ]}
                />
                <Text style={ foodDetailsUserStyles.resTextCheff }>
                    Uttora Coffe House
                </Text>
            </TouchableOpacity>
        </View>
    )
}
