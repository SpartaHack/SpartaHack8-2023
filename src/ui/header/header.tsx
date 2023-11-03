'use client'
import React from "react";
import YouLearnLogo from "@/icon/youlearn-logo";
import BetaLogo from "@/icon/beta-logo";
import HomeLinkBar from "./home-link-bar";
import { Kbd, Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Account from "./account";
import Notification from "./notification";
import MenuItems from "./side-menu/menu-items";
import { sideBarMotion } from "../../../utils";

export default function Header() {
  return (
    <Navbar maxWidth="full" shouldHideOnScroll isBordered className="sticky top-0 z-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-700">
      <div className="flex w-full py-3 items-center justify-between">
        <div className='mr-4 h-8'>
          <NavbarMenuToggle/>
        </div>
        <YouLearnLogo/>
        <BetaLogo/>
        <HomeLinkBar/>
        <div className="mr-7 mt-1 hidden lg:block">
          <Notification/>
        </div>
        <Account 
          name="Achyut Krishna Byanjankar"
          description='@achyut_benz'
        />
      </div>

      <NavbarMenu className='w-[50%] lg:w-[18%] bg-white dark:bg-neutral-900 border-t dark:border-neutral-800 ' motionProps={sideBarMotion}>
        <MenuItems/>
      </NavbarMenu>

    </Navbar>
  );
}