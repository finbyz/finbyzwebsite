import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";

type PageType = "gallery" | "webpage" | "blog";

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
    return "Web Page";
  };


  const { data }: { data: FrappePageData } = await fetchFrappeSchemaData({
    type: type,
    name: name
  })
  // Helpers
  const fullUrl = `${BASE_URL}/${data.route}`;
  const getImage = () =>
    data.svg_image ||
    data.animated_image ||
    data.meta_image ||
    `${BASE_URL}/files/FinbyzLogo.png`;

  // ----------------------------------------------------
  // Generate SCHEMA
  // ----------------------------------------------------
  const baseSchema = {
    "@context": "https://schema.org",
    name: data.seo_title || data.gallery_title || data.title || data.name,
    description:
      data.small_description ||
      data.meta_description ||
      data.description?.replace(/<[^>]+>/g, "").substring(0, 200),
    url: fullUrl,
    image: getImage()
  };

  let schema: any = baseSchema;

  if (type === "gallery") {
    schema = {
      ...baseSchema,
      "@type": "ImageGallery",
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
      },
      ...(data.faqs?.length
        ? {
            mainEntity: {
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
          }
        : {})
    };
  }

  if (type === "blog") {
    schema = {
      ...baseSchema,
      "@type": "BlogPosting",
      headline: data.seo_title || data.title,
      author: {
        "@type": "Person",
        name: data.author || "FinByz Team",
        url: `${process.env.SITE_URL}/blog?blogger=${data.author || "Finbyz Team"}`
      },
      datePublished: `${data.published_on}T08:00:00+08:00`,
      publisher: {
        "@type": "Organization",
        name: "FinByz Tech",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/files/FinbyzLogo.png`
        }
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
      keywords: data.keywords,
      articleSection: data.blog_category || data.gallery_category,
      ...(data.faqs?.length
        ? {
            hasPart: {
              "@type": "FAQPage",
              mainEntity: data.faqs.map(f => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer }
              }))
            }
          }
        : {})
    };
  }

  if (type === "webpage") {
    schema = {
      ...baseSchema,
      "@type": "WebPage",
      mainEntity: {
        "@type": "ProfessionalService",
        name: data.seo_title || data.title,
        description: data?.description || data?.small_description || data.meta_description,
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
      },
      ...(data.faqs?.length
        ? {
            hasPart: {
              "@type": "FAQPage",
              mainEntity: data.faqs.map(f => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer }
              }))
            }
          }
        : {})
    };
  }

  // Cleanup → remove undefined values
  const cleaned = JSON.parse(JSON.stringify(schema));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaned, null, 2) }}
    />
  );
}
