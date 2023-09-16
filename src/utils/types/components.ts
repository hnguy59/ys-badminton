import { ReactNode } from 'react'

export interface PageTitleProps {
  children: ReactNode
}

export interface SocialButtonsProps {
  postUrl: string
  title: string
  fileName: string
}

export type TwemojiProps = {
  emoji: string
  size?: string
  className?: string
}

export interface UnsplashPhotoProps {
  photoURL: string
  author: string
}
