import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { getMarkdownContent } from '@/lib/getMarkdownContent'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { mdxComponents } from '@/components/mdx-components'

export default async function GuidePage({ params }: { params: { folder: string, slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/guides', `/${params.folder}/${params.slug}.md`)
  if (!fs.existsSync(filePath)) return notFound()

  const file = fs.readFileSync(filePath, 'utf8')
  const { content, data } = getMarkdownContent(params.folder, params.slug)
  // const code = await compileMDX(content)

  // const Component = useMDXComponent(code)

  return (
    <div className="prose mx-auto py-10">
      {/* <h1>{data.title || params.slug}</h1> */}
      <ReactMarkdown remarkPlugins={[remarkGfm as any]} components={mdxComponents}>{content}</ReactMarkdown>
    </div>
  )
}