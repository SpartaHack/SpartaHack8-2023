import { FirebaseError } from "firebase/app";
import { User, UserCredential } from "firebase/auth";
import { Metadata } from "next";
import { toast } from "sonner";

export const sideBarMotion = {
  initial: { x: "-100%" },
  animate: { x: "0%" },
  exit: { x: "-100%" },
  transition: { type: "cubic" },
};

export const replaceMessage = (() => {
  let counter = 0;
  let sources: string[] = [];
  return (type: string, message: string) => {
    let regex: RegExp;

    regex = /(\[[^\],]+\])/g;

    const replacedMessage = message.replace(regex, (match) => {
      counter++;
      sources[counter] = match;
      return ` *${counter}* `;
    });

    return { replacedMessage, sources };
  };
})();

export const handleFirebaseError = (err: FirebaseError) => {
  switch (err.code) {
    case "auth/invalid-email":
      toast.error("Invalid email format");
      break;
    case "auth/user-disabled":
      toast.error("This user has been disabled");
      break;
    case "auth/user-not-found":
      toast.error("No account found, please sign up");
      break;
    case "auth/wrong-password":
      toast.error("Incorrect password");
      break;
    case "auth/invalid-login-credentials":
      toast.error("Invalid login credentials");
      break;
    case "auth/email-already-in-use":
      toast.error("Email already in use");
      break;
    case "auth/operation-not-allowed":
      toast.error("Email/password accounts are not enabled");
      break;
    case "auth/weak-password":
      toast.error("Password is not strong enough");
      break;
    case "auth/popup-closed-by-user":
      toast.error("Popup closed by user");
      break;
    case "auth/cancelled-popup-request":
      toast.error("Cancelled popup request");
      break;
    case "auth/popup-blocked":
      toast.error("Popup blocked by the browser");
      break;
    default:
      toast.error("An unknown error occurred");
  }
};

export const setUserLocalStorage = (user: User) => {
  try {
    localStorage.setItem("userId", user.uid ?? "");
    localStorage.setItem("fullName", user.displayName ?? "");
    localStorage.setItem("email", user.email ?? "");
    localStorage.setItem("photoURL", user.photoURL ?? "");
  } catch (err) {
    toast.error("Something went wrong");
  }
};

export const getJWT = async (userCred: UserCredential) => {
  const token = await userCred.user?.getIdToken();
  localStorage.setItem("jwtToken", await token);
  return token;
};
