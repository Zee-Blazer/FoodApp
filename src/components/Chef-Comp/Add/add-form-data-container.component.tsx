import React, { useState } from 'react';

import { View, ScrollView, KeyboardAvoidingView } from "react-native";

// Components
import { ItemNameFormComponent } from "./Form/item-name-form.component";
import { ItemPhotoFormComponent } from "./Form/item-photo-form.component";
import { ItemPriceFormComponent } from "./Form/item-price-form.component";
import { ItemDetailsFormComponent } from "./Form/item-details-form.component";
import { ItemSelectFormComponent } from "./Form/item-select-form.component"; // Category selector

interface Props {
    name: string,
    pic: string,
    price: any,
    deliveryType: string,
    category: string,
    details: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setPic: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<any>>,
    setDeliveryType: React.Dispatch<React.SetStateAction<string>>,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    setDetails: React.Dispatch<React.SetStateAction<string>>
}

export const AddFormDataContainerComponent: React.FC<Props> = ({
    name, pic, price, deliveryType, category, details, setName, setPic, setPrice, setDeliveryType, setCategory, setDetails
}) => {

    return (
        <View>

            <ScrollView>
                
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
                        setPrice={ setPrice }
                        setDeliveryType={ setDeliveryType }
                    />

                    <ItemSelectFormComponent 
                        category={ category }
                        setCategory={ setCategory }
                    />

                    <ItemDetailsFormComponent />

                </KeyboardAvoidingView>

            </ScrollView>

        </View>
    )
}
