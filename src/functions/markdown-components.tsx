import { MarkdownElementProps } from "../../types";

const markdownComponents = {
  h1: ({ ...props }: MarkdownElementProps) => (
    <h1 className="text-2xl text-center mb-6 font-extrabold" {...props} />
  ),
  h2: ({ ...props }: MarkdownElementProps) => (
    <h2 className="text-xl mb-4 font-bold" {...props} />
  ),
  h3: ({ ...props }: MarkdownElementProps) => (
    <h3 className="text-lg mb-2 font-semibold" {...props} />
  ),
  p: ({ ...props }: MarkdownElementProps) => (
    <p className="text-base" {...props} />
  ),
  ul: ({ ...props }: MarkdownElementProps) => (
    <ul className="list-disc list-inside mb-4" {...props} />
  ),
  ol: ({ ...props }: MarkdownElementProps) => (
    <ol className="list-decimal list-inside mb-4" {...props} />
  ),
  li: ({ ...props }: MarkdownElementProps) => (
    <li className="my-1" {...props} />
  ),
  blockquote: ({ ...props }: MarkdownElementProps) => (
    <blockquote className="pl-4 italic border-l-4 mb-4" {...props} />
  ),
  pre: ({ ...props }: MarkdownElementProps) => (
    <pre
      className="p-1 dark:bg-absolute_black my-1 rounded-lg bg-neutral-200 overflow-x-auto"
      {...props}
    />
  ),
  table: ({ ...props }: MarkdownElementProps) => (
    <table className="min-w-full" {...props} />
  ),
  code: ({ ...props }: MarkdownElementProps) => (
    <code
      className="p-1 text-sm dark:bg-neutral-800 bg-neutral-200 rounded"
      {...props}
    />
  ),
  a: ({ ...props }: MarkdownElementProps) => (
    <a
      className="text-neutral-500 dark:text-neutral-400 hover:underline"
      {...props}
    />
  ),
};

export default markdownComponents;
