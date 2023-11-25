import React from 'react'
import Image from 'next/image'
import { ContentCardProps } from '../../../types'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CustomDropdown } from '@/helpers/custom-dropdown'
import { menuDropDown } from '@/functions/content-dropdown-constants'
import { useContentStore } from '@/context/content-store'
import { deleteContent } from '@/app/api/endpoints'
import { auth } from '../../../db/firebase'
import { toast } from 'sonner'

const ContentCard = ({contentID, spaceId, type, title, thumbnail_url}: ContentCardProps) => {
  const router = useRouter();
  const { deleteContentFromState, contents } = useContentStore();

  console.log(spaceId)

  const clickCard = (contentID: string) => {
    if (!spaceId) {
      console.log(`/learn?c=${contentID}`)
    } else {
      console.log(`/learn?s=${spaceId}/c=${contentID}`)
    }
  }

  const handleDelete = async (contentID: string) => {
    try {
      const response = await deleteContent(auth.currentUser?.uid!, contents.space._id, [contentID])
      if (response) {
        deleteContentFromState(contentID)
        toast.success("Deleted content.")
      } else {
        toast.error("Unable to delete content.")
      }
    } catch (err) {
      toast.error("Cannot delete content from history.")
    }
  }

  return (
    <div className="relative cursor-pointer flex-col bg-absolute_white justify-center items-center gap-20 drop-shadow-sm rounded-xl hover:shadow-xl hover:scale-105 transition duration-300 dark:bg-neutral-800 max-h-[270px] max-w-[360px] min-h-full min-w-[220px] group" onClick={() => clickCard(contentID)}>
      <div className="absolute top-2 right-2 p-1 hover:scale-125 duration-200 cursor-pointer rounded-full group-hover:bg-neutral-100 group-hover:dark:bg-neutral-800">
        <CustomDropdown closeOnSelect={false} title={<Icon icon="solar:menu-dots-bold" rotate={1} className='w-4 h-4 opacity-0 group-hover:opacity-100 dark:text-white'/>} sections={menuDropDown(contentID, handleDelete)}/>
      </div>
      <div className="rounded-t-xl overflow-hidden">
        <Image
          width-full="true"
          src={thumbnail_url!}
          width={360}
          height={240}
          alt="thumbnail"
          className={type === 'youtube' ? '' : 'object-fill h-[200px] w-[360px]'}
        />
      </div>
      <div className="w-full my-4">
        <h5 className="text-center font-semibold px-4 line-clamp-1">
            {title}
        </h5>
      </div>
    </div>
  )
}

export default ContentCard