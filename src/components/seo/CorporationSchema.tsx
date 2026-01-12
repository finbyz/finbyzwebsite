import Script from "next/script";

const CorporationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "@id": "https://finbyz.tech/#organization",
        "name": "Finbyz Tech Pvt Ltd",
        "legalName": "Finbyz Tech Private Limited",
        "alternateName": ["Finbyz", "FinbyzTech", "Finbyz Consulting"],
        "url": "https://finbyz.tech/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://finbyz.tech/images/FinbyzLogo.png",
            "width": 112,
            "height": 112
        },
        "foundingDate": "2016-08-10",
        "description": "Finbyz Tech is a Govt of India recognized startup (DIPP44531) and ISO 27001 certified ERPNext implementation partner. We deliver AI automation, ERP software solutions, and custom software development for businesses worldwide, specializing in Manufacturing, Global Trade, and Business Process Re-engineering.",
        "slogan": "Steer Your Vision",
        "keywords": "ERPNext Implementation, Frappe Development, AI Automation, n8n Workflows, Business Process Consulting, Manufacturing ERP, Global Trade Management, Python Development, Offshore Development Center",
        "naics": "541512",
        "isicV4": "6202",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": 30,
            "unitText": "Employees",
            "description": "Specialized team of ERPNext certified developers, AI engineers, and business consultants."
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "380009",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9925701446",
            "contactType": "sales",
            "email": "info@finbyz.tech",
            "areaServed": ["US", "CA", "GB", "AE", "SA", "IN", "AU", "DE"],
            "availableLanguage": ["en", "hi", "gu", "ar", "es"]
        },
        "identifier": [
            {
                "@type": "PropertyValue",
                "propertyID": "CIN",
                "value": "U74999GJ2016PTC093294"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "GSTIN",
                "value": "24AACCF8889P1ZP"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "DUNS",
                "value": "860387128"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "DIPP",
                "value": "DIPP44531"
            }
        ],
        "knowsAbout": [
            { "@type": "Thing", "name": "ERPNext" },
            { "@type": "Thing", "name": "Frappe Framework" },
            { "@type": "Thing", "name": "n8n Automation" },
            { "@type": "Thing", "name": "Artificial Intelligence" },
            { "@type": "Thing", "name": "Business Process Re-engineering" },
            { "@type": "Thing", "name": "Django" },
            { "@type": "Thing", "name": "Python" },
            { "@type": "Thing", "name": "PostgreSQL" },
            { "@type": "Thing", "name": "Manufacturing ERP" },
            { "@type": "Thing", "name": "Global Trade Management" }
        ],
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Certified ERPNext Partner",
                "credentialCategory": "Partnership",
                "url": "https://frappe.io/partners/india/finbyz-tech-pvt-ltd"
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "ISO 27001 Certified",
                "credentialCategory": "Certification"
            },
            {
                "@type": "GovernmentPermit",
                "name": "Startup India Recognition",
                "identifier": "DIPP44531",
                "issuedBy": { "@type": "GovernmentOrganization", "name": "Department for Promotion of Industry and Internal Trade" },
                "url": "https://recognition-be.startupindia.gov.in/s3/download/document/OLD_MIGRATED_STARTUP_APP_CERT_RECOG_DOC/DIPP44531_FINBYZ_TECH_PRIVATE_LIMITED_Recognization.pdf"
            }
        ],
        "memberOf": [
            {
                "@type": "Organization",
                "name": "Frappe Technologies Partner Network",
                "url": "https://frappe.io/partners"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Finbyz Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "ERPNext Implementation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI Automation Solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Software Development"
                    }
                }
            ]
        },
        "founder": {
            "@type": "Person",
            "@id": "https://finbyz.tech/mukeshvariyani/",
            "name": "Mukesh Variyani",
            "jobTitle": "Founder & CEO",
            "description": "Founder of Finbyz Tech with over a decade of expertise in ERPNext implementation and Business Process Consulting. Specializes in scaling organizations through technology, AI automation, and financial expertise.",
            "sameAs": [
                "https://www.linkedin.com/in/mukeshvariyani/",
                "https://yourstory.com/people/mukesh-variyani"
            ]
        },
        "sameAs": [
            "https://www.linkedin.com/company/finbyz",
            "https://frappe.io/partners/india/finbyz-tech-pvt-ltd",
            "https://www.crunchbase.com/organization/finbyz",
            "https://www.google.com/maps?cid=YOUR_CID_HERE",
            "https://www.zaubacorp.com/company/FINBYZ-TECH-PRIVATE-LIMITED/U74999GJ2016PTC093294",
            "https://www.tofler.in/finbyz-tech-private-limited/company/U74999GJ2016PTC093294",
            "https://cleartax.in/f/company/finbyz-tech-private-limited/U74999GJ2016PTC093294",
            "https://www.youtube.com/Finbyz",
            "https://twitter.com/FinByz",
            "https://www.facebook.com/FinByz",
            "https://github.com/finbyz/",
            "https://clutch.co/profile/finbyz-tech"
        ]
    };

    return (
        <Script
            id="finbyz-corporation-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />
    );
};

export default CorporationSchema;
