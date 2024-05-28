
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push, update, remove } from 'firebase/database';

const getStaticData = (data) => {
    let count = 0;

    data.forEach( obj => console.log(obj) )
    console.log("Working fine", data);
}

export {
    getStaticData
}
