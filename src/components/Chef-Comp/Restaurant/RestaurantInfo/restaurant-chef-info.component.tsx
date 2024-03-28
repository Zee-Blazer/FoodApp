
import { View, Text, TextInput } from 'react-native';

// Styling
import { editProfileUsersStyles } from '../../../../styles/screens/edit-profile-users.styles';

export const RestaurantChefInfoComponent = () => {

    return (
        <View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>FULL NAME</Text>
                <TextInput 
                    placeholder={ "Amazing Meals" }
                    // value={ username }
                    // onChangeText={ setUsername }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>EMAIL</Text>
                <TextInput 
                    placeholder={ "Beside CMPLH Bingham University" }
                    // value={ email }
                    // onChangeText={ setEmail }
                    // editable={ false }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>PHONE NUMBER</Text>
                <TextInput 
                    placeholder={ "408-841-0926" }
                    inputMode="numeric"
                    // value={ phone }
                    // onChangeText={ setPhone }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

        </View>
    )
}
