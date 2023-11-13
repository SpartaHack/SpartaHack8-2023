import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';

const FolderChatBase = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Icon icon="fluent:chat-sparkle-16-regular" className="rounded-full text-[50px] p-2 bg-secondary text-black hover:scale-110 backdrop duration-100 cursor-pointer" onClick={onOpen}/>    
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center' className='h-[60vh]'>
        <ModalContent>
          {(onClose) => (
            <>
              hi
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FolderChatBase