
// Firebase Authentication
import { auth } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";

// Firebase Database
import { database } from "../../firebaseConfig";
import { ref, push, orderByChild, equalTo, query, get, set } from 'firebase/database';

// Firebase Storage
import { storage } from "../../firebaseConfig";
import { ref as real, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const updateProfileDetails = (
    username: string, 
    email: string, 
    phone: any, 
    bio: string, 
    userId: string, 
    image: any,
    result: any,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {

    if(image !== null){
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

        const storageRef = real(storage, `Profile/${filename}`);

        const uploadTask = uploadBytesResumable(storageRef, result);
        uploadTask.on(
            "state_changed",
            (snapshot) => { },
            (err) => { console.log(err) },
            async () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadUrl) => {
                        
                        updateProfile(
                            auth.currentUser, {
                                displayName: username,
                                email: email,
                                photoURL: downloadUrl
                            }
                        )
                            .then( res => {
                                set(
                                    ref(database, `Users/${userId}/userInfo`),
                                    { username, email, phone, bio, photoURL: downloadUrl }
                                )
                                .then( doc => {
                                    setIsLoading(false);
                                } )
                                .catch( err => {
                                    setIsLoading(false);
                                } )
                            } )
                            .catch( err => console.log("Error: " + err) );

                        setIsLoading(false);
                    })
                    .catch(err => console.log(err))
                
            }
        )
    }

    else{
        updateProfile(
            auth.currentUser, {
                displayName: username,
                email: email,
            }
        )
            .then( res => {
                set(
                    ref(database, `Users/${userId}/userInfo`),
                    { username, email, phone, bio }
                )
                .then( doc => {
                    setIsLoading(false);
                } )
                .catch( err => {
                    setIsLoading(false);
                } )
            } )
            .catch( err => console.log("Error: " + err) );

        setIsLoading(false);
    }

}

const uploadFile = (image: any, result: any) => {
    const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

        const storageRef = real(storage, `Profile/${filename}`);

        const uploadTask = uploadBytesResumable(storageRef, result);
        uploadTask.on(
            "state_changed",
            (snapshot) => { },
            (err) => { console.log(err) },
            async () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadUrl) => {
                        console.log(downloadUrl)
                    })
                    .catch(err => console.log(err))
                
            }
        )
}

export {
    updateProfileDetails,
    uploadFile
}
