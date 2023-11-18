import CustomModal from '@/helpers/custom-modal'
import CustomTextInput from '@/helpers/custom-text-input'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

const AddFolder = () => {
  const [folderName, setFolderName] = useState('')
  return (
    <div className='w-full'>
        <CustomModal 
            title={
                <div className='flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
                    <Icon icon='mdi:folder-add-outline' className='h-6 dark:text-neutral-500 text-neutral-400 w-6'/>
                    <span className='text-neutral-400 ml-5 dark:text-neutral-500'>
                        Add Folder
                    </span>
                </div>
            } 
            contentTitle='Create a folder' 
            contentMain={
                <>
                    <CustomTextInput 
                        value={folderName}
                        eventChange={(e) => {setFolderName(e.target.value)}}
                        styling='mt-2 mb-2'
                        isInvalid={folderName === ''}
                        type='text' 
                        label='Folder Name'
                    />
                </>
            } 
            actionTitle='Create New Folder' 
            actionEvent={() => {}}
        />
    </div>
  )
}

export default AddFolder