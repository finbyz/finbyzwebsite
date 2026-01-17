import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Technology Services | FinByz Tech",
  description:
    "Transform your business operations with tailored technology solutions including ERPNext implementation, automation, AI integration, custom software development, and continuous support.",
  keywords:
    "technology services, ERPNext implementation, AI automation, business automation, custom software development, enterprise solutions, digital transformation, system integration, cloud architecture, ERP customization, process automation",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/services",
  },

  openGraph: {
    title: "Comprehensive Technology Services | FinByz Tech",
    description:
      "Optimize operations with ERPNext, automation, AI, and custom-built solutions tailored to your business.",
    url: "https://finbyz.tech/services",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Technology Services | FinByz Tech",
    description:
      "Modernize your business with ERPNext, automation, AI, and custom-built software solutions.",
    creator: "@finbyztech",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://finbyz.tech/#organization",
        "name": "Finbyz Tech",
        "url": "https://finbyz.tech",
        "logo": "https://finbyz.tech/assets/logo.png",
        "description": "Transform your business operations with Finbyz Tech. Certified Frappe Partner.",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "18:30"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "Certified Frappe Partner",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Frappe Technologies"
          }
        }
      },
      {
        "@type": "Service",
        "@id": "https://finbyz.tech/erpnext/services/#service",
        "name": "Comprehensive ERPNext Services",
        "description": "End-to-end ERPNext solutions including Agile Implementation, Custom Frappe Development, Legacy Migration, and Global Support. Remote and On-site options available.",
        "provider": {
          "@id": "https://finbyz.tech/#organization"
        },
        "url": "https://finbyz.tech/erpnext/services",
        "image": "https://finbyz.tech/assets/erpnext-services-banner.jpg",
        "serviceType": ["ERPNext Implementation", "ERPNext Customization", "Frappe Framework Development", "ERPNext Migration", "ERPNext Staffing"],
        "areaServed": [
          { "@type": "Country", "name": "India", "identifier": "IN" },
          { "@type": "Country", "name": "Canada", "identifier": "CA" },
          { "@type": "Country", "name": "United States", "identifier": "US" },
          { "@type": "Country", "name": "United Arab Emirates", "identifier": "AE" },
          { "@type": "Country", "name": "Saudi Arabia", "identifier": "SA" },
          { "@type": "Country", "name": "Oman", "identifier": "OM" },
          { "@type": "Country", "name": "United Kingdom", "identifier": "GB" },
          { "@type": "Country", "name": "Germany", "identifier": "DE" },
          { "@type": "Country", "name": "Italy", "identifier": "IT" },
          { "@type": "Country", "name": "Switzerland", "identifier": "CH" },
          { "@type": "Country", "name": "Argentina", "identifier": "AR" },
          { "@type": "Place", "name": "Global" }
        ],
        "termsOfService": "https://finbyz.tech/terms-of-service",
        "serviceOutput": {
          "@type": "Thing",
          "name": "Deployed ERPNext System, Custom Frappe Applications, Optimized Workflows"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://finbyz.tech/contact",
          "serviceLocation": {
            "@type": "Place",
            "name": "Finbyz Tech Online Portal"
          },
          "availableLanguage": ["English", "Hindi", "Gujarati", "Spanish"]
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "18:30"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "SMEs and Enterprises looking for ERPNext",
          "geographicArea": { "@type": "AdministrativeArea", "name": "Global" }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ERPNext Service Portfolio",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Certified Partner Services",
                "description": "Official Certified Partner services ensuring code quality and implementation standards.",
                "url": "https://finbyz.tech/erpnext/services/certified-partner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Service Provider",
                "description": "Comprehensive service provider for licensing, deployment, and configuration.",
                "url": "https://finbyz.tech/erpnext/services/erpnext-service-provider"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Implementation Service",
                "description": "Full lifecycle agile implementation from requirement analysis to Go-Live.",
                "url": "https://finbyz.tech/erpnext/services/erpnext-implementation-service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Business Process Consulting",
                "description": "Expert consulting to optimize business workflows before automation.",
                "url": "https://finbyz.tech/erpnext/services/process-consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Strategic IT Consulting",
                "description": "Aligning ERP strategy with long-term IT infrastructure goals.",
                "url": "https://finbyz.tech/erpnext/services/it-consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Digital Transformation Journey",
                "description": "Roadmap for first-time ERP adopters moving from manual to digital systems.",
                "url": "https://finbyz.tech/erpnext/services/start-your-erp-journey"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Custom API Development",
                "description": "Seamless integration with third-party apps, banking APIs, and e-commerce platforms.",
                "url": "https://finbyz.tech/erpnext/services/api-development-services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Data Analytics & BI",
                "description": "Transforming ERP data into actionable insights with custom dashboards.",
                "url": "https://finbyz.tech/erpnext/services/data-analytics"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom ERPNext Software Development",
                "description": "Tailored ERP solutions built on the Frappe Framework for unique business needs.",
                "url": "https://finbyz.tech/erpnext/services/develop-custom-erp-software"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Software Solutions",
                "description": "Comprehensive ERP software engineering including AI and dedicated talent.",
                "url": "https://finbyz.tech/erpnext/services/erp-software-development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Mobile App Development",
                "description": "Native iOS and Android apps integrated directly with ERPNext backend.",
                "url": "https://finbyz.tech/erpnext/services/mobile-app-development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Performance Optimization",
                "description": "Database tuning and server optimization for high-speed ERP performance.",
                "url": "https://finbyz.tech/erpnext/services/performance-optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Website Development",
                "description": "Unified corporate websites and e-commerce stores built on the ERP stack.",
                "url": "https://finbyz.tech/erpnext/services/website-development-on-erpnext"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext SEO Optimization",
                "description": "Technical SEO services to rank ERPNext-powered websites.",
                "url": "https://finbyz.tech/erpnext/services/erpnext-seo-optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Resource Augmentation",
                "description": "Hire expert Frappe developers on a flexible engagement model.",
                "url": "https://finbyz.tech/erpnext/services/resource-augmentation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hire ERPNext Implementer",
                "description": "Dedicated functional consultants to guide internal teams.",
                "url": "https://finbyz.tech/erpnext/services/hire-erpnext-implementer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Helpdesk Support",
                "description": "Dedicated support ticketing system for resolving operational queries.",
                "url": "https://finbyz.tech/erpnext/services/support"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Support & AMC",
                "description": "Annual Maintenance Contracts for bug fixes, updates, and support.",
                "url": "https://finbyz.tech/erpnext/services/support-amc"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext System Maintenance",
                "description": "Server health checks, security patches, and version upgrades.",
                "url": "https://finbyz.tech/erpnext/services/system-maintenance-amc"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Opening Balance Reconciliation",
                "description": "Accurate migration of financial opening balances.",
                "url": "https://finbyz.tech/erpnext/services/opening-balance-reconciliation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Transaction Audit Service",
                "description": "Post-implementation audit to verify accounting accuracy.",
                "url": "https://finbyz.tech/services/erpnext-accounting-transaction-audit"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Legacy ERP to ERPNext Migration",
                "description": "Expert migration from SAP, Oracle, Tally, and Odoo.",
                "url": "https://finbyz.tech/erpnext/services/erp-migration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Implementation in Canada",
                "description": "Regional implementation services compliant with Canadian regulations.",
                "url": "https://finbyz.tech/erpnext/services/implementation-partner-in-canada"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERPNext Implementation in UAE",
                "description": "VAT-compliant ERP services for the UAE and Middle East market.",
                "url": "https://finbyz.tech/erpnext/services/ERPNext-impelementation-in-uae"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="Comprehensive Technology Services | FinByz Tech"
        />
        <meta
          itemProp="description"
          content="Enterprise technology services including ERPNext, automation, AI, custom development, and continuous innovation."
        />
      </article>

      {children}
    </>
  );
}
