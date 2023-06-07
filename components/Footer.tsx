import { siteMetadata } from '~/data/siteMetadata'
import { SocialIcon } from './SocialIcon'
import { PhoneIcon } from '@heroicons/react/20/solid'

export function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <SocialIcon name="Facebook" href={siteMetadata.facebook} />
          <SocialIcon name="Instagram" href={siteMetadata.instagram} />
          <SocialIcon name="Mail" href={`mailto:${siteMetadata.email}`} />
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            href={`tel:${siteMetadata.phoneNumber}`}
          >
            <PhoneIcon className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
          </a>
        </div>
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>{siteMetadata.footerTitle}</span>
        </div>
      </div>
    </footer>
  )
}
