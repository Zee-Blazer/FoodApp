
// Firebase Authentication
import { auth } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, push, orderByChild, equalTo, query, get, set } from 'firebase/database';

const displayUser = () => {
    console.log(auth.currentUser);
}

const newUser = (username: string, email: string, id: string) => {
    console.log("Working")
    set(
        ref( database, `Users/${id}` ),
        { userId: id, isChef: false, userInfo: { username, email } }
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
}

const updateProfileDetails = (
        username: string, 
        email: string, 
        phone: any, 
        bio: string, 
        userId: string, 
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
    console.log("Clicked");
    updateProfile(
        auth.currentUser, {
            displayName: username,
            email: email
        }
    )
        .then( res => {
            console.log("Working fine" + userId);
            set(
                ref(database, `Users/${userId}/userInfo`),
                { username, email, phone, bio }
            )
            .then( doc => {
                console.log("Working fine " + doc)
                setIsLoading(false);
            } )
            .catch( err => console.log("There was an error: " + err) )
        } )
        .catch( err => console.log("Error: " + err) );

}

export {
    newUser,
    displayUser,
    updateProfileDetails
};
