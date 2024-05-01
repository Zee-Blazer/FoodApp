
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, limitToFirst, query } from 'firebase/database';

const getSpecificRestaurant = (
    UID: string, 
    setResName: React.Dispatch<React.SetStateAction<any>>,
    setResUri: React.Dispatch<React.SetStateAction<any>>
) => {
    onValue(
        ref(database, `Restaurant/${UID}`),
        (snapshot) => {
            setResName(snapshot.val().restaurant_name);
            setResUri(snapshot.val().restaurant_logo);
        }
    )
}

export {
    getSpecificRestaurant
}
