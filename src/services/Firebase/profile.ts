
// Firebase Authentication
import { auth } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, push, orderByChild, equalTo, query, get, set } from 'firebase/database';

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
                .catch( err => {
                    console.log("There was an error: " + err);
                    setIsLoading(false);
                } )
            } )
            .catch( err => console.log("Error: " + err) );

}

export {
    updateProfileDetails
}
