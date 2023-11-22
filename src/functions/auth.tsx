import { userSignIn, userSignUp } from "@/app/api/endpoints";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, UserCredential, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { toast } from "sonner";
import { initFirebase } from "../../db/firebase";

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
  
  const setUserLocalStorage = (user: User) => {
    localStorage.setItem("userId", user.uid);
    localStorage.setItem("fullName", user.displayName!);
    localStorage.setItem("email", user.email!);
  }
  
  export const signInEmail = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
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
        switch (err.code) {
          case 'auth/invalid-email':
            toast.error("Invalid email format");
            return;
          case 'auth/user-disabled':
            toast.error("This user has been disabled");
            return;
          case 'auth/user-not-found':
            toast.error("No account found, redirecting to sign up");
            return '/signup';
          case 'auth/wrong-password':
            toast.error("Incorrect password");
            return;
          case 'auth/invalid-login-credentials':
            toast.error("Invalid login credentials");
            return;
          default:
            toast.error("An unknown error occurred");
        }
      }
    }
  }
  
  export const signUpEmailContinue = async (email: string, password: string) => {
    try { 
      const auth = getAuth();
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUserLocalStorage(user);
      if (userCredential) {
        toast.success("User created, redirecting to form");
        return '/form';
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            toast.error("Email already in use");
            return;
          case 'auth/invalid-email':
            toast.error("Invalid email format");
            return;
          case 'auth/operation-not-allowed':
            toast.error("Email/password accounts are not enabled");
            return;
          case 'auth/weak-password':
            toast.error("Password is not strong enough");
            return;
          case 'auth/invalid-login-credentials':
            toast.error("Invalid login credentials");
            return;
          default:
            toast.error("An unknown error occurred");
        }
      }
    }
  }
  
  export const authGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
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
        switch (err.code) {
          case 'auth/popup-closed-by-user':
            toast.error("Popup closed by user");
            return;
          case 'auth/cancelled-popup-request':
            toast.error("Cancelled popup request");
            return;
          case 'auth/popup-blocked':
            toast.error("Popup blocked by the browser");
            return;
          case 'auth/operation-not-allowed':
            toast.error("Operation not allowed");
            return;
          default:
            toast.error("An unknown error occurred");
        }
      }
    }
  }
  
  export const authGoogleSignUp = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
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
        switch (err.code) {
          case 'auth/popup-closed-by-user':
            toast.error("Popup closed by user");
            return;
          case 'auth/cancelled-popup-request':
            toast.error("Cancelled popup request");
            return;
          case 'auth/popup-blocked':
            toast.error("Popup blocked by the browser");
            return;
          case 'auth/operation-not-allowed':
            toast.error("Operation not allowed");
            return;
          default:
            toast.error("An unknown error occurred");
        }
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
  
  export const handleSignUpFinal = async (userId: string, email: string, educationLevel: string, fullName: string) => {
    try {
      const response = await userSignUp(userId, email, fullName, '', educationLevel);
      if (response) {
        toast.success("User signed up successfully");
        return '/';
      } else {
        toast.error("Sign up failed, redirecting to sign up");
        return '/signup';
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            toast.error("Email already in use");
            return;
          case 'auth/invalid-email':
            toast.error("Invalid email format");
            return;
          case 'auth/operation-not-allowed':
            toast.error("Email/password accounts are not enabled");
            return;
          case 'auth/weak-password':
            toast.error("Password is not strong enough");
            return;
          default:
            toast.error("An unknown error occurred");
        }
      }
    }
  }