/**
 * Transform NextJS Page data to SEO metadata
 */

import { NextJSPageData } from './types/nextjs-page';
import { SEOMeta, SEOImage } from './types/seo-types';
import { Metadata } from 'next';

const SITE_URL = process.env.SITE_URL || 'https://finbyz.tech';
const FRAPPE_URL = process.env.FRAPPE_URL || process.env.NEXT_PUBLIC_ERP_URL;

/**
 * Build image URL from Frappe path
 */
function buildImageUrl(imagePath: string | undefined): string {
  if (!imagePath) return `${SITE_URL}/images/FinbyzLogo.png`;
  if (imagePath.startsWith('http')) return imagePath;
  return `${FRAPPE_URL}${imagePath}`;
}

/**
 * Build SEO image object
 */
function buildImage(imagePath: string | undefined, alt: string): SEOImage {
  return {
    url: buildImageUrl(imagePath),
    alt,
    width: 1200,
    height: 630,
  };
}

/**
 * Transform NextJS Page to SEO metadata
 */
export function transformToSEOMeta(page: NextJSPageData): SEOMeta {
  const title = page.meta_title || page.title;
  const description = page.meta_description || '';
  const keywords = page.keywords?.split(',').map(k => k.trim()).filter(Boolean) || [];
  const canonical = page.canonical_url || `${SITE_URL}${page.route === '/' ? '' : page.route}`;
  
  // Use generic fields for Open Graph
  const ogTitle = title;
  const ogDescription = description;
  const ogImage = buildImage(page.image, ogTitle);
  const ogType = 'website';
  
  // Use generic fields for Twitter
  const twitterTitle = title;
  const twitterDescription = description;
  const twitterImage = buildImageUrl(page.image);
  const twitterCard = 'summary_large_image';

  return {
    title,
    description,
    keywords,
    canonical,
    noIndex: false, // Default to false as field is removed
    noFollow: false, // Default to false as field is removed
    image: buildImage(page.image, title),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: ogType,
      url: canonical,
      siteName: 'FinByz Tech',
      images: [ogImage],
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      creator: '@finbyz',
      site: '@finbyz',
      images: [twitterImage],
    },
  };
}

/**
 * Convert SEOMeta to Next.js Metadata format
 */
export function transformToNextMetadata(meta: SEOMeta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'FinByz Tech Pvt Ltd' }],
    creator: 'FinByz Tech Pvt Ltd',
    publisher: 'FinByz Tech Pvt Ltd',
    openGraph: meta.openGraph ? {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      type: meta.openGraph.type as any,
      url: meta.openGraph.url,
      siteName: meta.openGraph.siteName,
      images: meta.openGraph.images.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    } : undefined,
    twitter: meta.twitter ? {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      creator: meta.twitter.creator,
      site: meta.twitter.site,
      images: meta.twitter.images,
    } : undefined,
    robots: {
      index: !meta.noIndex,
      follow: !meta.noFollow,
      googleBot: {
        index: !meta.noIndex,
        follow: !meta.noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: meta.canonical ? {
      canonical: meta.canonical,
    } : undefined,
  };
}
