import Upgrade from '@/components/upgrade/upgrade'
import SecondaryHeader from '@/ui/header/secondary-header'
import React, { useEffect } from 'react'

const UpgradePage = () => {
  return (
    <>
      <SecondaryHeader/>
        <div className="z-10 relative h-full">
          <Upgrade/>
        </div>
    </>
  )
}

export default UpgradePage