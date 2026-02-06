import type { Metadata } from "next";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import BusinessSlider from "@/components/sections/business-slider";
import StructureData from "@/components/seo/StructureData";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

export const metadata: Metadata = {
  title: "ERP Solution Provider in Ahmedabad | Custom ERP Software | ERPNext Implementation | Finbyz Tech",
  description: "Leading ERP solution provider in Ahmedabad specializing in ERPNext implementation, custom ERP development, pharma ERP, manufacturing ERP. ✓ 100+ Implementations ✓ Certified Partner ✓ 24/7 Support ✓ Free Consultation",
  keywords: [
    "erp solution provider in ahmedabad",
    "erp company in ahmedabad",
    "erp companies in ahmedabad",
    "erp software companies in ahmedabad",
    "erp software company in ahmedabad",
    "custom erp development ahmedabad",
    "erpnext implementation ahmedabad",
    "pharma erp software ahmedabad",
    "chemical erp solutions ahmedabad",
    "manufacturing erp ahmedabad",
    "trading erp software ahmedabad",
    "erp consulting services ahmedabad",
    "best erp software in ahmedabad",
    "erp providers in ahmedabad",
    "erp implementation company ahmedabad"
  ],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-solutions-ahmedabad",
  },
  openGraph: {
    title: "Top ERP Solution Provider in Ahmedabad | ERPNext & Custom ERP | Finbyz Tech",
    description: "Trusted ERP solution provider in Ahmedabad with 100+ successful implementations. Expert in ERPNext, custom ERP development, pharma ERP, and manufacturing solutions. Get free consultation today.",
    type: "website",
    url: "https://finbyz.tech/erp-solutions-ahmedabad",
    siteName: "Finbyz Tech",
    locale: "en_IN",
    images: [
      {
        url: `${process.env.SITE_URL}/images/FinbyzLogo.png`,
        width: 1200,
        height: 630,
        alt: "Finbyz Tech - ERP Solution Provider in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading ERP Solution Provider in Ahmedabad | ERPNext & Custom ERP",
    description: "100+ successful ERP implementations in Ahmedabad. Certified ERPNext partner for pharma, manufacturing, trading & more. Free consultation available.",
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

const PAGE_SLUG = "erp-solutions-ahmedabad";

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
