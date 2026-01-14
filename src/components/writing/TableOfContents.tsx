"use client";

import { useState, useEffect } from 'react';
import { colors } from '@/src/styles/theme';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const headings = extractHeadings(content);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside
      className="fixed top-1/2 -translate-y-1/2 right-4 z-40 hidden md:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav
        className={`
          transition-all duration-150 ease-in-out rounded-l-xl overflow-hidden
          ${isExpanded 
            ? 'w-64 max-h-[70vh] bg-white/80 dark:bg-neutral-900/50 backdrop-blur-md shadow-2xl' 
            : 'w-5 bg-transparent'
          }
        `}
      >
        {/* Collapsed indicator - subtle line showing sections */}
        <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-0 hidden' : 'opacity-100'}`}>
          <div className="flex flex-col items-center py-3 gap-1.5">
            {headings.slice(0, 8).map((heading, index) => (
              <div
                key={`indicator-${index}`}
                className={`
                  transition-all duration-200 rounded-full
                  ${heading.level === 3 ? 'w-2 h-1' : 'w-3 h-1'}
                  ${activeId === heading.id 
                    ? 'bg-neutral-900 dark:bg-neutral-100' 
                    : 'bg-neutral-300 dark:bg-neutral-600'
                  }
                `}
              />
            ))}
            {headings.length > 8 && (
              <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500" />
            )}
          </div>
        </div>

        {/* Expanded content */}
        <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <ul className="p-3 space-y-0.5 max-h">
            {headings.map((heading, index) => (
              <li
                key={`${heading.id}-${index}`}
              >
                <a
                  href={`#${heading.id}`}
                  className={`
                    block text-sm py-1.5 px-3 rounded-lg transition-all duration-200
                    ${heading.level === 3 ? 'ml-3 text-xs' : ''}
                    ${
                      activeId === heading.id
                        ? `text-${colors.accent.DEFAULT} font-medium`
                        : `text-neutral-500 dark:text-neutral-400 hover:text-${colors.accent.DEFAULT} hover:bg-neutral-50 dark:hover:bg-neutral-800/50`
                    }
                  `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}