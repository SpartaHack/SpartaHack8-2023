import React from "react";
import YouLearnLogo from "@/icon/youlearn-logo";
import BetaLogo from "@/icon/beta-logo";
import HomeLinkBar from "./home-link-bar";
import { Navbar } from "@nextui-org/react";
import Account from "./account";
import Notification from "./notification";

export default function Header() {
  return (
    <Navbar maxWidth="full" isBlurred shouldHideOnScroll isBordered className="sticky top-0 z-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-700">
      <div className="flex w-full py-3 items-center justify-between">
        <YouLearnLogo/>
        <BetaLogo/>
        <HomeLinkBar/>
        <div className="mr-8 mt-1 hidden lg:block">
          <Notification/>
        </div>
        <Account 
          name="Achyut Krishna Byanjankar"
          description='@achyut_benz'
        />
      </div>
    </Navbar>
  );
}