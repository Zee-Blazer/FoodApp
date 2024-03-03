
import { View, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { notificationChefStyles } from "../../../styles/screens/notification-chef.styles";

interface Props {
    title: string
}

export const MainNotificationContainerComponent: React.FC<Props> = ({ title }) => {

    return (
        <View style={ homeChefScreenStyles.horiSpacer }>
            <Text style={ notificationChefStyles.headerNotificationTxt }>{ title }</Text>
        </View>
    )
}
