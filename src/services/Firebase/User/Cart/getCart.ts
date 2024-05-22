
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const getAllCartItems = (uid: string) => {
    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            const data = [];
            snapshot.forEach( ( childSnapshot ) => {
                data.push({ key: childSnapshot.key, ...childSnapshot.val() })
            } )
            console.log(data);
        }
    )
}

export {
    getAllCartItems
}
