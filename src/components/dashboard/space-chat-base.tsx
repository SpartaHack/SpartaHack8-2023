"use client";
import { Dialog, Transition } from "@headlessui/react";
import SpaceChatMain from "./space-chat-main";
import { Fragment, useState } from "react";
import SpaceIcon from "@/icon/space-icon";

const SpaceChatBase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    localStorage.setItem("chatHistoryLoading", "true");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SpaceIcon clickEvent={handleOpen} />
      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="absolute z-10"
            onClose={() => setIsOpen(false)}
          >
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
