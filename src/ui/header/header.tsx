"use client";
import React, { useRef, useState } from "react";
import HomeLinkBar from "./home-link-bar";
import { Navbar, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import Account from "./account";
import Notification from "./notification";
import MenuItems from "./side-menu/menu-items";
import { sideBarMotion } from "../../../utils";
import useClickOutside from "@/hooks/use-click-outside";
import useStore from "@/hooks/use-store";
import { useUserStore } from "@/context/user-context";

export default function Header() {
  const userData = useStore(useUserStore, (state) => state.userData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsMenuOpen(false));

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="border-b dark:border-neutral-800">
      <Navbar
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        className="sticky top-0 z-10 dark:bg-black"
      >
        <div className="flex w-full py-3 items-center justify-between">
          <div className="md:mr-6 mr-5 h-8">
            <NavbarMenuToggle className="prevent-close" />
          </div>
          <HomeLinkBar />
          <div className="hidden lg:flex">
            <Notification />
            <Account
              name={userData?.user_profile.full_name!}
              picture={userData?.user_profile.photo_url}
              description={'@' + userData?.user_profile.username}
            />
          </div>
        </div>

        <NavbarMenu
          onClick={handleClick}
          className="w-[50%] drop-shadow-sm md:w-[25%] overflow-hidden lg:w-[18%] bg-neutral-50 dark:bg-neutral-900 border-t dark:border-neutral-800 "
          motionProps={sideBarMotion}
        >
          <div ref={ref}>
            <MenuItems />
          </div>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
