import React, { useEffect } from "react";
import { auth } from "../../../db/firebase";
import useAuth from "@/hooks/use-auth";
import { useUserStore } from "@/context/user-context";
import { getUser } from "@/app/api/user";

const Explore = () => {
  const userId = useAuth();
  const { setUserData } = useUserStore();
  
  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser?.uid || userId) {
        const response = await getUser(
          auth.currentUser?.uid ? auth.currentUser.uid : userId!,
        );
        setUserData(response?.data);
      }
    };

    fetchUser();
  }, [userId]);

  return <div className="flex-grow">Explore</div>;
};

export default Explore;
