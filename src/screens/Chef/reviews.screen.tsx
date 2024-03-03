
import { View, SafeAreaView, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { MainReviewContainerComponent } from "../../components/Chef-Comp/Reviews/main-review-container.component";

export const ReviewsScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View style={[ homeChefScreenStyles.body, { backgroundColor: "#FFFFFF" } ]}>

                <View style={[ homeChefScreenStyles.horiSpacer, { marginBottom: 12 } ]}>
                    <FoodDetailsHeaderComponent 
                        screen="Reviews"
                        icon={ true }
                    />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <MainReviewContainerComponent />
                    <MainReviewContainerComponent />
                    <MainReviewContainerComponent />
                    <MainReviewContainerComponent />
                    <MainReviewContainerComponent />
                    <MainReviewContainerComponent />
                    <MainReviewContainerComponent />
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
