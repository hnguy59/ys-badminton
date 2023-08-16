import {
  Dispatch,
  HTMLProps,
  ReactElement,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { IMegaMenu } from '../MegaMenu'
import { Link } from '../../Link'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export interface UseMegaMenuDropdownProps {
  megaMenuData?: IMegaMenu[]
  activeMenu: string
}

export interface UseMegaMenuDropdown {
  activeSubMenuElement: ReactElement
}

export function useMegaMenuDropdown({
  megaMenuData,
  activeMenu,
}: UseMegaMenuDropdownProps): UseMegaMenuDropdown {
  const router = useRouter()
  const activeMegaMenu = useMemo(
    () => megaMenuData?.find((item) => item.id === activeMenu),
    [activeMenu, megaMenuData]
  )

  const activeSubMenuElement = useMemo(() => {
    return activeMegaMenu ? (
      <div className="relative h-fit border-l border-gray-200 dark:border-gray-700">
        <div className="flex w-full flex-[2] flex-col">
          {activeMegaMenu.children.map((item) => {
            const className = clsx(
              'inline-block flex items-center w-full rounded font-medium text-gray-900 hover:cursor-pointer dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
              router.pathname === item.link
                ? 'bg-gray-200/50 dark:bg-gray-700/50'
                : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50',
              activeMenu === item.id && 'bg-gray-200/50 dark:bg-gray-700/50'
            )
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
      </div>
    ) : null
  }, [activeMegaMenu, activeMenu, router.pathname])

  return { activeSubMenuElement }
}
