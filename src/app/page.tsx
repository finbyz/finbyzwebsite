import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import ClientLogos from "@/components/sections/client-logos";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import BusinessSlider from "@/components/sections/business-slider";
import InquiryForm from "@/components/ui/InquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best ERP Software Company in India | FinByz Tech",
  description: "Looking for a software development company in Ahmedabad? FinByz Tech offers ERP, custom software, mobile app, and website development services.",
  keywords: ["ERPNext Implementation", "Software Development", "ERP Software", "Custom Software Development", "Mobile Application", "Website Development", "Ahmedabad", "Gujarat", "India"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  openGraph: {
    title: "FinByz Tech Pvt Ltd - ERPNext Implementation & Software Development Company",
    description: "Looking for Software developer company in Ahmadabad? Based in Gujarat, India we are one of the best ERP software development company. We also provide services of custom software development, mobile application, website development.",
    type: "article",
    url: "https://finbyz.tech",
    siteName: "FinByz Tech Pvt Ltd",
    images: [
      {
        url: "https://finbyz.tech/files/finbyz-tech.svg",
        width: 1200,
        height: 630,
        alt: "FinByz Tech Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinByz Tech Pvt Ltd - ERPNext Implementation & Software Development Company",
    description: "Looking for Software developer company in Ahmadabad? Based in Gujarat, India we are one of the best ERP software development company.",
    images: ["https://finbyz.tech/files/finbyz-tech.svg"],
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main >
        <Hero />
        <Benefits />
        <div className="[&_h2]:text-[#1A5276]">
          <ResponsiveCardGrid
            data={{
              title: "Our Services",
              subtitle: "Discover our comprehensive range of services designed to help your business grow and succeed in the digital world.",
              variant: "iconCard",
              layout: "standard",
              showImage: false,
              imageHeight: 200,
              imageWidth: 300,
              debug: false,
              cards: [
                {
                  id: 1,
                  title: "ERPNext Implementation",
                  description: "End to End ERPNext Deployment!",
                  icon: "Cpu",
                  iconBg: "#1A5276",
                  iconColor: "#ffffff"
                },
                {
                  id: 2,
                  title: "AI Automations",
                  description: "Smarter Workflows , better efficiency.",
                  icon: "TrendingUp",
                  iconBg: "#FF8C00",
                  iconColor: "#ffffff"
                },
                {
                  id: 3,
                  title: "Resource Augmentation",
                  description: "Skilled Professionals for your Team.",
                  icon: "Globe",
                  iconBg: "#27AE60",
                  iconColor: "#ffffff"
                },
                {
                  id: 4,
                  title: "Hourly Support",
                  description: "Flexible support on Demand .",
                  icon: "Target",
                  iconBg: "#8E44AD",
                  iconColor: "#ffffff"
                },
                {
                  id: 5,
                  title: "Data Analytics",
                  description: "Intelligent automation and predictive analytics solutions.",
                  icon: "BarChart3",
                  iconBg: "#FF3333",
                  iconColor: "#ffffff"
                },
                {
                  id: 6,
                  title: "Software Development",
                  description: "End-to-end software development services",
                  icon: "Cpu",
                  iconBg: "#FFB347",
                  iconColor: "#ffffff"
                }
              ]
            }}
          /></div>

        <BusinessSlider />

        <Testimonials />

        <ClientLogos data={{ useAPI: true, apiEndpoint: '/api/client-logos' }} />
        <CTA
          data={{
            title: "Ready to Scale with Smart Tech? Let's Talk",
            highlightText: "Smart Tech?",
          }}
        />


        {/* Inquiry Form */}
        <InquiryForm
          data={{
            // component_type: "Form",  
            title: "Book a Free Consultation",
            highlightText: "Book a Free Consultation",
            description: "Get started with your free demo today and discover how our solutions can transform your business",
            fields: {
              name: "Name",
              organization: "Organization Name",
              email: "Email",
              mobile: "Mobile No"
            },
            submitText: "SUBMIT"
          }}
        />

        {/* Contact form (simple, compact) */}
        {/* If you want this on a separate page, we can move it to /contact */}
        {/* import ContactFormSection at top if you want to render here */}


      </main>
      <Footer />
    </div>
  );
}

