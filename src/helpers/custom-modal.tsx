import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { CustomButton } from "./custom-btn";
import { CustomModalProps } from "../../types";

const CustomModal = ({title, size, contentTitle, contentMain, actionTitle, actionEvent, placement, footer}: CustomModalProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleClose = (event: React.MouseEvent) => {
    actionEvent && actionEvent(event);
    onClose();
  }

  return (
    <>
      <div className="bg-transparent" onClick={onOpen}>
        {title}
      </div>
      <Modal size={size} backdrop="blur" placement={placement} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="prevent-close">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{contentTitle}</ModalHeader>
              <ModalBody>
                {contentMain}
              </ModalBody>
              { footer &&
              <ModalFooter>
                <CustomButton title="Close" btnType="button" clickEvent={onClose} btnStyling="hover:bg-danger"/>
                <CustomButton title={actionTitle!} btnType="submit" clickEvent={handleClose} btnStyling="hover:bg-secondary"/>
              </ModalFooter>
              }
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
