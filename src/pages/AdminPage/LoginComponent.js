import { useEffect, useState } from "react";
import FormButton from "../../components/ui/FormButton";
import TextInput from "../../components/ui/TextInput";
import TextPassword from "../../components/ui/TextPassword"
import { storage, app } from "../../firebaseConfig"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import useFormContext from "../../Hooks/useFormContext";

function LoginWidget(props) {

    const { commonInputSetContainerClasses, commonStepFormContainerClasses } = useFormContext()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true)

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        setDisabled(email.length >= 0 && password.length >= 0)
    }, [email, password])

    async function login() {

        // SHOW LOADING PAGE
        const db = getFirestore(app);
        const docSnap = await getDoc(doc(db, "users", email));
        if (docSnap.exists()) {
            // Correct username
            const data = docSnap.data();
            if (password === data.password) {
                const role = data.role;
                props.setLoggedState({ logged: true, role: role });
            }
            else {
                console.log("Wrong password");
            }
        } else {
            // Not logged in
            console.log("Wrong username");
        }
    }

    return (
        <div className="w-full min-h-fit h-max mx-4 sm:w-[80vw] sm:mx-auto max-w-lg sm:p-12">
            <div className={commonStepFormContainerClasses}>
                <div className={commonInputSetContainerClasses + " grid-cols-1"}>
                    <TextInput
                        labelText="Email"
                        fieldValue={email}
                        handleChange={handleEmail}
                        containerClass=" col-span-2 text-sh-white "
                        required />

                    <TextPassword
                        labelText="Password"
                        fieldValue={password}
                        handleChange={handlePassword}
                        containerClass=" col-span-2 text-sh-white "
                        labelClass="pt-0"
                        required />
                    <div className="col-span-2 w-full flex flex-row justify-center">
                        <FormButton
                            buttonClass={" text-pink-500 disabled:text-pink-300 border border-pink-500 disabled:border-pink-300 hover:border-transparent hover:bg-pink-100 disabled:bg-transparent md:w-full mt-6 disabled:cursor-not-allowed "}
                            buttonText="Login"
                            onClick={() => {
                                login()
                            }}
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginWidget;