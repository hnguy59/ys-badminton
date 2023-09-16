import { ExpandMore } from '@mui/icons-material'
import { HTMLProps, useCallback, useEffect, useRef, useState } from 'react'

import { Link } from '../Link'
import { MegaMenuDropdown } from './MegaMenuDropdown'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export interface IMegaMenu {
  id: string
  title: string
  hasChildren: boolean
  children?: IMegaMenu[]
  link?: string
}

export interface MegaMenuProps extends HTMLProps<HTMLDivElement> {
  megaMenuData: IMegaMenu[]
  topPosition: number
}

export function MegaMenu({ megaMenuData, topPosition, ...props }: MegaMenuProps) {
  const router = useRouter()
  const ref = useRef<HTMLDivElement | null>(null)
  const [activeMenu, setActiveMenu] = useState('')

  const handleClickDropdown = useCallback((id: string) => {
    setActiveMenu((prev) => {
      if (prev === id) {
        return ''
      }

      return id
    })
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveMenu('')
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  useEffect(() => {
    setActiveMenu('')
  }, [router, setActiveMenu])

  return (
    <nav {...props} ref={ref}>
      <div className="relative">
        <ul className="flex flex-row items-center gap-4">
          {megaMenuData.map((item) => {
            const className = clsx(
              'inline-block rounded font-medium text-gray-900 hover:cursor-pointer dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
              router.pathname === item.link
                ? 'bg-gray-200/50 dark:bg-gray-700/50'
                : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50',
              activeMenu === item.id ? 'bg-gray-200/50 dark:bg-gray-700/50' : ''
            )
            if (item.hasChildren) {
              return (
                <li key={item.id}>
                  <span className={className} onClick={() => handleClickDropdown(item.id)}>
                    {item.title}
                    <ExpandMore />
                  </span>
                  {activeMenu === item.id && (
                    <MegaMenuDropdown
                      megaMenuData={megaMenuData}
                      topPosition={topPosition}
                      activeMenu={activeMenu}
                    />
                  )}
                </li>
              )
            }
            if (item.link) {
              return (
                <li key={item.id}>
                  <Link href={item.link}>
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
      </div>
    </nav>
  )
}
