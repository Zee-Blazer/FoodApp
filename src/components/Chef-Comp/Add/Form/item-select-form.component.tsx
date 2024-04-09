import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

// Styling
import { homeChefScreenStyles } from '../../../../styles/screens/home-chef.styles';
import { addScreenChefStyles } from '../../../../styles/screens/add-screen-chef.styles';

//Components
import { SelectOptContComponent } from './selected-opt-cont.component';

interface Props {
    category: string,
    stateRemove: boolean,
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const ItemSelectFormComponent: React.FC<Props> = ({ category, stateRemove, setCategory }) => {

    const [stateVal, setStateVal] = useState<string>("");

    useEffect( () => setCategory(stateVal), [stateVal] );

    useEffect( () => {
        stateRemove && setStateVal("");
    }, [stateRemove] )

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
