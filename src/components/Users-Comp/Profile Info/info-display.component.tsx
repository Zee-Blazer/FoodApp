import React, { useContext } from "react";

import { View } from "react-native";

// Authentication Context
import { AuthContext } from "../../../services/Context/auth.context";

// Component
import { InfoDisplayContainerComponent } from "./info-display-container.component";

export const InfoDisplayComponent = () => {

    const { user } = useContext(AuthContext);

    const data = [
        { 
            iconUri: require("../../../../assets/Images/Icons/profile.png"), 
            title: "FULL NAME", 
            subTitle: user.username
        },
        { 
            iconUri: require("../../../../assets/Images/Icons/email.png"), 
            title: "Addresses", 
            subTitle: user.email
        },
        { 
            iconUri: require("../../../../assets/Images/Icons/phone.png"), 
            title: "PHONE NUMBER", 
            subTitle: user.phoneNumber
        },
    ];

    return (
        <View>
            <InfoDisplayContainerComponent 
                data={ data }
            />
        </View>
    )
}
