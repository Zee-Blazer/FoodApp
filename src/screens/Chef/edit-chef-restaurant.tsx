import React, { useState, useContext } from 'react';

import { View, SafeAreaView, Text } from 'react-native';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

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

    // Authentication context to get details
    const { user } = useContext(AuthContext);

    const [pic, setPic] = useState();
    const [proceed, setProceed] = useState<boolean>(false);

    // Restaurant details state
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<any>();

    const saveRestaurantInfo = async () => {

        const userId = user.uid;

        if(proceed) {
            const source = { uri: pic };
            const response = await fetch(source.uri);
            const blob = await response.blob(); 

            // restaurantDetailsInfoDB();
        }
        else {
            const source = null;
            const blob = null; 

            console.log("Having little issues");
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
                        setName={ setName }
                        setAddress={ setAddress }
                        setPhone={ setPhone }
                    />
                
                </View>
                
            </View>

            <View style={ homeChefScreenStyles.horiSpacer }>
                <FormBtnComponent 
                    title='SAVE'
                    func={ saveRestaurantInfo }
                />
            </View>

        </SafeAreaView>
    )
}
