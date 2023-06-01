import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export function Banner() {
  const [isBannerShown, setIsBannerShown] = useState(true)

  return (
    <div
      className={clsx(
        'relative isolate transform items-center gap-x-6 overflow-hidden border-b border-gray-200 px-6 py-2.5 text-center transition-all duration-200 dark:border-gray-700 sm:px-3.5 sm:before:flex-1',
        isBannerShown ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
      )}
    >
      <div className="m-auto flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="m-auto text-sm leading-6">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
      </div>
      {/* <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setIsBannerShown(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 " aria-hidden="true" />
        </button>
      </div> */}
    </div>
  )
}
