
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import { Feather } from '@expo/vector-icons';

// Styling 
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    cateName: string,
    seeAll: boolean
}

export const CategoriesHeaderText: React.FC<Props> = ({ cateName, seeAll }) => {

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
                <TouchableOpacity>
                    <Text style={ homeUsersScreenStyles.cateSeeAllTxt }>
                        See All <Feather name="chevron-right" size={14} color="#A0A5BA" />
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}
