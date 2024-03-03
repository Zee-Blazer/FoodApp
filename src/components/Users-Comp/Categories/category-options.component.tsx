
import { Text, Image, TouchableOpacity } from 'react-native';

// Styling
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    snackName: string,
    start: boolean,
    uri: string
}

export const CategoryOptionsComponent: React.FC<Props> = ({ snackName, start, uri }) => {

    return (
        <TouchableOpacity 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.cateStoreItem ,
                homeUsersScreenStyles.boxShadow,
                start ? homeUsersScreenStyles.specialBgColor : homeUsersScreenStyles.specialBgWhite, 
            ]}
        >
            <Image 
                source={ uri } 
                style={ homeUsersScreenStyles.displayImg }
            />
            <Text style={ homeUsersScreenStyles.cateStoreItemText }>{ snackName }</Text>
        </TouchableOpacity>
    )
}
