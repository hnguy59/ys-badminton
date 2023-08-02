import { Email, Facebook, Instagram, Phone, WhatsApp, YouTube, NearMe } from '@mui/icons-material'
import Image from 'next/image'

import { siteData } from '~/utils/data/siteData'

export function Footer() {
  const {
    name,
    siteLogo,
    social: { email, facebook, instagram, phoneNumber },
  } = siteData

  return (
    <footer>
      <div className="mt-8 space-y-4 border-t py-8 md:flex md:flex-col md:gap-2 md:space-y-0">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="mx-4 flex flex-grow flex-col">
            <div className="text-xl font-bold">Socials</div>
            <div className="my-2 flex space-x-2 text-sm ">
              <Facebook
                name="Facebook"
                href={facebook}
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500"
              />
              <Instagram
                name="Instagram"
                href={instagram}
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500"
              />
              <YouTube
                name="Youtube"
                href="#"
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500"
              />
              <WhatsApp
                name="Whatsapp"
                href="#"
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500"
              />
            </div>
          </div>
          <div className="mx-4 flex flex-grow flex-col">
            <div className="text-xl font-bold">Help Center</div>
            <ul>
              <li>Frequently Asked Questions (FAQs)</li>
              <li>Terms Of Use</li>
              <li>Refund Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mx-4 flex flex-grow flex-col">
            <div className="text-xl font-bold">Contact Information</div>
            <ul>
              <li>
                <span className="text-lg font-semibold">{name}</span>
              </li>
              <li>
                <Phone />
                {phoneNumber}
              </li>
              <li>
                <Email />
                {email}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="my-2 flex flex-wrap items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{`Copyright © ${new Date().getFullYear()}`}</div>
            <span>{` • `}</span>
            <span className="text-md font-semibold">{name}</span>
            <span>{` • `}</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
