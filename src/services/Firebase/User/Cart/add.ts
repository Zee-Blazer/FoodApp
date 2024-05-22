
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const addToCart = (uid: string, category: string, inner_id: string) => {

    console.log({uid, category, inner_id});
}

export {
    addToCart
}
