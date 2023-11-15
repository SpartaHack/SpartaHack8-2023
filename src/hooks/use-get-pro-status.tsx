import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { initFirebase } from '../../db/firebase';

export const useGetProStatus = () => {
  const app = initFirebase();
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      const auth = getAuth(app);
      const userId = auth.currentUser?.uid;
      if (!userId) {
        setLoading(false);
        return;
      };

      const db = getFirestore(app);
      const subscriptionsRef = collection(db, "users", userId, "subscriptions");
      const q = query(
        subscriptionsRef,
        where("status", "in", ["trialing", "active"])
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (snapshot.docs.length === 0) {
            setIsPro(false);
          } else {
            setIsPro(true);
          }
          unsubscribe();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    };

    const auth = getAuth(app);

    const unsubscribeAuth = onAuthStateChanged(auth, user => {
      if (user) {
        fetchPremiumStatus();
      } else {
        setIsPro(false);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, [app, auth]);

  return { loading, isPro };
};