
// Firebase Authentication
import { auth } from "../../firebaseConfig";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, push } from 'firebase/database';

const displayUser = () => {
    console.log(auth.currentUser);
}

const newUser = (username: string, email: string) => {
    push(
        ref( database, `User` ),
        { username, email }
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
}

export {
    newUser
};
