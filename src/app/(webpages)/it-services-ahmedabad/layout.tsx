import type { Metadata } from "next";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import BusinessSlider from "@/components/sections/business-slider";
import StructureData from "@/components/seo/StructureData";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

export const metadata: Metadata = {
  title: "IT Company in Ahmedabad | Software Development & IT Services | Navrangpura | Finbyz Tech",
  description: "Leading IT company in Ahmedabad (Navrangpura) offering custom software development, ERP solutions, AI automation, web development, and IT consulting. ✓ 100+ Projects ✓ Expert Team ✓ 24/7 Support ✓ Free Consultation",
  keywords: [
    "it company in ahmedabad",
    "it companies in ahmedabad",
    "software company in ahmedabad",
    "it company in navrangpura ahmedabad",
    "it companies in navrangpura ahmedabad",
    "it services ahmedabad",
    "software development company ahmedabad",
    "web development company ahmedabad",
    "mobile app development ahmedabad",
    "it consulting ahmedabad",
    "best it company in ahmedabad",
    "top it companies in ahmedabad",
    "it company ahmedabad for freshers",
    "product based it companies in ahmedabad",
    "it solutions ahmedabad"
  ],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/it-services-ahmedabad",
  },
  openGraph: {
    title: "Top IT Company in Ahmedabad | Custom Software & IT Solutions | Finbyz Tech",
    description: "Premier IT company in Ahmedabad offering end-to-end software development, ERP implementation, AI automation & IT consulting. Serving 100+ businesses from our Navrangpura office.",
    type: "website",
    url: "https://finbyz.tech/it-services-ahmedabad",
    siteName: "Finbyz Tech",
    locale: "en_IN",
    images: [
      {
        url: `${process.env.SITE_URL}/images/FinbyzLogo.png`,
        width: 1200,
        height: 630,
        alt: "Finbyz Tech - IT Company in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading IT Company in Ahmedabad | Software Development & IT Services",
    description: "100+ successful projects delivered. Expert IT services including software development, ERP, AI automation & consulting. Based in Navrangpura, Ahmedabad.",
    images: ["https://finbyz.tech/images/FinbyzLogo.png"],
    creator: "@FinByz",
    site: "@FinByz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const PAGE_SLUG = "it-services-ahmedabad";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <main>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data?.galleryItems?.length > 0 || data?.relatedReads?.length > 0) ?
          <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} />
          : null
      }
      <BusinessSlider />
      <StructureData name={PAGE_SLUG} type="webpage" />
    </main>
  );
}
