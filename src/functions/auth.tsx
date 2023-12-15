import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { toast } from "sonner";
import { handleFirebaseError, setUserLocalStorage } from "../../utils";
import { getUserSpaces, userSignIn, userSignUp } from "@/app/api/endpoints";
import { initFirebase } from "../../db/firebase";
import { useUserStore } from "@/context/user-context";
import { useSpaceStore } from "@/context/space-context";
import { useContentStore } from "@/context/content-store";

export const useSignInEmail = () => {
  const [signInStatus, setSignInStatus] = useState<string | null>(null);
  const { setUserId, setUserData } = useUserStore();
  const { setSpaces } = useSpaceStore();
  const { setContents } = useContentStore();

  const signInEmail = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUserLocalStorage(user);
      const response = await userSignIn(user.uid);
      if (result) {
        if (!user.emailVerified) {
          toast.error("Email not verified");
          setSignInStatus("/verify");
          return;
        }
        if (response) {
          setUserId(user.uid);
          setUserData(response.data);
          const spaces = await getUserSpaces(user.uid);
          setSpaces(spaces?.data);
          toast.success("Successfully signed in");
          localStorage.setItem("historyLoading", "true");
          setSignInStatus("/");
        } else {
          toast.error("Your account was not found, please sign up.");
          setSignInStatus("/form");
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setUserLocalStorage(user);
      if (userCredential) {
        toast.success("Please verify your email");
        sendEmailVerification(user);
        setSignUpStatus("/verify");
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
  const { setUserId, setUserData } = useUserStore();
  const { setSpaces } = useSpaceStore();
  const { setContents } = useContentStore();

  const authGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserLocalStorage(user);
      const response = await userSignIn(user.uid);
      if (response) {
        setUserId(user.uid);
        setUserData(response.data);
        const spaces = await getUserSpaces(user.uid);
        setSpaces(spaces?.data);
        toast.success("Successfully signed in with Google");
        localStorage.setItem("historyLoading", "true");
        setSignInStatus("/");
      } else {
        toast.error("Your account was not found, please sign up.");
        setSignInStatus("/form");
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
      setUserLocalStorage(user);
      const response = await userSignIn(user.uid);
      if (response) {
        toast.error("User already exists!");
      } else {
        toast.success("User created, redirecting to profile creation");
        setSignUpStatus("/form");
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { authGoogleSignUp, signUpStatus };
};

export const logOut = async () => {
  initFirebase();
  const auth = getAuth();
  try {
    await signOut(auth);
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("Please sign in");
      return;
    }
    localStorage.clear();
    useUserStore.getState().logout();
    useSpaceStore.getState().logout();
    useContentStore.getState().logout();
    toast.success("Signed out successfully");
  } catch (err) {
    if (err instanceof Error) {
      switch (err.message) {
        case "auth/no-current-user":
          toast.error("No user currently signed in");
          break;
        default:
          toast.error("An unknown error occurred");
      }
    }
  }
};

export const useHandleSignUpFinal = () => {
  const [signUpFinalStatus, setSignUpFinalStatus] = useState<string | null>(
    null,
  );
  const { setUserId, setUserData } = useUserStore();
  const { setSpaces } = useSpaceStore();
  const { setContents } = useContentStore();

  const handleSignUpFinal = async (
    userId: string,
    email: string,
    photoURL: string,
    educationLevel: string,
    fullName: string,
  ) => {
    try {
      const response = await userSignUp(
        userId,
        email,
        fullName,
        photoURL,
        educationLevel,
      );
      if (response) {
        toast.success("User signed up successfully");
        setUserId(userId);
        const response = await userSignIn(userId);
        setUserData(response!.data);
        const spaces = await getUserSpaces(userId);
        setSpaces(spaces?.data);
        localStorage.setItem("historyLoading", "true");
        setSignUpFinalStatus("/");
      } else {
        toast.error("Sign up failed, please sign up");
        setSignUpFinalStatus("/signup");
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
    }
  };

  return { handleSignUpFinal, signUpFinalStatus };
};
