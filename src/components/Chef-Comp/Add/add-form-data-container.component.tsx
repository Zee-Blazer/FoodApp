
import { View, ScrollView, KeyboardAvoidingView } from "react-native";

// Components
import { ItemNameFormComponent } from "./Form/item-name-form.component";
import { ItemPhotoFormComponent } from "./Form/item-photo-form.component";
import { ItemPriceFormComponent } from "./Form/item-price-form.component";
import { ItemDetailsFormComponent } from "./Form/item-details-form.component";

export const AddFormDataContainerComponent = () => {

    return (
        <View>

            <ScrollView>
                
                <KeyboardAvoidingView>

                    <ItemNameFormComponent />

                    <ItemPhotoFormComponent />

                    <ItemPriceFormComponent />

                    <ItemDetailsFormComponent />

                </KeyboardAvoidingView>

            </ScrollView>

        </View>
    )
}
