
// Firebase Database
import { database } from '../../../../firebaseConfig';
import { ref, onValue, set, limitToFirst, query } from 'firebase/database';

// The Interface for the type of data that would be accepted in the TS code 
interface Item {
    ownerId: string,
    restaurant_address: string,
    restaurant_logo: string,
    restaurant_name: string,
    restaurant_phone: any
    item_obj: any
}

// The function helps get all the info for all restaurants
const getAllRestaurantsForUser = async (
    setData: React.Dispatch<React.SetStateAction<Item[]>>
) => {

    // Collect the restaurant data from the restaurant 
    // collection and stored it in the setData array 
    // with limit to the data collected
    onValue( query(ref( database, `Restaurant` ), limitToFirst(4)), (snapshot) => {
        let newArr = [];

        // Breaking the obj from the DB into a simple list
        Object.entries(snapshot.val()).forEach( ([key, value]) => {
            
            newArr.push(
                {
                    ownerId: key,
                    restaurant_address: value.restaurant_address,
                    restaurant_logo: value.restaurant_logo,
                    restaurant_name: value.restaurant_name,
                    restaurant_phone: value.restaurant_phone,
                    item_obj: value.item
                }
            )
            setData( newArr );
        } )
    } )

}


// The function helps to get the data from the individual record that it is on the database 
// so it can be combined to form a singlar data model

const getDataInfoFromCategory = (cate: string, type: boolean) => {
    
    if(type){
        let mainDataRecord = []; // For the main user record
        let dataCopy = [];

        onValue( ref(database, `Category/${cate}`), (snapshot) => {
            
            Object.entries(snapshot.val()).forEach( ([key, value]) => {
                
                mainDataRecord.push({
                    mainKey: key,
                    data: value
                })
            } )

            Object.entries(mainDataRecord).forEach( ([mainKey, value]) => {
                const userId = value.mainKey;

                Object.entries(value.data).forEach( ([key, value]) => {
                    console.log(value.restaurant_info);
                    dataCopy.push({
                        UID: userId,
                        inner_id: key,
                        type: "category",
                        category: cate,
                        name: value.item_name
                    })

                } )
            } )
        } )

        return dataCopy;
    }
    else{
        let allDataInfo = [];

        onValue( ref(database, `Restaurant`), (snapshot) => {
            Object.entries(snapshot.val()).forEach( ([key, value]) => {
                allDataInfo.push({
                    name: value.restaurant_name,
                    UID: key,
                    inner_id: undefined,
                    type: "restaurant",
                    category: undefined
                });
            } )
        } )

        return allDataInfo;
    }

}

const generalGetAllInfoSearch = (type: string) => {
    
    const restaurants = getDataInfoFromCategory("Restaurant", false);
    const drinks = getDataInfoFromCategory("Drink", true);
    const snacks = getDataInfoFromCategory("Snacks", true);
    const food = getDataInfoFromCategory("Food", true);

    if(type === "drinks"){
        return drinks;
    }
    else if(type === "snacks"){
        return snacks;
    }
    else if(type === "food"){
        return food;
    }
    else if(type === "restaurants"){
        return restaurants;
    }
    else if(type === "all"){
        return [...restaurants, ...drinks, ...food, ...snacks];
    }
    else{
        return "No type found in database collection";
    }

}

export {
    getAllRestaurantsForUser,
    generalGetAllInfoSearch
}
