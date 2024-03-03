
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { ItemHeaderContainerComponent } from "../Statistics/item-header-container.component";

export const PopularItemsContainerComponent = () => {

    return (
        <View
            style={[
                homeChefScreenStyles.blockCont,
                homeChefScreenStyles.horiSpacer
            ]}
        >
            <ItemHeaderContainerComponent 
                title="Popular Items This Week"
                link="See All"
            />

            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={ false }
                style={ homeChefScreenStyles.popularItemCont }
            >
                <Image 
                    source={ require('../../../../../assets/Images/Burger/burger1.jpg') }
                    style={ homeChefScreenStyles.popularItemImg }
                />
                <Image 
                    source={ require('../../../../../assets/Images/Burger/burger2.jpg') }
                    style={ homeChefScreenStyles.popularItemImg }
                />
                <Image 
                    source={ require('../../../../../assets/Images/Burger/burger3.jpg') }
                    style={ homeChefScreenStyles.popularItemImg }
                />
                <Image 
                    source={ require('../../../../../assets/Images/Burger/burger4.jpg') }
                    style={ homeChefScreenStyles.popularItemImg }
                />
                <Image 
                    source={ require('../../../../../assets/Images/Burger/burger5.jpg') }
                    style={ homeChefScreenStyles.popularItemImg }
                />
                <Image 
                    source={ require('../../../../../assets/Images/Burger/burger6.jpg') }
                    style={ homeChefScreenStyles.popularItemImg }
                />
            </ScrollView>
        </View>
    )
}
