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
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts posts={posts} />
    </section>
  )
}
