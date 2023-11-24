'use client'
import { useSpaceStore } from '@/context/space-context'
import { ScrollShadow, Spinner } from '@nextui-org/react'
import { getUserSpaceResponse } from '../../../../types'
import AddSpace from './add-space'
import useStore from '@/hooks/use-store'
import { Icon } from '@iconify/react/dist/iconify.js'
import CustomModal from '@/helpers/custom-modal'
import { useUserStore } from '@/context/user-context'
import { deleteSpace } from '@/app/api/endpoints'

const Spaces = () => {
  const spaces = useStore(useSpaceStore, (state) => state.spaces)
  const userId = useStore(useUserStore, (state) => state.userId)
  const { deleteSpaceFromState } = useSpaceStore();

  const handleDelete = async (spaceId: string) => {
    const response = await deleteSpace(userId!, spaceId)
    if (response) {
      deleteSpaceFromState(spaceId);
    }
  } 

  return (
    <>
      <AddSpace/>
      <ScrollShadow hideScrollBar size={20} className='h-screen space-y-4 flex flex-col'>
          {spaces ? spaces.filter(Boolean).map((space: getUserSpaceResponse) => (
            <div key={space._id} className='flex flex-row group w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
              <Icon icon='bxs:cube' className='h-6 w-6'/>
              <div className='ml-5'>
                <p>{space.space_name}</p>
              </div>
              <CustomModal title={<Icon icon='gg:trash' className='group-hover:opacity-50 p-2 w-12 h-12 opacity-0' />} contentMain={<div className='mb-5'>Are you sure you want to remove this item?</div>} footer actionTitle='Confirm Delete' actionEvent={() => handleDelete(space._id)}/>
            </div>
          )) : <></>}
          <div className='flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
            <Icon icon='ic:round-history' className='h-6 w-6'/>
            <div className='ml-5'>
              <p>History</p>
            </div>
          </div>
      </ScrollShadow>
    </>
  )
}

export default Spaces