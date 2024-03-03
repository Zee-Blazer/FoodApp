import React, { useState } from 'react';

import { View, KeyboardAvoidingView } from "react-native";

// Styles
import { loginStyle } from "../../styles/screens/login-auth.styles";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component";
import { InputFieldComponent } from "../../components/Auth-Comp/input-field.component";
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component';

export const ForgotPasswordScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("");

    const validateOTP = () => {
        // if(email) navigation.navigate("OtpVerification");
        navigation.navigate("OtpVerification")
    }

    return (
        <>
            <TopImageComponent 
                title="Forgot Password"
                subtitle="Please sign in to your existing account"
                extra=""
                back={ true }
            />

            <View style={ loginStyle.formContainer }>
                <KeyboardAvoidingView>

                    <InputFieldComponent 
                        type="text"
                        label='EMAIL'
                        placeholder='example@gmail.com'
                        value={ email }
                        setValue={ setEmail }
                    />

                    <FormBtnComponent 
                        title='SEND CODE'
                        func={ validateOTP }
                    />

                </KeyboardAvoidingView>
            </View>
        </>
    )
}
