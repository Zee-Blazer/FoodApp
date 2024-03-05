
export const signUpFunc = (
        email:string, 
        name:string, 
        password:string, 
        retryPassword:string,
        setNameErr: React.Dispatch<React.SetStateAction<string>>,
        setEmailErr: React.Dispatch<React.SetStateAction<string>>,
        setPasswordErr: React.Dispatch<React.SetStateAction<string>>,
        setRetryPasswordErr: React.Dispatch<React.SetStateAction<string>>,
        setErr: React.Dispatch<React.SetStateAction<string>>
    ) => {

        const proceed = email.length > 0 && name.length > 0 && password.length > 0 && retryPassword.length > 0;
    
        setNameErr(""); setEmailErr(""); setPasswordErr(""); setRetryPasswordErr("");

        if( proceed ) {

            if(password != retryPassword){
                setPasswordErr("Password mismatch");
                setRetryPasswordErr("Password mismatch");
                setErr("Password mismatch... Please check the passwords you typed");
            }
            else{
                console.log("All the data is working fine");
            }

        }
        else if(name.length < 1){
            setNameErr("Fill in name");
            setErr("Fill all inputs");
        }
        else if(email.length < 1){
            setEmailErr("Fill in your email");
            setErr("Fill all inputs");
        }
        else if(password.length < 1){
            setPasswordErr("Fill in your password");
            setErr("Fill all inputs");
        }
        else if(retryPassword.length < 1){
            setRetryPasswordErr("Fill retype password");
            setErr("Fill all inputs");
        }

}
