'use client'
import FAQ from '@/components/upgrade/faq'
import PricingPage from '@/components/upgrade/pricing-table'
import SecondaryHeader from '@/ui/header/secondary-header'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

const UpgradePage = () => {
  const { setTheme } = useTheme()
  
  useEffect(() => {
    setTheme('light')
  }, [setTheme])

  return (
    <main>
      <SecondaryHeader/>
        <div className="z-10 mt-[60px] relative h-full pb-6">
          <PricingPage/>
          <FAQ/>
        </div>
    </main>
  )
}

export default UpgradePage