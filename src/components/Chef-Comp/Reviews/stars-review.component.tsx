
import { View } from "react-native";

// Icons
import { Entypo } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";

interface Props {
    rating: number
}

export const StarReviewComponent: React.FC<Props> = ({ rating }) => {

    const star1 = <View style={[  homeChefScreenStyles.flexDisplay, { marginBottom: 15 } ]}>
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
    </View>

    const star2 = <View style={[  homeChefScreenStyles.flexDisplay, { marginBottom: 15 } ]}>
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
    </View>

    const star3 = <View style={[  homeChefScreenStyles.flexDisplay, { marginBottom: 15 } ]}>
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
    </View>

    const star4 = <View style={[  homeChefScreenStyles.flexDisplay, { marginBottom: 15 } ]}>
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star-outlined" size={13} color="#FB6D3A" />
    </View>

    const star5 = <View style={[  homeChefScreenStyles.flexDisplay, { marginBottom: 15 } ]}>
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
        <Entypo name="star" size={13} color="#FB6D3A" />
    </View>

    let template;

    switch(rating){
        case 1: 
            template = star1;
            break;
        case 2:
            template = star2;
            break;
        case 3: 
            template = star3;
            break;
        case 4:
            template = star4;
            break;
        case 5: 
            template = star5;
            break;
    }

    return (
        <>
            { template }
        </>
    )
}
