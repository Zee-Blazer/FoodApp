
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import { Feather } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling 
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    cateName: string,
    seeAll: boolean,
    screen?: string
}

export const CategoriesHeaderText: React.FC<Props> = ({ cateName, seeAll, screen }) => {

    const navigation = useNavigation();

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                homeUsersScreenStyles.spaceTop 
            ]}
        >
            <Text style={ homeUsersScreenStyles.cateHeadTxt }>{ cateName }</Text>
            {
                seeAll &&
                <TouchableOpacity
                    onPress={ () => seeAll && screen && navigation.navigate(screen) }
                >
                    <Text style={ homeUsersScreenStyles.cateSeeAllTxt }>
                        See All <Feather name="chevron-right" size={14} color="#A0A5BA" />
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}
