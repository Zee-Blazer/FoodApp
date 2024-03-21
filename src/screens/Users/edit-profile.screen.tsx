import React, { useState, useContext } from 'react';

import { View, SafeAreaView, ScrollView } from "react-native";

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Styling 
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Firebase Created Functions
import { updateProfileDetails } from '../../services/Firebase/profile';

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { EditProfilePicComponent } from "../../components/Users-Comp/Edit Profile/edit-profile-pic.component";
import { EditProfielFormComponent } from "../../components/Users-Comp/Edit Profile/edit-profile-form.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const EditProfileScreen = () => {

    const { user } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<any>();
    const [bio, setBio] = useState<string>("");
    const [pic, setPic] = useState(null);

    const saveData = () => {
        setIsLoading(true);
        updateProfileDetails(username, email, phone, bio, user.uid, setIsLoading);
    }

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Edit Profile"
                    icon={ true }
                />

                <ScrollView 
                    showsVerticalScrollIndicator={ false }
                >

                    <EditProfilePicComponent 
                        pic={ pic }
                        setPic={ setPic }
                    />

                    <EditProfielFormComponent 
                        username={ username }
                        email={ email }
                        phone={ phone }
                        bio={ bio }
                        setUsername={ setUsername }
                        setEmail={ setEmail }
                        setPhone={ setPhone }
                        setBio={ setBio }
                    />

                </ScrollView>
                
            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <FormBtnComponent 
                    title="SAVE"
                    loading={ isLoading }
                    func={ () => saveData() }
                />
            </View>
        </SafeAreaView>
    )
}
