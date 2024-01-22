"use client";
import { Dialog, Transition } from "@headlessui/react";
import SpaceChatMain from "./space-chat-main";
import { Fragment, useState, useRef } from "react";
import SpaceIcon from "@/icon/space-icon";
import { Icon } from "@iconify/react/dist/iconify.js";

const SpaceChatBase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cancelNextClick, setCancelNextClick] = useState(false);
  const cancelNextClickTimeoutId = useRef<number | null>(null);

  const handleOpen = () => {
    if (cancelNextClick) {
      setCancelNextClick(false);
      return;
    }

    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCancelNextClick(true);

    if (cancelNextClickTimeoutId.current !== null) {
      clearTimeout(cancelNextClickTimeoutId.current);
      cancelNextClickTimeoutId.current = null;
    }

    cancelNextClickTimeoutId.current = window.setTimeout(
      () => setCancelNextClick(false),
      500,
    );
  };

  return (
    <>
      <SpaceIcon
        clickEvent={isOpen ? handleClose : handleOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="absolute z-10" onClose={handleClose}>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-end lg:pb-[115px] pb-[90px] lg:mr-5 justify-end p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-out duration-300"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative w-full bg-absolute_white max-w-lg h-[80vh] lg:h-[75vh] overflow-y-auto transform rounded-xl p-6 text-left transition-all flex flex-col dark:bg-black dark:border dark:border-neutral-800 drop-shadow">
                    <SpaceChatMain />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default SpaceChatBase;
