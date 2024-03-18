
// Firebase Authentication
import { auth } from "../../firebaseConfig";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, push, orderByChild, equalTo } from 'firebase/database';

const displayUser = () => {
    console.log(auth.currentUser);
}

const newUser = (username: string, email: string, id: string) => {
    push(
        ref( database, `User` ),
        { userId: id, userInfo: { username, email } }
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
}

const getSpecificUser = (userId: string) => {
    
}

export {
    newUser,
    displayUser
};
