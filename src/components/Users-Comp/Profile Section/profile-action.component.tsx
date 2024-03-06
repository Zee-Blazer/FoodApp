
import { View } from "react-native";

// Component
import { ProfileActionContainerComponent } from "./profile-action-container.component";

export const ProfileActionComponent = () => {

    const data1 = [
        { iconUri: require("../../../../assets/Images/Icons/profile.png"), title: "Personal Info", link: "ProfileInfo" },
        { iconUri: require("../../../../assets/Images/Icons/address.png"), title: "Addresses", link: "Address" }
    ];

    const data2 = [
        { iconUri: require("../../../../assets/Images/Icons/cart.png"), title: "Cart", link: "" },
        { iconUri: require("../../../../assets/Images/Icons/favourite.png"), title: "Favourite", link: "" },
        { iconUri: require("../../../../assets/Images/Icons/notifications.png"), title: "Notifications", link: "" },
        { iconUri: require("../../../../assets/Images/Icons/payments.png"), title: "Payment Method", link: "" },
    ];

    const data3 = [
        { iconUri: require("../../../../assets/Images/Icons/FAQs.png"), title: "FAQs", link: "" },
        { iconUri: require("../../../../assets/Images/Icons/Review.png"), title: "User Reviews", link: "" },
        { iconUri: require("../../../../assets/Images/Icons/Settings.png"), title: "Settings", link: "" },
    ];

    const data4 = [
        { iconUri: require("../../../../assets/Images/Icons/logout.png"), title: "Log Out", link: "logout" },
    ];

    return (
        <View>
            <ProfileActionContainerComponent 
                data={ data1 } 
            />

            <ProfileActionContainerComponent 
                data={data2} 
            />

            <ProfileActionContainerComponent 
                data={data3} 
            />

            <ProfileActionContainerComponent 
                data={data4} 
            />
        </View>
    )
}
