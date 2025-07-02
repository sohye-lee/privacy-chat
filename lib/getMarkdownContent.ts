import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getMarkdownContent(folder: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    'content/guides',
    `/${folder}/${slug}.md`
  )
  const raw = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(raw)
  return { content, data }
}
