import { BlogPosts } from '@/src/components/writing/posts'
import { getBlogPosts } from '@/src/lib/post-utils'
import ClientMotion from '@/src/components/ui/ClientMotion'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  const posts = getBlogPosts()

  return (
    <section>
      <ClientMotion
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
      <BlogPosts posts={posts} />
      </ClientMotion>
    </section>
  )
}
