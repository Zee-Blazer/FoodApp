
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Icon
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    isAdmin: boolean
}

export const DashboardHeaderComponent: React.FC<Props> = ({ isAdmin }) => {

    const navigation = useNavigation();

    return (
        <View style={ homeUsersScreenStyles.flexDesign }>
            <View style={ homeUsersScreenStyles.flexDisplay }>
                <TouchableOpacity onPress={ () => !isAdmin && navigation.openDrawer() } >
                    <Image source={ require("../../../../assets/Images/menu.png") } />
                </TouchableOpacity>
                
                <View style={ homeUsersScreenStyles.headerTextCont }>
                    <Text style={ homeUsersScreenStyles.titleText }>
                        { isAdmin ? "LOCATION" : "DELIVER TO" }
                    </Text>
                    <TouchableOpacity style={ homeUsersScreenStyles.flexDisplay }>
                        <Text style={ homeUsersScreenStyles.nextTextLoc }>Holal Lab office</Text>
                        <AntDesign name="caretdown" size={10} color="black" style={ homeUsersScreenStyles.smallDownIcon } />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={ homeUsersScreenStyles.shopChartNote }>
                <Feather 
                    name="shopping-bag" size={24} color="white" 
                    style={ homeUsersScreenStyles.shopChartNoteIcon }
                />
                <View style={ homeUsersScreenStyles.shopChartNoteMsg }>
                    <Text style={ homeUsersScreenStyles.shopChartNoteMsgTxt }>2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
