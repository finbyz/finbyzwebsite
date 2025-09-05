'use client';

import React from 'react';

export interface VideoData {
  component_type?: 'Video';
  title?: string;
  url?: string; // full YouTube URL or embed URL
  videoId?: string; // alternatively, a YouTube video ID
}

function getEmbedSrc(input?: { url?: string; videoId?: string }): string | undefined {
  if (!input) return undefined;
  if (input.videoId) return `https://www.youtube.com/embed/${input.videoId}`;
  if (!input.url) return undefined;
  try {
    const u = new URL(input.url);
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return `https://www.youtube.com/embed/${v}`;
      // already embed
      if (u.pathname.startsWith('/embed/')) return input.url;
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch (_) {
    return undefined;
  }
  return input.url;
}

export default function Video({ data }: { data?: VideoData }) {
  const resolved: VideoData | undefined =
    (data as any)?.example?.data || (data as any)?.data || (data as any);

  const content: VideoData =
    resolved ?? {
      component_type: 'Video',
      title: 'Video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    };

  const src = getEmbedSrc({ url: content.url, videoId: content.videoId }) || '';

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {content.title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-4">{content.title}</h2>
        )}
        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={src}
            title={content.title || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}


