
import { View, Image, Text, TouchableOpacity } from "react-native";

// Icon
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

interface Props {
    iconUri: string,
    title: string,
    subTitle: string
}

export const AddressDisplayInfoComponent: React.FC<Props> = ({ iconUri, title, subTitle }) => {

    return (
        <View style={[ profileUsersStyles.profileActionCont ]}>

            <View
                style={[ 
                    homeUsersScreenStyles.flexDisplay,
                    homeUsersScreenStyles.flexDesign,
                    { marginBottom: 16 }
                ]}
            >

                <View style={[ homeUsersScreenStyles.flexDisplay, { alignItems: "center" } ]}>
                    <Image 
                        source={ iconUri }
                        style={{ marginTop: -4, marginRight: 14 }}
                    />
                    <View>
                        <View 
                            style={[ 
                                homeUsersScreenStyles.flexDisplay, 
                                homeUsersScreenStyles.flexDesign,
                                { marginBottom: 7, width: "86%" }
                            ]}
                        >
                            <Text style={ profileUsersStyles.infoActionContTxt }>
                                { title }
                            </Text>

                            <View style={[ homeUsersScreenStyles.flexDisplay ]}>
                                <TouchableOpacity style={{ marginRight: 14 }}>
                                    <Feather name="edit" size={16} color="#FB6D3A" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome name="trash-o" size={16} color="#FB6D3A" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[ profileUsersStyles.infoActionContSubTxt, { maxWidth: 275 } ]}>
                            { subTitle }
                        </Text>
                    </View>
                </View>

            </View>

        </View>
    )
}
