/**
 * NextJS Page DocType Interface
 * Maps to the Frappe "NextJS Page" DocType
 */

export type NextJSPageType = "Web page" | "Blog Post" | "Gallery";

export interface NextJSFAQ {
  question: string;
  answer: string;
}

export interface NextJSRelatedPage {
  page: string;
  title?: string;
}

export interface NextJSPageSchema {
  schema_type: string;
  schema_json: string;
}

/**
 * Main NextJS Page interface matching the Frappe DocType
 */
export interface NextJSPageData {
  // Core fields
  name: string;
  naming_series?: string;
  title: string;
  route: string;
  page_type: NextJSPageType;
  is_published: 0 | 1;
  published_on?: string;
  image?: string;
  
  // Content
  content: string;
  animated_image?: string;
  youtube_link?: string;
  
  // Basic SEO
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  
  // Navigation
  navigation_title?: string;
  navigation_image?: string;
  hide_from_navigation: 0 | 1;

  // Canonical
  canonical_url?: string;

  
  // Related data (child tables)
  nextjs_page_schema?: NextJSPageSchema[];
  nextjs_related_page?: NextJSRelatedPage[];
  faqs?: NextJSFAQ[];
  
  // System fields
  creation?: string;
  modified?: string;
  owner?: string;
}

/**
 * API Response wrapper
 */
export interface NextJSPageResponse {
  data: NextJSPageData;
}
