import React, { useContext } from "react";

import { View } from "react-native";

// Authentication Context
import { AuthContext } from "../../../services/Context/auth.context";

// Restaurant Context
import { RestaurantContext } from "../../../services/Context/restaurant.context";

// Component
import { InfoDisplayContainerComponent } from "./info-display-container.component";

interface Props {
    screen?: string
}

export const InfoDisplayComponent: React.FC<Props> = ({ screen }) => {

    const { user } = useContext(AuthContext); // The User Context
    const { restaurantInfo } = useContext(RestaurantContext); // The Restaurant Info Context

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
        }
    ];

    const subData = [
        {
            iconUri: require("../../../../assets/Images/Icons/restaurant.png"), 
            title: "RESTAURANT DETAILS", 
            subTitle: restaurantInfo ? restaurantInfo.restaurant_name : "Add Info!!"
        }
    ]

    return (
        <View>
            <InfoDisplayContainerComponent 
                data={ screen == "chef" ? subData : data }
                screen={ screen && screen }
            />
        </View>
    )
}
