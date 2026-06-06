// data/projects.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'  // npm install gray-matter

const CONTENT_DIR = path.join(process.cwd(), 'src', 'data', 'projects')

export interface ProjectMeta {
  title: string
  date: string
  techStack: string[]
}

export function getProjectSlugs(): string[] {
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getProjectMeta(slug: string): ProjectMeta {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), 'utf8')
  const { data } = matter(raw)
  return data as ProjectMeta
}