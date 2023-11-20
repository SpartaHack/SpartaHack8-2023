'use client'
import FAQ from '@/components/upgrade/faq'
import Upgrade from '@/components/upgrade/upgrade'
import Footer from "@/ui/footer/footer"
import Header from '@/ui/header/header'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const UpgradePage = () => {
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setTheme('light')
  }, [theme, setTheme])

  return (
    <div>
      <Header/>
        <div className="z-10 mt-[60px] relative h-full pb-6">
          <Upgrade/>
          <FAQ/>
        </div>
        <Footer/>
    </div>
  )
}

export default UpgradePage