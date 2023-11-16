import React from 'react'
import Image from 'next/image'
import { ContentCardProps } from '../../../types'
import { useRouter } from 'next/navigation'

const ContentCard = ({contentID, type, title, thumbnail_url}: ContentCardProps) => {
  const router = useRouter();

  const clickCard = (contentID: string) => {
    return (event: React.MouseEvent) => {
        router.push(`/learn?c=${contentID}`)
    }
  }

  return (
    <div className="relative cursor-pointer flex-col bg-absolute_white justify-center items-center gap-20 drop-shadow-sm rounded-[10px] hover:shadow-xl hover:scale-105 transition duration-300 dark:bg-neutral-800 max-h-[270px] max-w-[360px] min-h-full min-w-[220px]" onClick={clickCard(contentID)}>
        <div className="rounded-t-[10px] overflow-hidden">
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