
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const addData = (uid: string, path: string) => {
    push(
        ref(database, `Cart/${uid}`),
        {
            uid, path, num: 1
        }
    )
}

const addToCart = (uid: string, path: string) => {

    onValue(
        ref(database, `Cart/${uid}`),
        ( snapshot ) => {
            if(snapshot.exists()){
                // Created the data into an array form
                const data = Object.values(snapshot.val()); 
                
                // Check if the new item already exists
                const checker = data.filter( (e:any) => e.path == path ); 

                // If the new item doesn't exist, then add to cart
                if(checker.length == 0){
                    addData(uid, path);
                }
            }
            else{
                addData(uid, path);
            }
        }
    );
    
}

export {
    addToCart
}
