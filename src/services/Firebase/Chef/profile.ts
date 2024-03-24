
// Firebase Database
import { database } from "../../../firebaseConfig";
import { ref, onValue, set } from 'firebase/database';

const becomeAdmin = (id: string, userRecord: any) => {
    const userInfo = {
        username: userRecord.username ? userRecord.username : "",
        bio: userRecord.bio ? userRecord.bio : "",
        email: userRecord.email ? userRecord.email : "",
        photoURL: userRecord.photoURL ? userRecord.photoURL : "",
        phone: userRecord.phoneNumber ? userRecord.phoneNumber : ""
    };

    set(
        ref(database, `Users/${id}`),
        { userId: id, isChef: true, userInfo }
    )
}

export {
    becomeAdmin
}
