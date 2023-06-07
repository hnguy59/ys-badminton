export let siteMetadata = {
  title: 'YS Badminton - We play the best',
  author: 'Henry Nguyen',
  fullName: 'Henry Shi Jia Nguyen',
  headerTitle: 'YS Badminton - We play the best',
  footerTitle: 'YS Badminton - We play the best',
  description: 'YS Badminton - We play the best ',
  language: 'en-us',
  siteUrl: 'https://hnguy59.web.app',
  siteRepo: 'https://github.com/hnguy59',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'ysbt.contact@gmail.com',
  github: 'https://github.com/hnguy59',
  twitter: '',
  facebook: 'https://www.facebook.com/YSBadmintonTraining',
  instagram: 'https://www.instagram.com/ysbadminton/',
  phoneNumber: '+61452298126',
  youtube: '',
  linkedin: '',
  locale: 'en-AU',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
