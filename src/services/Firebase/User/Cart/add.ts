
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const addToCart = (uid: string, path: string) => {

    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            if(snapshot.exists()){
                const data = Object.values(snapshot.val());
                const checker = data.find( (e: any) => e.path === path );
                console.log(checker)
            }
            else{
                console.log("No snapshot")
            }
        }
    );
    // push(
    //     ref(database, `Cart/${uid}`),
    //     {
    //         uid, path, num: 1
    //     }
    // )
}

export {
    addToCart
}
