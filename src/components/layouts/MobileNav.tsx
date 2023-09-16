import clsx from 'clsx'
import { useState, useCallback, useEffect } from 'react'
import { megaMenuData } from '../../utils/data/siteData'
import { ExpandMore } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { Link } from '../Link'

interface MobilNavProps {
  navShow: boolean
  onToggleNav: () => void
}

export function MobileNav({ navShow, onToggleNav }: MobilNavProps) {
  const className = clsx(
    `lg:hidden fixed w-full h-screen inset-0 bg-gray-200 dark:bg-gray-800 opacity-1 z-50 transition-transform transform ease-in-out duration-300`,
    navShow ? 'translate-x-0' : 'translate-x-full'
  )
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState<string[]>([])

  const handleClickDropdown = useCallback((id: string) => {
    setActiveMenu((prev) => {
      if (prev.includes(id)) {
        return prev.filter((e) => e !== id)
      }

      return [...prev, id]
    })
  }, [])

  useEffect(() => {
    setActiveMenu([])
  }, [onToggleNav, router, setActiveMenu])

  const homeClassNames = clsx(
    'inline-block rounded text-3xl font-medium text-gray-900 hover:cursor-pointer dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
    router.pathname === '/'
      ? 'bg-gray-200/50 dark:bg-gray-700/50'
      : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50',
    activeMenu.includes('home') ? 'bg-gray-200/50 dark:bg-gray-700/50' : ''
  )

  return (
    <div className={className}>
      <button
        type="button"
        aria-label="toggle modal"
        className="fixed right-4 top-4 h-8 w-8 cursor-auto focus:outline-none"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 hover:cursor-pointer dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <nav className="fixed mt-16 h-full w-full p-4">
        <ul className="flex flex-col gap-8">
          <li>
            <Link href="/">
              <span className={homeClassNames}>Home</span>
            </Link>
          </li>
          {megaMenuData.map((item) => {
            const className = clsx(
              'inline-block rounded text-3xl font-medium text-gray-900 hover:cursor-pointer dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
              router.pathname === item.link
                ? 'bg-gray-200/50 dark:bg-gray-700/50'
                : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50',
              activeMenu.includes(item.id) ? 'bg-gray-200/50 dark:bg-gray-700/50' : ''
            )

            if (item.hasChildren) {
              return (
                <li key={item.id}>
                  <span className={className} onClick={() => handleClickDropdown(item.id)}>
                    {item.title}
                    <ExpandMore className={activeMenu.includes(item.id) ? 'rotate-180' : ''} />
                  </span>
                  {activeMenu.includes(item.id) &&
                    item.children?.map((childItem) => {
                      return (
                        <div key={childItem.id} className="pl-3">
                          <Link href={childItem.link}>
                            <span className={clsx(className, 'text-xl')}>{childItem.title}</span>
                          </Link>
                        </div>
                      )
                    })}
                </li>
              )
            }

            if (item.link) {
              return (
                <li key={item.id}>
                  <Link href={item.link} onClick={onToggleNav}>
                    <span className={className}>{item.title}</span>
                  </Link>
                </li>
              )
            }

            return (
              <li key={item.id}>
                <span className={className}>{item.title}</span>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
