import Upgrade from '@/components/upgrade/upgrade'
import AuthHeader from '@/ui/header/auth-header'
import React, { useEffect } from 'react'

const UpgradePage = () => {
  return (
    <>
      <AuthHeader/>
        <div className="z-10 relative h-full">
          <Upgrade/>
        </div>
    </>
  )
}

export default UpgradePage