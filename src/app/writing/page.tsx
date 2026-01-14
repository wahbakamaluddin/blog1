import { BlogPosts } from '@/src/components/writing/posts'
import { getBlogPosts } from '@/src/lib/post-utils'
import ClientMotion from '@/src/components/ui/ClientMotion'
import { animations } from '@/src/styles/theme'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  const posts = getBlogPosts()

  return (
    <section>
      <ClientMotion {...animations.fadeInUp}>
      <BlogPosts posts={posts} />
      </ClientMotion>
    </section>
  )
}
