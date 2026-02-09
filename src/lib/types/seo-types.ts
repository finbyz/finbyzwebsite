/**
 * SEO Types for metadata handling
 */

// Image structure for SEO
export interface SEOImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

// SEO metadata structure
export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  image?: SEOImage;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  openGraph?: {
    title: string;
    description: string;
    type: 'website' | 'article' | 'product';
    url: string;
    siteName: string;
    images: SEOImage[];
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    creator?: string;
    site?: string;
    images?: string[];
  };
}

// Document structure with SEO
export interface SEODocument<T = Record<string, unknown>> {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  meta: SEOMeta;
  content: T;
}
