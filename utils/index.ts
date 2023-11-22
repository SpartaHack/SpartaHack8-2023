import { FirebaseError } from "firebase/app";
import { toast } from "sonner";

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

export const user_id = "urmom";
export const space_id = ["e90d45f478494448adfd86aab666228c"];
export const content_id = ["x7X9w_GIm1s"]
export const contentId = "x7X9w_GIm1s"

export const handleFirebaseError = (err: FirebaseError) => {
  switch (err.code) {
    case 'auth/invalid-email':
      toast.error("Invalid email format");
      break;
    case 'auth/user-disabled':
      toast.error("This user has been disabled");
      break;
    case 'auth/user-not-found':
      toast.error("No account found, redirecting to sign up");
      break;
    case 'auth/wrong-password':
      toast.error("Incorrect password");
      break;
    case 'auth/invalid-login-credentials':
      toast.error("Invalid login credentials");
      break;
    case 'auth/email-already-in-use':
      toast.error("Email already in use");
      break;
    case 'auth/operation-not-allowed':
      toast.error("Email/password accounts are not enabled");
      break;
    case 'auth/weak-password':
      toast.error("Password is not strong enough");
      break;
    case 'auth/popup-closed-by-user':
      toast.error("Popup closed by user");
      break;
    case 'auth/cancelled-popup-request':
      toast.error("Cancelled popup request");
      break;
    case 'auth/popup-blocked':
      toast.error("Popup blocked by the browser");
      break;
    default:
      toast.error("An unknown error occurred");
  }
}