import { Tooltip } from '@nextui-org/react'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ResponseProps } from '../../../../types'

const Response = ({message, source}: ResponseProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        em(props) {
        const {className, ...rest} = props
        let tooltipContent = 'Source';
        if (source && typeof rest.children === 'string') {
          const key = rest.children.replace(/\*/g, '');
          tooltipContent = source[key] || 'Source';
        }
        return (
          <>
            <Tooltip content={tooltipContent}>
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