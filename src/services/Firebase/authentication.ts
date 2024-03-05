
// Firebase Authentication imports
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signUpWithEmailPassword = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( res => {
        console.log(res);
    } )
    .catch( err => console.log(err) );
}
