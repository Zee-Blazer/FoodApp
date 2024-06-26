import React, { useState, useEffect, useContext } from 'react';

import { View, SafeAreaView, Text, Keyboard, Dimensions, Platform } from "react-native";

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

const windowHeight = Dimensions.get("window").height;

export const ChefAddScreen = () => {

    const { restaurantInfo } = useContext(RestaurantContext); // The Restaurant Info Context
    const { user } = useContext(AuthContext);

    const [name, setName] = useState<string>("");
    const [pic, setPic] = useState<string>("");
    const [price, setPrice] = useState<any>();
    const [deliveryType, setDeliveryType] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [details, setDetails] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false); // For the load time
    const [stateRemove, setStateRemove] = useState<boolean>(false); // To set the StateVal
    const [proceed, setProceed] = useState<boolean>(false); // To create the state of all the inputs
    const [errMsg, setErrMsg] = useState<string>(); // Error message to be displayed to the chef

    const [keyboardState, setKeyboardState] = useState(false); // To check for active keyboard
    const [bottomSpace, setBottomSpace] = useState<string>("100%");

    const keyboardActiveListenerShow = () => setKeyboardState(true)
    const keyboardActiveListenerHide = () => {
        setKeyboardState(false);
        setBottomSpace("100%");
    }

    Keyboard.addListener("keyboardDidShow", keyboardActiveListenerShow);
    Keyboard.addListener('keyboardDidHide', keyboardActiveListenerHide);

    useEffect( () => {
        if(proceed){
            resetAll();
            setInterval( () => {
                setProceed(false);
            }, 2000 )
        }
    }, [proceed] )

    const resetAll = () => {
        setName("");
        setPic("");
        setPrice("");
        setDeliveryType("")
        setCategory("");
        setDetails("");
        setStateRemove(true);
        setInterval( () => {
            setStateRemove(false);
        }, 2000 )
    }

    const inputFocus = (e: string) => setBottomSpace(e);

    const newCategory = async () => {
        setIsLoading(true);

        if(restaurantInfo !== null){
            if(name && pic && price && deliveryType && category && details){
                const source = { uri: pic };
                const response = await fetch(source.uri);
                const blob = await response.blob();

                const id = user.uid;
                const restaurant_name = restaurantInfo.restaurant_name;
                const restaurant_logo = restaurantInfo.restaurant_logo;
                const restaurant_id = user.uid;

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
                    restaurant_id,
                    setIsLoading,
                    setProceed
                );
            }
            else{
                setErrMsg("Please fill in all necessary information");
                setIsLoading(false);
            }
        }
        else {
            setErrMsg("You need to create a restaurant before adding to it's category");
            setIsLoading(false);
        }
    } 

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={[ homeChefScreenStyles.body ]}>

                <ChefAddHeaderComponent 
                    func={ resetAll }
                />

                <Text 
                    style={[ homeChefScreenStyles.errorMsg ]}
                >{ errMsg && errMsg }</Text>

                <AddFormDataContainerComponent 
                    name={ name }
                    pic={pic}
                    price={ price }
                    deliveryType={ deliveryType }
                    category={ category }
                    details={ details }
                    stateRemove={ stateRemove }
                    setName={ setName }
                    setPic={ setPic }
                    setPrice={ setPrice }
                    setDeliveryType={ setDeliveryType }
                    setCategory={ setCategory }
                    setDetails={ setDetails }
                    inputFocus={ inputFocus }
                    bottomSpace={ bottomSpace }
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
