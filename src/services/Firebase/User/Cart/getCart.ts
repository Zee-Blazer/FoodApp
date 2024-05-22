
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const getAllCartItems = (uid: string) => {
    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            console.log(snapshot.val());
        }
    )
}

export {
    getAllCartItems
}
