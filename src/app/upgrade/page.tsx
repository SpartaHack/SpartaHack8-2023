import FAQ from '@/components/upgrade/faq'
import Upgrade from '@/components/upgrade/upgrade'
import SecondaryHeader from '@/ui/header/secondary-header'
import React, { useEffect } from 'react'

const UpgradePage = () => {
  return (
    <main className='bg-white dark:bg-black h-full'>
      <SecondaryHeader/>
        <div className="z-10 relative h-full pb-6">
          <Upgrade/>
          <FAQ/>
        </div>
    </main>
  )
}

export default UpgradePage