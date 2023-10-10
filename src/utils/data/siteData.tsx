import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { EmojiEvents } from '@mui/icons-material'
import { FeatureCardType } from '../types'
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
    title: 'Adults Group training (10 week course)',
    description: (
      <p>
        Adults group badminton training is a structured program designed to teach and improve
        badminton skills among adults of varying skill levels, from beginners to intermediate. The
        learning content includes basic warm up, footwork training, drills and practices and etc.
        Whether you are a novice or looking to refine your game, this program can provide the
        structure and guidance needed to become a more proficient and confident badminton player.
      </p>
    ),
    timetable: (
      <>
        <b>Beginner Group</b>
        <p>Group Class training is on Tuesday, Wednesday and Saturday.</p>
        <p>Tuesday: 7PM – 9PM at IBC</p>
        <p>Wednesday: 7PM – PM at IBC</p>
        <p>Saturday: 11AM – 1PM at Smashminton</p>
        <br />
        <b>Intermediate Group</b>
        <p>Intermediate Class Training is on Tuesday and Saturday.</p>
        <p>Tuesday: 7PM – 9PM at IBC</p>
        <p>Saturday: 11AM – 1PM at Smashminton</p>
      </>
    ),
    image: {
      src: '/images/adult-group-training.png',
      alt: 'Adult group training image',
      width: 9999,
      height: 9999,
    },
    link: '/contact',
  },
  {
    title: 'Kids Group Training (10 week course)',
    description: (
      <p>
        Enrol your child in our dynamic 10-week Kids After School Badminton Program, where we are
        dedicated to cultivating and enhancing their badminton skills. Our program is designed to
        provide kids with the training and support they need to excel in badminton. Join us for ten
        weeks of expert coaching, skill development, and fun, as we empower your child to become a
        confident and skilled badminton player, all while enjoying the benefits of an active and
        engaging after-school experience.
      </p>
    ),
    timetable: (
      <>
        <p>Class training is on Tuesday, Thursday, Friday and Sunday.</p>
        <p>Tuesday: 4PM – 6PM at Smashminton</p>
        <p>Thursday: 4PM – 6PM at IBC </p>
        <p>Friday: 4PM – 6PM at IBC</p>
        <p>Sunday (morning session): 9AM – 11AM at IBC</p>
        <p>Sunday (afternoon session): 2PM – 4PM at IBC</p>
      </>
    ),
    image: {
      src: '/images/kids-training-group.jpg',
      alt: 'Kids training group image',
      width: 9999,
      height: 9999,
    },
    link: '/contact',
  },
  {
    title: 'Holiday Training',
    description: (
      <>
        <p>
          At our Kids Badminton Holiday Camp, it is dedicated to sparking and nurturing the passion
          for badminton in your children. Our camp is more than just a fun vacation activity; it is
          an opportunity for kids to discover the joy of this dynamic sport, make new friends, and
          embark on a memorable journey towards becoming confident and skilled young badminton
          enthusiasts. Join us for an unforgettable experience where passion takes flight.
        </p>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmojiEvents />
            </ListItemIcon>
            <ListItemText>
              Cultivate children&apos;s interest in badminton, learn fundamental skills, improve
              physical fitness, and develop teamwork discipline.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmojiEvents />
            </ListItemIcon>
            <ListItemText>
              Training duration: 3 hours, divided into 3 stages: (1) Coordination and Reaction
              Abilities, (2) Fundamental Skill Training, (3) Team Matches and Games.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmojiEvents />
            </ListItemIcon>
            <ListItemText>
              Three levels: Beginner, Intermediate, and Advanced. Coaches will appropriately assign
              students to levels based on their abilities.
            </ListItemText>
          </ListItem>
        </List>
      </>
    ),
    timetable: <b>*Starting time will be during the school holiday every term*</b>,
    image: {
      src: '/images/kids-training-group.jpg',
      alt: 'Kids training group image',
      width: 9999,
      height: 9999,
    },
    link: '/contact',
  },
]

export const privateTrainingData: FeatureCardType[] = [
  {
    title: 'Private training',
    description: (
      <p>
        Elevate your badminton skills with our private coaching. Choose from a variety of coaches to
        meet your unique needs and goals. Get personalized one-on-one attention to strengthen your
        techniques and excel in the game.
      </p>
    ),
    timetable: <></>,
    image: {
      src: '/images/private-training.png',
      alt: 'Private training image',
      width: 9999,
      height: 9999,
    },
    link: '/contact',
  },
]

export interface IInstagramSocial {
  href: string
}

export const instagramSocialData: IInstagramSocial[] = [
  {
    href: 'https://www.instagram.com/p/CwxAqErvLxy/?utm_source=ig_embed&amp;utm_campaign=loading',
  },
  {
    href: 'https://www.instagram.com/p/CwmvwOQuM4T/?utm_source=ig_embed&amp;utm_campaign=loading',
  },
  {
    href: 'https://www.instagram.com/p/CwhWKFYt6d1/?utm_source=ig_embed&amp;utm_campaign=loading',
  },
]
