
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { ordersUserStyles } from "../../../styles/screens/orders-users.styles";

interface Props {
    func: (e: string) => void,
    view: string
}

export const HeaderNavComponent: React.FC<Props> = ({ func, view }) => {

    return (
        <View style={[ homeUsersScreenStyles.flexDisplay, ordersUserStyles.navHeader ]}>
            <TouchableOpacity 
                style={
                    view === "Ongoing" ? 
                        [ordersUserStyles.activeNav, ordersUserStyles.navItems]
                    :
                        ordersUserStyles.navItems 
                }
                onPress={ () => func("Ongoing") }
            >
                <Text 
                    style={
                        view === "Ongoing" ? 
                            ordersUserStyles.activeNavTxt
                        :
                            ordersUserStyles.inactiveNavTxt 
                    }
                >Ongoing</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={
                    view === "History" ? 
                        [ordersUserStyles.activeNav, ordersUserStyles.navItems]
                    :
                        ordersUserStyles.navItems 
                }
                onPress={ () => func("History") }
            >
                <Text 
                    style={
                        view === "History" ? 
                            ordersUserStyles.activeNavTxt
                        :
                            ordersUserStyles.inactiveNavTxt 
                    }
                >History</Text>
            </TouchableOpacity>
        </View>
    )
}
