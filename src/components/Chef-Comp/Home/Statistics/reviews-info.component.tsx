
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

// Components
import { ItemHeaderContainerComponent } from "./item-header-container.component";

export const ReviewsInfoComponent = () => {

    return (
        <View 
            style={[
                homeChefScreenStyles.blockCont,
                homeChefScreenStyles.horiSpacer
            ]}
        >
            <ItemHeaderContainerComponent 
                title="Reviews"
                link="See All Reviews"
            />

            <View style={[ homeChefScreenStyles.starBlockCont, homeChefScreenStyles.flexDisplay ]}>
                <FontAwesome name="star" size={26} color="#FB6D3A" />
                <Text style={ homeChefScreenStyles.starRatingTxt }>4.9</Text>
                <Text style={ homeChefScreenStyles.starBlockDescription }>Total 20 Reviews</Text>
            </View>
        </View>
    )
}
