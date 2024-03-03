
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { reviewChefStyles } from "../../../styles/screens/reviews-chef-screen";

// Component
import { StarReviewComponent } from "./stars-review.component";

export const MainReviewContainerComponent = () => {

    return (
        <View 
            style={[ 
                homeChefScreenStyles.horiSpacer, 
                homeChefScreenStyles.flexDisplay, 
                { marginVertical: 10 } 
            ]}
        >

            <View style={ reviewChefStyles.userIconCont }>
                <FontAwesome name="user" size={24} color="#F0F4F9" style={{ alignSelf: "center" }} />
            </View>

            <View
                style={[
                    reviewChefStyles.reviewCommentCont,
                    { marginRight: 24 }
                ]}
            >
                <View style={[ homeChefScreenStyles.flexDesign, { alignItems: "center" } ]}>
                    <Text style={ reviewChefStyles.reviewsDateTxt }>20/12/2023</Text>
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={18} color="#9C9BA6" />
                    </TouchableOpacity>
                </View>

                <Text style={ reviewChefStyles.reviewMainComment }>
                    Great Food and Service
                </Text>

                <StarReviewComponent 
                    rating={3}
                />

                <Text style={[ reviewChefStyles.reviewsDateTxt, { color: "#747783" } ]}>
                    This Food so tasty & delicious. Breakfast 
                    so fast Delivered in my place. Chef is very 
                    friendly. I’m really like chef for Home Food 
                    Order. Thanks. 
                </Text>
            </View>
        </View>
    )
}
