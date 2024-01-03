import { useState, useEffect } from "react";
import { useUserStore } from "@/context/user-context";

const useCheckPro = () => {
  const userData = useUserStore((state) => state.userData);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    setIsPro(
      (userData?.customer.subscription &&
        userData!.customer.subscription.tier === "pro") ||
        false,
    );
  }, [userData]);

  return isPro;
};

export default useCheckPro;
