import { FirebaseError } from "firebase/app";
import { User, UserCredential } from "firebase/auth";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
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

    regex = /(【[^\]】,]+】)/g;

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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timelineTheme = {
  "root": {
    "direction": {
      "horizontal": "items-base sm:flex",
      "vertical": "relative border-neutral-800 dark:border-neutral-500"
    }
  },
  "item": {
    "root": {
      "horizontal": "relative mb-6 sm:mb-0",
      "vertical": "mb-5 ml-6"
    },
    "content": {
      "root": {
        "base": "mt-3 sm:pr-8"
      },
      "body": {
        "base": "text-base font-normal text-neutral-500 dark:text-neutral-400"
      },
      "time": {
        "base": "mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500"
      },
      "title": {
        "base": "text-lg font-semibold text-neutral-900 dark:text-white"
      }
    },
    "point": {
      "horizontal": "flex items-center",
      "line": "hidden h-0.5 w-full bg-neutral-700 dark:bg-neutral-700 sm:flex",
      "marker": {
        "base": {
          "horizontal": "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-neutral-700 dark:border-neutral-900 dark:bg-neutral-700",
          "vertical": "absolute -left-1.5 h-3 w-3 rounded-full border border-neutral-800 bg-neutral-700 dark:border-neutral-500 dark:bg-neutral-500"
        },
        "icon": {
          "base": "h-3 w-3 text-cyan-600 dark:text-cyan-300",
          "wrapper": "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-neutral-900"
        }
      },
      "vertical": ""
    }
  }
}