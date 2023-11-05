'use client'
import Header from '@/ui/header/header'
import React from 'react'
import Content from '@/components/learn/content'
import { useSearchParams } from 'next/navigation'

const LearnPage = () => {
  const parms = useSearchParams()
  const contentID = parms.get('c')
  console.log(contentID)
  return (
    <>
      <Header/>
      <Content type='youtube'/>
    </>
  )
}

export default LearnPage