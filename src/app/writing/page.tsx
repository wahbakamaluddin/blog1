import { BlogPosts } from '@/src/components/writing/posts'
import { getBlogPosts } from '@/src/lib/post-utils'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  const posts = getBlogPosts()

  return (
    <section>
      <BlogPosts posts={posts} />
    </section>
  )
}
