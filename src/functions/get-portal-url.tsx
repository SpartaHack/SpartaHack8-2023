import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { initFirebase } from "../../db/firebase";
import { toast } from "sonner";

export const getPortalUrl = async (): Promise<string> => {
    const app = initFirebase();
    const auth = getAuth(app);
    const user = auth.currentUser;
  
    let dataWithUrl: any;
    try {
      const functions = getFunctions(app, "us-central1");
      const functionRef = httpsCallable(
        functions,
        "ext-firestore-stripe-payments-createPortalLink"
      );
      const { data } = await functionRef({
        userId: user?.uid,
        returnUrl: window.location.origin,
      });
  
      dataWithUrl = data as { url: string };
      console.log("Reroute to Stripe portal: ", dataWithUrl.url);
    } catch (error) {
      toast.error("Error occured")
      console.error(error);
    }
  
    return new Promise<string>((resolve, reject) => {
      if (dataWithUrl.url) {
        resolve(dataWithUrl.url);
      } else {
        reject(new Error("No url returned"));
      }
    });
  };