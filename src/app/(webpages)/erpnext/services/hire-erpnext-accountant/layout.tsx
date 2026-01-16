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
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire ERPNext Accountant | Specialized Outsourcing for Gulf, Europe & USA",
        description: "Stop training your accountant on software they don't understand. Hire expert ERPNext accountants backed by a firm with 10+ years of implementation experience. We handle bookkeeping, reconciliation, and technical audits.",
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hire ERPNext Accountant Service",
        "provider": {
            "@type": "Organization",
            "name": "FinByz Tech",
            "url": "https://finbyz.tech"
        },
        "description": "Stop training your accountant on software they don't understand. Hire expert ERPNext accountants backed by a firm with 10+ years of implementation experience. We handle bookkeeping, reconciliation, and technical audits.",
        "url": "https://finbyz.tech/erpnext/services/hire-erpnext-accountant",
        "serviceType": "ERPNext Accounting Outsourcing",
        "areaServed": ["Gulf", "Europe", "USA"]
    };

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
