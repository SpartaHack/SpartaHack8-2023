import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const FileUploader = () => {
  return (
    <div className='flex flex-col h-40 cursor-pointer rounded-xl border-[2px] border-[#3F3F45] items-center justify-center'>
        <Icon icon="ph:plus" className='h-10 w-10 pb-2' />
        <span>Upload file</span>
        <span className='text-sm'>(PDFs)</span>
    </div>
  )
}

export default FileUploader