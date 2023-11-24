'use client'
import { useSpaceStore } from '@/context/space-context'
import { ScrollShadow, Spinner } from '@nextui-org/react'
import { getUserSpaceResponse } from '../../../../types'
import AddSpace from './add-space'
import useStore from '@/hooks/use-store'
import { Icon } from '@iconify/react/dist/iconify.js'

const Spaces = () => {
  const spaces = useStore(useSpaceStore, (state) => state.spaces)

  return (
    <>
      <AddSpace/>
      <ScrollShadow hideScrollBar size={20} className='h-screen space-y-4 flex flex-col'>
          {spaces && spaces.filter(Boolean).map((space: getUserSpaceResponse) => (
            <div className='flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
              <Icon icon='bxs:cube' className='h-6 w-6'/>
              <div className='ml-5'>
                <p>{space.space_name}</p>
              </div>
            </div>
          ))}
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