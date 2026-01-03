import { BlogPosts } from '@/app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Writings - More to come, i swear </h1>
      <BlogPosts />
    </section>
  )
}
