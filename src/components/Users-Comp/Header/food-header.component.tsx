
import { View, TouchableOpacity, Text, Image } from "react-native";

// Icon
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";
import { foodUserStyles } from "../../../styles/screens/food-users.styles";

export const FoodHeaderComponent = () => {

    const navigation = useNavigation();

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                { marginTop: 6 } 
            ]}
        >
            <View style={[ homeUsersScreenStyles.flexDisplay ]}>
                <TouchableOpacity 
                    onPress={ () => navigation.goBack() }
                    style={ searchUsersStyles.backNavOpt }
                >
                    <Ionicons 
                        name="chevron-back-sharp" size={22} color="#5E616F" 
                        style={{ marginTop: 8, marginLeft: 8 }} 
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        searchUsersStyles.searchKeyWordCont,
                        foodUserStyles.optionHighlight
                    ]}
                >
                    <Text style={ searchUsersStyles.serachHeaderTxt }>
                        BURGER
                    </Text>
                    <AntDesign 
                        name="caretdown" 
                        size={10} 
                        color="#F58D1D" 
                        style={[ homeUsersScreenStyles.smallDownIcon, foodUserStyles.smallIcon ]} 
                    />
                </TouchableOpacity>
            </View>

            <View style={ homeUsersScreenStyles.flexDisplay }>
                <TouchableOpacity 
                    style={[ homeUsersScreenStyles.shopChartNote, foodUserStyles.spaceRight ]}
                >
                    <FontAwesome 
                        name="search" 
                        size={24} 
                        color="white" 
                        style={[ foodUserStyles.spaceLeft, foodUserStyles.spaceTop ]}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={ require("../../../../assets/Images/Filter.png") }
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
