'use client'
import Header from '@/ui/header/header'
import React, { Suspense } from 'react'
import Content from '@/components/learn/content/content'
import { useSearchParams } from 'next/navigation'
import Loading from '../loading'

const LearnPage = () => {
  const parms = useSearchParams()
  const contentID = parms.get('c')
  return (
    <main className='flex flex-col min-h-screen"'>
      <Suspense fallback={<Loading/>}>
        <Header/>
        <Content type='youtube'/>
      </Suspense>
    </main>
  )
}

export default LearnPage