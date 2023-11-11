import { Tooltip } from '@nextui-org/react'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type ResponseProps = {
    message: string,
}

const Response = ({message}: ResponseProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        em(props) {
        const {className, ...rest} = props
        return (
          <>
            <Tooltip content={<h1>Source 1</h1>}>
              <sup className='text-[10px] px-[4px] py-[2px] rounded-full bg-neutral-300 dark:bg-neutral-700 cursor-pointer' {...rest} />
            </Tooltip>
          </>
        )
        }
    }}>
      {message}
    </Markdown>
  )
}

export default React.memo(Response);