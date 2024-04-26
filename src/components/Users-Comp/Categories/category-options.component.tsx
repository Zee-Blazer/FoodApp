
import { Text, Image, TouchableOpacity } from 'react-native';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Params {
    title: any
}

interface Props {
    snackName: string,
    start: boolean,
    uri: string,
    screen?: any,
    params?: Params
}

export const CategoryOptionsComponent: React.FC<Props> = ({ 
    snackName, start, uri, screen, params 
}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.cateStoreItem ,
                homeUsersScreenStyles.boxShadow,
                start ? homeUsersScreenStyles.specialBgColor : homeUsersScreenStyles.specialBgWhite, 
            ]}
            onPress={ () => navigation.navigate(screen, { ...params }) }
        >
            <Image 
                source={ uri } 
                style={ homeUsersScreenStyles.displayImg }
            />
            <Text style={ homeUsersScreenStyles.cateStoreItemText }>{ snackName }</Text>
        </TouchableOpacity>
    )
}
