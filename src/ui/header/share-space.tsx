import React, { ChangeEvent, useCallback, useState, useEffect } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomModal from "@/helpers/custom-modal";
import CustomTextInput from "@/helpers/custom-text-input";
import { toast } from "sonner";
import SpacePrivacy from "./space-privacy";

// million-ignore
const ShareSpace = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [email, setEmail] = useState("");

  const spaceName = contents && contents.space.name;
  const spaceId = contents && contents.space._id;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCopy = async () => {
    try {
      const text = `/space/${spaceId}`;
      if (typeof window !== "undefined") {
        const domainName = window.location.origin;
        await navigator.clipboard.writeText(domainName + text);
        toast.success("Copied!");
      } else {
        throw new Error("Cannot access window object");
      }
    } catch (err) {
      toast.error("Error. Cannot copy.");
    }
  };

  return (
    <>
      <CustomModal
        size="2xl"
        placement="top-center"
        title={
          <div className="rounded-2xl px-4 py-2 bg-white border-2 dark:border-white border-absolute_black cursor-pointer dark:bg-black text-black dark:text-white dark:white font-semibold font-sans flex flex-row">
            <Icon icon="fluent:people-12-filled" className="w-6 h-6 md:mr-1" />
            <span className="text-sm hidden mt-0.5 md:block truncate font-sans font-semibold">
              Share space
            </span>
          </div>
        }
        btnStyling1="bg-white text-black border dark:border-black dark:bg-black dark:text-white font-sans font-semibold"
        btnStyling2="bg-black text-white border dark:bg-white dark:text-black font-sans font-semibold"
        actionEvent={() => console.log("share")}
        contentTitle={
          <div className="flex flex-col pt-3 px-3">
            <div className="mt-0.5 font-semibold flex flex-row">
              <Icon
                icon="fluent:people-12-filled"
                className="w-4 h-4 mr-1 mt-0.5"
              />
              <span className="text-sm">Share space</span>
            </div>
            <div className="flex flex-row justify-between items-baseline">
              <span className="mt-4 text-3xl font-sans">{spaceName}</span>
              <div
                className="flex-row flex cursor-pointer"
                onClick={handleCopy}
              >
                <Icon icon="ph:link-bold" className="h-4 w-4 mt-0.5 mr-1" />
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-sans font-normal hidden md:block">
                  Copy link
                </div>
              </div>
            </div>
          </div>
        }
        contentMain={
          <div className="flex flex-col px-3">
            <CustomTextInput
              autoFocus
              value={email}
              placeholder="Email Address"
              type={"text"}
              eventChange={(e) => handleChange(e)}
              isInvalid={email === ""}
            />
            <div className="my-2">
              <SpacePrivacy />
            </div>
          </div>
        }
        footer
        actionTitle="Share"
      />
    </>
  );
};

export default ShareSpace;
