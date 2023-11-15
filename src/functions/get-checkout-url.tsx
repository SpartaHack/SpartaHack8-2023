import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { toast } from "sonner";
import { initFirebase } from "../../db/firebase";

export const getCheckoutUrl = async (
  priceId: string
): Promise<string> => {
  const app = initFirebase()
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
        toast.error(`Error occured ${error.message}`)
      }
      if (url) {
        unsubscribe();
        resolve(url);
      }
    });
  });
};