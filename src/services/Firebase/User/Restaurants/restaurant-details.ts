
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

// Get specific restaurant details
const getRestaurantInfo = (uid: string, setData: React.Dispatch<React.SetStateAction<Item[]>>) => {
    onValue(
        ref(database, `Restaurant/${uid}`),
        ( snapshot ) => {
            setData(snapshot.val());
        }
    )
}

const getUriTesting = () => {
    push(
        ref(database, "database"),
        { name: "Ganiyu Bolaji", age: 22 }
    ).then( res => console.log(res.toString().replace(/\/+$/, '').split('/')[res.toString().replace(/\/+$/, '').split('/').length - 1]) )
}

export {
    getRestaurantInfo,
    getUriTesting
}
