
// Navigation
import { useNavigation } from '@react-navigation/native';

// Icon
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';
import { searchUsersStyles } from '../../../styles/screens/serach-users.styles';

// Component
import { CartRecordNavComponent } from './cart-record-nav.component';

interface Props {
    header?: string
}

export const SerachBarHeaderComponent: React.FC<Props> = ({ header }) => {

    const navigation = useNavigation();

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                { marginTop: 6 } 
            ]}
        >
            <View style={[ homeUsersScreenStyles.flexDisplay ]}>
                <TouchableOpacity 
                    onPress={ () => navigation.goBack() }
                    style={ searchUsersStyles.backNavOpt }
                >
                    <Ionicons 
                        name="chevron-back-sharp" size={22} color="#5E616F" 
                        style={{ marginTop: 8, marginLeft: 8 }} 
                    />
                </TouchableOpacity>
                <Text style={ searchUsersStyles.serachHeaderTxt }>
                    { header ? header : "Search" }
                </Text>
            </View>

            <CartRecordNavComponent />
        </View>
    )
}
