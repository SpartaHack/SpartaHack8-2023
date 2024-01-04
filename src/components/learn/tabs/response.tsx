import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ResponseProps } from "../../../../types";
import { TooltipContent } from "@/functions/tool-tip-content";

const Response = ({ message, source, additionalMarkdown }: ResponseProps) => {
  const combinedComponents = {
    ...additionalMarkdown,
    em: (props: any) => <TooltipContent source={source} {...props} />,
  };
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={combinedComponents}>
      {message}
    </Markdown>
  );
};

export default React.memo(Response);
