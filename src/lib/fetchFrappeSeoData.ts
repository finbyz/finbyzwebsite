export type PageType = "gallery" | "webpage" | "blog" | "code-snippet";

export interface FrappeFAQ {
  question: string;
  answer: string;
}

export interface FrappePageData {
  name: string;
  title?: string;
  seo_title?: string;
  small_description?: string;
  description?: string;
  gallery_title?: string;
  keywords?: string;
  published_on?: string;
  route: string;
  quote?: string;
  animated_image?: string;
  svg_image?: string;
  gallery_category?: string;
  faqs?: FrappeFAQ[];
  author?: string;
  blog_category?: string;
  meta_image?: string;  // kept for legacy layouts that still reference it
  image?: string;
  meta_description?: string;
  creation?: string;
  modified?: string;
  youtube_link?: string;
  youtube_video_id?: string;
  video_duration?: string;
  page_type?: string;
}

function getAuthHeaders() {
  const key = process.env.FRAPPE_API_KEY;
  const secret = process.env.FRAPPE_API_SECRET;
  if (!key || !secret) return {} as Record<string, string>;
  return { Authorization: `token ${key}:${secret}` } as Record<string, string>;
}

const DOCTYPE = "NextJS Page";

export async function fetchFrappeSchemaData({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type: _type,
  name,
}: {
  type: PageType;
  name: string;
}) {
  // Always use NextJS Page doctype - fetch by name directly
  const res = await fetch(`${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}/${name}`, {
    next: { revalidate: 3600 }, // ISR (optional)
    headers: { ...getAuthHeaders() }
  });

  const { data }: { data: FrappePageData } = await res.json();

  return { data };
}
