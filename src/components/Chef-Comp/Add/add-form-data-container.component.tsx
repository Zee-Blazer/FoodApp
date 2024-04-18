import React, { useState } from 'react';

import { View, ScrollView, Text, KeyboardAvoidingView, Platform } from "react-native";

// Components
import { ItemNameFormComponent } from "./Form/item-name-form.component";
import { ItemPhotoFormComponent } from "./Form/item-photo-form.component";
import { ItemPriceFormComponent } from "./Form/item-price-form.component";
import { ItemDetailsFormComponent } from "./Form/item-details-form.component"; //
import { ItemSelectFormComponent } from "./Form/item-select-form.component"; // Category selector

interface Props {
    name: string,
    pic: string,
    price: any,
    deliveryType: string,
    category: string,
    details: string,
    stateRemove: boolean,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setPic: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<any>>,
    setDeliveryType: React.Dispatch<React.SetStateAction<string>>,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    setDetails: React.Dispatch<React.SetStateAction<string>>,
    inputFocus: (e: string) => void,
    bottomSpace: string
}

export const AddFormDataContainerComponent: React.FC<Props> = ({
    name, pic, price, deliveryType, 
    category, details, stateRemove, 
    setName, setPic, setPrice, 
    setDeliveryType, setCategory, 
    setDetails, inputFocus, bottomSpace
}) => {

    return (
        <View>

            <ScrollView
                // scrollEnabled={ false }
                style={{ paddingBottom: 224, height: `${Platform.OS !== "ios"} ? ${bottomSpace} : "100%"` }}
            >
                
                <KeyboardAvoidingView>

                    <ItemNameFormComponent 
                        name={ name }
                        setName={ setName }
                    />

                    <ItemPhotoFormComponent 
                        pic={ pic }
                        setPic={ setPic }
                    />

                    <ItemPriceFormComponent 
                        price={ price }
                        deliveryType={ deliveryType }
                        stateRemove={ stateRemove }
                        setPrice={ setPrice }
                        setDeliveryType={ setDeliveryType }
                        inputFocus={ inputFocus }
                    />

                    <ItemSelectFormComponent 
                        category={ category }
                        stateRemove={ stateRemove }
                        setCategory={ setCategory }
                    />

                    <ItemDetailsFormComponent 
                        details={ details }
                        setDetails={ setDetails }
                        inputFocus={ inputFocus }
                    />

                </KeyboardAvoidingView>

            </ScrollView>

            <View style={{ marginVertical: 122 }}></View>

        </View>
    )
}
