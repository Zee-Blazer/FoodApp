
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

// Icon
import { Ionicons } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { loginStyle } from '../../styles/screens/login-auth.styles';

interface Props {
    title: string,
    subtitle: string,
    extra: string, 
    back: boolean
}

export const TopImageComponent: React.FC<Props> = ({ title, subtitle, extra, back }) => {

    const navigation = useNavigation();

    return (
        <ImageBackground 
            source={ require('../../../assets/Images/BG-Asset.png') }
            imageStyle={ loginStyle.darkBg }
            style={ loginStyle.upperBg }
        >
            <View style={ loginStyle.headerBox }>
                {
                    back &&
                    <TouchableOpacity 
                        style={ loginStyle.backOptBtn } 
                        onPress={ () => navigation.goBack() }
                    >
                        <Ionicons 
                            name="chevron-back-sharp" size={32} color="#5E616F" 
                            style={{ marginTop: 3, marginLeft: 3 }} 
                        />
                    </TouchableOpacity>
                }

                <Text style={ loginStyle.headerText }>{ title }</Text>
                <Text style={ loginStyle.headerPara }>{ subtitle }</Text>
                {  
                    extra.length > 1 &&
                    <Text style={ loginStyle.headerExtra }>example@gmail.com</Text>
                }
            </View>
        </ImageBackground>
    )
}
