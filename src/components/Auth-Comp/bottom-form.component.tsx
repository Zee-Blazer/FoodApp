import React, { useContext } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { loginStyle } from '../../styles/screens/login-auth.styles';

interface Props {
    type: string
}

export const BottomFormComponent: React.FC<Props> = ({ type }) => {

    const { serviceNotAvailiable } = useContext(AuthContext);

    const navigation = useNavigation();

    return (
        <>
            {
                type == "login" &&
                <Text style={ loginStyle.otherOpt }>
                    Don't have an account? <Text 
                            style={ loginStyle.otherOptLink }
                            onPress={ () => navigation.push("Signup") }
                        >
                        SIGN UP
                    </Text>
                </Text>
            }

            <View>
                <Text style={ loginStyle.orText }>Or</Text>

                <View style={ loginStyle.otherSignInLogoCont }>
                    {/* <FontAwesome6 name="square-x-twitter" size={24} color="black" /> */}
                    <TouchableOpacity
                        onPress={ serviceNotAvailiable }
                    >
                        <FontAwesome5 name="facebook" size={48} color="#395998" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ serviceNotAvailiable }
                    >
                        <Entypo name="twitter-with-circle" size={52} color="#169CE8" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ serviceNotAvailiable }
                    >
                        <FontAwesome5 name="google" size={42} color="#EA4335" style={{ marginTop: 2 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
