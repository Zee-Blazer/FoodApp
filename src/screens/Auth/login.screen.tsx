import React, { useState } from 'react';

import { View, KeyboardAvoidingView } from "react-native";

// Styling 
import { loginStyle } from "../../styles/screens/login-auth.styles";

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component"; // The Top bar image and write up
import { BottomFormComponent } from "../../components/Auth-Comp/bottom-form.component"; // The bottom Sign In options
import { InputFieldComponent } from "../../components/Auth-Comp/input-field.component"; // Simplify the TextInput field
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component'; // Simplified Button
import { RememberForgotComponent } from '../../components/Auth-Comp/remember-forgot.component'; // Remember and Forgotten Password

export const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            <TopImageComponent 
                title="Log In"
                subtitle="Please sign in to your existing account"
                extra=""
                back={ false }
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

                    <InputFieldComponent 
                        type="pass"
                        label='PASSWORD'
                        placeholder="* * * * * * * * * *" 
                        value={ password }
                        setValue={ setPassword }
                    />
                    
                    <RememberForgotComponent />

                    <FormBtnComponent 
                        title="LOG IN"
                        func={ () => {} }
                    />

                    <BottomFormComponent 
                        type="login"
                    />

                </KeyboardAvoidingView>

            </View>
        </>
    )
}
