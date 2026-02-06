import { Metadata } from "next";
import { getFaqs } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import BusinessSlider from "@/components/sections/business-slider";
import StructureData from "@/components/seo/StructureData";

export const metadata: Metadata = {
    title: "Pricing | Finbyz Tech",
    description: "Flexible pricing plans for ERPNext, AI Automation, and Outsourcing services tailored to your business needs.",
    keywords: "Pricing, ERPNext Pricing, AI Automation Cost, Outsourcing Rates, Finbyz Tech, Business Solutions Cost",
    openGraph: {
        title: "Pricing | Finbyz Tech",
        description: "Flexible pricing plans for ERPNext, AI Automation, and Outsourcing services tailored to your business needs.",
        type: "website",
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    // Fetch FAQs if applicable
    const faqs = await getFaqs("Web Page", "pricing");

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
