'use client'
import CustomModal from '@/helpers/custom-modal'
import CustomTextInput from '@/helpers/custom-text-input'
import React, { MouseEventHandler, useState } from 'react'

const AddFolder = () => {
  const [folderName, setFolderName] = useState('')

  const addFolder: MouseEventHandler = (e) => {
    e.preventDefault();
    if (folderName != '') {
        
    }
  } 

  return (
    <div>
        <CustomModal 
            title={
                <h1 className='hover:bg-secondary'>
                    Create
                </h1>
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