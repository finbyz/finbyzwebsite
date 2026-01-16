import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from 'next';
import Script from "next/script";

const PAGE_SLUG = "erpnext/services/hire-erpnext-accountant";

export const metadata: Metadata = {
    title: "Hire ERPNext Accountant | Specialized Outsourcing for Gulf, Europe & USA",
    description: "Stop training your accountant on software they don't understand. Hire expert ERPNext accountants backed by a firm with 10+ years of implementation experience. We handle bookkeeping, reconciliation, and technical audits.",
    keywords: ["Hire ERPNext Accountant", "ERPNext Accounting Outsourcing", "ERPNext Bookkeeping", "ERPNext Reconciliation", "ERPNext Expert", "ERPNext Implementation", "Virtual ERPNext Accountant", "Outsourced Accounting"],
    authors: [{ name: "FinByz Tech" }],
    creator: "FinByz Tech",
    publisher: "FinByz Tech",
    openGraph: {
        title: "Hire ERPNext Accountant | Specialized Outsourcing for Gulf, Europe & USA",
        description: "Stop training your accountant on software they don't understand. Hire expert ERPNext accountants backed by a firm with 10+ years of implementation experience. We handle bookkeeping, reconciliation, and technical audits.",
        url: "https://finbyz.tech/erpnext/services/hire-erpnext-accountant",
        type: "website",
        locale: "en_US",
        siteName: "FinByz Tech",
        images: [
            {
                url: '/images/hire-erpnext-accountant.jpg',
                width: 1200,
                height: 630,
                alt: 'Hire ERPNext Accountant',
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire ERPNext Accountant | Specialized Outsourcing for Gulf, Europe & USA",
        description: "Stop training your accountant on software they don't understand. Hire expert ERPNext accountants backed by a firm with 10+ years of implementation experience. We handle bookkeeping, reconciliation, and technical audits.",
        images: ['/images/hire-erpnext-accountant.jpg'],
    },
    alternates: {
        canonical: "https://finbyz.tech/erpnext/services/hire-erpnext-accountant",
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
                "addressCountry": "IN"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Hire ERPNext Accountant Service",
            "description": "Expert ERPNext accountants with 10+ years implementation experience for Gulf, Europe, and USA",
            "provider": {
                "@type": "Organization",
                "name": "FinByz Tech"
            },
            "areaServed": ["AE", "SA", "US", "GB", "EU"],
            "serviceType": "ERPNext Accounting Outsourcing",
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
            "@type": "WebPage",
            "name": "Hire ERPNext Accountant",
            "description": "Hire expert ERPNext accountants backed by 10+ years implementation experience",
            "url": "https://finbyz.tech/erpnext/services/hire-erpnext-accountant"
        }
    ];

    const data = await getPageData("Web Page", PAGE_SLUG);
    const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

    return (
        <>
            <main>
                <Script
                    id="structured-data-hire-accountant"
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
