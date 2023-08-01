import { Email, Facebook, Instagram, Phone } from '@mui/icons-material'

import { siteData } from '~/utils/data/siteData'

export function Footer() {
  const {
    title,
    social: { email, facebook, instagram, phoneNumber },
  } = siteData

  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 border-t md:mb-10 md:flex md:space-y-0">
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Facebook name="Facebook" href={facebook} />
          <Instagram name="Instagram" href={instagram} />
          <Email name="Mail" href={`mailto:${email}`} />
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            href={`tel:${phoneNumber}`}
          >
            <Phone className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
          </a>
        </div>
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>{title}</span>
        </div>
      </div>
    </footer>
  )
}
