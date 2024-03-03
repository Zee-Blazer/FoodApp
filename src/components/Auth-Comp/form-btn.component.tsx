
import { Text, TouchableOpacity } from 'react-native';

// Styles
import { loginStyle } from '../../styles/screens/login-auth.styles';

interface Props {
    title: string,
    func: () => void
}

export const FormBtnComponent: React.FC<Props> = ({ title, func }) => {

    return (
        <TouchableOpacity 
            style={ loginStyle.submitBtn }
            onPress={ func }
        >
            <Text style={ loginStyle.submitBtnText }>{ title }</Text>
        </TouchableOpacity>
    )
}
