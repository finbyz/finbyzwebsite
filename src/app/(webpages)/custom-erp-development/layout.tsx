import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { Metadata } from "next";
import { LazyBusinessSlider } from "@/lib/lazy-components";

export async function generateMetadata(): Promise<Metadata> {
    // Try to fetch specific metadata, otherwise fallback
    const pageData = await fetchFrappeSchemaData({
        name: "custom-erp-development",
        type: "webpage"
    });

    const defaultTitle = "Custom ERP Software Development & Implementation | FinByz";
    const defaultDesc = "Build bespoke ERP solutions tailored to your unique business workflows. Python, React, and Node.js experts.";

    return {
        title: pageData?.data?.title || defaultTitle,
        description: pageData?.data?.description || defaultDesc,
        keywords: pageData?.data?.keywords,
        authors: [{ "name": "FinByz Tech Pvt Ltd" }],
        creator: "FinByz Tech Pvt Ltd",
        publisher: "FinByz Tech Pvt Ltd",
        alternates: {
            "canonical": "/custom-erp-development",
        },
        robots: {
            index: true,
            follow: true
        }
    };
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <LazyBusinessSlider />
        </main>
    );
}
