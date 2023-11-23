import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification, GoogleAuthProvider } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { toast } from 'sonner';
import { getJWT, handleFirebaseError, setUserLocalStorage } from '../../utils';
import { userSignIn, userSignUp } from '@/app/api/endpoints';
import { initFirebase } from '../../db/firebase';

export const useSignInEmail = () => {
  const [signInStatus, setSignInStatus] = useState<string | null>(null);

  const signInEmail = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUserLocalStorage(user);
      const response = await userSignIn(user.uid);
      if (result) {
        if (response) {
          toast.success("Successfully signed in");
          setSignInStatus('/');
        } else {
          toast.error("User does not have form details, redirecting to form");
          setSignInStatus('/form');
        }
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { signInEmail, signInStatus };
};

export const useSignUpEmailContinue = () => {
  const [signUpStatus, setSignUpStatus] = useState<string | null>(null);

  const signUpEmailContinue = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUserLocalStorage(user);
      if (userCredential) {
        toast.success("Redirecting to email verification");
        sendEmailVerification(user);
        setSignUpStatus('/verify');
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { signUpEmailContinue, signUpStatus };
};

export const useAuthGoogleSignIn = () => {
  const [signInStatus, setSignInStatus] = useState<string | null>(null);

  const authGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(await getJWT(result));
      setUserLocalStorage(user);
      const response = await userSignIn(user.uid);
      if (response) {
        toast.success("Successfully signed in with Google");
        setSignInStatus('/');
      } else {
        toast.error("User does not have form details, redirecting to form");
        setSignInStatus('/form');
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { authGoogleSignIn, signInStatus };
};

export const useAuthGoogleSignUp = () => {
  const [signUpStatus, setSignUpStatus] = useState<string | null>(null);

  const authGoogleSignUp = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(getJWT(result));
      setUserLocalStorage(user);
      const response = await userSignIn(user.uid);
      if (response) {
        toast.error("User already exists!");
        setSignUpStatus('/');
      } else {
        toast.success("User created, redirecting to profile creation");
        setSignUpStatus('/form');
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { authGoogleSignUp, signUpStatus };
};

export const useLogOut = () => {
  const [logOutStatus, setLogOutStatus] = useState<string | null>(null);

  const logOut = async () => {
    initFirebase();
    const auth = getAuth();
    try {
      await signOut(auth);
      const userId = localStorage.getItem("userId");
      if (!userId) {
        toast.error("User not signed in");
        return;
      }
      localStorage.clear();
      toast.success("Signed out successfully");;
    } catch (err) {
      if (err instanceof Error) {
        switch (err.message) {
          case 'auth/no-current-user':
            toast.error("No user currently signed in");
            break;
          default:
            toast.error("An unknown error occurred");
        }
      }
    }
  };

  return { logOut, logOutStatus };
};

export const useHandleSignUpFinal = () => {
  const [signUpFinalStatus, setSignUpFinalStatus] = useState<string | null>(null);

  const handleSignUpFinal = async (userId: string, email: string, photoURL: string, educationLevel: string, fullName: string) => {
    try {
      const response = await userSignUp(userId, email, fullName, photoURL, educationLevel);
      if (response) {
        toast.success("User signed up successfully");
        setSignUpFinalStatus('/');
      } else {
        toast.error("Sign up failed, redirecting to sign up");
        setSignUpFinalStatus('/signup');
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { handleSignUpFinal, signUpFinalStatus };
};