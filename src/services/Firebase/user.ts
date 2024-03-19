
// Firebase Authentication
import { auth } from "../../firebaseConfig";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, push, orderByChild, equalTo, query, get } from 'firebase/database';

const displayUser = () => {
    console.log(auth.currentUser);
}

const newUser = (username: string, email: string, id: string) => {
    push(
        ref( database, `Users` ),
        { userId: id, isChef: false, userInfo: { username, email } }
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
}

const getSpecificUser = (userId: string) => {
    const mainDB = ref(database, "User");

    get(mainDB)
        .then( snapshot => {
            snapshot.forEach( childSnapshot => {
                const record = childSnapshot.val();

                if(record.userId == userId){
                    console.log("Record found " + JSON.stringify(record));
                }
            } )
        } )
        .catch( err => console.log(err) );

}

export {
    newUser,
    displayUser,
    getSpecificUser
};
