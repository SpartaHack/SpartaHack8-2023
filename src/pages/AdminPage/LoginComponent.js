import { useEffect, useState } from "react";
import FormButton from "../../components/ui/FormButton";
import TextInput from "../../components/ui/TextInput";
import {storage,app} from "../../firebaseConfig"
import { getFirestore, doc, getDoc } from "firebase/firestore";

function LoginWidget(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    async function login(){

        // SHOW LOADING PAGE
        const db = getFirestore(app);
        const docSnap = await getDoc(doc(db, "users", email));
        if (docSnap.exists()) {
            // Correct username
            const data = docSnap.data();
            if(password == data.password){
                const role = data.role;
                props.setLoggedState({logged: true, role: role});
            }
            else{
                console.log("Wrong password");
            }
        } else {
            // Not logged in
            console.log("Wrong username");
        }
    }

    return (
        <div className='relative flex flex-col justify-center items-center'>
            <TextInput 
            labelText = "Email"
            fieldValue = {email}
            handleChange = {handleEmail}
            containerClass = " text-white"
            inputClass= " text-black text-center"
            required/>

             <TextInput 
            labelText = "Password"
            fieldValue = {password}
            handleChange = {handlePassword}
            containerClass = " text-white"
            inputClass= " text-black text-center"
            required/>

            <FormButton 
            buttonClass = " text-white"
            buttonText = "Login"
            onClick = {()=>{
                login()
            }}
            />
        </div>
    )
}

export default LoginWidget;