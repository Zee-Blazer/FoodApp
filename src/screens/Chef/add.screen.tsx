
import { View, Text, SafeAreaView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Component
import { ChefAddHeaderComponent } from "../../components/Chef-Comp/Add/add-header.component";
import { AddFormDataContainerComponent } from "../../components/Chef-Comp/Add/add-form-data-container.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const ChefAddScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <ChefAddHeaderComponent />

                <AddFormDataContainerComponent />

            </View>

            <View style={[ homeChefScreenStyles.horiSpacer, { marginBottom: 54 } ]}>
                <FormBtnComponent 
                    title="SAVE"
                    func={ () => {} }
                />
            </View>
        </SafeAreaView>
    )
}
