import React, { useContext } from 'react';

import { View, Text, TextInput } from 'react-native';

// Restaurant Context
import { RestaurantContext } from '../../../../services/Context/restaurant.context';

// Styling
import { editProfileUsersStyles } from '../../../../styles/screens/edit-profile-users.styles';

interface Props {
    name: string,
    address: string,
    phone: any,
    description: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAddress: React.Dispatch<React.SetStateAction<string>>
    setPhone: React.Dispatch<React.SetStateAction<any>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>
}

export const RestaurantChefInfoComponent: React.FC<Props> = ({ 
    name, address, phone, setName, setAddress, setPhone, description, setDescription 
}) => {

    const { restaurantInfo } = useContext(RestaurantContext);

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

            <View style={[ editProfileUsersStyles.inputContainer ]}>
                <Text style={ editProfileUsersStyles.inputLabel }>RESTAURANT DESCRIPTION</Text>
                <TextInput 
                    placeholder={ "Describe Restaurant" }
                    value={ description }
                    multiline
                    onChangeText={ setDescription }
                    style={[ editProfileUsersStyles.inputField ]}
                />
            </View>

        </View>
    )
}
