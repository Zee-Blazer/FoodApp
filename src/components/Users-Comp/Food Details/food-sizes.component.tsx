
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { foodDetailsUserStyles } from "../../../styles/screens/food-details-users.styles";

export const FoodSizeComponent = () => {

    return (
        <View style={[ homeUsersScreenStyles.flexDisplay, { marginTop: 10 } ]}>
            <Text style={ foodDetailsUserStyles.sizeTxt }>SIZE:</Text>

            <TouchableOpacity 
                style={[ 
                    foodDetailsUserStyles.sizeOpt, 
                    foodDetailsUserStyles.sizeOptBg 
                ]}
            >
                <Text 
                    style={[ 
                        foodDetailsUserStyles.sizeOptInnerTxt, 
                        foodDetailsUserStyles.sizeOptInnerTxtColor
                    ]}
                >10"</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[ 
                    foodDetailsUserStyles.sizeOpt, 
                    foodDetailsUserStyles.sizeOptBgActive 
                ]}
            >
                <Text 
                    style={[ 
                        foodDetailsUserStyles.sizeOptInnerTxt, 
                        foodDetailsUserStyles.sizeOptInnerTxtcolorActive 
                    ]}
                    >14"</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[ 
                    foodDetailsUserStyles.sizeOpt, 
                    foodDetailsUserStyles.sizeOptBg 
                ]}
            >
                <Text 
                    style={[ 
                        foodDetailsUserStyles.sizeOptInnerTxt,
                        foodDetailsUserStyles.sizeOptInnerTxtColor
                    ]}
                >16"</Text>
            </TouchableOpacity>

        </View>
    )
}
