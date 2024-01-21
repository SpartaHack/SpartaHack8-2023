import React, { ChangeEvent, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomTextInput from "@/helpers/custom-text-input";
import { toast } from "sonner";
import SpacePrivacy from "./space-privacy";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { CustomButton } from "@/helpers/custom-btn";

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onOpen();
  };

  const handleShare = () => {
    onClose();
  };

  return (
    <>
      <div className="bg-transparent" onClick={handleIconClick}>
        <div className="rounded-2xl px-4 py-2 bg-white border-2 dark:border-white border-absolute_black cursor-pointer dark:bg-black text-black dark:text-white dark:white font-semibold font-sans flex flex-row">
          <Icon icon="fluent:people-12-filled" className="w-6 h-6 md:mr-1" />
          <span className="text-sm hidden mt-0.5 md:block truncate font-sans font-semibold">
            Share space
          </span>
        </div>
      </div>
      <Modal
        size="2xl"
        backdrop="blur"
        placement="top-center"
        isOpen={isOpen}
        onClose={onClose}
        className="pb-3"
      >
        <ModalContent className="prevent-close">
          <>
            <ModalHeader className="flex flex-col gap-1">
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
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col px-3">
                <CustomTextInput
                  autoFocus
                  value={email}
                  endContent={
                    <CustomButton
                      btnType="button"
                      clickEvent={handleShare}
                      fullWidth={false}
                      title="Share"
                      btnStyling="w-3 dark:bg-white bg-black text-white py-2 dark:text-black font-semibold flex items-center justify-center rounded-xl"
                    />
                  }
                  placeholder="Email Address"
                  type={"text"}
                  eventChange={(e) => handleChange(e)}
                  isInvalid={email === ""}
                  classNames={{ inputWrapper: "pr-0.5" }}
                />
                <div className="my-2">
                  <SpacePrivacy />
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareSpace;
