/**
 * SEO Metadata API for fetching page data from Frappe
 * Auto-generates Next.js Metadata from the NextJS Page DocType
 */

import { NextJSPageData } from './types/nextjs-page';
import { transformToSEOMeta, transformToNextMetadata } from './transform-seo';
import { SEOMeta } from './types/seo-types';
import { Metadata } from 'next';

const SITE_URL = process.env.SITE_URL || 'https://finbyz.tech';
const FRAPPE_URL = process.env.FRAPPE_URL || process.env.NEXT_PUBLIC_ERP_URL;

function getAuthHeaders() {
  const key = process.env.FRAPPE_API_KEY;
  const secret = process.env.FRAPPE_API_SECRET;
  if (!key || !secret) return {} as Record<string, string>;
  return { Authorization: `token ${key}:${secret}` } as Record<string, string>;
}

/**
 * Fetch a NextJS Page from Frappe by route/slug
 */
export async function fetchNextJSPage(slug: string): Promise<NextJSPageData | null> {
  try {
    // We use filters to find the page by route because fetching by name directly fails 
    // when the name starts with '/' or contains slashes due to server/proxy configuration.
    // We check both with and without leading slash to be robust.
    const possibleRoutes = [slug];
    if (slug.startsWith('/') && slug !== '/') {
      possibleRoutes.push(slug.substring(1));
    } else if (!slug.startsWith('/')) {
      possibleRoutes.push(`/${slug}`);
    }

    const filters = JSON.stringify([["route", "in", possibleRoutes]]);
    const fields = JSON.stringify(["*"]);
    const query = `filters=${filters}&fields=${fields}&limit=1`;

    const res = await fetch(
      `${FRAPPE_URL}/api/resource/NextJS Page?${query}`,
      {
        next: { revalidate: 3600 },
        headers: { ...getAuthHeaders() }
      }
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Error fetching NextJS Page: ${res.status} ${res.statusText}`);
      return null;
    }

    const { data } = await res.json() as { data: NextJSPageData[] };

    if (!data || data.length === 0) {
      return null;
    }

    return data[0];
  } catch (error) {
    console.error(`Failed to fetch NextJS Page: ${slug}`, error);
    return null;
  }
}

/**
 * Get SEO metadata for a page
 */
export async function getSEOMeta(slug: string): Promise<SEOMeta | null> {
  const page = await fetchNextJSPage(slug);

  if (!page) {
    return null;
  }

  return transformToSEOMeta(page);
}

/**
 * Generate Next.js Metadata from a page slug
 */
export async function generateSEOMetadata(slug: string): Promise<Metadata> {
  const meta = await getSEOMeta(slug);
  if (!meta) return {};
  return transformToNextMetadata(meta);
}

/**
 * AUTO-GENERATE METADATA from pathname
 * Use this in route group layouts - no need to specify slug!
 * 
 * @example
 * // In any layout.tsx
 * export { generateAutoMetadata as generateMetadata } from '@/lib/seo-metadata';
 */
export async function generateAutoMetadata(): Promise<Metadata> {
  const { headers } = await import('next/headers');
  const headersList = await headers();
  // Use full pathname as route (since route IS the name field)
  const pathname = headersList.get('x-pathname') || '/';

  // Normalize: ensure starts with / and remove trailing slash
  const route = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  try {
    return await generateSEOMetadata(route);
  } catch (error) {
    console.error(`Auto metadata failed for ${pathname}: `, error);
    return {};
  }
}

// Re-export types for convenience
export type { NextJSPageData } from './types/nextjs-page';
export type { SEOMeta } from './types/seo-types';
