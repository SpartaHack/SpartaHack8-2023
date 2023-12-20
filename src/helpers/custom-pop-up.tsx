import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomButton } from "./custom-btn";
import { PopUpProps } from "../../types";

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
        <div className="fixed inset-0 backdrop-blur-sm" />
        <Dialog.Panel className="bg-white dark:bg-neutral-900 rounded-xl px-4 pt-5 pb-4 overflow-auto shadow-xl transform transition-all max-w-sm md:max-w-lg w-full p-6 z-50">
          <Icon
            onClick={closeModal}
            icon="basil:cross-solid"
            className="text-2xl text-black dark:text-white absolute top-4 right-6"
          />
          <div className="ml-4 text-left">
            <h3
              className={`text-lg leading-6 font-medium text-black dark:text-white ${titleStyles}`}
            >
              {title} Error
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-500 dark:text-gray-500">{description}</p>
            </div>
          </div>
          <div className="py-3 px-2 flex flex-row-reverse">
            {buttonTitle && (
              <span className="flex rounded-xl shadow-sm ml-3 w-auto ">
                <CustomButton
                  title={buttonTitle}
                  btnType="button"
                  clickEvent={buttonClick}
                  btnStyling="text-white dark:text-black inline-flex justify-center w-full rounded-xl px-4 py-2 bg-black dark:bg-secondary text-base leading-6 font-medium shadow-sm transition ease-in-out duration-150 text-sm"
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
