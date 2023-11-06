'use client'
import Upgrade from '@/components/upgrade/upgrade'
import AuthHeader from '@/ui/header/auth-header'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const UpgradePage = () => {

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
  })

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