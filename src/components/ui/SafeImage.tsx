'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface SafeImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  fallbackSrc?: string
  style?: React.CSSProperties
  priority?: boolean
}

export default function SafeImage({ src, alt, fill, className, fallbackSrc, style, priority }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      src={hasError && fallbackSrc ? fallbackSrc : imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      style={style}
      priority={priority}
      onError={() => {
        if (fallbackSrc && !hasError) {
          setImgSrc(fallbackSrc)
          setHasError(true)
        }
      }}
    />
  )
}
