import { IMegaMenu } from '../../components/megamenu/MegaMenu'

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
    id: 'trainings',
    title: 'Trainings',
    hasChildren: true,
    children: [
      { id: 'trainings-view', title: 'View Trainings', hasChildren: false, link: '/trainings' },
      {
        id: 'trainings-group',
        title: 'Group Training',
        hasChildren: true,
        children: [
          {
            id: 'trainings-group-view',
            title: 'View Group Training',
            hasChildren: false,
            link: '/trainings/group',
          },
          {
            id: 'trainings-group-kids',
            title: 'Kids Training',
            hasChildren: false,
            link: '/trainings/group#kids',
          },
          {
            id: 'trainings-group-holiday-camp',
            title: 'School Holiday Camp Training',
            hasChildren: false,
            link: '/trainings/group#camp',
          },
          {
            id: 'trainings-group-adults',
            title: 'Adults Training',
            hasChildren: false,
            link: '/trainings/group#adults',
          },
        ],
      },
      {
        id: 'trainings-private',
        title: 'Private Training',
        hasChildren: true,
        children: [
          {
            id: 'trainings-private-view',
            title: 'View Private Training',
            hasChildren: false,
            link: '/trainings/private',
          },
          {
            id: 'trainings-private-1',
            title: '1 on 1',
            hasChildren: false,
            link: '/trainings/private#1on1',
          },
          {
            id: 'trainings-private-2',
            title: '1 on 2',
            hasChildren: false,
            link: '/trainings/private#1on2',
          },
          {
            id: 'trainings-private-3',
            title: '1 on 3',
            hasChildren: false,
            link: '/trainings/private#1on3',
          },
        ],
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    hasChildren: true,
    children: [
      { id: 'products-view', title: 'View Products', hasChildren: false, link: '/products' },
      { id: 'products-ys', title: 'YS Badminton Shops', hasChildren: false, link: '/products#ys' },
      { id: 'products-yonex', title: 'Yonex', hasChildren: false, link: '/products#yonex' },
      { id: 'products-lining', title: 'Lining', hasChildren: false, link: '/products#lining' },
    ],
  },
  { id: 'stringing', title: 'Stringing', hasChildren: false, link: '/stringing' },
  {
    id: 'team-ys',
    title: 'Team YS',
    hasChildren: true,
    children: [
      { id: 'team-ys-view', title: 'View Team YS', hasChildren: false, link: '/teamys' },
      {
        id: 'team-ys-players',
        title: 'Competition Players',
        hasChildren: false,
        link: '/team/players',
      },
      { id: 'team-ys-coaches', title: 'Coaches', hasChildren: false, link: '/teamys/coaches' },
    ],
  },
  { id: 'join-us', title: 'Join Us', hasChildren: false, link: '/joinus' },
  {
    id: 'about',
    title: 'About',
    hasChildren: true,
    children: [
      { id: 'about-view', title: 'View About Us', hasChildren: false, link: '/about' },
      { id: 'about-our-history', title: 'Our History', hasChildren: false, link: '/about/history' },
      { id: 'about-contact', title: 'Contact', hasChildren: false, link: '/about/contact' },
    ],
  },
]
