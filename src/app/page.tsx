import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import ClientLogos from "@/components/sections/client-logos";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import BusinessSlider from "@/components/sections/business-slider";
import InquiryForm from "@/components/ui/InquiryForm";
import { Metadata } from "next";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs } from "@/lib/getPageData";
import CooprtaionSchema from "@/components/seo/CorporationSchema";
import ModulesSection from "@/components/sections/modules-erp";

export const metadata: Metadata = {
  title: "ERP Solution Provider & AI Automation Experts | ERPNext Implementation | Finbyz Tech",

  description: "Leading ERP solution provider specializing in ERPNext implementation, AI automation, and custom ERP development. Certified Frappe partner serving 100+ businesses globally. Get enterprise-grade ERP software solutions tailored to your industry.",
  keywords: [
    // Primary High-Intent Keywords
    "ERP Solution Provider", "ERP Implementation Company", "Custom ERP Development",
    "ERPNext Partner", "ERPNext Implementation", "ERPNext Consultant", "ERPNext Expert",
    "Frappe Framework Development", "Frappe Developer", "Frappe Partner",
    "ERP Software Solutions", "Enterprise ERP", "Cloud ERP Solutions",
    "AI Automation Services", "Business Process Automation", "AI Workflow Automation",
    "Custom Software Development", "Enterprise Software Development",
    // Industry-Specific
    "Pharma ERP Software", "Chemical ERP Solutions", "Manufacturing ERP", "Trading ERP",
    "Fintech Software Development", "Healthcare ERP Solutions",
    // Service-Focused
    "ERP Consulting Services", "ERP Migration Services", "ERP Support and Maintenance",
    "ERP Data Analytics", "ERP Integration Services", "ERP Training",
    // North America Cities
    "ERPNext Partner New York", "ERP Software San Francisco", "AI Automation Los Angeles",
    "ERPNext Implementation Toronto", "Software Development Chicago", "ERP Solutions Houston",
    "ERPNext Vancouver", "ERP Montreal",
    // Europe Cities
    "ERPNext Partner London", "ERP Software Berlin", "Frappe Developer Paris",
    "ERPNext Implementation Amsterdam", "AI Automation Dublin", "ERP Solutions Zurich",
    "Software Development Munich", "ERPNext Stockholm", "ERP Barcelona", "ERP Milan",
    // Middle East/Gulf Cities
    "ERPNext Partner Dubai", "ERP Software Abu Dhabi", "ERPNext Implementation Riyadh",
    "AI Automation Jeddah", "ERP Solutions Doha", "ERPNext Kuwait City",
    "Software Development Muscat", "ERP Bahrain",
    // Other Regions
    "ERPNext Partner Sydney", "ERP Software Melbourne", "ERPNext Johannesburg",
    "AI Automation Cape Town", "ERP Solutions Buenos Aires"
  ],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  openGraph: {
    title: "Leading ERP Solution Provider | ERPNext & AI Automation | Finbyz Tech",
    description: "Trusted by 100+ businesses worldwide for enterprise ERP implementation and AI automation. Certified ERPNext partner delivering custom ERP solutions, business process automation, and seamless digital transformation.",
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
    title: "Leading ERP Solution Provider | ERPNext Implementation & AI Automation",
    description: "Enterprise ERP solutions and AI automation for growing businesses. Certified ERPNext partner with 100+ successful implementations globally. Free consultation available.",
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


export default async function Home() {
  const faqsGroup = await getFaqs("Web Page","homepage");
  console.log(faqsGroup)
  return (
    <div className="min-h-screen">
      <CooprtaionSchema />
      <main >
        <Hero />
        <Benefits />
        <div className="[&_h2]:text-[#1A5276]">
          <ResponsiveCardGrid
            data={{
              title: "ERPNext Implementation & AI Automation Services",
              subtitle: "With over 10+ years of IT business solutions experience, FinByz Tech has technology in our genes. As certified Frappe and ERPNext experts, we provide innovative ERP solutions and AI-powered automation that work for all industries. We're adept at fitting an ERP solution that exactly meets your business goals.",
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
                  description: "End-to-end ERPNext deployment by certified Frappe partners. We help you adapt to digital transformation by understanding your current processes and suggesting the best ERP software. We don't just act as ERP suppliers - we provide comprehensive training for efficient usage.",
                  icon: "Cpu",
                  iconBg: "#1A5276",
                  iconColor: "#ffffff"
                },
                {
                  id: 2,
                  title: "AI Automation Solutions",
                  description: "Intelligent workflow automation powered by AI. Automate business processes, enhance decision-making, and boost operational efficiency. We create innovative solutions mixing domain expertise with cutting-edge technology to automate your business functioning.",
                  icon: "TrendingUp",
                  iconBg: "#FF8C00",
                  iconColor: "#ffffff"
                },
                {
                  id: 3,
                  title: "Frappe Development",
                  description: "Custom Frappe framework development for tailored ERP solutions. Build powerful business applications with open-source technology. We create robust, scalable solutions designed as per your business processes to make workflow easier and more efficient.",
                  icon: "Code",
                  iconBg: "#27AE60",
                  iconColor: "#ffffff"
                },
                {
                  id: 4,
                  title: "ERPNext Support & Upgrades",
                  description: "24/7 ERPNext support, maintenance, and version upgrades. Keep your ERP software running smoothly with expert assistance. We provide ongoing support from initial consultation to post-implementation maintenance.",
                  icon: "Target",
                  iconBg: "#8E44AD",
                  iconColor: "#ffffff"
                },
                {
                  id: 5,
                  title: "ERP Data Analytics",
                  description: "Cutting-edge Data Analytics can unlock business values hidden in your data. Our Data Scientists expertly apply advanced methods to develop business insights and solve problems that go past conventional Business Intelligence. Convert scattered data into knowledge!",
                  icon: "BarChart3",
                  iconBg: "#FF3333",
                  iconColor: "#ffffff"
                },
                {
                  id: 6,
                  title: "Custom Software Development",
                  description: "We provide customized Software Development services to meet your unique business needs. Create tailored software solutions to solve specific problems designed as per your business processes to satisfy your exclusive needs.",
                  icon: "Laptop",
                  iconBg: "#FFB347",
                  iconColor: "#ffffff"
                },
                {
                  id: 7,
                  title: "IT Consulting",
                  description: "Technology is evolving rapidly. With our IT expertise and in-depth understanding of the industry, we help you develop or update strategies and refine goals to maximize your chances of success. It's about your company, your business & your success.",
                  icon: "Lightbulb",
                  iconBg: "#3498DB",
                  iconColor: "#ffffff"
                },
                {
                  id: 8,
                  title: "Website Development",
                  description: "Your website is the first impression people get when they search for your company. We build dynamic websites with advanced technology and development experts as per your company needs - the most interesting and informative part of your business.",
                  icon: "Globe",
                  iconBg: "#E74C3C",
                  iconColor: "#ffffff"
                }
              ]
            }}
          /></div>

        <BusinessSlider />

        <ModulesSection />
        <Testimonials />
        

        <ClientLogos data={{ useAPI: true, apiEndpoint: '/api/client-logos' }} />
        <CTA
          data={{
            title: "Ready to Transform Your Business with ERP & AI?",
            highlightText: "ERP & AI?",
            description: "Join 100+ growing businesses worldwide. We believe technology can be the lighthouse to navigate towards your goals. Using latest technology, we steer our clients from where they are to where their Vision aspires them to be. Get a free consultation and custom roadmap for your digital transformation.",
            subheading: { text: "Limited Consultation Slots Available", icon: "CalendarCheck" },
            primaryButton: { text: "Book Free Demo", icon: "CalendarCheck", action: '/contact' },
            secondaryButton: { text: "Get Custom Quote", icon: "FileText", action: '/contact' },
            trustIndicator: { text: "✓ 100+ Successful Implementations | ✓ 24/7 Support | ✓ 10+ Years Experience", icon: "CalendarCheck" }
          }}
        />


        {/* Inquiry Form */}
        <InquiryForm
          data={{
            title: "Get Your Free ERP Consultation",
            highlightText: "Free ERP Consultation",
            description: "Need a solid software foundation for your business? Custom Enterprise software serves your unique business needs. Your business needs a reliable enterprise software solution to support many operations. Schedule a 30-minute consultation with our ERP experts. Get a custom roadmap and ROI analysis. No obligation required.",
            fields: {
              name: "Name",
              organization: "Organization Name",
              email: "Email",
              mobile: "Mobile No"
            },
            submitText: "BOOK MY FREE CONSULTATION"
          }}
        />

        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      
        
    
       

        {/* Contact form (simple, compact) */}
        {/* If you want this on a separate page, we can move it to /contact */}
        {/* import ContactFormSection at top if you want to render here */}


      </main>

    </div>
  );
}

