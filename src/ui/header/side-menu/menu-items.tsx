import React from "react";
import Notification from "../notification";
import Account from "../account";
import Spaces from "./spaces";
import MenuFooter from "@/ui/footer/menu-footer";
import useStore from "@/hooks/use-store";
import { useUserStore } from "@/context/user-context";

//million-ignore
const MenuItems = () => {
  const userData = useStore(useUserStore, (state) => state.userData);
  return (
    <div className="flex flex-col h-[90vh] space-y-4">
      <div className="flex flex-row w-full lg:hidden cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl">
        <Notification />
      </div>
      <div className="flex flex-row w-full lg:hidden cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl">
        <Account
          name={userData?.user_profile.full_name!}
          picture={userData?.user_profile.photo_url}
          description={userData?.user_profile.username}
        />
      </div>
      <div className="horizontal-line lg:hidden" />
      <Spaces />
      <div className="horizontal-line" />
      <MenuFooter />
    </div>
  );
};

export default MenuItems;
