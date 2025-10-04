'use client'

import React, { useMemo } from 'react'

interface YouTubeEmbedProps {
    url: string
    title?: string
    className?: string
    aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9'
}

function normalizeToEmbedUrl(rawUrl: string): string | null {
    if (!rawUrl) return null

    try {
        const url = new URL(rawUrl)
        const host = url.hostname.replace(/^www\./, '')

        // Extract common parameters
        const startParam = url.searchParams.get('t') || url.searchParams.get('start')
        const startSeconds = startParam
            ? parseTimeToSeconds(startParam)
            : undefined

        const params = new URLSearchParams()
        params.set('rel', '0')
        params.set('modestbranding', '1')
        params.set('playsinline', '1')
        if (typeof startSeconds === 'number' && !Number.isNaN(startSeconds) && startSeconds > 0) {
            params.set('start', String(startSeconds))
        }

        // Direct embed links
        if (host === 'youtube.com' || host === 'm.youtube.com') {
            // https://youtube.com/shorts/<id>
            const shortsMatch = url.pathname.match(/^\/shorts\/([a-zA-Z0-9_-]{6,})/) // id length is variable
            if (shortsMatch) {
                const id = shortsMatch[1]
                return `https://www.youtube.com/embed/${id}?${params.toString()}`
            }

            // https://youtube.com/watch?v=<id>
            const watchId = url.searchParams.get('v')
            if (watchId) {
                return `https://www.youtube.com/embed/${watchId}?${params.toString()}`
            }

            // https://youtube.com/embed/<id>
            const embedMatch = url.pathname.match(/^\/embed\/([a-zA-Z0-9_-]{6,})/)
            if (embedMatch) {
                const id = embedMatch[1]
                return `https://www.youtube.com/embed/${id}?${params.toString()}`
            }
        }

        if (host === 'youtu.be') {
            // https://youtu.be/<id>
            const shortMatch = url.pathname.match(/^\/([a-zA-Z0-9_-]{6,})/)
            if (shortMatch) {
                const id = shortMatch[1]
                return `https://www.youtube.com/embed/${id}?${params.toString()}`
            }
        }

        // As a last resort, pass through embed if already correct domain
        if (host === 'youtube.com' || host === 'www.youtube.com') {
            if (url.pathname.startsWith('/embed/')) {
                return `https://www.youtube.com${url.pathname}?${params.toString()}`
            }
        }

        return null
    } catch {
        return null
    }
}

function parseTimeToSeconds(input: string): number {
    // Supports formats like 90, 1m30s, 2h, 45s
    if (/^\d+$/.test(input)) return Number(input)

    const regex = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i
    const match = input.match(regex)
    if (!match) return NaN
    const hours = Number(match[1] || 0)
    const minutes = Number(match[2] || 0)
    const seconds = Number(match[3] || 0)
    return hours * 3600 + minutes * 60 + seconds
}

const aspectToPadding = (aspect: YouTubeEmbedProps['aspectRatio']): string => {
    switch (aspect) {
        case '4:3':
            return '75%'
        case '1:1':
            return '100%'
        case '21:9':
            return '42.8571%'
        case '16:9':
        default:
            return '56.25%'
    }
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, title, className, aspectRatio = '21:9' }) => {
    const embedSrc = useMemo(() => normalizeToEmbedUrl(url), [url])

    if (!embedSrc) return null

    const paddingBottom = aspectToPadding(aspectRatio)

    return (
        <div className={className} style={{ position: 'relative', width: '100%', paddingBottom }}>
            <iframe
                src={embedSrc}
                title={title || 'YouTube video player'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                }}
            />
        </div>
    )
}

export default YouTubeEmbed


