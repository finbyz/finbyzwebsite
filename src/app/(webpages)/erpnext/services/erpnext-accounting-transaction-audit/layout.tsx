import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from 'next';
import Script from "next/script";

const PAGE_SLUG = "erpnext/services/erpnext-accounting-transaction-audit";

export const metadata: Metadata = {
    title: "ERPNext Transaction Audit & Accounting Health Check Service | Finbyz",
    description: "Eliminate ERPNext accounting errors and ensure GSTR/TDS compliance. Our Transaction Audit service validates your data, corrects COGS, and trains your team for accurate financial reporting.",
    keywords: [
        "ERPNext transaction audit",
        "ERPNext accounting review",
        "ERPNext data validation",
        "GSTR compliance ERPNext",
        "TDS compliance",
        "COGS correction",
        "ERPNext accounting errors",
        "financial health check",
        "ERPNext audit service",
        "accounting effectiveness review"
    ],
    authors: [{ name: "FinByz Tech" }],
    creator: "FinByz Tech",
    publisher: "FinByz Tech",
    openGraph: {
        title: "ERPNext Transaction Audit & Accounting Health Check Service | Finbyz",
        description: "Eliminate ERPNext accounting errors and ensure GSTR/TDS compliance. Our Transaction Audit service validates your data, corrects COGS, and trains your team for accurate financial reporting.",
        url: "https://finbyz.tech/erpnext/services/erpnext-accounting-transaction-audit",
        type: "website",
        locale: "en_US",
        siteName: "FinByz Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "ERPNext Transaction Audit & Accounting Health Check Service | Finbyz",
        description: "Eliminate ERPNext accounting errors and ensure GSTR/TDS compliance. Our Transaction Audit service validates your data, corrects COGS, and trains your team for accurate financial reporting.",
    },
    alternates: {
        canonical: "https://finbyz.tech/erpnext/services/erpnext-accounting-transaction-audit",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FinByz Tech",
            "url": "https://finbyz.tech",
            "logo": "https://finbyz.tech/files/finbyz-logo.png",
            "description": "ERPNext implementation and consulting services",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380001",
                "addressCountry": "IN"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "ERPNext Accounting Transaction Audit Service",
            "description": "Professional ERPNext accounting transaction audit and validation services",
            "provider": {
                "@type": "Organization",
                "name": "FinByz Tech"
            },
            "areaServed": ["AE", "SA", "US", "GB", "EU", "IN"],
            "serviceType": "ERPNext Services",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380001",
                "addressCountry": "IN"
            }
        }
    ];

    const data = await getPageData("Web Page", PAGE_SLUG);
    const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

    return (
        <>
            <main>
                <Script
                    id="structured-data-transaction-audit"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {children}

                {/* FAQ Section */}
                {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}

                {/* Gallery + Related Reads */}
                {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
                    <FinbyzGallery
                        relatedReads={data.relatedReads}
                        galleryItems={data.galleryItems}
                    />
                )}

                {/* Business Slider */}
                <BusinessSlider />
            </main>
        </>
    );
}
