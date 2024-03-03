
import { View, TouchableOpacity, Text, Image } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

export const RunningItemListComponent = () => {

    return (
        <TouchableOpacity style={[ homeChefScreenStyles.runningOrderCont, homeChefScreenStyles.flexDisplay ]}>
            <Image 
                source={ require('../../../../../assets/Images/Hot-Dog/dog1.jpg') }
                style={ homeChefScreenStyles.runningOrderImg }
            />

            <View>
                <Text style={ homeChefScreenStyles.hashTagTxt }>#Breakfast</Text>
                <Text style={[ homeChefScreenStyles.runningOrderMealTxt, { maxWidth: 254 } ]}>
                    Chicken Thai Biriyani
                </Text>
                <Text style={ homeChefScreenStyles.runningIdTxt }>ID: 32053</Text>

                <View style={[ homeChefScreenStyles.flexDesign, { width: 248 } ]}>
                    <Text style={ homeChefScreenStyles.runningBillTxt }>$60</Text>
                    
                    <View style={ homeChefScreenStyles.flexDesign }>
                        <TouchableOpacity 
                            style={[ 
                                homeChefScreenStyles.runningOptBtn, 
                                homeChefScreenStyles.runningOptDoneBtn 
                            ]}
                        >
                            <Text 
                                style={[ homeChefScreenStyles.runnnigOptBtnTxt, { color: "white" } ]}
                            >Done</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[ 
                                homeChefScreenStyles.runningOptBtn,
                                homeChefScreenStyles.runningOptCancelBtn
                            ]}
                        >
                            <Text 
                                style={[ homeChefScreenStyles.runnnigOptBtnTxt, { color: "#" } ]}
                            >Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
