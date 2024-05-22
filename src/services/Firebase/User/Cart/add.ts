
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const addToCart = (uid: string, path: string) => {
    push(
        ref(database, `Cart/${uid}`),
        {
            uid, path, num: 0
        }
    )
}

export {
    addToCart
}
