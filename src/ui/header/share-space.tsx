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
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { CustomButton } from "@/helpers/custom-btn";
import EmailChips from "./email-chips";

// million-ignore
const ShareSpace = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [email, setEmail] = useState("");
  const [chips, setChips] = useState<string[]>([]);
  const [copyButtonText, setCopyButtonText] = useState("Copy Link to Space");

  const spaceName = contents && contents.space && contents.space.name;
  const spaceId = contents && contents.space && contents.space._id;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCopy = async () => {
    try {
      const text = `/space/${spaceId}`;
      if (typeof window !== "undefined") {
        const domainName = window.location.origin;
        await navigator.clipboard.writeText(domainName + text);
        setCopyButtonText("Copied!");
        setTimeout(() => {
          setCopyButtonText("Copy Link to Space");
        }, 5000);
      } else {
        throw new Error("Cannot access window object");
      }
    } catch (err) {
      toast.error("Error. Cannot copy.");
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && email) {
      if (!chips.includes(email))
        setChips((prevChips) => [...prevChips, email]);
      setEmail("");
    }
  };

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onOpen();
  };

  const handleShare = () => {
    onClose();
  };

  return (
    <>
      <div className="bg-transparent " onClick={handleIconClick}>
        <div className="rounded-2xl shadow px-4 py-2 bg-absolute_white border dark:border-white border-absolute_black cursor-pointer dark:bg-black text-black dark:text-white dark:white font-semibold font-sans flex flex-row">
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
            <ModalHeader className="flex flex-col">
              <div className="flex flex-col px-3">
                <div className="mt-0.5 font-semibold flex flex-row">
                  <Icon
                    icon="fluent:people-12-filled"
                    className="w-4 h-4 mr-1 mt-0.5"
                  />
                  <span className="text-sm">Share space</span>
                </div>
                <div className="flex flex-row justify-between items-baseline">
                  <span className="mt-4 text-3xl font-sans">{spaceName}</span>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col">
                {/* <CustomTextInput
                  autoFocus
                  value={email}
                  label={
                    chips.length !== 0 ? <EmailChips chips={chips} setChips={setChips} /> : undefined
                  }
                  labelPlacement={chips.length > 0 ? "inside" : "outside"}
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
                  onKeyDown={handleKeyDown}
                  type={"text"}
                  eventChange={(e) => handleChange(e)}
                  isInvalid={email === ""}
                  classNames={{ inputWrapper: "pr-0.5" }}
                /> */}
                <SpacePrivacy />
              </div>
            </ModalBody>
          </>
          <ModalFooter>
            <CustomButton
              clickEvent={handleCopy}
              title={
                <div className="flex-row flex cursor-pointer">
                  <Icon icon="ph:link-bold" className="h-5 w-5 mr-1" />
                  <div className="text-sm font-sans">{copyButtonText}</div>
                </div>
              }
              size="lg"
              btnType="button"
              btnStyling="dark:bg-white bg-black text-white py-2 dark:text-black font-semibold flex items-center justify-center rounded-xl"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareSpace;
