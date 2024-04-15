
// Firebase Database
import { database } from "../../../../firebaseConfig";
import { ref, set, push, setPriority } from 'firebase/database';

// Firebase Storage
import { storage } from "../../../../firebaseConfig";
import { ref as real, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const createNewCate = (
    id: string,
    name: string, 
    image: any, 
    result: any, 
    price: any, 
    deliveryType: any,
    category: any,
    details: any,
    restaurant_name: any,
    restaurant_logo: any,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setProceed: React.Dispatch<React.SetStateAction<boolean>>
) => {
    // Condition to check for the image availiability 
    if(image != null){
        // Getting the real file path to the selected image
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

        // The directory to store the data in the Firebase Storage
        const storageRef = real(storage, `Category/${category}/${filename}`);

        // Upload the buffer file and send a response so we can get the 
        // image URI
        const uploadTask = uploadBytesResumable(storageRef, result);
        uploadTask.on(
            "state_changed",
            ( snapshot ) => {},
            ( err ) => { 

                console.log(err);
                setIsLoading(false);
            },
            async () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then( (downloadUrl) => {
                    push(
                        ref(database, `Category/${category}/${id}`),
                        {
                            item_name: name,
                            item_img: downloadUrl,
                            item_price: price,
                            item_delivery: deliveryType,
                            item_catergory: category,
                            item_details: details,
                            restaurant_info: {
                                restaurant_logo,
                                restaurant_name
                            }
                        }
                    )
                    .then( res => {
                        push(
                            ref(database, `Restaurant/${id}/item`),
                            {
                                item_name: name,
                                item_img: downloadUrl,
                                item_catergory: category,
                            }
                        )
                        setIsLoading(false);
                        setProceed(true);
                    } )
                    .catch( err => {
                        setIsLoading(false);
                        console.log(err)
                    } )
                    
                } )
            }
        )
    }
}
