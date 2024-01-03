import { useState, useEffect } from "react";
import { getUser } from "@/app/api/user";
import { UserProfile } from "../../types";
import { auth } from "../../db/firebase";

const useUserProfile = () => {
  const [userData, setUserData] = useState<UserProfile>();

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const fetchData = async () => {
        const response = await getUser(auth.currentUser?.uid!);
        setUserData(response?.data);
      };
      fetchData();
    }
  }, []);

  return userData;
};

export default useUserProfile;
