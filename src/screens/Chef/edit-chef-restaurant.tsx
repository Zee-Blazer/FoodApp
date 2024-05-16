import React, { useState, useEffect, useContext } from 'react';

import { View, SafeAreaView } from 'react-native';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Restaurant Context
import { RestaurantContext } from '../../services/Context/restaurant.context';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { homeChefScreenStyles } from '../../styles/screens/home-chef.styles';

// Firebase Function
import { restaurantDetailsInfoDB } from '../../services/Firebase/Chef/Restaurant/restaurant-info';

// Components
import { FoodDetailsHeaderComponent } from '../../components/Users-Comp/Header/food-details-header.component';
import { EditProfilePicComponent } from '../../components/Users-Comp/Edit Profile/edit-profile-pic.component';
import { RestaurantChefInfoComponent } from '../../components/Chef-Comp/Restaurant/RestaurantInfo/restaurant-chef-info.component';
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component';

export const EditChefRestaurant = () => {

    const navigation = useNavigation();

    // Authentication context to get details
    const { user } = useContext(AuthContext);

    // Restaurant context
    const { restaurantInfo } = useContext(RestaurantContext);

    const [pic, setPic] = useState();
    const [proceed, setProceed] = useState<boolean>(false);
    const [changeScreen, setChangeScreen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Restaurant details state
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<any>();
    const [description, setDescription] = useState<string>("");

    useEffect( () => {
        if(restaurantInfo) {
            setAddress(restaurantInfo.restaurant_address);
            setName(restaurantInfo.restaurant_name);
            setPhone(restaurantInfo.restaurant_phone);
            setPic(restaurantInfo.restaurant_logo);
            setDescription(restaurantInfo.restaurant_description);
        }
    }, [] )

    useEffect( () => {
        changeScreen && navigation.goBack();
    }, [changeScreen] )

    const saveRestaurantInfo = async () => {

        const userId = user.uid;

        setIsLoading(true);

        if(proceed) {
            const source = { uri: pic };
            const response = await fetch(source.uri);
            const blob = await response.blob(); 

            restaurantDetailsInfoDB(userId, name, address, phone, description, source, blob, setIsLoading, setChangeScreen);
        }
        else {
            const source = null;
            const blob = restaurantInfo.restaurant_logo; 

            restaurantDetailsInfoDB(userId, name, address, phone, description, source, blob, setIsLoading, setChangeScreen);
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View style={[ homeChefScreenStyles.body, {  backgroundColor: "white" } ]}>

                <View style={ homeChefScreenStyles.horiSpacer }>

                    <FoodDetailsHeaderComponent 
                        screen="Edit Restaurant"
                        icon={ true }
                    />

                    <EditProfilePicComponent 
                        userPic={ "" }
                        pic={ pic }
                        setPic={ setPic }
                        setProceed={ setProceed }
                        screen='chef'
                    />
                    
                    <RestaurantChefInfoComponent 
                        name={ name }
                        address={ address }
                        phone={ phone }
                        description={ description }
                        setName={ setName }
                        setAddress={ setAddress }
                        setPhone={ setPhone }
                        setDescription={ setDescription }
                    />
                
                </View>
                
            </View>

            <View style={ homeChefScreenStyles.horiSpacer }>
                <FormBtnComponent 
                    title={ isLoading ? "SAVING..." : 'SAVE' }
                    loading={ isLoading }
                    func={ saveRestaurantInfo }
                />
            </View>

        </SafeAreaView>
    )
}
