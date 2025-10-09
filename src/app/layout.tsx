import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/components/inquiry-form.css";
import "@/styles/components/inquiry-form.css";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <Script
        id="org-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Finbyz Tech Pvt Ltd",
            image: "https://finbyz.tech/files/finbyz-tech.svg",
            "@id": "https://finbyz.tech",
            url: "https://finbyz.tech",
            location: [
              {
                "@type": "LocalBusiness",
                parentOrganization: { name: "Finbyz Tech Pvt Ltd" },
                name: "Finbyz Tech Pvt Ltd - Ahmedabad",
                image: "https://finbyz.tech/files/finbyz-tech.svg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  addressCountry: "IN",
                  postalCode: "380009",
                  streetAddress:
                    "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 23.046477,
                  longitude: 72.558351,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    opens: "09:30",
                    closes: "18:30",
                  },
                ],
                telephone: "+91 07948912428",
                sameAs: [
                  "https://www.facebook.com/FinByz",
                  "https://twitter.com/FinByz",
                  "https://plus.google.com/s/finbyz",
                  "https://www.linkedin.com/company/finbyz",
                  "https://www.youtube.com/c/Finbyz",
                ],
                priceRange: "INR",
              },
            ],
            description:
              "Looking for Software developer company in Ahmadabad? Based in Gujarat, India we are one of the best ERP software development company. We also provide services of custom software development, mobile application, website development.",
          }),
        }}
      />
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
