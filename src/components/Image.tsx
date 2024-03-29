import { ImageLightbox } from './ImageLightbox'
import NextImage from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'
import type { ImageProps as NextImageProps } from 'next/image'

export interface ImageProps extends NextImageProps {
  shouldOpenLightbox?: boolean
}

export function Image({ shouldOpenLightbox = true, ...rest }: ImageProps) {
  const [openLightbox, setOpenLightbox] = useState(false)
  const handleOpenLightbox = () => {
    if (!shouldOpenLightbox) return
    document.documentElement.classList.add('lightbox-loading')
    setOpenLightbox(true)
  }
  const isThumb = rest.id === 'thumbnail-image'
  const className = clsx(
    `flex justify-center`,
    shouldOpenLightbox && 'cursor-zoom-in',
    isThumb && 'thumbnail-image'
  )

  return (
    <>
      <div className={className}>
        <NextImage {...rest} onClick={handleOpenLightbox} />
      </div>
      {openLightbox && (
        <ImageLightbox closeLightbox={() => setOpenLightbox(false)} src={rest.src} />
      )}
    </>
  )
}
