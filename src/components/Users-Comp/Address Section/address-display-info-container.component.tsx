
import { View, FlatList } from "react-native";

// Component
import { AddressDisplayInfoComponent } from "./address-display-info.component";

export const AddressDisplayInfoContainerComponent = () => {

    const data = [
        { 
            iconUri: require('../../../../assets/Images/Icons/Home.png'), 
            title: "HOME", 
            subTitle: "2464 Royal Ln. Mesa, New Jersey 45463"
        },
        { 
            iconUri: require('../../../../assets/Images/Icons/Office.png'), 
            title: "Office", 
            subTitle: "3891 Ranchview Dr. Richardson, California 62639"
        }
    ]

    return (
        <View>

            <View style={{ marginTop: 24 }}></View>

            <FlatList 
                data={ data }
                renderItem={ ({ item }) => (
                    <AddressDisplayInfoComponent 
                        iconUri={ item.iconUri }
                        title={ item.title }
                        subTitle={ item.subTitle }
                    />
                ) }
                keyExtractor={ item => item.iconUri }
            />

        </View>
    )
}
