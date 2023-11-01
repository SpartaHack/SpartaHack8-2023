import React from "react";
import YouLearnLogo from "@/app/icon/youlearn-logo";
import BetaLogo from "@/app/icon/beta-logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-700">
        <div className="flex w-full py-3 items-center justify-between">
            <YouLearnLogo/>
            <BetaLogo/>
            <div className="flex-1 lg:mr-[10%] sm:ml-[3%]">
                hi
            </div>
        </div>
    </header>
  );
}