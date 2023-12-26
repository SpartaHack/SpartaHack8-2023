import { MarkdownElementProps } from "../../types";

const markdownComponents = {
  h1: ({ ...props }: MarkdownElementProps) => (
    <h1 className="text-xl mb-6 font-extrabold" {...props} />
  ),
  h2: ({ ...props }: MarkdownElementProps) => (
    <h2 className="text-lg mb-4 font-bold" {...props} />
  ),
  h3: ({ ...props }: MarkdownElementProps) => (
    <h3 className="text-[16px] mb-2 font-semibold" {...props} />
  ),
  p: ({ ...props }: MarkdownElementProps) => (
    <p className="text-base" {...props} />
  ),
  ul: ({ ...props }: MarkdownElementProps) => (
    <ul className="list-disc list-inside" {...props} />
  ),
  ol: ({ ...props }: MarkdownElementProps) => (
    <ol className="list-decimal list-inside" {...props} />
  ),
  li: ({ ...props }: MarkdownElementProps) => (
    <li className="mb-1" {...props} />
  ),
  blockquote: ({ ...props }: MarkdownElementProps) => (
    <blockquote className="pl-4 italic border-l-4" {...props} />
  ),
  code: ({ ...props }: MarkdownElementProps) => (
    <code className="p-1 text-sm bg-neutral-200 rounded" {...props} />
  ),
  a: ({ ...props }: MarkdownElementProps) => (
    <a className="text-neutral-500 hover:underline" {...props} />
  ),
};

export default markdownComponents;
