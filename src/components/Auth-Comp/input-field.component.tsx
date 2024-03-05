import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { loginStyle } from '../../styles/screens/login-auth.styles';

interface Props {
    type: string,
    label: string,
    placeholder: string,
    value: string,
    setErr?: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const InputFieldComponent: React.FC<Props> = ({ type, label, placeholder, value, setValue, setErr }) => {

    const [iconDisplay, setIconDisplay] = useState<boolean>(true);

    let template;

    const changeIcon = () => setIconDisplay(!iconDisplay);

    switch(type){
        case "text": 
            
            template = (
                <View>
                    <Text style={ loginStyle.labelText }>{ label }</Text>
                    { setErr && <Text style={ loginStyle.errText }>{ setErr }</Text> }
                    <TextInput 
                        placeholder={ placeholder } 
                        style={
                            [ 
                                loginStyle.textInputStyle, 
                                setErr != undefined && setErr.length > 1 && 
                                loginStyle.textErrInputStyle 
                            ]
                        }
                        autoCapitalize="none"
                        autoCorrect={ false }
                        onChangeText={ setValue }
                    />
                </View>
            );
            break;
        case "pass": 
            template = (
                <View>
                    <Text style={ loginStyle.labelText }>{ label }</Text>
                    { setErr && <Text style={ loginStyle.errText }>{ setErr }</Text> }
                    <View style={
                        [ 
                            loginStyle.textInputStyle,  
                            setErr != undefined && setErr.length > 1 && 
                            loginStyle.textErrInputStyle 
                        ]
                    }>
                        <TextInput 
                            placeholder={ placeholder } //"* * * * * * * * * *" 
                            secureTextEntry={ iconDisplay }
                            autoCapitalize="none"
                            autoCorrect={ false }
                            style={ { flex: 1, color: "#32343E" } } 
                            onChangeText={ setValue }
                        />
                        { 
                            value.length > 0 && 
                            <>
                                { 
                                    !iconDisplay ? 
                                    <TouchableOpacity
                                        onPress={ changeIcon }
                                    >
                                        <FontAwesome 
                                            name="eye" size={14} color="black" 
                                            style={ loginStyle.eyesIconStyle } 
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={ changeIcon }
                                    >
                                        <FontAwesome 
                                            name="eye-slash" size={19} color="black" 
                                            style={ loginStyle.eyesIconStyle } 
                                        />
                                    </TouchableOpacity>
                                }
                            </> 
                        }
                    </View>
                </View>
            );
            break;
    }

    return (
        <>
            { template }
        </>
    )
}
