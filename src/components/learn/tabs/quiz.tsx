import React from 'react'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';
import { CustomButton } from '@/helpers/custom-btn';

const Quiz = () => {
  const height = useContainerHeight();
  return (
    <>
      <div style={{minHeight: `${height-190}px`}}>
        <ScrollShadow size={5} hideScrollBar className='flex-grow overflow-hidden overflow-y-auto rounded-lg text-[50px]' style={{maxHeight: `${height-140}px`}}>
          TEXT FOR DUMMIES sadad
          TEXT FOR DUMMIES
          TEXT FOR DUMMIES
          TEXT FOR DUMMIES
          TEXT FOR DUMMIES
        </ScrollShadow>
      </div>
      <div className="mt-3 w-full">
        <CustomButton
          btnStyling='w-full bg-secondary text-black'
          title='Submit Quiz'
          btnType='submit'
        />
    </div>
    </>
  )
}

export default Quiz