
// Firebase Database
import { database } from "../../../../firebaseConfig";
import { ref, set, push, setPriority } from 'firebase/database';

// Firebase Storage
import { storage } from "../../../../firebaseConfig";
import { ref as real, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const createNewCate = (
    id: string, // The Id of the user
    name: string, // The user name
    image: any, // The image to be uploaded if any
    result: any, // The blob file if any
    price: any, // The price of the item
    deliveryType: any, // The type of delivery
    category: any, // Either FOOD | SNACK | DRINKS
    details: any, // Short description of the item
    restaurant_name: any, // The restaurant name to be attached to the item
    restaurant_logo: any, // The restaurant logo to be attached to the item
    restaurant_id: any, // The restaurant Id to be identified to the item
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, // Set the loading state
    setProceed: React.Dispatch<React.SetStateAction<boolean>> // Set the proceed state for next item
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
                // Console.log an error if there is any and stops the page from loading
                console.log(err);
                setIsLoading(false);
            },
            async () => {
                // The image URL and store in the realtime database
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
                                restaurant_name,
                                restaurant_id
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
                                item_price: price,
                                item_uri: res.toString().replace(/\/+$/, '').split('/')[res.toString().replace(/\/+$/, '').split('/').length - 1]
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
