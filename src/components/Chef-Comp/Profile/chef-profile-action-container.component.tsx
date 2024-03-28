
import { View, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";

// Component
import { ProfileActionContainerComponent } from "../../Users-Comp/Profile Section/profile-action-container.component";

export const ChefProfileActionContainerComponent = () => {

    const data1 = [
        { iconUri: require("../../../../assets/Images/Icons/profile.png"), title: "Personal Info", link: "ProfileChefInfo" },
        { iconUri: require("../../../../assets/Images/Icons/Settings.png"), title: "Settings", link: "" }
    ];

    const data2 = [
        { iconUri: require("../../../../assets/Images/Icons/Withdrawal.png"), title: "Withdrawal History", link: "" },
        { iconUri: require("../../../../assets/Images/Icons/Orders.png"), title: "Number of Orders", link: "", rate: 29 },
    ];

    const data3 = [
        { iconUri: require("../../../../assets/Images/Icons/Reviews.png"), title: "User Reviews", link: "Reviews" },
    ];

    const data4 = [
        { iconUri: require("../../../../assets/Images/Icons/logout.png"), title: "Log Out", link: "logout" },
    ];

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, { marginTop: 15 } ]}>
            <ScrollView>

                <ProfileActionContainerComponent 
                    data={ data1 }
                    other={ true }
                />

                <ProfileActionContainerComponent 
                    data={ data2 }
                    other={ true }
                />

                <ProfileActionContainerComponent 
                    data={ data3 }
                    other={ true }
                />

                <ProfileActionContainerComponent 
                    data={ data4 }
                    other={ true }
                />

            </ScrollView>
        </View>
    )
}
