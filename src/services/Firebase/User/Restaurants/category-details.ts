
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

interface Cate {
    item_category: string,
    item_delivery: string,
    item_details: string,
    item_img: string,
    item_name: string,
    item_price: any
}

const getSpecificCategoryData = (
    uid: string, inner_id: string, category: any, setCategory: React.Dispatch<React.SetStateAction<Cate>>
) => {
    onValue(
        ref(database, `Category/${category}/${uid}/${inner_id}`),
        ( snapshot ) => {
            setCategory(snapshot.val());
            // console.log(snapshot.val());
        }
    );
}

export {
    getSpecificCategoryData
}
