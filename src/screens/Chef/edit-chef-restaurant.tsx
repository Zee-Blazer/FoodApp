import React, { useState } from 'react';

import { View, SafeAreaView, Text } from 'react-native';

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

    const [pic, setPic] = useState();

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
                        pic={ "" }
                        setPic={ setPic }
                        setProceed={ setPic }
                        screen='chef'
                    />
                    
                    <RestaurantChefInfoComponent />
                
                </View>
                
            </View>

            <View style={ homeChefScreenStyles.horiSpacer }>
                <FormBtnComponent 
                    title='SAVE'
                    func={ () => restaurantDetailsInfoDB() }
                />
            </View>

        </SafeAreaView>
    )
}
