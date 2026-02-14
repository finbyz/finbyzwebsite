
import { Metadata } from "next";
import { getFaqs } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import BusinessSlider from "@/components/sections/business-slider";
import StructureData from "@/components/seo/StructureData";

export const metadata: Metadata = {
    title: "Resources | Finbyz Tech",
    description: "Explore our latest resources, brochures, whitepapers, and guides to help your business grow.",
    keywords: "Resources, Brochures, Whitepapers, Guides, Finbyz Tech, ERPNext, AI Automation",
    openGraph: {
        title: "Resources | Finbyz Tech",
        description: "Explore our latest resources, brochures, whitepapers, and guides to help your business grow.",
        type: "website",
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    // Fetch FAQs if applicable
    const faqs = await getFaqs("resources");

    return (
        <main>
            {children}
            {faqs && <FAQ faqs={faqs.faqs} />}
            <FinbyzGallery />
            <BusinessSlider />
            <StructureData type="webpage" />
        </main>
    );
}
