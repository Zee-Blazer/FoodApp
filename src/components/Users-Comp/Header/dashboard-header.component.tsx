import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

// Icon
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

// Component
import { CartRecordNavComponent } from './cart-record-nav.component';

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

            <CartRecordNavComponent />
        </View>
    )
}
