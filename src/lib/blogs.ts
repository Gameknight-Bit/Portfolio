import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'data', 'blogs')

export interface BlogMeta {
  title: string
  date: string
  category: 'Mathematics' | 'Computer Science' | 'Both'
  summary: string
  tags: string[]
}

export interface BlogPost {
  slug: string
  meta: BlogMeta
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getBlogMeta(slug: string): BlogMeta | null {
  try {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), 'utf8')
    const { data } = matter(raw)
    return data as BlogMeta
  } catch {
    return null
  }
}

// Returns all posts sorted by date descending, for the listing page
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs()
  const posts = slugs
    .map(slug => {
      const meta = getBlogMeta(slug)
      if (!meta) return null
      return { slug, meta }
    })
    .filter((p): p is BlogPost => p !== null)

  // Sort newest first — assumes date strings like "June 2026" or "Jan 2024"
  // For reliable sorting, ISO dates (2026-06-01) in frontmatter work best
  return posts.sort((a, b) =>
    new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )
}