import { notFound } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getBlogMeta } from '@/lib/blogs'

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

export default async function DynamicBlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  const meta = getBlogMeta(slug)

  if (!meta) {
    notFound()
  }

  const PostContent = dynamic(() => import(`@/data/blogs/${slug}.mdx`))

  return (
    <article className="py-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Back navigation */}
      <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        ← Back to Blog
      </Link>

      {/* Post header */}
      <header className="mt-6 mb-8 border-b border-border pb-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {/* Category badge */}
          <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-md">
            {meta.category}
          </span>
        </div>

        <span className="text-sm font-medium text-muted-foreground">Posted: {meta.date}</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2 mb-3 text-foreground">
          {meta.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {meta.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {meta.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Post content */}
      <div className="prose dark:prose-invert max-w-none text-foreground leading-relaxed">
        <PostContent />
      </div>
    </article>
  )
}