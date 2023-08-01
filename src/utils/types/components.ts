import type { ImageProps as NextImageProps } from 'next/image'
import { ReactNode } from 'react'

export interface PageTitleProps {
  children: ReactNode
}

export interface ImageLightBoxProps extends Pick<NextImageProps, 'src'> {
  closeLightbox: () => void
}

export interface ImageProps extends NextImageProps {
  shouldOpenLightbox?: boolean
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
