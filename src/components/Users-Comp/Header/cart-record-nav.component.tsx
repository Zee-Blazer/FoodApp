
import { View, Text, TouchableOpacity } from 'react-native';

// Icon
import { Feather } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling 
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

export const CartRecordNavComponent = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={ homeUsersScreenStyles.shopChartNote }
            onPress={ () => navigation.navigate("UsersCart") }
        >
            <Feather 
                name="shopping-bag" size={24} color="white" 
                style={ homeUsersScreenStyles.shopChartNoteIcon }
            />
            <View style={ homeUsersScreenStyles.shopChartNoteMsg }>
                <Text style={ homeUsersScreenStyles.shopChartNoteMsgTxt }>2</Text>
            </View>
        </TouchableOpacity>
    )
}
