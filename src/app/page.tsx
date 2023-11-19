'use client'
import React, { Suspense } from "react"
import Header from "../ui/header/header"
import Dashboard from "@/components/dashboard/dashboard"
import Loading from "./loading"
import Footer from "@/ui/footer/footer"

export default function App() {
  return (
    <main className="dark:bg-neutral-900 bg-white h-full">
      <Suspense fallback={<Loading/>}>
        <Header/>
        <Dashboard/>
        <Footer/>
      </Suspense>
    </main>
  )
}