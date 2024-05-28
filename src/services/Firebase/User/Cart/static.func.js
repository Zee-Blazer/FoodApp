
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push, update, remove } from 'firebase/database';

const getStaticData = (data) => {
    let count = 0;

    data.forEach( obj => {
        onValue(
            ref(database, `Category/${obj.path}`),
            ( snapshot ) => {
                count += ( snapshot.val().item_price * obj.num )
                // console.log(snapshot.val().item_price * obj.num);
            }
        )
    } )
    
    return count;
}

export {
    getStaticData
}
