import { useState, useEffect } from "react";
import { UserProfile } from "../../types";
import { auth } from "../../db/firebase";
import { getUserProfile } from "@/app/api/user";

const useUserProfile = () => {
  const [userData, setUserData] = useState<UserProfile>();

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const fetchData = async () => {
        const response = await getUserProfile(auth.currentUser?.uid!);
        setUserData(response?.data);
      };
      fetchData();
    }
  }, []);

  return userData;
};

export default useUserProfile;
