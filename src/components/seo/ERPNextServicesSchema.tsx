import Script from "next/script";

const ERPNextServicesSchema = () => {
    const schemas = [
        // 1. WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://finbyz.tech/erpnext/services#webpage",
            "url": "https://finbyz.tech/erpnext/services",
            "name": "Comprehensive ERPNext Services: Implementation, Development & Global Support",
            "description": "Transform your business operations with Finbyz Tech—Your Certified Frappe Partner. Expert ERPNext implementation, custom development, migration services, and 24/7 support across 12+ countries.",
            "inLanguage": "en-US",
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://finbyz.tech/#website"
            },
            "about": {
                "@type": "Thing",
                "name": "ERPNext Services"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Finbyz Tech",
                "url": "https://finbyz.tech",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://finbyz.tech/logo.png"
                }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2026-01-16"
        },
        // 2. Organization Schema
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://finbyz.tech/#organization",
            "name": "Finbyz Tech",
            "url": "https://finbyz.tech",
            "logo": {
                "@type": "ImageObject",
                "url": "https://finbyz.tech/logo.png"
            },
            "description": "Certified Frappe Partner delivering intelligent, scalable, and fully integrated ERPNext solutions",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Gujarat"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
                "https://www.linkedin.com/company/finbyz-tech",
                "https://twitter.com/finbyztech"
            ]
        },
        // 3. Service Schema
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://finbyz.tech/erpnext/services#service",
            "serviceType": "ERPNext Implementation and Development Services",
            "name": "Comprehensive ERPNext Services",
            "description": "End-to-end ERPNext services including implementation, custom development, migration, maintenance, and support",
            "provider": {
                "@type": "Organization",
                "name": "Finbyz Tech",
                "url": "https://finbyz.tech"
            },
            "areaServed": {
                "@type": "Place",
                "name": "Global"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ERPNext Services Catalog",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "ERPNext Implementation",
                            "description": "Strategic implementation and consulting services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Development",
                            "description": "Custom ERP development using Frappe Framework"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "ERP Migration",
                            "description": "Migration from Tally, SAP, Oracle, and Odoo"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Maintenance & Support",
                            "description": "Annual Maintenance Contracts and 24/7 support"
                        }
                    }
                ]
            }
        },
        // 4. FAQPage Schema
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://finbyz.tech/erpnext/services#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How long does a typical ERPNext implementation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Timelines vary by complexity. A standard implementation for SMEs typically takes 4-8 weeks, while complex enterprise solutions with custom development may take 3-6 months."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you migrate my data from Tally or SAP?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We have specialized migration tools and scripts to securely transfer your Masters (Items, Customers, Suppliers) and Historical Transactions from legacy systems like Tally, SAP, and QuickBooks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide support after the project goes live?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We offer flexible Annual Maintenance Contracts (AMC) and on-demand support packages to ensure your system remains up-to-date and bug-free."
                    }
                }
            ]
        },
        // 5. ItemList Schema
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://finbyz.tech/erpnext/services#itemlist",
            "name": "ERPNext Service Categories",
            "description": "Complete range of ERPNext services offered by Finbyz Tech",
            "numberOfItems": 7,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Strategic Implementation & Consulting",
                    "url": "https://finbyz.tech/erpnext/services#implementation"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Custom Development & Frappe Engineering",
                    "url": "https://finbyz.tech/erpnext/services#development"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Resource Augmentation",
                    "url": "https://finbyz.tech/erpnext/services#resources"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Specialized Accounting & Migration Services",
                    "url": "https://finbyz.tech/erpnext/services#accounting"
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Maintenance & Support (AMC)",
                    "url": "https://finbyz.tech/erpnext/services#maintenance"
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Global Reach, Local Compliance",
                    "url": "https://finbyz.tech/erpnext/services#global"
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Industry Expertise",
                    "url": "https://finbyz.tech/erpnext/services#industry"
                }
            ]
        },
        // 6. ProfessionalService Schema
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://finbyz.tech/erpnext/services#professionalservice",
            "name": "Finbyz Tech - ERPNext Services",
            "image": "https://finbyz.tech/images/services.jpeg",
            "description": "Certified Frappe Partner providing comprehensive ERPNext implementation, development, and support services",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Gujarat",
                "addressLocality": "Ahmedabad"
            },
            "priceRange": "$$",
            "telephone": "+91-9925701446",
            "url": "https://finbyz.tech/erpnext/services"
        },
        // 7. AggregateRating Schema
        {
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "@id": "https://finbyz.tech/erpnext/services#rating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "ratingCount": "200",
            "itemReviewed": {
                "@type": "Service",
                "name": "ERPNext Implementation Services"
            }
        },
        // 8. HowTo Schema
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://finbyz.tech/erpnext/services#howto",
            "name": "ERPNext Agile Implementation Process",
            "description": "Step-by-step guide to our Agile ERPNext implementation methodology",
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Day One Access & Module Sprints",
                    "text": "Access to standard ERPNext system on Day 1, module-by-module implementation"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "The Go-Live Protocol",
                    "text": "System sanitization, master data validation, opening balance migration"
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Post Go-Live Assurance",
                    "text": "Transaction audit service for minimum 3 months post go-live"
                }
            ]
        }
    ];

    return (
        <>
            {schemas.map((schema, index) => (
                <Script
                    key={index}
                    id={`erpnext-services-schema-${index}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}
        </>
    );
};

export default ERPNextServicesSchema;
