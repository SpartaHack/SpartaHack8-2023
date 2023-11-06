'use client'
import Upgrade from '@/components/upgrade/upgrade'
import AuthHeader from '@/ui/header/auth-header'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { useTheme } from 'next-themes'

const UpgradePage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      lerp: 0.05
    })
    function raf(time : number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    setTheme('dark');
  }, [setTheme])

  return (
    <div className='bg-[#000107]'>
      <AuthHeader/>
      <div className="relative h-screen">
        <img src="/upgrade-bg.jpg" alt="bg" className="absolute z-0 object-contain" />
        <div className="z-10 relative h-full">
          <Upgrade/>
        </div>
      </div>
    </div>
  )
}

export default UpgradePage