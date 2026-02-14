
export default async function Layout({ children }: { children: React.ReactNode }) {
    const StructuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://finbyz.tech/mukeshvariyani/#person",
            "name": "Mukesh Variyani",
            "url": "https://finbyz.tech/mukeshvariyani",
            "jobTitle": "Founder & Managing Director",
            "worksFor": { "@id": "https://finbyz.tech/#organization" },
            "image": "https://finbyz.tech/images/mukesh-variyani.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/mukeshvariyani/",
              "https://github.com/finbyz",
              "https://twitter.com/FinByz",
              "https://frappe.io/partners/india/finbyz-tech-pvt-ltd"
            ],
            "description": "Techno-functional expert with a background in Banking Treasury, specializing in ERPNext implementations and AI-driven business automation.",
            "knowsAbout": [
              "ERPNext",
              "Frappe Framework",
              "AI Automation",
              "n8n Workflows",
              "Banking Treasury",
              "Financial Consulting",
              "Export Import (EXIM) Compliance",
              "Algorithmic Trading",
              "Business Process Re-engineering"
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "ISO 27001 Certified Professional"
              }
            ]
          },
          {
            "@type": "Corporation",
            "@id": "https://finbyz.tech/#organization",
            "name": "Finbyz Tech Pvt Ltd",
            "legalName": "FinByz Technologies Pvt Ltd",
            "url": "https://finbyz.tech/",
            "logo": "https://finbyz.tech/images/FinbyzLogo.png",
            "foundingDate": "2016-08-10",
            "taxID": "AACCF8889P",
            "vatID": "24AACCF8889P1ZP",
            "isoNumber": "ISO 27001",
            "duns": "860387128",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9925701446",
              "contactType": "sales",
              "areaServed": ["IN", "US", "AE", "GB", "CA", "DE"]
            }
          },
          {
            "@type": "SoftwareApplication",
            "name": "EXIM Module for ERPNext",
            "author": { "@id": "https://finbyz.tech/mukeshvariyani/#person" },
            "applicationCategory": "BusinessApplication",
            "description": "Specialized ERPNext module for Export-Import documentation and compliance."
          },
          {
            "@type": "SoftwareApplication",
            "name": "Knudge AI",
            "author": { "@id": "https://finbyz.tech/mukeshvariyani/#person" },
            "applicationCategory": "Social Networking",
            "description": "AI-powered relationship management app."
          }
        ]
      }
    
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(StructuredData) }}
        />
      </>
    );
  }