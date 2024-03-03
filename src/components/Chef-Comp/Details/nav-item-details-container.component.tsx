
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { detailsChefStyles } from "../../../styles/screens/details-chef.styles";

interface Props {
    screen: string,
    func: (e: string) => void
}

export const NavItemDetailsContainerComponent: React.FC<Props> = ({ screen, func }) => {

    return (
        <View style={[ homeChefScreenStyles.flexDesign, detailsChefStyles.navItemContainer ]}>
            <TouchableOpacity 
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    screen == "All" && detailsChefStyles.navItemTxtContActive
                ]}
                onPress={ () => func("All") }
            >
                <Text 
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        screen == "All" && detailsChefStyles.navItemTxtActive
                    ]}
                >All</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    screen == "Breakfast" && detailsChefStyles.navItemTxtContActive
                ]}
                onPress={ () => func("Breakfast") }
            >
                <Text
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        screen == "Breakfast" && detailsChefStyles.navItemTxtActive
                    ]}
                >Breakfast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    screen == "Lunch" && detailsChefStyles.navItemTxtContActive
                ]}
                onPress={ () => func("Lunch") }
            >
                <Text
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        screen == "Lunch" && detailsChefStyles.navItemTxtActive
                    ]}
                >Lunch</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    screen == "Dinner" && detailsChefStyles.navItemTxtContActive
                ]}
                onPress={ () => func("Dinner") }
            >
                <Text
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        screen == "Dinner" && detailsChefStyles.navItemTxtActive
                    ]}
                >Dinner</Text>
            </TouchableOpacity>
        </View>
    )
}
