
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, update } from 'firebase/database';

const restaurantDetailsInfoDB = () => {
    // set(
    //     ref( database, `Record/smart` ),
    //     { 
    //         item: "Something Item", 
    //         deals: {
    //             item1: "Item 1", 
    //             item2: "Item 2", 
    //             item3: "Item 3"
    //         } 
    //     }
    // )

    update(
        ref( database, `Record/smart/deals/item2` ),
        { item2: "Item 4" }
    )
        .then( doc => console.log(doc) )
        .catch( err => console.log(err) )
}

export {
    restaurantDetailsInfoDB
}
