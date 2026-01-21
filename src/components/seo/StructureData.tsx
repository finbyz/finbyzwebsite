import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import Script from "next/script";

type PageType = "gallery" | "webpage" | "blog" | "code-snippet";

interface FrappeFAQ {
  question: string;
  answer: string;
}

interface FrappePageData {
  name: string;
  title?: string;
  seo_title?: string;
  small_description?: string;
  description?: string;
  gallery_title?: string;
  keywords?: string;
  published_on?: string;
  route: string;
  animated_image?: string;
  svg_image?: string;
  gallery_category?: string;
  faqs?: FrappeFAQ[];
  author?: string;
  blog_category?: string;
  meta_image?: string;
  meta_description?: string;
  creation?: string;
  youtube_link?: string;
  youtube_video_id?: string;
  video_duration?: string;
}

// MAKE IT CONFIGURABLE FOR YOUR SITE
const BASE_URL = process.env.SITE_URL
const API_URL = process.env.FRAPPE_URL

// ----------------------------------------------------
// Component
// ----------------------------------------------------
export default async function StructureData({
  type,
  name
}: {
  type: PageType;
  name: string;
}) {
  // Map page type → Frappe Doctype
  const getDoctype = () => {
    if (type === "gallery") return "Gallery";
    if (type === "blog") return "Blog Post";
    if (type === "code-snippet") return "Code Snippet";
    return "Web Page";
  };


  const { data }: { data: FrappePageData } = await fetchFrappeSchemaData({
    type: type,
    name: name
  })

  // Early return if no data available
  if (!data) {
    return null;
  }
  // Helpers
  const fullUrl = `${BASE_URL}/${data?.route}`;
  const getImage = () =>
    data?.svg_image ||
    data?.animated_image ||
    data?.meta_image ||
    `${BASE_URL}/files/FinbyzLogo.png`;

  // ----------------------------------------------------
  // Generate FAQPage Schema (if FAQs exist)
  // ----------------------------------------------------
  const faqSchema = data.faqs?.length
    ? {
      "@type": "FAQPage",
      mainEntity: data.faqs.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer
        }
      }))
    }
    : null;

  // ----------------------------------------------------
  // Generate Main Page Schema
  // ----------------------------------------------------
  let mainSchema: any;

  if (type === "gallery") {
    mainSchema = {
      "@type": "ImageGallery",
      name: data?.seo_title || data?.gallery_title || data?.title || data?.name,
      description:
        data?.small_description ||
        data?.meta_description ||
        data?.description?.replace(/<[^>]+>/g, "").substring(0, 200),
      url: fullUrl,
      image: getImage(),
      headline: data.gallery_title || data.title,
      datePublished: `${data.published_on}T08:00:00+08:00`,
      keywords: data.keywords,
      publisher: {
        "@type": "Organization",
        name: "FinByz Tech",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/files/FinbyzLogo.png`
        }
      }
    };
  } else if (type === "blog" || type === "code-snippet") {
    mainSchema = {
      "@type": "BlogPosting",
      name: data?.seo_title || data?.gallery_title || data?.title || data?.name,
      description:
        data?.small_description ||
        data?.meta_description ||
        data?.description?.replace(/<[^>]+>/g, "").substring(0, 200),
      url: fullUrl,
      image: getImage(),
      headline: data?.seo_title || data?.title,
      author: {
        "@type": "Person",
        name: data?.author || "FinByz Team",
        url: `${process.env.SITE_URL}/blog?blogger=${data?.author || "Finbyz Team"}`
      },
      datePublished: `${data?.published_on || data?.creation}T08:00:00+08:00`,
      publisher: {
        "@type": "Organization",
        name: "FinByz Tech",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/files/FinbyzLogo.png`
        }
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
      keywords: data?.keywords,
      articleSection: data?.blog_category || data?.gallery_category
    };
  } else {
    // type === "webpage"
    mainSchema = {
      "@type": "WebPage",
      name: data?.seo_title || data?.gallery_title || data?.title || data?.name,
      description:
        data?.small_description ||
        data?.meta_description ||
        data?.description?.replace(/<[^>]+>/g, "").substring(0, 200),
      url: fullUrl,
      image: getImage(),
      mainEntity: {
        "@type": "ProfessionalService",
        name: data?.seo_title || data?.title,
        description: data?.description || data?.small_description || data?.meta_description,
        url: fullUrl,
        logo: `${BASE_URL}/files/FinbyzLogo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
          postalCode: "380009"
        },
        telephone: "+919925701446",
        email: "info@finbyz.tech",
        openingHours: "Mo–Sa 10:00–19:00",
        sameAs: [
          "https://www.facebook.com/FinByz",
          "https://twitter.com/FinByz",
          "https://www.linkedin.com/company/finbyz",
          "https://www.youtube.com/c/Finbyz",
          "https://www.instagram.com/finbyz/"
        ]
      }
    };
  }

  // ----------------------------------------------------
  // Helper: Extract YouTube Video ID
  // ----------------------------------------------------
  const extractVideoId = (url?: string): string | null => {
    if (!url) return null;
    const patterns = [
      /(?:v=)([\w-]{11})/,
      /youtu\.be\/([\w-]{11})/,
      /youtube\.com\/embed\/([\w-]{11})/
    ];
    for (const p of patterns) {
      const m = url.match(p);
      if (m && m[1]) return m[1];
    }
    return null;
  };

  // Check if YouTube video exists
  const videoId = data.youtube_video_id || extractVideoId(data.youtube_link);
  const hasVideo = !!videoId;

  // ----------------------------------------------------
  // Generate VideoObject Schema (if YouTube video exists)
  // ----------------------------------------------------
  const videoSchema = hasVideo
    ? {
      "@type": "VideoObject",
      name: data?.seo_title || data?.gallery_title || data?.title || data?.name,
      description:
        data?.small_description ||
        data?.meta_description ||
        data?.description?.replace(/<[^>]+>/g, "").substring(0, 500) ||
        "Watch this video",
      thumbnailUrl: [
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
      ],
      uploadDate: data?.published_on
        ? `${data.published_on}T08:00:00+08:00`
        : data?.creation
        ? new Date(data.creation).toISOString()
        : new Date().toISOString(),
      // Only include duration if we have real data (not fake fallback)
      ...(data?.video_duration && { duration: data.video_duration }),
      contentUrl: data?.youtube_link || `https://www.youtube.com/watch?v=${videoId}`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      // CRITICAL: mainEntityOfPage tells Google this is a watch page
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": fullUrl
      },
      author: {
        "@type": "Person",
        name: data?.author || "FinByz Team",
        url: `${BASE_URL}`
      },
      publisher: {
        "@type": "Organization",
        name: "FinByz Tech",
        sameAs: `${BASE_URL}`,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/files/FinbyzLogo.png`,
          height: "300",
          width: "300"
        }
      },
      keywords: data?.keywords
    }
    : null;

  // ----------------------------------------------------
  // Build final schema with @graph for multiple schemas
  // ----------------------------------------------------
  let finalSchema: any;

  // Collect all schemas to include in @graph
  const schemas: any[] = [mainSchema];

  // Add VideoObject if video exists (for blog/code-snippet pages)
  if (videoSchema && (type === "blog" || type === "code-snippet")) {
    schemas.push(videoSchema);
  }

  // Add FAQ schema if FAQs exist
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  // Use @graph if we have multiple schemas, otherwise single schema
  if (schemas.length > 1) {
    finalSchema = {
      "@context": "https://schema.org",
      "@graph": schemas
    };
  } else {
    finalSchema = {
      "@context": "https://schema.org",
      ...mainSchema
    };
  }

  // Cleanup → remove undefined values
  const cleaned = JSON.parse(JSON.stringify(finalSchema));

  return (
    <Script
      id={`structured-data-${type}-${name}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaned, null, 2) }}
    />
  );
}
