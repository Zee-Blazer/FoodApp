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

    const [err, setErr] = useState<string>("");

    const [email, setEmail] = useState<string>("");
    const [emailErr, setEmailErr] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordErr, setPasswordErr] = useState<string>("");

    const loginUser = () => {
        const proceed = email.length > 1 && password.length > 1;
        
        setEmailErr(""); setPasswordErr("");
        
        if( proceed ){
            console.log("About to Login the User");
        }
        else if(email.length < 1){
            setEmailErr("Fill your email");
            setErr("Fill every field");
        }
        else if(password.length < 1){
            setPasswordErr("Fill in your password");
            setErr("Fill every field");
        }
        else{
            console.log("Error of another sort");
        }
    }

    return (
        <>
            <TopImageComponent 
                title="Log In"
                subtitle="Please sign in to your existing account"
                extra=""
                back={ false }
                err={ err }
            />

            <View style={ loginStyle.formContainer }>

                <KeyboardAvoidingView>

                    <InputFieldComponent 
                        type="text"
                        label='EMAIL'
                        placeholder='example@gmail.com'
                        value={ email }
                        setValue={ setEmail }
                        setErr={ emailErr }
                    />

                    <InputFieldComponent 
                        type="pass"
                        label='PASSWORD'
                        placeholder="* * * * * * * * * *" 
                        value={ password }
                        setValue={ setPassword }
                        setErr={ passwordErr }
                    />
                    
                    <RememberForgotComponent />

                    <FormBtnComponent 
                        title="LOG IN"
                        func={ () => loginUser() }
                    />

                    <BottomFormComponent 
                        type="login"
                    />

                </KeyboardAvoidingView>

            </View>
        </>
    )
}
