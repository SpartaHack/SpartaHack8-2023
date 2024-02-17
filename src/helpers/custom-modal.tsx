import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { CustomButton } from "./custom-btn";
import { CustomModalProps } from "../../types";

const CustomModal = ({
  title,
  size,
  btnStyling1,
  btnStyling2,
  contentTitle,
  contentMain,
  actionTitle,
  actionEvent,
  placement,
  footer,
  isModalDefaultOpen,
}: CustomModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    if (isModalDefaultOpen) {
      const modalOpen = localStorage.getItem("modalOpen");
      if (modalOpen === "true") {
        onOpen();
        localStorage.setItem("modalOpen", "false");
      }
    }
  }, [isModalDefaultOpen, onOpen]);

  const handleClose = (event: React.MouseEvent) => {
    actionEvent && actionEvent(event);
    setHasBeenClosed(true);
    onClose();
  };

  useEffect(() => {
    if (hasBeenClosed) {
      localStorage.setItem("modalOpen", "false");
    }
  }, [hasBeenClosed]);

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onOpen();
  };

  return (
    <>
      <div className="bg-transparent" onClick={handleIconClick}>
        {title}
      </div>
      <Modal
        size={size}
        backdrop="blur"
        placement={placement}
        isOpen={isOpen}
        onClose={() => {
          setHasBeenClosed(true);
          onClose();
        }}
      >
        <ModalContent className="prevent-close">
          <>
            <ModalHeader className="flex flex-col gap-1">
              {contentTitle}
            </ModalHeader>
            <ModalBody>{contentMain}</ModalBody>
            {footer && (
              <ModalFooter>
                <CustomButton
                  title="Close"
                  btnType="button"
                  clickEvent={() => {
                    setHasBeenClosed(true);
                    onClose();
                  }}
                  btnStyling={btnStyling1}
                />
                <CustomButton
                  title={actionTitle!}
                  btnType="submit"
                  clickEvent={handleClose}
                  btnStyling={btnStyling2}
                />
              </ModalFooter>
            )}
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
