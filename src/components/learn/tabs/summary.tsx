import React from 'react'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';
import useCopyToClipboard from '@/hooks/use-copy-clipboard';
import { Icon } from '@iconify/react/dist/iconify.js';
import { SummaryProps } from '../../../../types';

const Summary = ({summary}: SummaryProps) => {
  const type = 'youtube'
  const height = useContainerHeight({type: type});

  const { copiedState, copyToClipboard } = useCopyToClipboard();
  const copiedStateTyped: {[key: number]: boolean} = copiedState;

  return (
    <div className='lg:h-full h-[70vh] flex-col flex'  style={{maxHeight: `${height-90}px`}}>
      <ScrollShadow size={5} hideScrollBar className='flex-grow overflow-hidden overflow-y-auto rounded-lg'>
        <div className="flex-grow leading-7">
          {summary}
        </div>
        <div className="flex justify-end p-2 cursor-pointer">
            {copiedStateTyped[0] ? (
                <Icon icon="charm:tick" className="text-xl text-secondary" />
              ) : (
                <Icon icon="ci:copy"
                  onClick={() =>
                    copyToClipboard(summary, 0)
                  }
                  className="text-xl cursor-pointer"
                />
              )}
        </div>
      </ScrollShadow>
    </div>
  )
}

export default Summary