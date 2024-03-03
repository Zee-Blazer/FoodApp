
import { View, Text } from "react-native";

// Styling
import { restaurantViewUsersStyles } from "../../../styles/screens/restaurant-view-users.styles";
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { FoodOptionComponent } from "./food-option.component";
import { CoverBgContentComponent } from "./cover-bg-content.component";

// Component 
import { CoverBgHeaderComponent } from "./cover-bg-header.component";
import { FormBtnComponent } from "../../Auth-Comp/form-btn.component";

interface Props {
    func: () => void
}

export const CoverBgContainerComponent: React.FC<Props> = ({ func }) => {

    const offers = [
        { item: "Delivery", active: false },
        { item: "Pick Up", active: false },
        { item: "Offer", active: false },
        { item: "Online payment available", active: false }
    ];

    const deliveryTime = [
        { item: "10-15 min", active: true },
        { item: "20 min", active: false },
        { item: "30 min", active: false }
    ];

    const pricing = [
        { item: "$", active: false },
        { item: "$$", active: true },
        { item: "$$$", active: false }
    ]

    return (
        <View style={ restaurantViewUsersStyles.coverBgContainer } >
            <View style={ restaurantViewUsersStyles.insideBgContainer }>

                <CoverBgHeaderComponent 
                    func={ func }
                />

                <CoverBgContentComponent />

                <View style={ restaurantViewUsersStyles.uniqueCont }>
                    <Text style={ restaurantViewUsersStyles.littleOptHeaderTxt }>DELIVER TIME</Text>

                    <View 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay, 
                            { marginTop: 12, flexWrap: "wrap" } 
                        ]}
                    >
                        <FoodOptionComponent 
                            itemName="10-15 min"
                            active={ true }
                        />
                        <FoodOptionComponent 
                            itemName="20 min"
                            active={ false }
                        />
                        <FoodOptionComponent 
                            itemName="30 min"
                            active={ false }
                        />
                    </View>
                </View>

                <View style={ restaurantViewUsersStyles.uniqueCont }>
                    <Text style={ restaurantViewUsersStyles.littleOptHeaderTxt }>PRICING</Text>

                    <View 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay, 
                            { marginTop: 12, flexWrap: "wrap" } 
                        ]}
                    >
                        <FoodOptionComponent 
                            itemName="$"
                            active={ false }
                        />
                        <FoodOptionComponent 
                            itemName="$$"
                            active={ true }
                        />
                        <FoodOptionComponent 
                            itemName="$$$"
                            active={ false }
                        />
                    </View>
                </View>

                <View style={ restaurantViewUsersStyles.uniqueCont }>
                    <Text style={ restaurantViewUsersStyles.littleOptHeaderTxt }>RATING</Text>

                    <View 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay, 
                            { marginTop: 12, flexWrap: "wrap" } 
                        ]}
                    >
                        <FoodOptionComponent 
                            itemName="$"
                            active={ false }
                        />
                        <FoodOptionComponent 
                            itemName="$$"
                            active={ true }
                        />
                        <FoodOptionComponent 
                            itemName="$$$"
                            active={ false }
                        />
                    </View>
                </View>

                <FormBtnComponent 
                    title="FILTER"
                    func={ () => console.log("Hello") }
                />

            </View>
        </View>
    )
}
