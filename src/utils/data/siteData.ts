import { IMegaMenu } from '../../components/megamenu/MegaMenu'
import { FeatureCardType } from '../types'

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

export const megaMenuData: IMegaMenu[] = [
  {
    id: 'training',
    title: 'Training',
    hasChildren: true,
    children: [
      {
        id: 'trainings-group',
        title: 'Group Training',
        hasChildren: false,
        link: '/training/group',
      },
      {
        id: 'trainings-private',
        title: 'Private Training',
        hasChildren: false,
        link: '/training/private',
      },
    ],
  },
  { id: 'social', title: 'Social', hasChildren: false, link: '/social' },
  {
    id: 'team-ys',
    title: 'Team YS',
    hasChildren: true,
    children: [
      {
        id: 'about',
        title: 'About',
        hasChildren: false,
        link: '/teamys/about',
      },
      {
        id: 'team-ys-coaches',
        title: 'Our Coaches',
        hasChildren: false,
        link: '/teamys/coaches',
      },
      { id: 'team-ys-staff', title: 'Our Staff', hasChildren: false, link: '/teamys/staff' },
    ],
  },
  { id: 'join-us', title: 'Join Us', hasChildren: false, link: '/joinus' },
  {
    id: 'contact',
    title: 'Contact',
    hasChildren: false,
    link: '/contact',
  },
]

export const groupTrainingData: FeatureCardType[] = [
  {
    title: 'Kids training',
    description: 'Kids training description',
    timetable: 'Kids training timetable',
    image: {
      src: '/images/kids-training-group.jpg',
      alt: 'Kids training group image',
      width: 9999,
      height: 9999,
    },
    link: '/',
  },
  {
    title: 'Holiday Training',
    description: 'Holiday training description',
    timetable: 'Holiday training timetable',
    image: {
      src: '/images/kids-training-group.jpg',
      alt: 'Kids training group image',
      width: 9999,
      height: 9999,
    },
    link: '/',
  },
  {
    title: 'Adults Training',
    description: 'Adults training description',
    timetable: 'Adults training timetable',
    image: {
      src: '/images/kids-training-group.jpg',
      alt: 'Kids training group image',
      width: 9999,
      height: 9999,
    },
    link: '/',
  },
]

export const privateTrainingData: FeatureCardType[] = [
  {
    title: 'Kids training',
    description: 'Kids training description',
    timetable: 'Kids training timetable',
    image: {
      src: '/images/kids-training-group.jpg',
      alt: 'Kids training group image',
      width: 9999,
      height: 9999,
    },
    link: '/',
  },
]

export interface IInstagramSocial {
  href: string
}

export const instagramSocialData: IInstagramSocial[] = [
  {
    href: 'https://www.instagram.com/p/CwmvwOQuM4T/?utm_source=ig_embed&amp;utm_campaign=loading',
  },
  {
    href: 'https://www.instagram.com/p/CwxAqErvLxy/?utm_source=ig_embed&amp;utm_campaign=loading',
  },
  {
    href: 'https://www.instagram.com/p/CwhWKFYt6d1/?utm_source=ig_embed&amp;utm_campaign=loading',
  },
]
