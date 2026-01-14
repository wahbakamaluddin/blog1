"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Category, Competition, categories, competitions } from '@/src/content/data'
import { getFilterChipClass, getSecondaryFilterChipClass, categoryColors as themeCategoryColors, typography } from '@/src/styles/theme'

export interface Metadata {
  title: string
  publishedAt: string
  summary: string
  category?: Category
  competition?: Competition
  image?: string
}

interface BlogPost {
  slug: string
  metadata: Metadata
  content: string
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
    month: 'numeric',
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
  const [activeCompetition, setActiveCompetition] = useState<Competition | 'all'>('all')

  const filteredPosts = posts
    .filter((post) => {
      const categoryMatch = activeCategory === 'all' || post.metadata.category === activeCategory
      const competitionMatch = activeCategory !== 'ctf' || activeCompetition === 'all' || post.metadata.competition === activeCompetition
      return categoryMatch && competitionMatch
    })
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
            onClick={() => {
              setActiveCategory(cat.key)
              if (cat.key !== 'ctf') {
                setActiveCompetition('all')
              }
            }}
            className={getFilterChipClass(activeCategory === cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Competition Filter (only show when CTF is active) */}
      {activeCategory === 'ctf' && (
        <div className="flex flex-wrap gap-2 mb-6 ml-4">
          {competitions.map((comp) => (
            <button
              key={comp.key}
              onClick={() => setActiveCompetition(comp.key)}
              className={getSecondaryFilterChipClass(activeCompetition === comp.key)}
            >
              {comp.label}
            </button>
          ))}
        </div>
      )}

      {/* Posts List */}
      <div>
        {filteredPosts.length === 0 ? (
          <p className={typography.caption}>No posts in this category yet.</p>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 group"
              href={`/writing/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row md:items-center space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums shrink-0">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                  {post.metadata.title}
                </p>
                <div className="flex gap-2 items-center">
                  {post.metadata.category && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${themeCategoryColors.posts[post.metadata.category]}`}>
                      {post.metadata.category}
                    </span>
                  )}
                  {post.metadata.competition && (
                    <span className={`text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-600 dark:text-cyan-400`}>
                      {competitions.find((c) => c.key === post.metadata.competition)?.label || post.metadata.competition}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
