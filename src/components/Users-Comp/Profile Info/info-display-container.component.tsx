import React, { useContext } from 'react';

import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

// Authentication Context
import { AuthContext } from '../../../services/Context/auth.context';

// Firebase Function
import { becomeAdmin } from '../../../services/Firebase/Chef/profile';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

interface data {
    iconUri: string,
    title: string,
    subTitle: string
}

interface Props {
    data: data[]
}

export const InfoDisplayContainerComponent: React.FC<Props> = ({ data }) => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <View style={[ profileUsersStyles.profileActionCont, { marginTop: 20 } ]}>

            <FlatList 
                data={ data }
                renderItem={ ({ item }) => (
                    <View
                        style={[ 
                            homeUsersScreenStyles.flexDisplay,
                            homeUsersScreenStyles.flexDesign,
                            { marginBottom: 16 }
                        ]}
                    >

                        <View style={[ homeUsersScreenStyles.flexDisplay, { alignItems: "center" } ]}>
                            <Image 
                                source={ item.iconUri }
                                style={{ marginTop: -4, marginRight: 14 }}
                            />
                            <View>
                                <Text style={ profileUsersStyles.infoActionContTxt }>
                                    { item.title }
                                </Text>
                                <Text style={ profileUsersStyles.infoActionContSubTxt }>
                                    { item.subTitle }
                                </Text>
                            </View>
                        </View>

                    </View>
                ) }
                keyExtractor={ item => item.iconUri }
            />

            </View>

            <TouchableOpacity
                onPress={ () => becomeAdmin(user.uid, user) }
            >
                <Text
                    style={ profileUsersStyles.becomeAdmin }
                >BECOME A CHEF</Text>
            </TouchableOpacity>
        </>
    )
}
