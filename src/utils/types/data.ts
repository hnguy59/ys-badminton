import { ImageProps } from 'next/image'

export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
}

export interface FeatureCardType {
  title: string
  description: string
  image: ImageProps
  link?: string
  timetable: string
}
