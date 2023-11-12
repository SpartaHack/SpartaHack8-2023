import { Tooltip } from '@nextui-org/react'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ResponseProps, TooltipContentProps } from '../../../../types'
import { TooltipContent } from '@/app/functions/tool-tip-content'

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