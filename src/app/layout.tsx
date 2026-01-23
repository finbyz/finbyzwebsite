import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/components/inquiry-form.css";
import "@/styles/components/country-code-select.css";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import BreadcrumbSchema from "@/components/seo/BreadCrumbSchema";
import Header from "@/components/layout/new-header";
import Footer from "@/components/layout/footer";


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
  title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent - All in One Partner",
  description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
  keywords: "ERP Implementation, AI Automation, Software Development, Resource Augmentation, Business Technology Partner, Digital Transformation, Finbyz Tech",
  openGraph: {
    title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent - All in One Partner",
    description: "Accelerate your business transformation with Finbyz Tech expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
    type: "website",
    url: "https://finbyz.tech",
    siteName: "Finbyz Tech",
    locale: "en_US",
    images: [
      {
        url: "https://finbyz.tech/images/FinbyzLogo.png",
        width: 1200,
        height: 630,
        alt: "Finbyz Tech - ERPNext Partner & AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent - All in One Partner",
    description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
    images: ["https://finbyz.tech/images/FinbyzLogo.png"],
    creator: "@FinByz",
    site: "@FinByz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://finbyz.tech",
  }
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

        <BreadcrumbSchema baseUrl={process.env.SITE_URL || ""} />
      </head>
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <MobileMenuProvider>
          <Header />
          {children}
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
