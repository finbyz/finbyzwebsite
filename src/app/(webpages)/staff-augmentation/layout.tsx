
import { Metadata } from "next";
import { getFaqs } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import BusinessSlider from "@/components/sections/business-slider";
import StructureData from "@/components/seo/StructureData";

export const metadata: Metadata = {
    title: "Staff Augmentation Services | Hire Dedicated Developers | Finbyz Tech",
    description: "Scale your team with Finbyz Tech's staff augmentation services. Hire pre-vetted top 1% developers, AI experts, and Frappe specialists. Flexible engagement models.",
    keywords: "Staff Augmentation, Hire Developers, Dedicated Team, IT Staffing, Remote Developers, Hire Python Developer, Hire React Developer",
    openGraph: {
        title: "Staff Augmentation Services | Hire Dedicated Developers | Finbyz Tech",
        description: "Scale your team with Finbyz Tech's staff augmentation services. Hire pre-vetted top 1% developers, AI experts, and Frappe specialists.",
        type: "website",
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    // Fetch FAQs if applicable
    const faqs = await getFaqs("Web Page", "staff-augmentation");

    return (
        <main>
            {children}
        </main>
    );
}
