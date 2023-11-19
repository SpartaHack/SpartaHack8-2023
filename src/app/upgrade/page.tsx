import Upgrade from '@/components/upgrade/upgrade'
import SecondaryHeader from '@/ui/header/secondary-header'
import React, { useEffect } from 'react'

const UpgradePage = () => {
  return (
    <main className='bg-white dark:bg-black h-screen'>
      <SecondaryHeader/>
        <div className="z-10 relative h-full">
          <Upgrade/>
        </div>
    </main>
  )
}

export default UpgradePage