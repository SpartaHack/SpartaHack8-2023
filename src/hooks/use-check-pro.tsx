import { useStore } from "zustand";
import { useUserStore } from "@/context/user-context";

const useCheckPro = () => {
    const userData = useStore(useUserStore, (state) => state.userData);
    const isPro = userData?.customer.subscription && userData!.customer.subscription.tier === "pro";
    return isPro;
};

export default useCheckPro;
