import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { toast } from "sonner";

export const getCheckoutUrl = async (
    app: FirebaseApp,
    priceId: string
  ): Promise<string> => {
    const auth = getAuth(app);
    const userId = auth.currentUser?.uid;
    if (!userId){
      toast.error("Not Logged in")
      return '';
    }
  
    const db = getFirestore(app);
    const checkoutSessionRef = collection(
      db,
      "users",
      userId,
      "checkout_sessions"
    );
  
    const docRef = await addDoc(checkoutSessionRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
  
    return new Promise<string>((resolve, reject) => {
      const unsubscribe = onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data() as {
          error?: { message: string };
          url?: string;
        };
        if (error) {
          unsubscribe();
          reject(new Error(`An error occurred: ${error.message}`));
        }
        if (url) {
          unsubscribe();
          resolve(url);
        }
      });
    });
  };
  
  export const getPortalUrl = async (app: FirebaseApp): Promise<string> => {
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