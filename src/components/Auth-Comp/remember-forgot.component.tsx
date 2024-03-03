
import { View, Text } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { loginStyle } from '../../styles/screens/login-auth.styles';

export const RememberForgotComponent = () => {

    const navigation = useNavigation();

    return (
        <View style={ loginStyle.bottomFormRequest }>
            <View>
                {/* <CheckBoxBase value={ false } style={ loginStyle.checkBoxStyle } /> */}
                <Text style={ loginStyle.rememberCheckText }>Remember me</Text>
            </View>
            <Text 
                style={ loginStyle.forgotPasswordLink }
                onPress={ () => navigation.navigate("ForgotPassword") }
            >Forgot Password</Text>
        </View>
    )
}
