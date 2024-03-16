import React, { useContext } from "react";

import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

// Authentication Context
import { AuthContext } from "../../../services/Context/auth.context";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

interface data {
    iconUri: string,
    title: string,
    link: string,
    rate?: number
}

interface Props {
    data: data[],
    other?: boolean
}

export const ProfileActionContainerComponent: React.FC<Props> = ({ data, other }) => {

    // Context
    const { logoutApp } = useContext(AuthContext);

    const navigation = useNavigation();

    const moveToScreen = (e: string) => {
        if(e.length > 1){
            navigation.navigate(e);
        }
    }

    return (
        <View style={[ profileUsersStyles.profileActionCont, other && { backgroundColor: "white" } ]}>

            <FlatList 
                data={ data }
                renderItem={ ({ item }) => (
                    <TouchableOpacity 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay,
                            homeUsersScreenStyles.flexDesign,
                            { marginBottom: 16 }
                        ]}
                        onPress={ () => {
                            if(item.link == "logout"){
                                logoutApp();
                            }
                            else{
                                moveToScreen(item.link)
                            }
                        } }
                    >
                        <View style={[ homeUsersScreenStyles.flexDisplay, { alignItems: "center" } ]}>
                            <Image 
                                source={ item.iconUri }
                                style={{ marginTop: -4 }}
                            />
                            <Text style={ profileUsersStyles.profileActionContTxt }>{ item.title }</Text>
                        </View>
                        { !item.rate ?
                            <AntDesign 
                                name="right" size={16} color="#181C2E" 
                                style={{ marginTop: 14, marginLeft: 4 }} 
                            /> :
                            <Text
                                style={ profileUsersStyles.rateTxt }
                            >{ item.rate }K</Text>
                        }
                    </TouchableOpacity>
                ) }
                keyExtractor={ item => item.iconUri }
            />

        </View>
    )
}
