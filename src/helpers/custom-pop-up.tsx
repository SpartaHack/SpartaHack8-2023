import React, { MouseEventHandler } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomButton } from "./custom-btn";

export type PopUpProps = {
  title: string | number;
  description: string;
  isOpen: boolean;
  closeModal: () => void;
  titleStyles?: string;
  buttonTitle?: string;
  buttonClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomPopUp = ({
  title,
  description,
  isOpen,
  closeModal,
  buttonTitle,
  buttonClick,
  titleStyles,
}: PopUpProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={closeModal}
      >
        <div className="fixed inset-0 blur opacity-75 z-40"></div>
        <Dialog.Panel className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-auto shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6 sm:pb-4 z-50">
          <CustomButton
            btnType="button"
            clickEvent={closeModal}
            btnStyling="absolute top-2 right-2 z-10 w-fit p-2 outline-none"
            title={
              <Icon icon="basil:cross-solid" className="text-2xl font-black" />
            }
          />
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className={`text-lg leading-6 font-medium text-gray-900 ${titleStyles}`}
            >
              {title}
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-500">{description}</p>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {buttonTitle && (
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <CustomButton
                  title={buttonTitle}
                  btnType="button"
                  clickEvent={buttonClick}
                  btnStyling="inline-flex justify-center w-full rounded-md px-4 py-2 bg-[#7DFF97] text-base leading-6 font-medium text-black shadow-sm transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                />
              </span>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default CustomPopUp;
