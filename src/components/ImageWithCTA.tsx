import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'

export interface ImageWithCTAProps {
  image: ImageProps
  children: ReactNode
  imagePlacement: 'LEFT' | 'RIGHT'
}

export function ImageWithCTA({ image, children, imagePlacement }) {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          className={clsx('w-full', imagePlacement === 'LEFT' ? 'order-first' : 'order-last')}
          {...image}
        />
        <div className="mt-4 md:mt-0">{children}</div>
      </div>
    </div>
  )
}
