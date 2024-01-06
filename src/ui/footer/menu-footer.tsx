import React from "react";
import Help from "../header/help";

const MenuFooter = () => {
  return (
    <div className="flex-col flex">
      <Help />
      <div className="flex flex-row space-x-4 py-2 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="font-light lg:mt-4">
          @{new Date().getFullYear()} YouLearn, Inc
        </span>
      </div>
    </div>
  );
};

export default MenuFooter;
