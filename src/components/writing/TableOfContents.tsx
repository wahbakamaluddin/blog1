"use client";

import { useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function extractHeadings(content: string): TOCItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Only include h2 and h3 for cleaner TOC
    if (level >= 2 && level <= 3) {
      headings.push({
        id: slugify(text),
        text,
        level,
      });
    }
  }

  return headings;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const headings = extractHeadings(content);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="mb-8 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-neutral-900 dark:text-neutral-100"
      >
        <span>Table of Contents</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="mt-3 space-y-2">
          {headings.map((heading, index) => (
            <li
              key={`${heading.id}-${index}`}
              className={heading.level === 3 ? 'ml-4' : ''}
            >
              <a
                href={`#${heading.id}`}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
