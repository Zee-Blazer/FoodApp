
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

interface List {
    item_category: string,
    item_img: string,
    item_name: string
}

interface Item {
    item: List[],
    restaurant_address: string,
    restaurant_logo: string,
    restaurant_name: string,
    restaurant_phone: any
}

interface Cate {
    item_category: string,
    item_img: string,
    item_name: string
}

// Get specific restaurant details
const getRestaurantInfo = (uid: string, setData: React.Dispatch<React.SetStateAction<Item[]>>) => {
    onValue(
        ref(database, `Restaurant/${uid}`),
        ( snapshot ) => {
            setData(snapshot.val());
        }
    )
}

const getRestaurantItems = (uid: string, setList: React.Dispatch<React.SetStateAction<Item[]>>) => {
    onValue(
        ref(database, `Restaurant/${uid}/item`),
        ( snapshot ) => {
            let data: any = [];
            snapshot.forEach( (childSnapshot) => {
                data.push(childSnapshot.val())
            } )
            setList(data);
        }
    )
}


export {
    getRestaurantInfo,
    getRestaurantItems
}
