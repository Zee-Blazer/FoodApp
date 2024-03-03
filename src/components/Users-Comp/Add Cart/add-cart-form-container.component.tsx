import React, { useState } from 'react';

import { View, Text, TextInput } from "react-native";

// Styling
import { addCartUsersStyles } from "../../../styles/screens/add-cart-users.styles";

export const AddCartFormComponent = () => {

    const [expiryDate, setExpiryDate] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    const formatExpiryDate = (input) => {
        // Remove non-numeric characters
        const numericInput = input.replace(/\D/g, '');

        // Format MM/YY
        let formattedInput = numericInput.substring(0, 4);
        if (formattedInput.length > 2) {
            formattedInput = formattedInput.replace(/(\d{2})(?=\d)/g, '$1/');
        }

        setExpiryDate(formattedInput);
    };

    const formatCreditCardNumber = (input) => {
        // Remove non-numeric characters
        const numericInput = input.replace(/\D/g, '');

        // Insert a space after every 4 characters
        const formattedInput = numericInput.replace(/(\d{4})(?=\d)/g, '$1 ');

        setCardNumber(formattedInput);
    };

    return (
        <View>

            <View style={ addCartUsersStyles.formInputCont }>
                <Text style={ addCartUsersStyles.formInputLabel }>CARD HOLDER NAME</Text>
                <TextInput 
                    placeholder="John Doe" 
                    autoCorrect={ false }
                    autoComplete='off'
                    style={ addCartUsersStyles.formInputField }
                />
            </View>

            <View style={ addCartUsersStyles.formInputCont }>
                <Text style={ addCartUsersStyles.formInputLabel }>CARD NUMBER</Text>
                <TextInput 
                    placeholder="2134   _ _ _ _   _ _ _ _" 
                    keyboardType="numeric"
                    value={cardNumber}
                    maxLength={23}
                    onChangeText={formatCreditCardNumber}
                    style={ addCartUsersStyles.formInputField }
                />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={ addCartUsersStyles.formInputCont }>
                    <Text style={ addCartUsersStyles.formInputLabel }>EXPIRE DATE</Text>
                    <TextInput 
                        placeholder="MM/YY" 
                        keyboardType="numeric"
                        maxLength={5}
                        value={expiryDate}
                        onChangeText={ formatExpiryDate }
                        style={[ addCartUsersStyles.formInputField, addCartUsersStyles.miniFormInputField ]}
                    />
                </View>

                <View style={ addCartUsersStyles.formInputCont }>
                    <Text style={ addCartUsersStyles.formInputLabel }>CVC</Text>
                    <TextInput 
                        placeholder="***" 
                        keyboardType="numeric"
                        maxLength={3}
                        style={[ addCartUsersStyles.formInputField, addCartUsersStyles.miniFormInputField ]}
                    />
                </View>

            </View>

        </View>
    )
}
