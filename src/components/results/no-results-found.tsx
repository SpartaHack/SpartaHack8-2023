import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const NoResultsFound = () => {
  return (
    <div className="flex-grow">
    <div className="flex w-full mt-24 px-10 flex-col items-center justify-center">
    <div className="flex flex-row">
      <h1 className="text-2xl font-sans text-center font-semibold mr-1">
        No results found
      </h1>
      <Icon
        icon="fluent:arrow-sprint-20-filled"
        className="w-8 h-8 font-black hidden md:block"
        style={{ transform: "rotate(-30deg)" }}
      />
    </div>
  </div>
  </div>
  )
}

export default NoResultsFound