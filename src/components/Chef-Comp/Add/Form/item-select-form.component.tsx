import React, { useState } from 'react';

import { View, Text } from 'react-native';

// Styling
import { homeChefScreenStyles } from '../../../../styles/screens/home-chef.styles';
import { addScreenChefStyles } from '../../../../styles/screens/add-screen-chef.styles';

//Components
import { SelectOptContComponent } from './selected-opt-cont.component';

export const ItemSelectFormComponent = () => {

    const [stateVal, setStateVal] = useState<string>("");

    return (
        <View
            style={[ 
                homeChefScreenStyles.horiSpacer, 
                { marginVertical: 10 } 
            ]}
        >
            <Text style={ addScreenChefStyles.formLabelTxt }>Category</Text>

            <View style={[ homeChefScreenStyles.flexDesign, { justifyContent: "flex-start" } ]}>
                <SelectOptContComponent 
                    val="Food"
                    stateVal={ stateVal }
                    stateObj={ setStateVal }
                />

                <SelectOptContComponent 
                    val="Drink"
                    stateVal={ stateVal }
                    stateObj={ setStateVal }
                />

                <SelectOptContComponent 
                    val="Snacks"
                    stateVal={ stateVal }
                    stateObj={ setStateVal }
                />
            </View>
        </View>
    )
}
