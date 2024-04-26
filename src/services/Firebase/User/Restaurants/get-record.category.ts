
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, limitToFirst, query } from 'firebase/database';

const getSpecificCategoryRecord = (
    uid: any, inner_id: any, category: any,
    setItemUri: React.Dispatch<React.SetStateAction<any>>,
    setItemPrice: React.Dispatch<React.SetStateAction<any>>,
    setItemRestaurant: React.Dispatch<React.SetStateAction<any>>,
    setItemName: React.Dispatch<React.SetStateAction<any>>
) => {
    onValue(
        ref(database, `Category/${category}/${uid}/${inner_id}`),
        (snapshot) => {
            setItemUri(snapshot.val().item_img);
            setItemPrice(snapshot.val().item_price);
            setItemRestaurant(snapshot.val().restaurant_info.restaurant_name);
            setItemName(snapshot.val().item_name);
        }
    )
}

export { getSpecificCategoryRecord }
