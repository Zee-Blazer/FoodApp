import React, { useState, useEffect useContext } from 'react';

import { KeyboardAvoidingView, ScrollView } from "react-native";

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Firebase local function
// import { signUpWithEmailPassword } from '../../services/Firebase/authentication';

// Styling
import { loginStyle } from "../../styles/screens/login-auth.styles";

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component"; // The Top bar image and write up
import { BottomFormComponent } from "../../components/Auth-Comp/bottom-form.component"; // The bottom Sign In options
import { InputFieldComponent } from "../../components/Auth-Comp/input-field.component"; // Simplify the TextInput field
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component'; // Simplified Button

export const SignupScreen = () => {

    // Context
    const { isLoading, errMsg, signUpWithEmailPassword } = useContext(AuthContext);

    const [err, setErr] = useState<string>("");

    const [name, setName] = useState<string>('');
    const [nameErr, setNameErr] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [emailErr, setEmailErr] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordErr, setPasswordErr] = useState<string>("");
    const [retryPassword, setRetryPassword] = useState<string>("");
    const [retryPasswordErr, setRetryPasswordErr] = useState<string>("");

    useEffect( () => {
        setErr(errMsg);
    } )

    const createUser = async () => {
        const proceed = email.length > 0 && name.length > 0 && password.length > 0 && retryPassword.length > 0;
    
        setNameErr(""); setEmailErr(""); setPasswordErr(""); setRetryPasswordErr(""); setErr("");

        if( proceed ) {

            if(password != retryPassword){
                setPasswordErr("Password mismatch");
                setRetryPasswordErr("Password mismatch");
                setErr("Password mismatch... Please check the passwords you typed");
            }
            else{
                setErr(errMsg);
                signUpWithEmailPassword(email, password);
            }

        }
        else if(name.length < 1){
            setNameErr("Fill in name");
            setErr("Fill all inputs");
        }
        else if(email.length < 1){
            setEmailErr("Fill in your email");
            setErr("Fill all inputs");
        }
        else if(password.length < 1){
            setPasswordErr("Fill in your password");
            setErr("Fill all inputs");
        }
        else if(retryPassword.length < 1){
            setRetryPasswordErr("Fill retype password");
            setErr("Fill all inputs");
        }

    }

    return (
        <>
            <TopImageComponent 
                title="Sign up"
                subtitle="Please sign up to get started"
                extra=""
                back={ true }
                err={ err }
            />

            <ScrollView style={ loginStyle.scrollFormContainer }>

                <KeyboardAvoidingView>

                    <InputFieldComponent 
                        type="text"
                        label='NAME'
                        placeholder='John Doe'
                        value={ name }
                        setValue={ setName }
                        setErr={ nameErr }
                    />
                    
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

                    <InputFieldComponent 
                        type="pass"
                        label='RE-TYPE PASSWORD'
                        placeholder="* * * * * * * * * *" 
                        value={ retryPassword }
                        setValue={ setRetryPassword }
                        setErr={ retryPasswordErr }
                    />

                    <FormBtnComponent 
                        title="SIGN UP"
                        loading={ isLoading }
                        func={ () => createUser() }
                    />

                    <BottomFormComponent 
                        type="signup"
                    />

                </KeyboardAvoidingView>

            </ScrollView>

        </>
    )
}
