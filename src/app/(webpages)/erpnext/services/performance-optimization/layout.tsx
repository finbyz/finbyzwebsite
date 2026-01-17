import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "ERPNext Performance Optimization for Speed & Efficiency",
    description: "Enhance your ERPNext system\'s speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success.",
    keywords: "ERPNext performance optimization, optimize ERPNext speed, ERPNext efficiency, ERPNext scalability, ERPNext reliability, ERPNext system tuning, ERPNext performance issues, slow ERPNext solution, ERPNext database optimization, ERPNext server optimization, ERPNext consulting, Finbyz Tec ERPNext, ERP system performance, Frappe performance, ERPNext expert",
    authors: [{ name: "FinByz Tech" }],
    creator: "FinByz Tech",
    publisher: "FinByz Tech",
    alternates: {
        canonical: "https://finbyz.tech/erpnext-performance-optimization",
    },
    openGraph: {
        title: "ERPNext Performance Optimization for Speed & Efficiency",
        description: "Enhance your ERPNext system\'s speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success.",
        url: "https://finbyz.tech/erpnext-performance-optimization",
        siteName: "FinByz Tech",
        type: "website",
        locale: "en_US",

    },
    twitter: {
        card: "summary_large_image",
        title: "ERPNext Performance Optimization for Speed & Efficiency",
        description: "Enhance your ERPNext system\'s speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success.",
        creator: "@finbyztech",

    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "ERPNext Performance Optimization for Speed & Efficiency",
        "description": "Enhance your ERPNext system\'s speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success.",
        "url": "https://finbyz.tech/erpnext-performance-optimization",

        "keywords": "ERPNext performance optimization, optimize ERPNext speed, ERPNext efficiency, ERPNext scalability, ERPNext reliability, ERPNext system tuning, ERPNext performance issues, slow ERPNext solution, ERPNext database optimization, ERPNext server optimization, ERPNext consulting, Finbyz Tec ERPNext, ERP system performance, Frappe performance, ERPNext expert",
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "publisher": {
            "@type": "Organization",
            "name": "FinByz Tech",
            "url": "https://finbyz.tech"
        },
        "mainEntity": {
            "@type": "Article",
            "headline": "ERPNext Performance Optimization for Speed & Efficiency",
            "description": "Enhance your ERPNext system\'s speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success.",
            "articleBody": "Optimize ERPNext system performance to ensure efficiency, scalability, and reliability.",
            "author": {
                "@type": "Organization",
                "name": "FinByz Tech"
            },
            "datePublished": "2025-10-27T04:07:19.559Z",
            "dateModified": "2025-10-27T04:07:19.559Z",
        }
    };

    return (
        <>
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <article itemScope itemType="https://schema.org/WebPage">
                <meta itemProp="name" content="ERPNext Performance Optimization for Speed & Efficiency" />
                <meta itemProp="description" content="Enhance your ERPNext system\'s speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success." />
            </article>

            {children}

            <BusinessSlider />
        </>
    );
}
