
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const getSpecificCategoryData = (uid: string, inner_id: string, category: any) => {
    onValue(
        ref(database, `Category/${category}/${uid}/${inner_id}`),
        ( snapshot ) => {
            console.log(snapshot.val());
        }
    );
}

export {
    getSpecificCategoryData
}
