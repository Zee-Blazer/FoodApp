
import { View, Text } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { foodDetailsUserStyles } from "../../../styles/screens/food-details-users.styles";

// Component 
import { IngridentIcon } from "./ingrident-icon.component";

export const FoodIngridentComponent = () => {

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={ foodDetailsUserStyles.sizeTxt }>INGRIDENTS</Text>

            <View style={[ homeUsersScreenStyles.flexDisplay, { marginTop: 10, flexWrap: "wrap" } ]}>
                
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/salt.png') }
                    name="Salt"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/Broccoli.png') }
                    name="Broccoli"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/chicken.png') }
                    name="Chicken"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/Garlic.png') }
                    name="Garlic"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/Ginger.png') }
                    name="Ginger"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/onion.png') }
                    name="Onion"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/orange.png') }
                    name="Orange"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/papper.png') }
                    name="Papper"
                />
                <IngridentIcon 
                    imgUri={ require('../../../../assets/Images/Ingridents/Walnut.png') }
                    name="Walnut"
                />

            </View>
        </View>
    )
}
