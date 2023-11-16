import React, { Suspense } from "react"
import Header from "../ui/header/header"
import Dashboard from "@/components/dashboard/dashboard"
import Loading from "./loading"

export default function App() {
  return (
    <main className="dark:bg-neutral-900 bg-white">
      <Suspense fallback={<Loading/>}>
        <Header/>
        <Dashboard/>
      </Suspense>
    </main>
  )
}
