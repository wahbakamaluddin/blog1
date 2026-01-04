import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

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

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} className='text-blue-500' />
}

function RoundedImage({ alt, ...props }: React.ComponentProps<typeof Image>) {
  return <Image alt={alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }: { children: string } & React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
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
  return <p className="mb-4 leading-7" {...props} />
}

function blockquote(props: MDXRemoteProps) {
  return (
    <blockquote
      className="pl-4 border-l-4 border-neutral-300 dark:border-neutral-600 italic my-6"
      {...props}
    />
  )
}

function li(props: MDXRemoteProps) {
  return <li className="ml-4" {...props} />
}

function ul(props: MDXRemoteProps) {
  return <ul className="list-disc mb-4" {...props} />
}

function ol(props: MDXRemoteProps) {
  return <ol className="list-decimal mb-4" {...props} />
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
