import { Metadata } from 'next';
import React from 'react';

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

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FinByz Tech",
            "url": "https://web.finbyz.tech",
            "logo": "https://web.finbyz.tech/files/finbyz-logo.png",
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
            "url": "https://web.finbyz.tech/erpnext/services/hire-erpnext-accountant"
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
