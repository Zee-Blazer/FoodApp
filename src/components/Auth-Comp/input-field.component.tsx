
import { View, Text, TextInput } from 'react-native';

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { loginStyle } from '../../styles/screens/login-auth.styles';

interface Props {
    type: string,
    label: string,
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const InputFieldComponent: React.FC<Props> = ({ type, label, placeholder, value, setValue }) => {

    let template;

    switch(type){
        case "text": 
            template = (
                <View>
                    <Text style={ loginStyle.labelText }>{ label }</Text>
                    <TextInput 
                        placeholder={ placeholder } 
                        style={ loginStyle.textInputStyle }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />
                </View>
            );
            break;
        case "pass": 
            template = (
                <View>
                    <Text style={ loginStyle.labelText }>{ label }</Text>
                    <View style={ loginStyle.textInputStyle }>
                        <TextInput 
                            placeholder={ placeholder } //"* * * * * * * * * *" 
                            secureTextEntry={ true }
                            autoCapitalize="none"
                            autoCorrect={ false }
                            style={{ flex: 1 }}
                        />
                        { 
                            value && 
                            <>
                                { 
                                    true ? 
                                    <FontAwesome 
                                        name="eye" size={14} color="black" 
                                        style={ loginStyle.eyesIconStyle } 
                                    />
                                    :
                                    <FontAwesome 
                                        name="eye-slash" size={19} color="black" 
                                        style={ loginStyle.eyesIconStyle } 
                                    />
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
