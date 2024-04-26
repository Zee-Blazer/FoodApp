
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styling
import { searchUsersStyles } from '../../../styles/screens/serach-users.styles';
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    resName: string,
    foodType: string,
    imgUri: string,
    amount: number,
    link: string,
    uid?: string,
    inner_id?: string
}

export const FastFoodComponent: React.FC<Props> = ({ resName, foodType, imgUri, amount, link }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={ () => link && navigation.navigate(link) }>
            <Image 
                source={ imgUri }
                style={ searchUsersStyles.foodPackImg }
            />
            <View style={[ searchUsersStyles.foodPackInfoCont, homeUsersScreenStyles.boxShadow ]}>
                <Text style={ searchUsersStyles.foodPackMainTxt }>{ foodType }</Text>
                <Text style={ searchUsersStyles.foodPackSubTxt }>{ resName }</Text>
                <View 
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        homeUsersScreenStyles.flexDesign,
                        { marginTop: 8 }
                    ]}
                >
                    <Text>${ amount }</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="add-circle" size={30} color="#F58D1D" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}
