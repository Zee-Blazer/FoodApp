import React, { useState } from 'react';

import { Text, View, TextInput, KeyboardAvoidingView } from "react-native";

// Styles
import { loginStyle } from "../../styles/screens/login-auth.styles";

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component";
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component';

export const OtpVerificationScreen = () => {

    const [otp, setOtp] = useState<string>('');
    const inputRefs: React.RefObject<TextInput>[] = Array.from({ length: 5 }, () => React.createRef<TextInput>());


    const handleOtpChange = (text: string, index: number) => {
        // Limit input to one character
        if (text.length === 1 && index < 4) {
          inputRefs[index + 1].current?.focus();
        }
    
        // Update the OTP state
        const updatedOtp = otp.split('');
        updatedOtp[index] = text;
        setOtp(updatedOtp.join(''));
      };
    
      const handleBackspace = (index: number) => {
        // Move focus to the previous input on backspace
        if (index > 0) {
          inputRefs[index - 1].current?.focus();
        }
    
        // Clear the current input
        const updatedOtp = otp.split('');
        updatedOtp[index] = '';
        setOtp(updatedOtp.join(''));
      };

    return (
        <>
            <TopImageComponent 
                title="Verification"
                subtitle="We have sent a code to your email"
                extra="example@gmail.com"
                back={ true }
            />

            <View style={ loginStyle.formContainer }>
                <KeyboardAvoidingView>

                    <View style={ loginStyle.verifyCountCont }>
                        <Text style={ loginStyle.verifyCodeText }>Code</Text>
                        <Text><Text style={ loginStyle.verifyBoldText }>Resend</Text> in.50sec</Text>
                    </View>

                    <View style={ loginStyle.otpContainer }>
                        {Array.from({ length: 5 }, (_, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={ loginStyle.otpInput }
                            keyboardType="numeric"
                            maxLength={1}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            value={otp[index]}
                        />
                        ))}
                    </View>

                    {/* <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Submitted OTP:', otp)}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity> */}

                    <FormBtnComponent 
                        title='VERIFY'
                        func={ () => {} }
                    />

                </KeyboardAvoidingView>
            </View>
        </>
    )
}
