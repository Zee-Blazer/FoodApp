import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

export const ItemPriceFormComponent = () => {

    const [pickUp, setPickUp] = useState<boolean>(false);
    const [delivery, setDelivery] = useState<boolean>(false);

    return (
        <View 
            style={[ 
                homeChefScreenStyles.horiSpacer, 
                { marginVertical: 10 } 
            ]}
        >
            <Text style={ addScreenChefStyles.formLabelTxt }>PRICE</Text>

            <View style={[ homeChefScreenStyles.flexDesign ]}>
                <TextInput 
                    placeholder="$50"
                    style={[ addScreenChefStyles.textInputItem, addScreenChefStyles.fullSize ]}
                />
                
                <TouchableOpacity 
                    style={[ 
                        addScreenChefStyles.checkableOption, 
                        pickUp && addScreenChefStyles.checkableOptionActive 
                    ]}
                    onPress={ () => setPickUp(!pickUp) }
                >
                    <Text 
                        style={[
                            addScreenChefStyles.checkableOptionTxt,
                            pickUp && addScreenChefStyles.checkableOptionTxtActive
                        ]}
                    >Pick up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[ 
                        addScreenChefStyles.checkableOption, 
                        delivery && addScreenChefStyles.checkableOptionActive 
                    ]}
                    onPress={ () => setDelivery(!delivery) }
                >
                    <Text 
                        style={[
                            addScreenChefStyles.checkableOptionTxt,
                            delivery && addScreenChefStyles.checkableOptionTxtActive
                        ]}
                    >Delivery</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
