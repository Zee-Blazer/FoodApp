
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const getTotalCartItems = (uid: string, setTotal: React.Dispatch<React.SetStateAction<number>>) => {
    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            if(snapshot.exists()){
                setTotal(Object.values(snapshot.val()).length);
            }
            else{
                setTotal(0);
            }
        }
    )
}

const getAllCartItems = (uid: string, setDataStore: React.Dispatch<React.SetStateAction<any[]>>) => {
    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            const data = [];
            snapshot.forEach( ( childSnapshot ) => {
                data.push({ key: childSnapshot.key, ...childSnapshot.val() })
            } )
            setDataStore(data);
        }
    )
}

export {
    getAllCartItems,
    getTotalCartItems
}
