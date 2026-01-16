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
