
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// Styles
import { loginStyle } from '../../styles/screens/login-auth.styles';

interface Props {
    title: string,
    loading?: boolean,
    func: () => void
}

export const FormBtnComponent: React.FC<Props> = ({ title, func, loading }) => {

    return (
        <TouchableOpacity 
            style={[ loginStyle.submitBtn, loading && loginStyle.loadingSubmitBtn ]}
            onPress={ func }
        >
            { loading && <ActivityIndicator size="small" color="#FFFFFF" style={{ marginRight: 14 }} /> }
            <Text style={ loginStyle.submitBtnText }>{ title }</Text>
        </TouchableOpacity>
    )
}
