
import { View, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { SerachBarHeaderComponent } from "../../components/Users-Comp/Header/search-bar-header.component";

export const CategoryViewScreen = ({ route }) => {

    const { title } = route.params;

    console.log(title);

    return (
        <SafeAreaView  style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <SerachBarHeaderComponent 
                    header="All Categories"
                />
            </View>
        </SafeAreaView>
    )
}
