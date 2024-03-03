import React, { useState } from 'react';

import { KeyboardAvoidingView, ScrollView } from "react-native";

// Styling
import { loginStyle } from "../../styles/screens/login-auth.styles";

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component"; // The Top bar image and write up
import { BottomFormComponent } from "../../components/Auth-Comp/bottom-form.component"; // The bottom Sign In options
import { InputFieldComponent } from "../../components/Auth-Comp/input-field.component"; // Simplify the TextInput field
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component'; // Simplified Button

export const SignupScreen = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [retryPassword, setRetryPassword] = useState<string>("");

    return (
        <>
            <TopImageComponent 
                title="Sign up"
                subtitle="Please sign up to get started"
                extra=""
                back={ true }
            />

            <ScrollView style={ loginStyle.scrollFormContainer }>

                <KeyboardAvoidingView>

                    <InputFieldComponent 
                        type="text"
                        label='NAME'
                        placeholder='John Doe'
                        value={ name }
                        setValue={ setName }
                    />
                    
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

                    <InputFieldComponent 
                        type="pass"
                        label='RE-TYPE PASSWORD'
                        placeholder="* * * * * * * * * *" 
                        value={ retryPassword }
                        setValue={ setRetryPassword }
                    />

                    <FormBtnComponent 
                        title="SIGN UP"
                        func={ () => {} }
                    />

                    <BottomFormComponent 
                        type="signup"
                    />

                </KeyboardAvoidingView>

            </ScrollView>

        </>
    )
}
