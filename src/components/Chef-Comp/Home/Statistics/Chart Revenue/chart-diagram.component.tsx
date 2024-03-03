
import { View, TouchableOpacity, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../../styles/screens/home-chef.styles";

// Chart
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

// Dimensions
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const ChartDiagramComponent = () => {

    const data = {
        labels: ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        // legend: ["Rainy Days"] // optional
      };

    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => "#FB6D3A",//`rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={[ homeChefScreenStyles.statsContComp, { marginLeft: -50 } ]}>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
                withHorizontalLines={ false }
                withVerticalLines={ false }
                withHorizontalLabels={ false }
                onDataPointClick={ ({ value, dataset, getColor }) => {
                    console.log(value);
                } }
            />
        </View>
    )
}
