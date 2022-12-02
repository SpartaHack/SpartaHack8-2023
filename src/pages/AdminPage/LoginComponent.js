import { useEffect, useState } from "react";
import FormButton from "../../components/ui/FormButton";
import TextInput from "../../components/ui/TextInput";

const fakeLogin = {
    "Admin":{
        "password":"123",
        "role":"admin"
    },
    "S1": {
        "password":"456",
        "role":"sponsor"
    }
}

function LoginWidget(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='relative'>
            <TextInput 
            labelText = "Email"
            fieldValue = {email}
            handleChange = {handleEmail}
            required/>

             <TextInput 
            labelText = "Password"
            fieldValue = {password}
            handleChange = {handlePassword}
            required/>

            <FormButton 
            buttonText = "Login"
            onClick = {()=>{
                // If login is valid
                if(email in fakeLogin && password == fakeLogin[email].password){
                    // Logged in
                    console.log("Logged")
                    props.setLoggedState({logged: true, role: fakeLogin[email].role});
                }
                else{
                    // Wrong password or email
                    console.log("Not logged in");
                }
            }}
            />
        </div>
    )
}

export default LoginWidget;