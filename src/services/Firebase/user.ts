
// Firebase Authentication
import { auth } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, onValue, set } from 'firebase/database';

// Function is not being used now
const displayUser = () => {
    console.log(auth.currentUser);
}

const newUser = (username: string, email: string, id: string) => {
    set(
        ref( database, `Users/${id}` ),
        { userId: id, isChef: false, userInfo: { username, email } }
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
}

const userDetails = (id: string) => {
    onValue( ref( database, `Users/${id}` ), (snapshot) => {
        console.log(snapshot.val());
    } )
}

export {
    newUser,
    displayUser,
    userDetails
};
