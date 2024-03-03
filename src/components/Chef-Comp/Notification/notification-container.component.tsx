
import { View, TouchableOpacity, Image, Text } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { notificationChefStyles } from "../../../styles/screens/notification-chef.styles";

interface Props {
    name: string,
    msg: string,
    time: number
}

export const NotificationContainerComponent: React.FC<Props> = ({ name, msg, time }) => {

    return (
        <TouchableOpacity 
            style={[ 
                homeChefScreenStyles.horiSpacer,
                notificationChefStyles.notificationContainer,
                homeChefScreenStyles.flexDesign
            ]}
        >

            <View style={ notificationChefStyles.iconPersonCont }>
                <FontAwesome name="user" size={42} color="#F0F4F9" style={{ alignSelf: "center" }} />
            </View>

            <View>
                <Text>
                    <Text 
                        style={[ notificationChefStyles.nameNotificationTxt, { color: "#32343E" } ]}
                    >{ name } </Text>
                    <Text
                        style={[ notificationChefStyles.nameNotificationTxt, { color: "#9C9BA6" } ]}
                    >{ msg }</Text>
                </Text>
                <Text
                    style={[ notificationChefStyles.timeNotificationTxt ]}
                >{ time } min ago</Text>
            </View>

            <Image 
                source={ require('../../../../assets/Images/Burger/burger1.jpg') }
                style={ notificationChefStyles.notificationMealImg }
            />

        </TouchableOpacity>
    )
}
