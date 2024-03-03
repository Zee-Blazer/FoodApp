
import { View, Text, Image, TouchableOpacity } from "react-native";

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";

interface Props {
    resName: string,
    price: number,
    size: number,
    amount: number,
    imgUri: string
}

export const CartOptionContainer: React.FC<Props> = ({ resName, price, size, amount, imgUri }) => {

    return (
        <TouchableOpacity 
            style={[ 
                usersCartUsersStyles.cartOptionCont, 
                homeUsersScreenStyles.flexDisplay ,
            ]}
        >
            <Image 
                source={ imgUri }
                style={ usersCartUsersStyles.cartOptionImg }
            />

            <View style={{ width: 200 }}>

                <View 
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        homeUsersScreenStyles.flexDesign, 
                        { flex: 1 } 
                    ]}
                >
                    <View style={{ marginRight: 42 }}>
                        <Text style={[ usersCartUsersStyles.mainRestTxt ]}>
                            { resName }
                        </Text>
                        <Text style={ usersCartUsersStyles.mainRestTxtPrc }>
                            ${ price }
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="cancel" size={27} color="#E04444" />
                    </TouchableOpacity>
                </View>

                <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                    <Text style={ usersCartUsersStyles.quantTxt }>
                        { size }"
                    </Text>

                    <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                        <TouchableOpacity>
                            <Entypo name="circle-with-minus" size={22} color="rgba(255,255,255,0.5)" />
                        </TouchableOpacity>

                        <Text style={ usersCartUsersStyles.quantAmtTxt }>
                            { amount }
                        </Text>

                        <TouchableOpacity>
                            <Entypo name="circle-with-plus" size={22} color="rgba(255,255,255,0.5)" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
