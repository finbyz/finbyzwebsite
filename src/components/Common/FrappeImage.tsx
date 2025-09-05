'use client'

import React, { useState, useMemo } from 'react'
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

const FRAPPE_BASE = "/api/fb/n"

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

    const resolvedSrc = useMemo(() => {
        if (!fileUrl) return ''
        // Absolute URLs: use as-is
        if (/^https?:\/\//i.test(fileUrl)) return fileUrl

        // Keep ERPNext '/file/{hash}/{filename}' as requested; just prepend the base domain
        if (fileUrl.startsWith('/file/')) {
            const base = FRAPPE_BASE?.replace(/\/$/, '')
            return base ? `${base}${fileUrl}` : fileUrl
        }

        // Public files served directly
        if (fileUrl.startsWith('/files/')) {
            const base = FRAPPE_BASE?.replace(/\/$/, '')
            return base ? `${base}${fileUrl}` : fileUrl
        }

        // Private files must go via proxy (requires auth)
        if (fileUrl.startsWith('/private/')) {
            const encoded = encodeURIComponent(fileUrl)
            return `/api/fb/method/frappe.utils.file_manager.get_file?file_url=${encoded}`
        }

        // Fallback: treat as public path under base
        const base = FRAPPE_BASE?.replace(/\/$/, '')
        return base ? `${base}${fileUrl}` : fileUrl
    }, [fileUrl])

    const handleImageError = () => {
        if (defaultImage && !imageError) {
            setImageError(true)
        }
    }

    return (
        <img
            src={imageError && defaultImage ? defaultImage : resolvedSrc}
            alt={alt}
            className={className}
            id={id}
            style={style}
            loading={lazyLoad ? 'lazy' : 'eager'}
            onError={handleImageError}
        />
    )
}

export default FrappeImage
