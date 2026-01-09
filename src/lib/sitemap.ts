import { getBlogPosts } from '@/src/lib/post-utils'

export const baseUrl = 'https://wahbakamaluddin.dev'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/writing'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
