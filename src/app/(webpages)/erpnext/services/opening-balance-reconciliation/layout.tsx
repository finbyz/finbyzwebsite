import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from 'next';
import Script from "next/script";

const PAGE_SLUG = "erpnext/services/opening-balance-reconciliation";

export const metadata: Metadata = {
    title: "ERPNext Opening Balance Reconciliation Service | Fix Mismatched Accounts & Stock",
    description: "Struggling with ERPNext opening balances? We handle complex data migration, legacy transaction matching, and stock reconciliation so you can focus on the future. Get a clean financial slate today.",
    keywords: ["ERPNext opening balance", "ERPNext reconciliation", "ERPNext migration", "legacy data migration", "ERPNext stock reconciliation", "ERPNext implementation", "balance sheet matching", "ERP data migration", "brownfield migration", "greenfield implementation"],
    authors: [{ name: "FinByz Tech" }],
    creator: "FinByz Tech",
    publisher: "FinByz Tech",
    openGraph: {
        title: "ERPNext Opening Balance Reconciliation Service | Fix Mismatched Accounts & Stock",
        description: "Struggling with ERPNext opening balances? We handle complex data migration, legacy transaction matching, and stock reconciliation so you can focus on the future. Get a clean financial slate today.",
        url: "https://finbyz.tech/erpnext/services/opening-balance-reconciliation",
        type: "website",
        locale: "en_US",
        siteName: "FinByz Tech",
    },
    twitter: {
        card: "summary_large_image",
        title: "ERPNext Opening Balance Reconciliation Service | Fix Mismatched Accounts & Stock",
        description: "Struggling with ERPNext opening balances? We handle complex data migration, legacy transaction matching, and stock reconciliation so you can focus on the future. Get a clean financial slate today.",
    },
    alternates: {
        canonical: "https://finbyz.tech/erpnext/services/opening-balance-reconciliation",
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
            "name": "Opening Balance Reconciliation Service",
            "description": "Expert ERPNext opening balance reconciliation and data migration services",
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
                    id="structured-data-opening-balance"
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
