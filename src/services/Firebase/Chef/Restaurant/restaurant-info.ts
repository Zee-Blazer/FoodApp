
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, update } from 'firebase/database';

// Firebase Storage
import { storage } from '../../../../firebaseConfig';
import { ref as real, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const restaurantDetailsInfoDB = (
    userId: string, 
    name: string, 
    address: string, 
    phone: any,
    description: string,
    image: any,
    result: any,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setProceed: React.Dispatch<React.SetStateAction<boolean>>
) => {
    
    if(image != null){
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

        const storageRef = real(storage, `Restaurant/Details/${filename}`);

        const uploadTask = uploadBytesResumable(storageRef, result);

        uploadTask.on(
            "state_changed", 
            snapshot => {}, 
            err => {}, 
            async () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then( res => {
                        set(
                            ref( database, `Restaurant/${userId}` ),
                            { 
                                restaurant_name: name, 
                                restaurant_address: address, 
                                restaurant_phone: phone,
                                restaurant_logo: res,
                                restaurant_description: description
                            }
                        )
                        setIsLoading(false);
                        setProceed(true);
                    } )
                    .catch( err => {
                        console.log(err);
                        setIsLoading(false);
                    } );
            }
        )
    }
    else{
        update(
            ref( database, `Restaurant/${userId}` ),
            { 
                restaurant_name: name, 
                restaurant_logo: result, 
                restaurant_address: address, 
                restaurant_phone: phone,
                restaurant_description: description
            }
        )
        setProceed(true);
    }

};

const restaurantInfoDetails = ( 
    userId: string, setRestaurant: React.Dispatch<React.SetStateAction<any>> 
) => {
    onValue(
        ref( database, `Restaurant/${userId}` ),
        (snapshot) => {
            setRestaurant(snapshot.val());
        }
    )
}

export {
    restaurantDetailsInfoDB,
    restaurantInfoDetails
}
