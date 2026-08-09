import { getAllBlogPosts } from '@/lib/blogs'
import BlogListingClient from '@/components/ui/BlogListingClient'

export default function BlogPage() {
  const posts = getAllBlogPosts()
  return <BlogListingClient posts={posts} />
}