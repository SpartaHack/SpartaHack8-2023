import { userSignIn, userSignUp } from "@/app/api/endpoints";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, UserCredential, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { toast } from "sonner";
import { initFirebase } from "../../db/firebase";
import { handleFirebaseError } from "../../utils";
  
const setUserLocalStorage = (user: User) => {
    try {
        localStorage.setItem("userId", user.uid ?? '');
        localStorage.setItem("fullName", user.displayName ?? '');
        localStorage.setItem("email", user.email ?? '');
        localStorage.setItem("photoURL", user.photoURL ?? '');
    } catch (error) {
        console.error('Error storing data to localStorage', error);
    }
}

const getJWT = (userCred: UserCredential) => {
    const token = userCred.user?.getIdToken();
    return token;
}
  
export const signInEmail = async (email: string, password: string) => {
    try {
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        console.log(getJWT(result))
        setUserLocalStorage(user);
        const response = await userSignIn(user.uid);
        if (result) {
            if (response) {
                toast.success("Successfully signed in");
                return '/';
            } else {
                toast.error("User does not have form details, redirecting to form");
                return '/form';
            }
        }
    } catch (err) {
        if (err instanceof FirebaseError) {
            handleFirebaseError(err)
        }
    }
}

export const signUpEmailContinue = async (email: string, password: string) => {
    try { 
        const auth = getAuth();
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setUserLocalStorage(user);
        console.log(await getJWT(userCredential))
        if (userCredential) {
            toast.success("User created, redirecting to form");
        return '/form';
        }
    } catch (err) {
        if (err instanceof FirebaseError) {
            handleFirebaseError(err)
        }
    }
}

export const authGoogleSignIn = async () => {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(await getJWT(result))
        setUserLocalStorage(user);
        const response = await userSignIn(user.uid);
        if (response) {
            toast.success("Successfully signed in with Google");
            return '/';
        } else {
            toast.error("User does not have form details, redirecting to form");
            return '/form';
        }
    } catch (err) {
        if (err instanceof FirebaseError) {
            handleFirebaseError(err)
        }
    }
}

export const authGoogleSignUp = async () => {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(getJWT(result))
        setUserLocalStorage(user);
        const response = await userSignIn(user.uid);
        if (response) {
        toast.error("User already exists!");
        return '/';
        } else {
        toast.success("User created, redirecting to profile creation");
        return '/form';
        }
    } catch (err) {
        if (err instanceof FirebaseError) {
            handleFirebaseError(err)
        }
    }
}

export const logOut = async () => {
    initFirebase();
    const auth = getAuth();
    try {
        await signOut(auth)
        const userId = localStorage.getItem("userId")
        if (!userId) {
        toast.error("User not signed in")
        return;
        }
        localStorage.clear();
        toast.success("Signed out successfully")
    } catch (err) {
        if (err instanceof Error) {
            switch (err.message) {
            case 'auth/no-current-user':
                toast.error("No user currently signed in");
                return;
            default:
                toast.error("An unknown error occurred");
            }
        }
    }
}

export const handleSignUpFinal = async (userId: string, email: string, photoURL: string, educationLevel: string, fullName: string) => {
    try {
        const response = await userSignUp(userId, email, fullName, photoURL, educationLevel);
        if (response) {
        toast.success("User signed up successfully");
        return '/';
        } else {
        toast.error("Sign up failed, redirecting to sign up");
        return '/signup';
        }
    } catch (err) {
        if (err instanceof FirebaseError) {
            handleFirebaseError(err)
        }
    }
}