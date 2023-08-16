import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { HTMLProps, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IMegaMenu } from './MegaMenu'
import { Link } from '../Link'
import clsx from 'clsx'
import { useMegaMenuDropdown } from './hook/useMegaMenuDropdown'
import { useRouter } from 'next/router'

export interface MegaMenuDropdownProps {
  megaMenuData: IMegaMenu[]
  topPosition: number
  activeMenu: string
}

export function MegaMenuDropdown({ megaMenuData, topPosition, activeMenu }: MegaMenuDropdownProps) {
  const router = useRouter()
  const ref = useRef<HTMLDivElement | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState('')
  const activeMegaMenu = useMemo(
    () => megaMenuData.find((item) => item.id === activeMenu),
    [activeMenu, megaMenuData]
  )

  const { activeSubMenuElement } = useMegaMenuDropdown({
    megaMenuData: activeMegaMenu?.children,
    activeMenu: activeSubMenu,
  })

  const handleClickDropdown = useCallback((id: string) => {
    setActiveSubMenu((prev) => {
      if (prev === id) {
        return ''
      }

      return id
    })
  }, [])

  useEffect(() => {
    setActiveSubMenu('')
  }, [setActiveSubMenu, activeMenu])

  if (!activeMegaMenu) return null

  return (
    <div
      className="fixed left-0 order-1 h-fit w-full border-b border-gray-200 bg-white/95 dark:border-gray-700 dark:bg-dark/95"
      style={{ top: topPosition }}
    >
      <div className="mx-auto flex max-w-3xl items-start justify-between px-3 py-3 xl:max-w-5xl xl:px-0">
        <div className="flex w-full flex-[2] flex-row">
          <div className="flex w-[50%] flex-col">
            {activeMegaMenu.children.map((item) => {
              const className = clsx(
                'inline-block flex items-center w-full rounded font-lg text-gray-900 hover:cursor-pointer dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
                router.pathname === item.link
                  ? 'bg-gray-200/50 dark:bg-gray-700/50'
                  : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50',
                activeSubMenu === item.id
                  ? 'bg-gray-200/50 dark:bg-gray-700/50 justify-between'
                  : 'justify-start'
              )
              if (item.hasChildren) {
                return (
                  <div key={item.id}>
                    <span
                      ref={ref}
                      onClick={() => handleClickDropdown(item.id)}
                      className={clsx(className)}
                    >
                      {item.title}
                      <ChevronRight className="h-[20px]" />
                    </span>
                  </div>
                )
              }
              if (item.link) {
                return (
                  <Link key={item.id} href={item.link}>
                    <span className={className}>{item.title}</span>
                  </Link>
                )
              }

              return (
                <li key={item.id}>
                  <span className={className}>{item.title}</span>
                </li>
              )
            })}
          </div>
          <div className="w-[50%]">{activeSubMenuElement}</div>
        </div>
        <div className="flex w-full flex-1 items-start">image</div>
      </div>
    </div>
  )
}
