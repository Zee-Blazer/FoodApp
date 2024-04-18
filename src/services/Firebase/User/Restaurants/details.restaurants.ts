
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, limitToFirst, query } from 'firebase/database';

// The Interface for the type of data that would be accepted in the TS code 
interface Item {
    ownerId: string,
    restaurant_address: string,
    restaurant_logo: string,
    restaurant_name: string,
    restaurant_phone: any
    item_obj: any
}

// The function helps get all the info for all restaurants
const getAllRestaurantsForUser = async (
    setData: React.Dispatch<React.SetStateAction<Item[]>>
) => {

    // Collect the restaurant data from the restaurant 
    // collection and stored it in the setData array 
    // with limit to the data collected
    onValue( query(ref( database, `Restaurant` ), limitToFirst(4)), (snapshot) => {
        let newArr = [];

        // Breaking the obj from the DB into a simple list
        Object.entries(snapshot.val()).forEach( ([key, value]) => {
            
            newArr.push(
                {
                    ownerId: key,
                    restaurant_address: value.restaurant_address,
                    restaurant_logo: value.restaurant_logo,
                    restaurant_name: value.restaurant_name,
                    restaurant_phone: value.restaurant_phone,
                    item_obj: value.item
                }
            )
            setData( newArr );
        } )
    } )

}

export {
    getAllRestaurantsForUser
}
