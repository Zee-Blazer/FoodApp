import React, { useState } from 'react';

import { View, SafeAreaView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Component
import { ChefAddHeaderComponent } from "../../components/Chef-Comp/Add/add-header.component";
import { AddFormDataContainerComponent } from "../../components/Chef-Comp/Add/add-form-data-container.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const ChefAddScreen = () => {

    const [name, setName] = useState<string>("");
    const [pic, setPic] = useState<string>("");
    const [price, setPrice] = useState<any>();
    const [deliveryType, setDeliveryType] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [details, setDetails] = useState<string>("");

    const resetAll = () => {
        setName("");
        setPic("");
        setPrice([]);
        setCategory("");
        setDetails("");
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <ChefAddHeaderComponent />

                <AddFormDataContainerComponent 
                    name={ name }
                    pic={pic}
                    price={ price }
                    deliveryType={ deliveryType }
                    category={ category }
                    details={ details }
                    setName={ setName }
                    setPic={ setPic }
                    setPrice={ setPrice }
                    setDeliveryType={ setDeliveryType }
                    setCategory={ setCategory }
                    setDetails={ setDetails }
                />

            </View>

            <View style={[ homeChefScreenStyles.horiSpacer, { marginBottom: 54 } ]}>
                <FormBtnComponent 
                    title="SAVE"
                    func={ () => console.log(name, price, deliveryType) }
                />
            </View>
        </SafeAreaView>
    )
}
