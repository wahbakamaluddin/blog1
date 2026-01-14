import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { CopyButton } from '@/src/components/writing/CopyButton'
import { typography } from '@/src/styles/theme'

interface TableData {
  headers: string[];
  rows: string[][];
}

function Table({ data }: { data: TableData }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a href={href} {...props} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} className={typography.link} />
}

function RoundedImage({ alt, ...props }: React.ComponentProps<typeof Image>) {
  return <Image alt={alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }: { children: string } & React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children)
  const isMultiLine = children.includes('\n')

  // Inline code styling
  if (!isMultiLine) {
    return (
      <code
        className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-1 py-0.5 font-mono text-sm"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    )
  }

  // Console-like block code styling
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        <CopyButton text={children} />
      </div>
      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code
          className="font-mono text-xs text-neutral-100"
          dangerouslySetInnerHTML={{ __html: codeHTML }}
          {...props}
        />
      </pre>
    </div>
  )
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}
// create heading components that automatically generate ids based on their text content
function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children)

    const sizeClasses: Record<number, string> = {
      1: 'text-2xl',
      2: 'text-xl',
      3: 'text-lg',
      4: 'text-lg',
      5: 'text-lg',
      6: 'text-base',
    }
    return React.createElement(
      `h${level}`,
      { 
        id: slug, 
        className: `${sizeClasses[level]} font-bold mb-4 mt-6 tracking-tight`,
      },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

function paragraph(props: MDXRemoteProps) {
  return <p className={typography.prose.paragraph} {...props} />
}

function blockquote(props: MDXRemoteProps) {
  return (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic"
      {...props}
    />
  )
}

function li(props: MDXRemoteProps) {
  return <li className={typography.prose.listItem} {...props} />
}

function ul(props: MDXRemoteProps) {
  return <ul className={typography.prose.list} {...props} />
}

function ol(props: MDXRemoteProps) {
  return <ol className={`list-decimal ${typography.prose.list}`} {...props} />
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: paragraph,
  li: li,
  ul: ul,
  ol: ol,
  blockquote: blockquote,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      // spread props object into individual props to pass to MDXRemote
      {...props}
      // spread compoents and props.components object into individual components, then merge them
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
