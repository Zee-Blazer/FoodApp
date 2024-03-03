
import { View, Text, Image, TouchableOpacity } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { ordersUserStyles } from "../../../styles/screens/orders-users.styles";

interface Props {
    type: string,
    resName: string,
    amount: number,
    details: string,
    completed: boolean
    status: string
}

export const OrderItemComponent: React.FC<Props> = ({ type, resName, amount, details, completed, status }) => {

    return (
        <View style={ ordersUserStyles.orderItemcomp }>
            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    ordersUserStyles.orderTagTxtStatusCont 
                ]}
            >
                <Text style={[ ordersUserStyles.orderTagTxtStatus ]}>
                    { type }
                </Text>
                <Text 
                    style={[ 
                        ordersUserStyles.orderTagTxtStatus, 
                        ordersUserStyles.orderTagTxtStatusColor,
                        status !== "Completed" && { color: "red" }
                    ]}
                >{ completed && status }</Text>
            </View>
            <View style={[ homeUsersScreenStyles.flexDisplay,  ]}>
                <Image 
                    source={ require('../../../../assets/Images/Pizza/pizza1.jpg') }
                    style={ ordersUserStyles.orderListItemImg }
                />

                <View style={{ flex: 1 }}>
                    <View 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay, 
                            homeUsersScreenStyles.flexDesign,
                            { marginTop: 8 }
                        ]}
                    >
                        <Text 
                            style={ ordersUserStyles.orderBoldTxt }
                        >{ resName }</Text>
                        <Text
                            style={ ordersUserStyles.highlightCode }
                        >#162432</Text>
                    </View>

                    <View 
                        style={[
                            homeUsersScreenStyles.flexDisplay,
                            ordersUserStyles.orderDetailsCont
                        ]}
                    >
                        <Text
                            style={[ 
                                ordersUserStyles.orderBoldTxt,
                            ]}
                        >${ amount }</Text>
                        <Text style={ ordersUserStyles.borderRightTxt }>|</Text>
                        <Text>{ details }</Text>
                    </View>
                </View>

            </View>

            <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                <TouchableOpacity 
                    style={ 
                        completed ? 
                            [ ordersUserStyles.orderItemBtn, ordersUserStyles.orderItemBtnLeft ]
                        : 
                            [ ordersUserStyles.orderItemBtn, ordersUserStyles.orderItemBtnRight ]
                    }
                >
                    <Text 
                        style={
                            completed ?
                                [ ordersUserStyles.formTxtBtn, { color: "#FF7622" } ]
                            :
                                [ ordersUserStyles.formTxtBtn, { color: "white" }]
                        }
                    >{ completed ? "Rate" : "Track Order" }</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={
                        completed ? 
                            [ ordersUserStyles.orderItemBtn, ordersUserStyles.orderItemBtnRight ]
                        :
                            [ ordersUserStyles.orderItemBtn, ordersUserStyles.orderItemBtnLeft ]
                    }
                >
                    <Text 
                        style={
                            completed ?
                                [ ordersUserStyles.formTxtBtn, { color: "white" }]
                            :
                                [ ordersUserStyles.formTxtBtn, { color: "#FF7622" } ]
                        }
                    >{ completed ? "Re-Order" : "Cancel" }</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
