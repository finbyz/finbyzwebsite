/**
 * SEO Metadata API for fetching page data from Frappe
 * Auto-generates Next.js Metadata from the NextJS Page DocType
 */

import { NextJSPageData } from './types/nextjs-page';
import { transformToSEOMeta, transformToNextMetadata } from './transform-seo';
import { SEOMeta } from './types/seo-types';
import { Metadata } from 'next';

const FRAPPE_URL = process.env.FRAPPE_URL || process.env.NEXT_PUBLIC_ERP_URL;

function getAuthHeaders() {
  const key = process.env.FRAPPE_API_KEY;
  const secret = process.env.FRAPPE_API_SECRET;
  if (!key || !secret) return {} as Record<string, string>;
  return { Authorization: `token ${key}:${secret}` } as Record<string, string>;
}

/**
 * Fetch a NextJS Page from Frappe by route/slug
 * Uses two-step process: 1) Filter by route to get name, 2) Fetch full doc by name
 */
export async function fetchNextJSPage(slug: string): Promise<NextJSPageData | null> {
  try {
    // Normalize the route: ensure it starts with / and remove trailing slash
    const route = slug === '/' ? '/' : (slug.startsWith('/') ? slug : `/${slug}`).replace(/\/$/, '');

    // Step 1: Filter by route to get the document name
    const listRes = await fetch(
      `${FRAPPE_URL}/api/resource/NextJS Page?filters=${encodeURIComponent(
        JSON.stringify([["actual_route", "=", route]])
      )}&fields=${encodeURIComponent(JSON.stringify(["name"]))}&limit=1`,
      {
        method: 'GET',
        next: { revalidate: 3600 },
        headers: {
          ...getAuthHeaders(),
        }
      }
    );

    if (!listRes.ok) {
      if (listRes.status === 404) return null;
      console.error(`Error filtering NextJS Page by route: ${listRes.status} ${listRes.statusText}`);
      return null;
    }

    const listResponse = await listRes.json();

    // Check if any document was found
    if (!listResponse.data || listResponse.data.length === 0) {
      return null;
    }

    const docName = listResponse.data[0].name;

    // Step 2: Fetch full document by name using frappe.client.get
    // This automatically includes all child tables
    const res = await fetch(
      `${FRAPPE_URL}/api/method/frappe.client.get`,
      {
        method: 'POST',
        next: { revalidate: 3600 },
        headers: {
          ...getAuthHeaders(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          doctype: 'NextJS Page',
          name: docName
        })
      }
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Error fetching NextJS Page: ${res.status} ${res.statusText}`);
      return null;
    }

    const response = await res.json();

    // frappe.client.get returns { message: { ...document data } }
    if (!response.message) {
      return null;
    }

    return response.message as NextJSPageData;
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
