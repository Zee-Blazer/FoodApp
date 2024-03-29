
import { View, Text, TextInput } from 'react-native';

// Styling
import { editProfileUsersStyles } from '../../../../styles/screens/edit-profile-users.styles';

interface Props {
    name: string,
    address: string,
    phone: any,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAddress: React.Dispatch<React.SetStateAction<string>>
    setPhone: React.Dispatch<React.SetStateAction<any>>
}

export const RestaurantChefInfoComponent: React.FC<Props> = ({ 
    name, address, phone, setName, setAddress, setPhone 
}) => {

    return (
        <View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>RESTAURANT NAME</Text>
                <TextInput 
                    placeholder={ "Amazing Meals" }
                    value={ name }
                    onChangeText={ setName }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>ADDRESS</Text>
                <TextInput 
                    placeholder={ "Beside CMPLH Bingham University" }
                    value={ address }
                    onChangeText={ setAddress }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>RESTAURANT NUMBER</Text>
                <TextInput 
                    placeholder={ "408-841-0926" }
                    inputMode="numeric"
                    value={ phone }
                    onChangeText={ setPhone }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

        </View>
    )
}
