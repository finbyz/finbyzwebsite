import { Metadata } from 'next';
import React from 'react';

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

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "ERPNext Transaction Audit & Accounting Health Check Service",
        "provider": {
            "@type": "Organization",
            "name": "FinByz Tech",
            "url": "https://finbyz.tech"
        },
        "description": "Eliminate ERPNext accounting errors and ensure GSTR/TDS compliance. Our Transaction Audit service validates your data, corrects COGS, and trains your team for accurate financial reporting.",
        "url": "https://finbyz.tech/erpnext/services/erpnext-accounting-transaction-audit",
        "serviceType": "ERPNext Audit",
        "areaServed": "Worldwide"
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
