import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initFirebase } from "../db/firebase";
import { toast } from "sonner";

export const sideBarMotion = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '-100%' },
    transition: { type: 'cubic'}
}

export const replaceMessage = (() => {
  let counter = 0;
  let sources: any = {};
  return (message: string) => {
    const replacedMessage = message.replace(/(\[\d+(\.\d+)?(,\s*\d+(\.\d+)?)*\])/g, (match) => {
      counter++;
      sources[counter] = match;
      return ` *${counter}* `;
    });
    return { replacedMessage, sources };
  };
})();

export const authGoogle = async () => {
  // ask mongoDB
  try {
    initFirebase();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    toast.success("Signed up successfully")
  } catch {
    toast.error("Try again. Something went wrong")
  }
}

export const signUpEmail = async (email: string, password: string) => {
  try {
    initFirebase();
    const auth = getAuth();
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Signed up successfully")
  } catch {
    toast.error("Try again. Something went wrong")
  }
}

export const signInEmail = async (email: string, password: string) => {
  try {
    initFirebase();
    const auth = getAuth()
    const result = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Signed in successfully")
  } catch {
    toast.error("Try again. Something went wrong")
  }
}

export const user_id = "4KNAN001tZhyNg96DkfkLeF6fvm2";
export const course_id = "83e6002084934c8781979bc2904e7ced";
export const content_id = ["kCc8FmEb1nY"]
export const contentId = "kCc8FmEb1nY"
export const information = {}

