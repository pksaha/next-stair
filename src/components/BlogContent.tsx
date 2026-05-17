import ReactMarkdown from "react-markdown"

interface Props {
  content: string
}

export function BlogContent({ content }: Props) {
  return (
    <div className="prose prose-neutral max-w-none
                    dark:prose-invert
                    prose-headings:font-bold
                    prose-h1:text-3xl prose-h1:mt-8
                    prose-h2:text-2xl prose-h2:mt-8
                    prose-h3:text-xl prose-h3:mt-6
                    prose-p:leading-relaxed
                    prose-code:bg-muted prose-code:px-1.5
                    prose-code:py-0.5 prose-code:rounded
                    prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-muted prose-pre:rounded-xl
                    prose-pre:p-4 prose-pre:overflow-x-auto
                    prose-a:text-primary prose-a:underline
                    prose-a:underline-offset-2
                    prose-ul:space-y-1 prose-ol:space-y-1
                    prose-li:leading-relaxed
                    prose-strong:font-semibold
                    prose-blockquote:border-l-4
                    prose-blockquote:border-primary/40
                    prose-blockquote:pl-4
                    prose-blockquote:italic
                    prose-blockquote:text-muted-foreground">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
