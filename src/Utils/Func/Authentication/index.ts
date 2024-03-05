
export const signUpFunc = (
        email:string, 
        name:string, 
        password:string, 
        retryPassword:string
    ) => {

    const proceed = email.length > 0 && name.length > 0 && password.length > 0 && retryPassword.length > 0;
    
    if( proceed ) {
        console.log(name, email, password, retryPassword);
    }
    else if(name.length < 1){
        console.log("Please fill in your name")
        console.log(name);
    }
    else{
        console.log("Please fill form")
        console.log(name)
    }

}
