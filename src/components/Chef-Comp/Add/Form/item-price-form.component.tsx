import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

// Component
import { SelectOptContComponent } from './selected-opt-cont.component';

export const ItemPriceFormComponent = () => {

    const [stateVal, setStateVal] = useState<string>("");

    return (
        <View 
            style={[ 
                homeChefScreenStyles.horiSpacer, 
                { marginVertical: 10 } 
            ]}
        >
            <Text style={ addScreenChefStyles.formLabelTxt }>PRICE</Text>

            <View style={[ homeChefScreenStyles.flexDesign, { justifyContent: "flex-start" } ]}>
                <TextInput 
                    placeholder="$50"
                    style={[ addScreenChefStyles.textInputItem, addScreenChefStyles.fullSize, { flex: 1 } ]}
                />
                
                <SelectOptContComponent 
                    val="Pick up"
                    stateVal={ stateVal }
                    stateObj={ setStateVal }
                />

                <SelectOptContComponent 
                    val="Delivery"
                    stateVal={ stateVal }
                    stateObj={ setStateVal }
                />
            </View>
        </View>
    )
}
