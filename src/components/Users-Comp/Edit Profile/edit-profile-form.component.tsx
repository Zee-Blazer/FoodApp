import React, { useEffect, useContext } from "react";

import { View, Text, TextInput } from "react-native";

// Authentication Context
import { AuthContext } from "../../../services/Context/auth.context";

import { userDetails } from "../../../services/Firebase/user";

// Styling
import { editProfileUsersStyles } from "../../../styles/screens/edit-profile-users.styles";

interface Props {
    username: string,
    email: string,
    phone: any,
    bio: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPhone: React.Dispatch<React.SetStateAction<any>>,
    setBio: React.Dispatch<React.SetStateAction<string>>
}

export const EditProfielFormComponent: React.FC<Props> = (
        { 
            username, email, phone, bio, setUsername, setEmail, setPhone, setBio
        }
    ) => {

    const { user } = useContext( AuthContext );

    useEffect( () => {
        setUsername( user.username );
        setEmail( user.email );
        setPhone( user.phoneNumber && user.phoneNumber );
    }, [] )

    return (
        <View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>FULL NAME</Text>
                <TextInput 
                    placeholder={ user.username }
                    value={ username }
                    onChangeText={ setUsername }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>EMAIL</Text>
                <TextInput 
                    placeholder={ user.email }
                    value={ email }
                    onChangeText={ setEmail }
                    editable={ false }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>PHONE</Text>
                <TextInput 
                    placeholder={ user.phoneNumber || "408-841-0926" }
                    inputMode="numeric"
                    value={ phone }
                    onChangeText={ setPhone }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>BIO</Text>
                <TextInput 
                    placeholder="I love fast food"
                    value={ bio }
                    onChangeText={ setBio }
                    // multiline
                    numberOfLines={4}
                    multiline
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <Text
                onPress={ () => userDetails("BqtrojOZQ1M0McUYpBLqziBBpvG2") } 
            >Check Function</Text>

        </View>
    )
}
