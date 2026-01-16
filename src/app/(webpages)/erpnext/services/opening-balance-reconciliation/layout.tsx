import { Metadata } from 'next';
import React from 'react';

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

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "ERPNext Opening Balance Reconciliation Service",
        "provider": {
            "@type": "Organization",
            "name": "FinByz Tech",
            "url": "https://finbyz.tech"
        },
        "description": "Struggling with ERPNext opening balances? We handle complex data migration, legacy transaction matching, and stock reconciliation so you can focus on the future. Get a clean financial slate today.",
        "url": "https://finbyz.tech/erpnext/services/opening-balance-reconciliation",
        "serviceType": "ERPNext Reconciliation",
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
