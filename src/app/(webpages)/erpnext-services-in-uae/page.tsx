'use client'
import React from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from "@/components/sections/Section";
import List from "@/components/sections/list";
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import IndustryGrid from '@/components/ai_components/IndustryGrid';
import ClientCountryGrid from '@/components/ai_components/ClientCountryGrid';
import CTA from '@/components/sections/cta';
import FlipCard from '@/components/ai_components/FlipCard';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const heroHighlightWords = ["in", "UAE", "Service Provider"];

const handlePrimary = () => {
  window.location.href = '/contact';
};
const handleSecondary = () => {
  window.location.href = '/erpnext-certified-partner';
};

const flipCards = [
  {
    title: "Customized ERPNext",
    image: "/images/icon-sales-automation.svg",
    alt: "Customized ERPNext",
    description: "Dive into a world where each feature and functionality is meticulously crafted to echo the uniqueness of your business. Our customized ERPNext development services are the pinnacle of innovation, offering modules and features that are in perfect harmony with your business goals and the dynamic UAE market requirements."
  },
  {
    title: "ERPNext Implementation",
    image: "/images/icon-personalized-touch.svg",
    alt: "ERPNext Implementation",
    description: "Experience a seamless journey from initiation to completion. Our implementation services are characterized by strategic planning, robust execution, and continuous support, ensuring your business is perfectly positioned to harness the full power of ERPNext Partner capabilities."
  },
  {
    title: "Integration Services",
    image: "/images/icon-shorter-sales-cycle.svg",
    alt: "Integration Services",
    description: "Bridging gaps with seamless integration services, we optimize connectivity between ERPNext and various third-party applications and systems. Experience a symphony of integrated solutions working seamlessly to elevate operational efficiency and business intelligence."
  },
  {
    title: "Support and Maintenance",
    image: "/images/icon-improved-service.svg",
    alt: "Support and Maintenance",
    description: "Your business deserves uninterrupted excellence. Our dedicated team ensures that your ERPNext system runs with clockwork precision, offering unwavering support and maintenance services that stand as a pillar of reliability and assurance."
  },
  {
    title: "Training and Consultation",
    image: "/images/icon-customer-loyalty.svg",
    alt: "Training and Consultation",
    description: "Knowledge is the beacon of business excellence. Through our extensive training and consultation services, we cultivate expertise, empower your team, and unlock new horizons of capability and adaptability within the ERPNext ecosystem."
  },
  {
    title: "Data Migration",
    image: "/images/icon-resource-optimization.svg",
    alt: "Data Migration",
    description: "Transcend traditional boundaries with our data migration services. Ensuring the integrity, accuracy, and security of your valuable business data, we pave the way for a transformation that is as profound as it is seamless."
  }
];

const erpFeatures = [
  "Accounting and finance",
  "Inventory management",
  "Sales and marketing",
  "Manufacturing and production",
  "Project management",
  "Human resources",
  "Customer relationship management (CRM)",
  "Support and Maintenance"
];

const industryData = [
  {
    title: "ERP for Manufacturing",
    image: "/images/identifying objectives.svg",
    alt: "identifying objectives",
    description: "In the manufacturing sector of the UAE, our manufacturing ERP plays a pivotal role in enabling efficient management of production processes, inventory control, quality assurance, and supply chain logistics. This empowers manufacturers to optimize production schedules, minimize lead times, and uphold efficient production operations. The manufacturing industry encompasses various subcategories, all of which our ERP system can adapt to, making it an ideal choice for ERP software for manufacturing industry in the UAE.",
    bg: "bg-gray"
  },
  {
    title: "ERP for Agro Commodity",
    image: "/images/make-use-of-clear-call-to-action.svg",
    alt: "make-use-of-clear-call-to-action",
    description: "If you're in the UAE and looking for ERP solutions tailored to agribusiness, our ERP Agro system in the UAE is designed to automate agro-related processes efficiently. Agriculture, being a fundamental sector, requires specialized software. Our ERP system organizes data into a structured format, enabling businesses to make informed decisions that yield long-term benefits. It offers real-time data and seamless connectivity across all organizational processes and personnel, making it the best ERP for Agro Commodity in the UAE.",
    bg: "bg-lightgray"
  },
  {
    title: "ERP for Healthcare",
    image: "/images/customer onboarding.svg",
    alt: "customer onboarding",
    description: "Designed specifically for healthcare organizations in the UAE, ERP for Healthcare is a specialized enterprise resource planning (ERP) software. It streamlines core business functions, including accounting, finance, manufacturing, sales, and customer service. This tailored ERP system extends beyond conventional ERP solutions, incorporating features unique to the healthcare sector, such as patient management, clinical coordination, and medical billing.",
    bg: "bg-lightgray"
  },
  {
    title: "ERP for Chemical",
    image: "/images/icon-integrated_paperwork_.svg",
    alt: "icon-integrated_paperwor",
    description: "Tailored for chemical companies in the UAE, ERP for Chemical is a specialized enterprise resource planning (ERP) software designed to meet the unique needs of the chemical industry. It integrates and automates essential business processes like accounting, finance, manufacturing, sales, and customer service. Distinguished by its comprehensive nature, this ERP system includes features specifically crafted for the chemical industry. Explore the best chemical ERP software in the UAE, offering a robust solution for chemical manufacturing and CRM software tailored to the chemical industry's requirements.",
    bg: "bg-gray"
  },
  {
    title: "ERP for Pharmaceutical",
    image: "/images/training and development.svg",
    alt: "training and developmentt",
    description: "Developed for pharmaceutical firms in the UAE, ERP for Pharmaceutical is a specialized enterprise resource planning (ERP) software meticulously designed to cater to the unique requirements of the pharmaceutical industry. It seamlessly integrates and automates core business functions, including accounting, finance, manufacturing, sales, and customer service. This ERP system goes beyond standard solutions, incorporating industry-specific features necessary for the pharmaceutical sector in the UAE.",
    bg: "bg-gray"
  },
  {
    title: "ERP for Paper and Packaging",
    image: "/images/Customization.svg",
    alt: "Customization",
    description: "Tailored to meet the needs of the paper and packaging industry in the UAE, our ERP software seamlessly integrates and automates fundamental business processes such as accounting, finance, manufacturing, sales, and customer service. This ERP system encompasses a comprehensive range of features specifically designed to enhance operations within the paper and packaging industry in the UAE.",
    bg: "bg-lightgray"
  }
];

const clientCountries = [
  { name: "Vietnam", image: "/images/vnm.svg", alt: "erpnext_partner_vietnam" },
  { name: "USA", image: "/images/US.svg", alt: "erpnext_partner_usa" },
  { name: "UAE", image: "/images/AE.svg", alt: "erpnext_partner_uae" },
  { name: "Singapore", image: "/images/sgp.svg", alt: "erpnext_partner_singapore" },
  { name: "Saudi Arabia", image: "/images/sau.svg", alt: "erpnext_partner_saudi_arabia" },
  { name: "Norway", image: "/images/NO.svg", alt: "erpnext_partner_norway" },
  { name: "Malaysia", image: "/images/MY.svg", alt: "erpnext_partner_malaysia" },
  { name: "Mauritius", image: "/images/MU.svg", alt: "erpnext_partner_mauritius" },
  { name: "India", image: "/images/ind.svg", alt: "erpnext_partner_india" },
  { name: "Hungary", image: "/images/HU.svg", alt: "erpnext_partner_hungary" },
  { name: "HongKong", image: "/images/HK.svg", alt: "erpnext_partner_hongkong" },
  { name: "Germany", image: "/images/ger.svg", alt: "erpnext_partner_germany" },
  { name: "France", image: "/images/FR.svg", alt: "erpnext_partner_france" },
  { name: "China", image: "/images/chn.svg", alt: "erpnext_partner_china" },
  { name: "Canada", image: "/images/CA.svg", alt: "erpnext_partner_canada" },
  { name: "Brunei", image: "/images/BN.svg", alt: "erpnext_partner_brunei" },
  { name: "Belgium", image: "/images/BE.svg", alt: "erpnext_partner_belgium" },
  { name: "Australia", image: "/images/AU.svg", alt: "erpnext_partner_australia" }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Service Provider in UAE "
        highlightWords={heroHighlightWords}
        description="ERPNext Partner offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors."
        primaryButton={{ text: "Get Started", action: handlePrimary }}
        secondaryButton={{ text: "Our Partnership", action: handleSecondary }}
        heroImage={{
          alt: "ERPNext Service Provider in UAE ",
          src: "/images/Hire-ERPNext-Implementor679475.svg",
        }}
      />
      <Section>
        <div className="container-custom py-8">
          <div className="animate-fadeInUp">
            <p>
              Finbyz Tech, your trusted <a href="/erpnext-certified-partner" className="text-primary underline hover:text-primary/80">ERPNext partner</a> and ERPNext service provider in UAE. Specialized in delivering cutting-edge ERP solutions, we empower businesses to thrive in the competitive and innovative UAE market. Embrace the future with ERPNext’s powerful functionalities tailored by our experts to meet your unique business needs.
            </p>
            <p className="mt-4">
              <a href="/erpnext-software" className="text-primary underline hover:text-primary/80">ERPNext</a> is a versatile open-source ERP software that caters to a wide range of industries, including manufacturing, distribution, retail, trading, services, education, non-profits, and healthcare. It is a cloud-based solution that is easy to use and affordable, making it a popular choice for businesses of all sizes in the UAE.
            </p>
          </div>
         

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 justify-items-center ">
          {flipCards.map((card, idx) => (
            <FlipCard
              key={card.title}
              front={
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <Image src={card.image} alt={card.alt} width={64} height={64} className="object-contain" />
                  <h3 className="font-semibold text-lg mt-4">{card.title}</h3>
                </div>
              }
              back={
                <div className="flex items-center justify-center h-full p-6">
                  <p className="text-center text-muted-foreground text-base pt-2 opacity-90 transition-opacity duration-300 hover:opacity-100">
                    {card.description}
                  </p>
                </div>
              }
              className="shadow-md border-none bg-white hover:shadow-lg transition-all duration-300 w-full sm:w-[280px] md:w-[350px] lg:w-[380px] h-[240px] flex items-center justify-center"
            />
          ))}
        </div>


        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1A5276]">ERPNext provides a diverse array of features, which include</h2>
          <List
            title=""
            items={erpFeatures}
            style={{ marginBottom: 24 }}
          />
          <div className="mt-6 space-y-3">
            <p>ERPNext can be customized to meet the specific needs of any business, and it is regularly updated with new features and improvements.</p>
            <p>ERPNext is a popular choice for businesses in the UAE for a number of reasons. First, it is a comprehensive solution that can be used to manage all aspects of a business. Second, it is easy to use and affordable. Third, it is a cloud-based solution, which means that businesses can access it from anywhere with an internet connection.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <FeatureCard
              title="Improved efficiency"
              image="/images/improve-effieciency-removebg-preview.png"
              alt="Improved efficiency"
              description="ERPNext can help businesses in the UAE to improve their efficiency by automating many of their manual tasks. This can free up time for employees to focus on more important tasks, such as sales and customer service."
            />
            <FeatureCard
              title="Reduced costs"
              image="/images/js knowledge.svg"
              alt="Reduced costs"
              description="ERPNext can help businesses in the UAE to reduce costs by eliminating the need to purchase and maintain multiple software solutions. ERPNext is a one-stop-shop for all of a business's ERP needs."
            />
            <FeatureCard
              title="Increased visibility"
              image="/images/icon-Real-time-information.svg"
              alt="Increased visibility"
              description="ERPNext provides businesses in the UAE with a real-time view of their operations. This visibility can help businesses to identify and address problems quickly, and to make better decisions about their future."
            />
            <FeatureCard
              title="Improved compliance"
              image="/images/icon-Higher-Productivity.svg"
              alt="Improved compliance"
              description="ERPNext can help businesses in the UAE to comply with local regulations. ERPNext is regularly updated to comply with the latest changes in UAE laws and regulations."
            />
          </div>
          <p className="mt-8">
            If you are a business owner in the UAE, ERPNext is a great option to consider for your ERP needs. ERPNext is a comprehensive, easy-to-use, and affordable ERP solution that can help your business to improve its efficiency, reduce costs, increase visibility, and improve compliance.
          </p>
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-[#1A5276] font-bold mb-6">ERP Services in UAE</h2>
          <QuoteBlock
            text="Finbyz Tech offers comprehensive ERP services in the UAE, specializing in customized solutions for streamlining business processes and enhancing operational efficiency."
            isHeading={false}
          />
          <div className="mb-5 pb-5 mt-6">
            <p>When choosing an ERP service provider in the UAE, it is important to consider the following factors:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <FeatureCard
              title="Experience"
              image="/images/js knowledge.svg"
              alt="Experience"
              description="Choose a company with experience in implementing and customizing ERPNext."
            />
            <FeatureCard
              title="Expertise"
              image="/images/icon-Real-time-information.svg"
              alt="Expertise"
              description="Choose a company with expertise in the industry in which your business operates."
            />
            <FeatureCard
              title="Support"
              image="/images/icon-Higher-Productivity.svg"
              alt="Support"
              description="Select a company that provides extensive support and maintenance services."
            />
          </div>
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-[#1A5276] font-bold mb-8 text-center">Serving Diverse Industries with Finbyz ERPNext Solutions</h2>
          <IndustryGrid industries={industryData} />
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-[#1A5276] font-bold mb-4 text-center">We Serve Businesses Across the Globe</h2>
          <p className="text-center mb-8">FinByz Tech, a global ERP implementation partner, proudly extends its services to businesses across India, the USA, Canada, the UK, UAE, and Saudi Arabia. Our dedicated team is readily available to cater to all your <a href="/erp-software" className="text-primary underline hover:text-primary/80">ERP implementation</a> requirements. Whether you have inquiries, require consultations, or need any form of assistance, please feel free to contact us. We are committed to serving your ERP needs across these diverse regions.</p>
          <ClientCountryGrid countries={clientCountries} />
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: "Ready to Transform Your Business?",
                icon: "Rocket"
              },
              title: "Get Started with ERPNext in UAE",
              highlightText : "ERPNext in UAE",
              description: "Contact Finbyz Tech today to discuss your ERP requirements and discover how we can help your business grow.",
              primaryButton: {
                text: "Contact Us",
                icon: "Mail",
                action: handlePrimary
              },
              secondaryButton: {
                text: "Learn More",
                icon: "ArrowRight",
                action: handleSecondary
              },
              trustIndicator: {
                text: "Trusted by businesses worldwide",
                icon: "CheckCircle"
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
