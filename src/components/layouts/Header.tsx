import { useEffect, useRef, useState } from 'react'

import { Link } from '../Link'
import { MegaMenu } from '../megamenu/MegaMenu'
import { megaMenuData } from '../../utils/data/siteData'
import { ThemeSwitcher } from '../ThemeSwitcher'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  const [topPosition, setTopPosition] = useState<number>(0)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Function to update the bottom distance
    const updateTopPosition = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect()
        const topPosition = rect.bottom
        setTopPosition(topPosition)
      }
    }

    // Initial bottom distance update
    updateTopPosition()

    // Event listener to update distance on window resize
    const handleResize = () => {
      updateTopPosition()
    }

    window.addEventListener('scroll', handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleResize)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 overflow-x-hidden border-b border-gray-200 bg-white/75 dark:border-gray-700 dark:bg-dark/75"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 py-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/">
            <div className="flex items-center justify-between">
              <div className="mr-3 flex items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight transition-all duration-300 sm:text-4xl sm:hover:rotate-1 sm:hover:scale-125">
                  YS Badminton
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <MegaMenu megaMenuData={megaMenuData} topPosition={topPosition} />
          <ThemeSwitcher />
          <button
            className="ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
