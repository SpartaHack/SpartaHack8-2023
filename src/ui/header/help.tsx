"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React from "react";

const Help = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl"
      onClick={() => router.push("/contact")}
    >
      <Icon icon="material-symbols:help-outline" className="h-6 w-6" />
      <span className="ml-5 truncate hidden lg:block">Help & Feedback</span>
      <span className="ml-5 truncate lg:hidden">Help</span>
    </div>
  );
};

export default Help;
