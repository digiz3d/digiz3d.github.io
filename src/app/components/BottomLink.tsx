'use client'

import Link from 'next/link'

export default function BottomLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      className="rounded-xl px-4 py-4 sm:px-2 sm:py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 w-full sm:w-auto"
      href={href}>
      {children}
    </Link>
  )
}
