
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, update } from 'firebase/database';

const restaurantDetailsInfoDB = (
    userId: string, 
    name: string, 
    address: string, 
    phone: any
) => {
    set(
        ref( database, `Restaurant_Info/${userId}` ),
        { restaurant_name: name, restaurant_address: address, restaurant_phone: phone }
    )
}

export {
    restaurantDetailsInfoDB
}
