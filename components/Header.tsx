import clsx from 'clsx'
import { headerNavLinks } from 'data/headerNavLinks'
import { useRouter } from 'next/router'
import { Link } from './Link'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  let router = useRouter()
  return (
    <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 overflow-x-hidden  bg-white/0 py-3 backdrop-blur dark:bg-dark/0">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label="Leo's Blog">
            <div className="flex items-center justify-between" data-umami-event="logo">
              <div className="mr-3 flex items-center justify-center">
                <h1 className="transform text-4xl font-bold tracking-tight transition-all duration-300 hover:rotate-1 hover:scale-125 sm:text-4xl">
                  YS Badminton
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden space-x-2 sm:block">
            {headerNavLinks.map((link) => {
              let className = clsx(
                'inline-block rounded font-medium text-gray-900 dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
                router.pathname === link.href
                  ? 'bg-gray-200/50 dark:bg-gray-700/50'
                  : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
              )
              return (
                <Link key={link.title} href={link.href}>
                  <span
                    className={className}
                    data-umami-event={`nav-${link.href.replace('/', '')}`}
                  >
                    {link.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <ThemeSwitcher />
          <button
            className="ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            data-umami-event="mobile-nav-toggle"
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
