import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

// Component
import { SelectOptContComponent } from './selected-opt-cont.component';

interface Props {
    price: any,
    deliveryType: string,
    stateRemove: boolean,
    setPrice: React.Dispatch<React.SetStateAction<any>>,
    setDeliveryType: React.Dispatch<React.SetStateAction<string>>,
    inputFocus: (e: string) => void
}

export const ItemPriceFormComponent: React.FC<Props> = ({ 
    price, deliveryType, stateRemove, 
    setPrice, setDeliveryType, inputFocus
}) => {

    const [stateVal, setStateVal] = useState<string>("");

    useEffect( () => {
        setDeliveryType(stateVal);
    }, [stateVal] )

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
            <Text style={ addScreenChefStyles.formLabelTxt }>PRICE</Text>

            <View style={[ homeChefScreenStyles.flexDesign, { justifyContent: "flex-start" } ]}>
                <Text style={[ addScreenChefStyles.currencySign ]}>$</Text>
                <TextInput 
                    placeholder="50"
                    style={[ addScreenChefStyles.textInputItem, addScreenChefStyles.fullSize, { flex: 1 } ]}
                    value={ price }
                    onChangeText={ setPrice }
                    onFocus={ () => inputFocus("67%") }
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
