
import { Text } from 'react-native';

// Styling
import { homeUsersScreenStyles } from '../../styles/screens/home-users.styles';

interface Props {
    name: string
}

export const Greetingscomponent: React.FC<Props> = ({ name }) => (
    <Text style={ homeUsersScreenStyles.greetingsFull }>
        Hey { name }, <Text style={ homeUsersScreenStyles.strong }>Good Afternoon</Text>
    </Text>
)
