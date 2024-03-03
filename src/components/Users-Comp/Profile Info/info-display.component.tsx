
import { View } from "react-native";

// Component
import { InfoDisplayContainerComponent } from "./info-display-container.component";

export const InfoDisplayComponent = () => {

    const data = [
        { 
            iconUri: require("../../../../assets/Images/Icons/profile.png"), 
            title: "FULL NAME", 
            subTitle: "Vishal Khadok"  
        },
        { 
            iconUri: require("../../../../assets/Images/Icons/email.png"), 
            title: "Addresses", 
            subTitle: "hello@halallab.co"
        },
        { 
            iconUri: require("../../../../assets/Images/Icons/phone.png"), 
            title: "PHONE NUMBER", 
            subTitle: "408-841-0926"
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
