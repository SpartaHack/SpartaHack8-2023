import React, { ChangeEvent, use, useState } from 'react'
import { useContentStore } from '@/context/content-store'
import useStore from '@/hooks/use-store'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Spinner, Switch } from '@nextui-org/react'
import CustomModal from '@/helpers/custom-modal'
import CustomTextInput from '@/helpers/custom-text-input'
import { useSpaceStore } from '@/context/space-context'
import { getUserSpaceResponse } from '../../../types'
import { addContent, updateSpace } from '@/app/api/endpoints'
import { auth } from '../../../db/firebase'
import { toast } from 'sonner'

const SpaceHeader = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [editSpaceName, setEditSpaceName ] = useState('')
  const [contentURL, setContentURL ] = useState('')
  const [spacePrivacy, setSpacePrivacy ] = useState(true)

  if (!contents) {
    return <Spinner color='current' size='sm'/> 
  }

  const spaceName = contents.space ? contents.space.space_name : 'History';

  if (spaceName === 'History') {
    return null;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>,  setState: React.Dispatch<React.SetStateAction<string>>) => {
    setEditSpaceName(e.target.value);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>,  setState: React.Dispatch<React.SetStateAction<string>>) => {
    setContentURL(e.target.value);
  }

  const handleSave = async (spacePrivacy: boolean, editSpaceName: string) => {
    const updatedDataSpace = {
      _id: contents.space._id,
      space_name: editSpaceName,
      visibility: spacePrivacy ? 'private' : 'public',
    } as Partial<getUserSpaceResponse>;
  
    const updatedData = {
      _id: contents.space._id,
      space_name: editSpaceName,
    };
    
    const response = await updateSpace(auth.currentUser?.uid!, contents.space._id, editSpaceName, spacePrivacy ? 'private' : 'public')
    if (response) {
        useSpaceStore.getState().updateSpaceData(updatedData);
        useContentStore.getState().updateContent(updatedDataSpace);
        toast.success("Space updated.")
    } else {
        toast.error("Could not update space.")
    }
    setEditSpaceName('')
  }

  const handleAdd = async () => {
    const response = await addContent(auth.currentUser?.uid!, contents.space._id, contentURL)
    useContentStore.getState().addContent(response?.data.content);
    setContentURL('')
  }

  return (
    <>
    <div className='mt-8 ml-5 mr-5'>
      <div className='text-sm font-bold text-neutral-500'>
        / {spaceName}
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='text-3xl  flex flex-row group'>
          {spaceName}
          <CustomModal footer title={<Icon icon='lucide:pen' className='opacity-0 h-5 w-5 mt-2 ml-2 cursor-pointer group-hover:opacity-50' />}
            actionTitle='Save'
            actionEvent={() => handleSave(spacePrivacy, editSpaceName)} 
            contentTitle='Edit your space' 
            contentMain={
            <>
              <Switch color="success" isSelected={spacePrivacy} onValueChange={setSpacePrivacy}>
                Make space private
              </Switch>
              <CustomTextInput styling='mt-3 pt-1 mb-2' value={editSpaceName} type={'text'} label={'Edit Space Name'} isInvalid={editSpaceName == ''} eventChange={(e) => handleInputChange(e, setEditSpaceName)}/>
            </>}          
          />
        </div>
        <div className='flex flex-row mt-3 md:mt-0 md:w-[10%] w-[30%]'>
          <CustomModal 
            title={
            <div className='rounded-xl p-2 bg-black cursor-pointer dark:bg-white text-white dark:text-black dark:white font-semibold font-sans flex flex-row'>
                <Icon icon='mi:add' className='w-4 h-4 mt-0.5 mr-1' />
                <span className='text-sm'>
                    Add content
                </span>
            </div>} 
            actionEvent={handleAdd}
            contentTitle='Add content' 
            contentMain={<CustomTextInput value={contentURL} type={'text'} eventChange={(e) => handleChange(e, setContentURL)} isInvalid={contentURL === ''} label={'Add content URL'}/>}
            footer
            actionTitle='Add'
          />
        </div>
      </div>
    </div>
    <div className='mt-8 horizontal-line'/>
    </>
  )
}

export default SpaceHeader