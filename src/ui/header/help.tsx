"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React from "react";

const Help = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl"
      onClick={() => router.push("/feedback")}
    >
      <Icon icon="material-symbols:help-outline" className="h-6 w-6" />
      <span className="ml-5">Help & Feedback</span>
    </div>
  );
};

export default Help;
