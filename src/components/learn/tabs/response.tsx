import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ResponseProps } from '../../../../types'
import { TooltipContent } from '@/functions/tool-tip-content'

const Response = ({message, source}: ResponseProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        em: (props) => <TooltipContent source={source} {...props} />
    }}>
      {message}
    </Markdown>
  )
}

export default React.memo(Response);