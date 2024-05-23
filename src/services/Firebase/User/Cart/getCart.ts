
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push, update } from 'firebase/database';

const getTotalCartItems = (uid: string, setTotal: React.Dispatch<React.SetStateAction<number>>) => {
    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            if(snapshot.exists()){
                setTotal(Object.values(snapshot.val()).length);
            }
            else{
                setTotal(0);
            }
        }
    )
}

const getAllCartItems = (uid: string, setDataStore: React.Dispatch<React.SetStateAction<any[]>>) => {
    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            const data = [];
            snapshot.forEach( ( childSnapshot ) => {
                data.push({ key: childSnapshot.key, ...childSnapshot.val() })
            } )
            setDataStore(data);
        }
    )
}

const getCartItem = (
    path: any,
    setItemUri: React.Dispatch<React.SetStateAction<any>>,
    setItemPrice: React.Dispatch<React.SetStateAction<any>>,
    setItemRestaurant: React.Dispatch<React.SetStateAction<any>>,
    setItemName: React.Dispatch<React.SetStateAction<any>>
) => {
    onValue(
        ref(database, `Category/${path}`),
        (snapshot) => {
            setItemUri(snapshot.val().item_img);
            setItemPrice(snapshot.val().item_price);
            setItemRestaurant(snapshot.val().restaurant_info.restaurant_name);
            setItemName(snapshot.val().item_name);
        }
    )
}

const addItemAndIncrement = () => {
    // push(
    //     ref(database, `Database/test`),
    //     {
    //         name: "James",
    //         password: "MagicCard",
    //         age: 24
    //     }
    // )
    console.log("Working");
    update(
        ref(database, `Database/test/-Ny_knIVIomvbjp_WISE`),
        {
            // name: "James",
            // password: "MagicCard",
            age: 27
        }
    )
}

const subItemAndDecrement = () => {}

const deleteItemFromCart = () => {}

export {
    getAllCartItems,
    getTotalCartItems,
    getCartItem,
    addItemAndIncrement,
    subItemAndDecrement,
    deleteItemFromCart
}
