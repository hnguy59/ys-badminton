import { HTMLProps } from 'react'
import { Link } from '../Link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Button } from '@mui/material'

export interface IMegaMenu {
  id: string
  title: string
  hasChildren: boolean
  children?: IMegaMenu[]
  link?: string
}

export interface MegaMenuProps extends HTMLProps<HTMLDivElement> {
  megaMenuData?: IMegaMenu[]
}

export function MegaMenu({ megaMenuData, ...props }: MegaMenuProps) {
  const router = useRouter()
  if (!megaMenuData || megaMenuData.length === 0) {
    return null
  }

  return (
    <nav {...props}>
      <ul>
        {megaMenuData.map((item, index) => {
          const className = clsx(
            'inline-block rounded font-medium text-gray-900 dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
            router.pathname === item.link
              ? 'bg-gray-200/50 dark:bg-gray-700/50'
              : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
          )
          if (item.hasChildren) {
            return (
              <li key={item.id}>
                <span className={className}>{item.title}</span>
                <div data-></div>
                {item.children.map((subItem) => {
                  return (
                    <div key={subItem.id}>
                      <Link href={subItem.link}>
                        <span className={className}>{subItem.title}</span>
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
    </nav>
  )
}
