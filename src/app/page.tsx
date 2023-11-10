import React from "react"
import Header from "../ui/header/header"
import Dashboard from "@/components/dashboard/dashboard"

export default function App() {
  return (
    <main className="dark:bg-neutral-900">
      <Header/>
      <Dashboard/>
    </main>
  )
}
