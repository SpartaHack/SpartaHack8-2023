import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomButton } from "./custom-btn";
import { PopUpProps } from "../../types";

const CustomPopUp: React.FC<PopUpProps> = ({
  title,
  description,
  isOpen,
  closeModal,
  buttonTitle,
  buttonClick,
  titleStyles,
}) => {
  const dialogHeaderStyles = `text-lg leading-6 font-medium text-black dark:text-white ${titleStyles}`;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={closeModal}
      >
        <div className="fixed inset-0 backdrop-blur-sm" />
        <Dialog.Panel className="bg-white dark:bg-neutral-900 rounded-lg px-4 pt-5 pb-4 overflow-auto shadow-xl transform transition-all max-w-sm md:max-w-lg w-full p-6 z-50">
          <Icon
            onClick={closeModal}
            icon="basil:cross-solid"
            className="header-icons absolute top-2 right-2"
          />
          <div className="ml-4 text-left">
            <h3 className={dialogHeaderStyles}>{title} Error</h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-neutral-500 dark:text-neutral-500">
                {description}
              </p>
            </div>
          </div>
          {buttonTitle && (
            <div className="py-3 px-2 flex flex-row-reverse">
              <span className="flex rounded-lg shadow-sm ml-3">
                <CustomButton
                  title={buttonTitle}
                  btnType="button"
                  clickEvent={buttonClick}
                  autoFocus={false}
                  btnStyling="text-white outline-none dark:text-black rounded-lg bg-black dark:bg-secondary shadow-sm"
                />
              </span>
            </div>
          )}
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default CustomPopUp;
