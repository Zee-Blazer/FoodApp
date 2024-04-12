
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set } from 'firebase/database';

interface Item {
    ownerId: string,
    restaurant_address: string,
    restaurant_logo: string,
    restaurant_name: string,
    restaurant_phone: any
}

const getAllRestaurantsForUser = (
    setData: React.Dispatch<React.SetStateAction<Item[]>>
) => {
    onValue( ref( database, `Restaurant` ), (snapshot) => {
        let newArr = [];

        Object.entries(snapshot.val()).forEach( ([key, value]) => {
            
            newArr.push(
                {
                    ownerId: key,
                    restaurant_address: value.restaurant_address,
                    restaurant_logo: value.restaurant_logo,
                    restaurant_name: value.restaurant_name,
                    restaurant_phone: value.restaurant_phone
                }
            )
            setData( newArr );
        } )
    } )
}

export {
    getAllRestaurantsForUser
}
