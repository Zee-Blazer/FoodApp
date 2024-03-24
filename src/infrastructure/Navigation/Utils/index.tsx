
import { createStackNavigator } from "@react-navigation/stack";

// Loading Screen
import { LoadingFoodApp } from "../../../screens/Utils/loading";

const LoadingStack = createStackNavigator();

export const LoadingNavigation = () => {

    return (
        <LoadingStack.Navigator>
            <LoadingStack.Screen name="Loading" component={ LoadingFoodApp } />
        </LoadingStack.Navigator>
    )
}
