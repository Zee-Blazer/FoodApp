
import { View, Text, TextInput } from "react-native";

// Styling
import { editProfileUsersStyles } from "../../../styles/screens/edit-profile-users.styles";

export const EditProfielFormComponent = () => {

    return (
        <View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>FULL NAME</Text>
                <TextInput 
                    placeholder="Vishal Khadok"
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>EMAIL</Text>
                <TextInput 
                    placeholder="hello@halallab.co"
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>PHONE</Text>
                <TextInput 
                    placeholder="408-841-0926"
                    inputMode="numeric"
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>BIO</Text>
                <TextInput 
                    placeholder="I love fast food"
                    // multiline
                    numberOfLines={4}
                    multiline
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

        </View>
    )
}
