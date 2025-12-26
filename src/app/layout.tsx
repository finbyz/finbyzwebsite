import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/components/inquiry-form.css";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import StructureData from "@/components/seo/StructureData";
import BusinessSlider from "@/components/sections/business-slider";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import BreadcrumbSchema from "@/components/seo/BreadCrumbSchema";


export const dynamic = "force-dynamic";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent – All in One Partner",
  description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
  keywords: "ERP Implementation, AI Automation, Software Development, Resource Augmentation, Business Technology Partner, Digital Transformation, Finbyz Tech",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W37WLG9D8M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W37WLG9D8M', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script
          id="prod-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Finbyz Tech Pvt Ltd",
              "alternateName": ["Finbyz", "FinbyzTech"],
              "url": "https://finbyz.tech/",
              "@id": "https://finbyz.tech/#organization",
              "logo": "https://finbyz.tech/images/FinbyzLogo.png",
              "image": "https://finbyz.tech/images/FinbyzLogo.png",
              "description": "Finbyz Tech is a certified ERPNext implementation partner and Frappe framework experts. We deliver AI automation, ERP software solutions, and custom software development for businesses worldwide.",
              "telephone": "+91-9925701446",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380009",
                "addressCountry": "IN"
              },
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
                  "addressLocality": "Ahmedabad",
                  "addressRegion": "Gujarat",
                  "postalCode": "380009",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 23.046477,
                  "longitude": 72.558351
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9925701446",
                "contactType": "sales",
                "areaServed": [
                  // Country codes
                  "US", "CA", "GB", "AU", "AE", "SA", "QA", "KW", "OM", "BH",
                  "DE", "FR", "ES", "IT", "NL", "CH", "IE", "SE", "NO", "DK", "BE",
                  "ZA", "AR",
                  // North America Cities
                  "New York", "Los Angeles", "Chicago", "Houston", "San Francisco",
                  "Toronto", "Vancouver", "Montreal",
                  // Europe Cities
                  "London", "Manchester", "Berlin", "Munich", "Frankfurt", "Paris",
                  "Madrid", "Barcelona", "Milan", "Amsterdam", "Zurich", "Dublin",
                  "Stockholm", "Oslo", "Copenhagen", "Brussels",
                  // Middle East Cities
                  "Dubai", "Abu Dhabi", "Riyadh", "Jeddah", "Doha", "Kuwait City",
                  "Muscat", "Manama",
                  // Other Regions
                  "Sydney", "Melbourne", "Johannesburg", "Cape Town", "Buenos Aires"
                ],
                "availableLanguage": [
                  "en", "hi", "ar", "es", "gu", "mr", "te", "sd"
                ]
              },
              "sameAs": [
                "https://www.youtube.com/Finbyz",
                "https://www.linkedin.com/company/finbyz",
                "https://maps.app.goo.gl/6uk8D86abe6cQTBb9",
                "https://www.facebook.com/FinByz",
                "https://twitter.com/FinByz",
                "https://github.com/finbyz/",
                "https://www.indiamart.com/finbyz-tech-private-limited/",
              ]
            })
          }}
        />




<Script
  id="finbyz-global-brand"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Corporation",
      "@id": "https://finbyz.tech/#corporation",
      "name": "FinByz",
      "legalName": "FinByz Technologies Pvt Ltd",
      "url": "https://finbyz.tech",
      "logo": "https://finbyz.tech/images/FinbyzLogo.png",
      "foundingDate": "2017",
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.linkedin.com/company/finbyz/",
        "https://www.crunchbase.com/organization/finbyz",
        "https://clutch.co/profile/finbyz",
        "https://www.goodfirms.co/company/finbyz"
      ]
    })
  }}
/>




        <BreadcrumbSchema baseUrl={ process.env.SITE_URL || ""} />
      </head>
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <MobileMenuProvider>
          {children}
        </MobileMenuProvider>
      </body>
    </html>
  );
}
