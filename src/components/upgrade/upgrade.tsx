import React from 'react'
import FreeTier from './free-tier'
import PremiumTierMonthly from './premium-tier-monthly'
import PremiumTierYearly from './premium-tier-yearly'

const Upgrade = () => {
  return (
    <div className='flex items-center justify-center space-x-5 md:space-x-10 lg:space-x-20 w-full h-screen'>
        <FreeTier/>
        <PremiumTierYearly/>
        <PremiumTierMonthly/>
    </div>
  )
}

export default Upgrade