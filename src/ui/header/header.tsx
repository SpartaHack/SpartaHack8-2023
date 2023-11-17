'use client'
import React, { useRef, useState } from "react";
import YouLearnLogo from "@/icon/youlearn-logo";
import BetaLogo from "@/icon/beta-logo";
import HomeLinkBar from "./home-link-bar";
import { Navbar, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import Account from "./account";
import Notification from "./notification";
import MenuItems from "./side-menu/menu-items";
import { sideBarMotion } from "../../../utils";
import useClickOutside from "@/hooks/use-click-outside";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsMenuOpen(false));

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Navbar maxWidth="full" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered className="sticky top-0 z-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-700">
      <div className="flex w-full py-3 items-center justify-between">
        <div className='md:mr-6 mr-5 h-8'>
          <NavbarMenuToggle/>
        </div>
        <YouLearnLogo/>
        <BetaLogo/>
        <HomeLinkBar/>
        <div className="hidden lg:flex space-x-5">
          <Notification/>
          <Account 
            name="Achyut Krishna Byanjankar"
            description='@achyut_benz'
          />
        </div>
      </div>

        <NavbarMenu onClick={handleClick} className='w-[50%] md:w-[25%] overflow-hidden lg:w-[18%] bg-white dark:bg-neutral-900 border-t dark:border-neutral-800 ' motionProps={sideBarMotion}>
          <div ref={ref}>  
            <MenuItems/>
          </div>
        </NavbarMenu>

    </Navbar>
  );
}