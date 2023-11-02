'use client'
import CustomModal from '@/helpers/custom-modal'
import CustomTextInput from '@/helpers/custom-text-input'
import React, { MouseEventHandler, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const AddFolder = () => {
  const [folderName, setFolderName] = useState('')

  const addFolder: MouseEventHandler = (e) => {
    e.preventDefault();
    if (folderName != '') {
        
    }
  } 

  return (
    <div className='flex flex-row w-full'>
        <CustomModal 
            title={
              <div className='folder-style flex-none bg-gradient-to-r from-[#00FFF0] to-[#7DFF97]' onClick={addFolder}>
                <Icon icon="uil:plus" className=' dark:text-neutral-900 h-6 w-6'/>
              </div>
            }
            contentTitle='Create new Folder'
            contentMain={
                <CustomTextInput 
                    value={folderName}
                    eventChange={(e) => {setFolderName(e.target.value)}}
                    styling='mt-2 mb-2'
                    isInvalid={folderName == ''}
                    type='text' 
                    label='Folder Name'
                />
            }
            actionTitle='Create' 
            actionEvent={addFolder}
           />
    </div>
  )
}

export default AddFolder