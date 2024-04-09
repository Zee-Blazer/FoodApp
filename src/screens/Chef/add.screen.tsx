import React, { useState, useContext } from 'react';

import { View, SafeAreaView } from "react-native";

// Restaurant Context
import { RestaurantContext } from '../../services/Context/restaurant.context';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Category Firebase Function
import { createNewCate } from '../../services/Firebase/Chef/Category/create-category';

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Component
import { ChefAddHeaderComponent } from "../../components/Chef-Comp/Add/add-header.component";
import { AddFormDataContainerComponent } from "../../components/Chef-Comp/Add/add-form-data-container.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const ChefAddScreen = () => {

    const { restaurantInfo } = useContext(RestaurantContext); // The Restaurant Info Context
    const { user } = useContext(AuthContext);

    const [name, setName] = useState<string>("");
    const [pic, setPic] = useState<string>("");
    const [price, setPrice] = useState<any>();
    const [deliveryType, setDeliveryType] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [details, setDetails] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // const restaurantInfo = { restaurantInfo.restaurant_name, restaurantInfo.restaurant_logo }

    const resetAll = () => {
        setName("");
        setPic("");
        setPrice([]);
        setCategory("");
        setDetails("");
    }

    const newCategory = async () => {
        setIsLoading(true);

        if(name && pic && price && deliveryType && category && details){
            const source = { uri: pic };
            const response = await fetch(source.uri);
            const blob = await response.blob();

            const id = user.uid;
            const restaurant_name = restaurantInfo.restaurant_name;
            const restaurant_logo = restaurantInfo.restaurant_logo;

            createNewCate(
                id, 
                name, 
                source, 
                blob, 
                price, 
                deliveryType, 
                category, 
                details,
                restaurant_name, 
                restaurant_logo,
                setIsLoading
            );
        }
        else{
            console.log("Something needs to fully be filled");
            setIsLoading(false);
        }
    }

    // console.log(restaurantInfo.restaurant_name, restaurantInfo.restaurant_logo);

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
                    title={ isLoading ? "SAVING..." : "SAVE" }
                    loading={ isLoading }
                    func={ () => newCategory() }
                />
            </View>
        </SafeAreaView>
    )
}
