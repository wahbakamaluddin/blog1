"use client";

import Link from 'next/link'
import { useState } from 'react'

export type Category = 'notes' | 'ctf' | 'general' | 'research'

export interface Metadata {
  title: string
  publishedAt: string
  summary: string
  category?: Category
  image?: string
}

interface BlogPost {
  slug: string
  metadata: Metadata
  content: string
}

const categories: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'notes', label: 'Notes' },
  { key: 'research', label: 'Research' },
  { key: 'ctf', label: 'CTF Writeups' },
  { key: 'general', label: 'General' },
]

const categoryColors: Record<Category, string> = {
  notes: 'bg-blue-500/20 text-blue-400',
  ctf: 'bg-red-500/20 text-red-400',
  general: 'bg-green-500/20 text-green-400',
  research: 'bg-purple-500/20 text-purple-400',
}

function formatDate(date: string, includeRelative = false): string {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}

export function BlogPosts({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')

  const filteredPosts = posts
    .filter((post) => activeCategory === 'all' || post.metadata.category === activeCategory)
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              activeCategory === cat.key
                ? 'border-emerald-500 text-emerald-500'
                : 'border-gray-600 text-gray-400 hover:border-emerald-500 hover:text-emerald-500 hover:bg-[#2f2f30]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div>
        {filteredPosts.length === 0 ? (
          <p className="text-gray-500">No posts in this category yet.</p>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 group"
              href={`/writing/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row md:items-center space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums shrink-0">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                  {post.metadata.title}
                </p>
                {post.metadata.category && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[post.metadata.category]}`}>
                    {post.metadata.category}
                  </span>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
