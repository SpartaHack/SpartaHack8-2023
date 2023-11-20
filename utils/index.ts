import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initFirebase } from "../db/firebase";
import { toast } from "sonner";
import { userLogIn, userSignUp } from "@/app/api/endpoints";

export const sideBarMotion = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '-100%' },
    transition: { type: 'cubic'}
}

export const replaceMessage = (() => {
  let counter = 0;
  let sources: string[] = [];
  return (type: string, message: string) => {
    let regex: RegExp;

    if (type === 'youtube') {
      regex = /(\[\d+(\.\d+)?(,\s*\d+(\.\d+)?)*\])/g;
    } else if (type === 'space') {
      regex = /(\[[^\]]+\])/g;
    } else {
      regex = /(\[[^\]]+\])/g;
    }

    const replacedMessage = message.replace(regex, (match) => {
      counter++;
      sources[counter] = match;
      return ` *${counter}* `;
    });

    return { replacedMessage, sources };
  };
})();

export const authGoogle = async (type: 'signin' | 'signup', educationLevel?: string) => {
  try{
    initFirebase();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const userId = result.user?.uid
    let response;
    if (type === 'signin') {
      response = await userLogIn(userId);
      if (!response) {
        toast.error("No account found")
      } else {
        toast.success("Signed in successful")        
      }
    } else {
      const email = result.user?.email
      const fullName = result.user?.displayName
      const photoURL = result.user?.photoURL
      response = await userSignUp(userId, email!, fullName!, photoURL!, educationLevel!);
      toast.success("Signup successful")
    }
  } catch (err) {
    toast.error("Internal server error")
  }
}

export const signUpEmail = async (email: string, password: string, fullName: string, educationLevel: string) => {
  try {
    initFirebase();
    const auth = getAuth();
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user?.uid;
    await userSignUp(userId, email, fullName!, '', educationLevel!);
    toast.success("Signed up successfully");
  } catch {
    toast.error("Try again. Something went wrong")
  }
}

export const signInEmail = async (email: string, password: string) => {
  try {
    initFirebase();
    const auth = getAuth()
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userId = result.user?.uid;
    await userLogIn(userId);
    toast.success("Signed in successfully")
  } catch {
    toast.error("Authentication Error")
  }
}

export const logOut = async () => {
  initFirebase();
  const auth = getAuth();
  try {
    signOut(auth)
    toast.success("Signed out successfully")
  } catch {
    toast.error("Try again. Something went wrong")
  }
}

export const user_id = "4KNAN001tZhyNg96DkfkLeF6fvm2";
export const space_id = "83e6002084934c8781979bc2904e7ced";
export const content_id = ["kCc8FmEb1nY"]
export const contentId = "kCc8FmEb1nY"
export const information = {}