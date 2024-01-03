import { useState, useEffect } from 'react';
import { getUserProfile } from "@/app/api/user";
import { UserProfile } from '../../types';

const useUserProfile = (userId: string) => {
  const [userData, setUserData] = useState<UserProfile>();
  
  useEffect(() => {
    const repeating = localStorage.getItem("profile");
    if (userId && repeating === "true") {
      const fetchData = async () => {
        localStorage.setItem("profile", "false");
        const response = await getUserProfile(userId!);
        setUserData(response?.data);
      };
      fetchData();
    }
  }, [userId]);

  return userData;
}

export default useUserProfile;