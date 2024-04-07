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
    price: [],
    category: string,
    details: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setPic: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<[any]>>,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    setDetails: React.Dispatch<React.SetStateAction<string>>
}

export const AddFormDataContainerComponent: React.FC<Props> = ({
    name, pic, price, category, details, setName, setPic, setPrice, setCategory, setDetails
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

                    <ItemPriceFormComponent />

                    <ItemSelectFormComponent />

                    <ItemDetailsFormComponent />

                </KeyboardAvoidingView>

            </ScrollView>

        </View>
    )
}
