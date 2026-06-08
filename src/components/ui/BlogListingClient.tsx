'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/lib/blogs'

// The server component fetches data; this client component handles search
export default function BlogListingClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Math', 'CS']

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return posts.filter(({ meta }) => {
      const matchesSearch =
        q === '' ||
        meta.title.toLowerCase().includes(q) ||
        meta.summary.toLowerCase().includes(q) ||
        meta.tags.some(t => t.toLowerCase().includes(q))

      const matchesCategory =
        activeCategory === 'All' || meta.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [posts, search, activeCategory])

  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Blog stuffff
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Writeups on stuff that I find intresting and other such things :)
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, tag, or keyword..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6">
        {filtered.length} {filtered.length === 1 ? 'post' : 'posts'}
        {search && ` matching "${search}"`}
        {activeCategory !== 'All' && ` in ${activeCategory}`}
      </p>

      {/* Post Cards */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filtered.map(({ slug, meta }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group block bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {meta.title}
                </h2>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{meta.date}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {meta.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {/* Category badge */}
                <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                  {meta.category}
                </span>
                {/* Tags */}
                {meta.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No posts found.</p>
          <p className="text-sm mt-1">Try a different search or category.</p>
        </div>
      )}
    </div>
  )
}