import Link from 'next/link'
import clsx from 'clsx'
import { siteData } from '~/utils/data/siteData'
import { useState } from 'react'

export function Banner() {
  const { banner: data } = siteData

  return (
    <div
      className={clsx(
        'relative isolate z-50 transform items-center gap-x-6 overflow-hidden border-b border-gray-200 translate-y-0 opacity-100 bg-white px-6 py-2.5 text-center transition-all duration-200 dark:border-gray-700 dark:bg-dark sm:px-3.5 sm:before:flex-1',
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6">
          <strong className="font-semibold">{data.title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {data.description}
        </p>
        {data.link ? (
          <Link href={data.link} target="_blank">
            <button className="border-spacing-5 rounded-full border border-gray-400 px-3 py-1.5 text-xs hover:border-gray-700 dark:hover:border-gray-200">
              Find out more
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
