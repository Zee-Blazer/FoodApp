
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue } from 'firebase/database';

// Get specific restaurant details
const getRestaurantInfo = (uid: string) => {
    onValue(
        ref(database, `Restaurant/${uid}`),
        ( snapshot ) => {
            console.log(snapshot.val());
        }
    )
}

export {
    getRestaurantInfo
}
