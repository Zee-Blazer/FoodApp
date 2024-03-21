import React, { useContext } from 'react';

import { View, SafeAreaView, TouchableOpacity, Text, Image } from "react-native";

// Authentication Context
import { AuthContext } from '../../../services/Context/auth.context';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Theme
import { theme } from "../../Theme";

export const ProfileStyledComponent = () => {

    const { user } = useContext(AuthContext);

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <TouchableOpacity
                style={{
                    height: 200,
                    alignItems: "center"
                }}
                onPress={ () => navigation.navigate("Profile") }
            >
                <Image 
                    source={ 
                        user.photoURL ? 
                            { uri: user.photoURL } : 
                            require('../../../../assets/Images/Profile/profile2.jpg') 
                    }
                    style={{
                        width: 130,
                        height: 130,
                        borderRadius: 200
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: theme.fonts.title,
                        marginTop: 8,
                        color: "#32343E"
                    }}
                >{ user.username }</Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#A0A5BA",
                        fontFamily: theme.fonts.body
                    }}
                >{ user.email }</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
