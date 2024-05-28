
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push, update, remove } from 'firebase/database';

const getSpecificData = () => {
    console.log("Working fine");
}

export {
    getSpecificData
}
