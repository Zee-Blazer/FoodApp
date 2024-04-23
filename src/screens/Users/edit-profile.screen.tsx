import React, { useState, useEffect, useContext } from 'react';

import { View, SafeAreaView, ScrollView } from "react-native";

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling 
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Firebase Created Functions
import { updateProfileDetails, uploadFile } from '../../services/Firebase/profile';

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { EditProfilePicComponent } from "../../components/Users-Comp/Edit Profile/edit-profile-pic.component";
import { EditProfielFormComponent } from "../../components/Users-Comp/Edit Profile/edit-profile-form.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const EditProfileScreen = () => {

    const { user, isUserLoggedIn } = useContext(AuthContext); // Authentication Context Provider

    const navigation = useNavigation(); // Navigation instance

    // Loading state
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sendLoc, setSendLoc] = useState<boolean>(false);

    // All the users credentials 
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<any>();
    const [bio, setBio] = useState<string>("");

    // Profile Image States 
    const [pic, setPic] = useState(null || user.photoURL);
    const [proceed, setProceed] = useState<boolean>(false);
    const [goBack, setGoBack] = useState<boolean>(true);

    // The useEffect funtion helps find out if user is logged In
    useEffect( () => {
        if(sendLoc){
            navigation.goBack();
            isUserLoggedIn();
        }
    }, [sendLoc] )

    useEffect( () => {
        if(!goBack){
            navigation.goBack();
        }
    }, [goBack] )

    const saveData = async () => {
        setIsLoading(true);

        if(proceed){
            const source = { uri: pic };
            const response = await fetch(source.uri);
            const blob = await response.blob(); 

            updateProfileDetails(username, email, phone, bio, user.uid, source, blob, setIsLoading, setSendLoc, setGoBack);
        }
        else{
            const source = null;
            const blob = null; 

            updateProfileDetails(username, email, phone, bio, user.uid, source, blob, setIsLoading, setSendLoc, setGoBack);
        }
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
                        userPic={ user.photoURL }
                        pic={ pic }
                        setPic={ setPic }
                        setProceed={ setProceed }
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
                    title={ isLoading ? "SAVING..." : "SAVE" }
                    loading={ isLoading }
                    func={ () => saveData() }
                />
            </View>
        </SafeAreaView>
    )
}
