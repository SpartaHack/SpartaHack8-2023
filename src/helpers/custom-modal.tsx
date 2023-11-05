import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { CustomButton } from "./custom-btn";
import { CustomModalProps } from "../../types";

const CustomModal = ({title, contentTitle, contentMain, actionTitle, actionEvent}: CustomModalProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div>
          <div onClick={onOpen}>
            {title}
          </div>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{contentTitle}</ModalHeader>
              <ModalBody>
                {contentMain}
              </ModalBody>
              <ModalFooter>
                <CustomButton title="Close" btnType="button" clickEvent={onClose} btnStyling="hover:bg-danger"/>
                <CustomButton title={actionTitle} btnType="submit" clickEvent={actionEvent} btnStyling="hover:bg-secondary"/>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
