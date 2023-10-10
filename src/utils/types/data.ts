import React, { ReactElement, ReactNode } from 'react'

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
  description: ReactElement
  image?: ImageProps
  link?: string
  timetable: ReactElement
}
