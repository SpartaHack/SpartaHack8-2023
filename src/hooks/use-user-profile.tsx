import { useState, useEffect } from "react";
import { getUserProfile } from "@/app/api/user";
import { UserProfile } from "../../types";
import { auth } from "../../db/firebase";

const useUserProfile = (userId: string) => {
  const [userData, setUserData] = useState<UserProfile>();

  useEffect(() => {
    if (userId || auth?.currentUser?.uid!) {
      const fetchData = async () => {
        const response = await getUserProfile(userId!);
        setUserData(response?.data);
      };
      fetchData();
    }
  }, [userId]);

  return userData;
};

export default useUserProfile;
