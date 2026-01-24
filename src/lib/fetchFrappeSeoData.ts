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
  meta_image?: string;
  image?: string;
  meta_description?: string;
  creation?: string;
  modified?: string;
  youtube_link?: string;
  youtube_video_id?: string;
  video_duration?: string;
}

function getAuthHeaders() {
  const key = process.env.FRAPPE_API_KEY;
  const secret = process.env.FRAPPE_API_SECRET;
  if (!key || !secret) return {} as Record<string, string>;
  return { Authorization: `token ${key}:${secret}` } as Record<string, string>;
}

const getDoctype = (type: PageType) => {
  if (type === "gallery") return "Gallery";
  if (type === "blog") return "Blog Post";
  if (type === "code-snippet") return "Code Snippet";
  return "Web Page";
};

export async function fetchFrappeSchemaData({
  type,
  name,
}: {
  type: PageType;
  name: string;
}) {
  const doctype = getDoctype(type);

  const res = await fetch(`${process.env.FRAPPE_URL}/api/resource/${doctype}/${name}`, {
    next: { revalidate: 3600 }, // ISR (optional)
    headers: { ...getAuthHeaders() }
  });

  const { data }: { data: FrappePageData } = await res.json();

  return { data };
}
