import CustomModal from '@/helpers/custom-modal'
import CustomTextInput from '@/helpers/custom-text-input'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

const AddSpace = () => {
  const [spaceName, setSpaceName] = useState('')
  return (
    <div className='w-full'>
        <CustomModal 
            title={
                <div className='flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
                    <Icon icon='mdi:folder-add-outline' className='h-6 dark:text-neutral-500 text-neutral-400 w-6'/>
                    <span className='text-neutral-400 ml-5 dark:text-neutral-500'>
                        Add Space
                    </span>
                </div>
            } 
            contentTitle='Create a space' 
            contentMain={
                <>
                    <CustomTextInput 
                        value={spaceName}
                        eventChange={(e) => {setSpaceName(e.target.value)}}
                        styling='mt-2 mb-2'
                        isInvalid={spaceName === ''}
                        type='text' 
                        label='Space Name'
                    />
                </>
            } 
            actionTitle='Create New Space' 
            actionEvent={() => {}}
        />
    </div>
  )
}

export default AddSpace