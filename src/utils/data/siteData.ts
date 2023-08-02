export interface ISiteData {
  name: string
  title: string
  author: string
  fullName: string
  language: string
  siteUrl: string
  siteRepo: string
  siteLogo: string
  locale: string
  social: {
    phoneNumber: string
    email: string
    twitter: string
    facebook: string
    instagram: string
  }
  banner: {
    title: string
    description: string
    link?: string
  }
}

export const siteData: ISiteData = {
  name: 'YS Badminton',
  title: 'YS Badminton - We play the best',
  author: 'Henry Nguyen',
  fullName: 'Henry Shi Jia Nguyen',
  language: 'en-us',
  siteUrl: 'https://hnguy59.web.app',
  siteRepo: 'https://github.com/hnguy59',
  siteLogo: '/images/logo.jpg',
  locale: 'en-AU',
  social: {
    phoneNumber: '+61452298126',
    email: 'ysbt.contact@gmail.com',
    twitter: '',
    facebook: 'https://www.facebook.com/YSBadmintonTraining',
    instagram: 'https://www.instagram.com/ysbadminton/',
  },
  banner: {
    title: 'Badminton Training | Badminton Products',
    description: 'We look forward to seeing you and your child in the course!',
  },
}

export const headerNavLinks = [
  { href: '/services', title: 'Services' },
  { href: '/aboutus', title: 'About Us' },
  { href: '/jointheteam', title: 'Join The Team' },
  { href: '/contactus', title: 'Contact Us' },
]
