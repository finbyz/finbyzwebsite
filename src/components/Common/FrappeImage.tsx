'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface FrappeImageProps {
    fileUrl: string
    alt: string
    className?: string
    id?: string
    style?: React.CSSProperties
    lazyLoad?: boolean
    loadPrivate?: boolean
    defaultImage?: string
}

const FrappeImage: React.FC<FrappeImageProps> = ({
    fileUrl,
    alt,
    className = '',
    id,
    style,
    lazyLoad = true,
    loadPrivate = false,
    defaultImage,
}) => {
    const [imageError, setImageError] = useState(false)
    const [imageSrc, setImageSrc] = useState(fileUrl)

    const handleImageError = () => {
        if (defaultImage && !imageError) {
            setImageSrc(defaultImage)
            setImageError(true)
        }
    }

    return (
        <Image
            src={imageSrc}
            alt={alt}
            className={className}
            id={id}
            style={style}
            width={400}
            height={300}
            onError={handleImageError}
            loading={lazyLoad ? 'lazy' : 'eager'}
        />
    )
}

export default FrappeImage
