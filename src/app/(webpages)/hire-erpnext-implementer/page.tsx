'use client';
import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import List from '@/components/sections/list';
import FeatureCard from '@/components/ai_components/FeatureCard';
import FlipCard from '@/components/ai_components/FlipCard';
import ERPNextImplementationProcessGrid from '@/components/ai_components/ERPNextImplementationProcessGrid';
import ClientCountryGrid from '@/components/ai_components/ClientCountryGrid';
import CTA from '@/components/sections/cta';
import Grid from '@/components/layout/Grid';
import { motion } from "framer-motion";

const whyChooseList = [
  'Boost operational efficiency and reduce costs with expert ERPNext implementation by a trusted partner in Ahmedabad.',
  'End-to-end ERPNext services from planning, customization, deployment to post-launch support – everything under one roof.',
  'Trusted ERPNext Service Providers with a proven track record across diverse industries in Gujarat and beyond.',
  'Leverage the full potential of ERPNext to scale and streamline your business with Finbyz Tech – Your ERPNext Implementation Partner.'
];

const whyUsFeatures = [
  {
    title: 'ERPNext Implementation Experience',
    image: '/api/fb/n/files/experience.svg',
    alt: 'experience',
    description: 'With over a decade of ERPNext implementation experience in Gujarat, we craft scalable solutions that meet your unique business requirements.'
  },
  {
    title: 'Implemented Projects',
    image: '/api/fb/n/files/icon-order-management.svg',
    alt: 'Implemented Projects',
    description: 'We have successfully delivered 140+ ERPNext implementations across industries, positioning us as one of the top ERPNext service providers in Ahmedabad.'
  },
  {
    title: 'Excellent Support Service',
    image: '/api/fb/n/files/Supoort.svg',
    alt: 'Support',
    description: 'Our expert support team ensures smooth ERPNext operations through SLA-driven ticket resolution and post-implementation support, setting us apart as a reliable ERPNext Implementation Partner.'
  },
  {
    title: 'Customer Retention',
    image: '/api/fb/n/files/insufficient-training.svg',
    alt: 'Customer Retention',
    description: 'We have an 85% customer retention rate, which indicates that our clients are satisfied with our services and choose to continue working with us.'
  },
  {
    title: 'Signing Off Procedures',
    image: '/api/fb/n/files/signing1.svg',
    alt: 'Signing Off Procedures',
    description: 'Our robust sign-off checklist ensures all ERPNext implementation requirements are met. We guide your team thoroughly to ensure readiness before project closure.'
  },
  {
    title: 'ERPNext Documentation',
    image: '/api/fb/n/files/documentation.svg',
    alt: 'ERPNext Documentation',
    description: 'As a responsible ERPNext Implementation Partner, we offer video tutorials and written documentation through our YouTube channel to ensure your team is always equipped.'
  },
  {
    title: 'Established System & Processes',
    image: '/api/fb/n/files/system%20setup.svg',
    alt: 'Established System & Processes',
    description: 'We follow industry best practices from 140+ implementations, making us a structured and process-driven ERPNext Implementation Company in Gujarat.'
  },
  {
    title: 'ISO 27001-2013 Certified Company',
    image: '/api/fb/n/files/quality%20assurance.svg',
    alt: 'ISO Certified',
    description: 'Our ISO certification ensures data security and process quality, making Finbyz Tech a trusted ERPNext partner in Ahmedabad.'
  },
  {
    title: 'Open-Source ERPNext Expertise',
    image: '/api/fb/n/files/Open%20Source%20Solutions.svg',
    alt: 'Open Source Solutions',
    description: 'With 100+ years of combined experience in open-source technologies, we bring the right mix of flexibility and innovation to ERPNext implementation.'
  },
  {
    title: 'Certified ERPNext Implementation Partner',
    image: '/api/fb/n/files/blog-icon-ensures-customer-satisfaction.svg',
    alt: 'Certified ERPNext Implementation Partner',
    description: 'We are an Official Certified ERPNext Partner with the expertise and credibility you need from your ERPNext Implementation Company in Ahmedabad.'
  }
];

const challengeCards = [
  {
    title: "User Adoption",
    image: "api/fb/n/files/dedicated%20developer.svg",
    alt: "dedicated developer",
    description:
      "Businesses often struggle to get employees fully onboard with ERPNext. As a trusted ERPNext Implementation Partner we help ensure ERP adoption is smooth and effective. As a leading ERPNext Implementation Company in Gujarat, we provide continuous support and video-based training to empower users. Our ERPNext service includes easily accessible resources to help teams become confident users. At our company, we understand that implementing a new system can be challenging for some users. That's why we provide ongoing support and training to ensure that our users are comfortable and confident in using the system. Our video training resources are designed to be user-friendly and accessible, allowing users to learn at their own pace and on their own schedule."
  },
  {
    title: "Data Importing",
    image: "api/fb/n/files/Data%20Importing.svg",
    alt: "Data Importing",
    description:
      "Migrating master data from legacy systems to ERPNext can be complex. Our ERPNext service providers from Ahmedabad ensure a precise and loss-free data transition. Our ERPNext Implementation Company follows a systematic data migration process. Located in Gujarat, we map fields to ERPNext formats and use a maker-checker system to ensure 100% data accuracy. We take data migration seriously and follow a structured process to ensure accuracy and reliability. Our process involves mapping data fields to the ERPNext Data importing format, which ensures that the data is formatted correctly for the system. We also follow the maker checker concept, which means that data is reviewed and verified by multiple team members to ensure 100% accuracy before it is imported into the system. By adhering to this process, we can minimize errors and ensure a smooth and seamless transition to the new system."
  },
  {
    title: "Complex Integration",
    image: "api/fb/n/files/Complex%20Integration.svg",
    alt: "Complex Integration",
    description:
      "Integrating ERPNext with existing software and hardware can be difficult. Our expert ERPNext Implementation Partner team in Ahmedabad tackles complex integrations with ease. As one of the experienced ERPNext service providers in Gujarat, we handle integrations with IoT, SCADA, and third-party systems using custom development, APIs, and webhooks for seamless functionality. Addressing technical complexity in ERPNext integration projects requires expertise and experience. At our company, we work with experienced developers who have a deep understanding of both ERPNext and the systems being integrated. They can develop custom code or utilize the flexible API and webhooks provided by ERPNext to ensure a seamless integration. By utilizing the right tools and strategies, we ensure that our clients achieve a successful outcome with their ERPNext integration projects while also meeting their unique business requirements."
  },
  {
    title: "Customization",
    image: "api/fb/n/files/Customization.svg",
    alt: "Customization",
    description:
      "ERPNext may need customization to fit your business. Our ERPNext Implementation Company in Ahmedabad works closely with clients to deliver tailored solutions. We are a collaborative ERPNext Implementation Partner in Gujarat. Our customization services align ERPNext with your specific workflows, ensuring productivity and business success. We believe in a collaborative approach to customization in ERPNext. We involve our clients in the customization process to ensure that their unique business requirements are met. This approach enables us to create customized ERPNext solutions that are tailored to our clients' specific needs and workflows, leading to increased productivity and efficiency in their business processes. Our clients remain involved throughout the customization process, ensuring that they are fully satisfied with the final outcome."
  },
  {
    title: "Scalability",
    image: "api/fb/n/files/Scalability(1).svg",
    alt: "Scalability",
    description:
      "Rapid business growth can challenge ERP systems. Our ERPNext Implementation Company in Ahmedabad builds scalable ERPNext architecture ready for the future. We design cloud-based ERPNext systems with scalability in mind. As top ERPNext service providers we ensure your system can handle higher volumes and business expansion. We design ERPNext system architecture with scalability in mind. Our team ensures that the system can handle future growth and expansion by leveraging industry-standard cloud infrastructure. We use the latest cloud technologies to ensure that the system can handle increased traffic and data volume, providing our clients with the ability to scale their business processes seamlessly without worrying about system limitations. By designing ERPNext systems with scalability in mind, we enable our clients to grow their business processes without any interruptions."
  },
  {
    title: "Security",
    image: "api/fb/n/files/Security3b8a73.svg",
    alt: "Security",
    description:
      "Protecting sensitive data is critical. As a secure ERPNext Implementation Partner in Ahmedabad, we enforce strict access controls and data security policies. Our ERPNext Implementation Company in Gujarat sets up role-based user access controls to protect data. We prevent breaches by ensuring only authorized users can access sensitive ERPNext modules. We recognize the importance of data security in ERPNext systems. To prevent data breaches caused by unauthorized access, we implement a user access control system. This system ensures that only authorized users can access sensitive data, thereby reducing the risk of data theft or data loss. We provide role-based access control and implement security policies that restrict access to sensitive data, ensuring that only the right people have access to the right data. By implementing a user access control system, we provide our clients with a secure ERPNext system that protects their sensitive data from unauthorized access."
  }
];

const industries = [
  { title: 'Chemical', image: '/api/fb/n/files/nav-chemical.svg', alt: 'Chemical', description: '', link: '/erp-for-chemical-industry' },
  { title: 'Engineering', image: '/api/fb/n/files/nav-engineering.svg', alt: 'Engineering', description: '', link: '/erp-for-engineering-industry' },
  { title: 'Logistics', image: '/api/fb/n/files/nav-logistics.svg', alt: 'Logistics', description: '', link: '/erp-for-logistics-industry' },
  { title: 'Manufacturing', image: '/api/fb/n/files/nav-manufacturing.svg', alt: 'Manufacturing', description: '', link: '/erp-for-manufacturing-industry' },
  { title: 'Agro Commodity', image: '/api/fb/n/files/nav-agro.svg', alt: 'Agro Commodity', description: '', link: '/erp-for-agro-commodity' },
  { title: 'Trading', image: '/api/fb/n/files/nav-trading.svg', alt: 'Trading', description: '', link: '/erp-for-trading-industry' },
  { title: 'Textile', image: '/api/fb/n/files/yarn.svg', alt: 'Textile', description: '', link: '' },
  { title: 'Services', image: '/api/fb/n/files/nav-services.svg', alt: 'Services', description: '', link: '' },
  { title: 'Real Estate', image: '/api/fb/n/files/icon-business-app.svg', alt: 'Real Estate', description: '', link: '' },
  { title: 'Ceramics', image: '/api/fb/n/files/Ceramics.svg', alt: 'Ceramics', description: '', link: '' }
];

const processSteps = [
  {
    title: 'Identify Objectives and Goals',
    image: '/api/fb/n/files/identifying%20objectives.svg',
    alt: 'identifying objectives',
    description: 'We begin by understanding your unique business goals and KPIs. Our strategy ensures that the ERPNext solution is aligned with your long-term growth. By identifying objectives, we create customized ERPNext implementations that drive success.',
    bg: 'gray'
  },
  {
    title: 'Demonstration of ERPNext Product',
    image: '/api/fb/n/files/make-use-of-clear-call-to-action.svg',
    alt: 'make-use-of-clear-call-to-action',
    description: 'Our expert consultants offer a comprehensive demo to showcase how ERPNext can fulfill your business requirements. Clients can experience features tailored to their industry, ask questions, and better understand the ERPNext system’s capabilities.',
    bg: 'lightgray'
  },
  {
    title: 'Customer Onboarding and Service Agreement',
    image: '/api/fb/n/files/customer%20onboarding.svg',
    alt: 'customer onboarding',
    description: 'We initiate client onboarding after finalizing the scope. Our detailed service agreement outlines responsibilities, deliverables, and project timelines, ensuring transparency and alignment throughout the ERPNext implementation journey.',
    bg: 'lightgray'
  },
  {
    title: 'System Set Up',
    image: '/api/fb/n/files/icon-integrated_paperwork_.svg',
    alt: 'icon-integrated_paperwor',
    description: 'Our ERPNext experts configure and set up your ERPNext system to match your customized business needs. We ensure smooth integration of all modules and a flawless transition from your existing software to the new ERPNext platform.',
    bg: 'gray'
  },
  {
    title: 'Data Migration',
    image: '/api/fb/n/files/migration.svg',
    alt: 'data migration',
    description: 'We ensure a secure and seamless migration of your data into the new ERPNext system. We maintain data accuracy, integrity, and consistency throughout the process to support uninterrupted business operations.',
    bg: 'gray'
  },
  {
    title: 'Training & development',
    image: '/api/fb/n/files/training%20and%20development.svg',
    alt: 'training and development',
    description: 'We offer expert training sessions to empower your team. We make sure your staff is well-versed in the ERPNext system, enabling them to handle operations effectively and utilize all features to the fullest.',
    bg: 'lightgray'
  },
  {
    title: 'Customize the ERPNext',
    image: '/api/fb/n/files/Customization.svg',
    alt: 'Customization',
    description: 'Our team provides complete ERPNext customization services to fit your industry-specific requirements. We deliver ongoing configuration support post-implementation to meet any additional needs.',
    bg: 'lightgray'
  },
  {
    title: 'Testing and Validation',
    image: '/api/fb/n/files/paper.svg',
    alt: 'testing and validation',
    description: 'Our team conducts thorough testing of all modules. We validate every function to ensure that the ERP system delivers seamless performance and meets the highest standards for businesses, especially in manufacturing and production domains.',
    bg: 'gray'
  },
  {
    title: 'Go Live',
    image: '/api/fb/n/files/go%20live.svg',
    alt: 'go live',
    description: 'After successful testing and training, we ensure a smooth go-live process. We coordinate every detail to transition your operations to the new ERPNext system without disruptions.',
    bg: 'gray'
  },
  {
    title: 'Support and Maintenance',
    image: '/api/fb/n/files/Improved-Operations-&%20Team-Collaborations.svg',
    alt: 'team support',
    description: 'We offer continuous support and system maintenance. Our team is dedicated to helping you keep your ERPNext implementation running smoothly and ensuring long-term success for your business.',
    bg: 'lightgray'
  }
];

const countries = [
  { name: 'Vietnam', image: '/api/fb/n/files/vnm.svg', alt: 'erpnext_service_provider_vietnam' },
  { name: 'USA', image: '/api/fb/n/files/US.svg', alt: 'erpnext_service_provider_usa' },
  { name: 'UAE', image: '/api/fb/n/files/AE.svg', alt: 'erpnext_service_provider_uae' },
  { name: 'Singapore', image: '/api/fb/n/files/sgp.svg', alt: 'erpnext_service_provider_singapore' },
  { name: 'Saudi Arabia', image: '/api/fb/n/files/sau.svg', alt: 'erpnext_service_provider_saudi_arabia' },
  { name: 'Norway', image: '/api/fb/n/files/NO.svg', alt: 'erpnext_service_provider_norway' },
  { name: 'Malaysia', image: '/api/fb/n/files/MY.svg', alt: 'erpnext_service_provider_malaysia' },
  { name: 'Mauritius', image: '/api/fb/n/files/MU.svg', alt: 'erpnext_service_provider_mauritius' },
  { name: 'India', image: '/api/fb/n/files/ind.svg', alt: 'erpnext_service_provider_india' },
  { name: 'Hungary', image: '/api/fb/n/files/HU.svg', alt: 'erpnext_service_provider_hungary' },
  { name: 'HongKong', image: '/api/fb/n/files/HK.svg', alt: 'erpnext_service_provider_hongkong' },
  { name: 'Germany', image: '/api/fb/n/files/ger.svg', alt: 'erpnext_service_provider_germany' },
  { name: 'France', image: '/api/fb/n/files/FR.svg', alt: 'erpnext_service_provider_france' },
  { name: 'China', image: '/api/fb/n/files/chn.svg', alt: 'erpnext_service_provider_china' },
  { name: 'Canada', image: '/api/fb/n/files/CA.svg', alt: 'erpnext_service_provider_canada' },
  { name: 'Brunei', image: '/api/fb/n/files/BN.svg', alt: 'erpnext_service_provider_brunei' },
  { name: 'Belgium', image: '/api/fb/n/files/BE.svg', alt: 'erpnext_service_provider_belgium' },
  { name: 'Australia', image: '/api/fb/n/files/AU.svg', alt: 'erpnext_service_provider_australia' }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Implementation"
        highlightWords={["ERPNext", "Implementation"]}
        description="Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.location.href = '/contact';
          }
        }}
        secondaryButton={{
          text: 'Learn More',
          action: () => {
            window.scrollTo({ top: 600, behavior: 'smooth' });
          }
        }}
        heroImage={{
          alt: 'ERPNext Implementation',
          src: '/api/fb/n/files/Hire-ERPNext-Implementor679475.svg',

        }}
      />

      <Section>
        <div className="container-custom py-8">
          <QuoteBlock
            text="Looking to digitally transform your business? Choose Finbyz Tech – a leading ERPNext Implementation Company in Ahmedabad, Gujarat. Here's why"
            isHeading={true}
          />
          <List
            title="Why Choose Finbyz Tech for ERPNext Implementation?"
            items={whyChooseList}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">Why Consider Us As Your ERPNext Implementation Partner in Gujarat?</h2>
          <p className="mb-8 text-gray-700">We are a trusted <a href="/erpnext-services-in-uae" className="text-primary underline">ERPNext Implementation Company</a> based in Ahmedabad, known for our comprehensive and client-focused ERPNext services. Here's what makes us stand out as preferred ERPNext service providers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUsFeatures.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                image={feature.image}
                alt={feature.alt}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Section>




<Section className="bg-gradient-to-b from-gray-50 to-white py-20 relative">
  <div className="container-custom">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
        Overcoming{" "}
        <span className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
          ERPNext Challenges
        </span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Our proven solutions help you unlock ERPNext’s full potential while avoiding common pitfalls.
      </p>
    </div>

    {/* Cards */}
    <div className="space-y-10">
      {challengeCards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="w-full relative group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500"
          style={{ height: "280px" }} // Reduced height
        >
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

          {/* Horizontal Card */}
          <div className="relative z-10 bg-white rounded-3xl h-full flex flex-col md:flex-row transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            
            {/* Left Image */}
            <div className="relative md:w-1/3 w-full h-full flex items-center justify-center bg-gray-50">
              <img
                src={card.image}
                alt={card.alt}
                className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{card.alt}</h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
              <p className="text-gray-700 text-sm md:text-base leading-snug text-center md:text-left">
                {card.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
<div className="text-center mt-20">
  <a
    href="/contact"
    className="ml-4 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white 
               hover:shadow-lg hover:shadow-orange-500/25 transition-all 
               text-base py-3 px-8 font-semibold rounded-full"
  >
    Talk to Our Experts
  </a>
</div>

  </div>
</Section>


      {/* <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Industries We Serve with Expert ERPNext Implementation Solutions</h2>
          <p className="mb-8 text-gray-700 text-center">As a trusted ERPNext Implementation Partner based in Ahmedabad, Gujarat, FinByz Tech serves diverse industries with custom ERPNext solutions. Our ERPNext service providers design systems that meet unique operational needs across sectors.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {industries.map((industry, idx) => (
              <a
                key={idx}
                href={industry.link || undefined}
                className="flex flex-col items-center bg-white rounded-full shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group"
                style={{ minWidth: 140 }}
              >
                <img
                  src={industry.image}
                  alt={industry.alt}
                  title={industry.alt}
                  width={60}
                  height={60}
                  className="mb-2 object-contain"
                />
                <span className="text-base font-medium text-gray-800 group-hover:text-primary text-center">{industry.title}</span>
              </a>
            ))}
          </div>
        </div>
      </Section> */}


<Section useGradient className="py-16">
  <div className="container-custom">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-gray-900">
      Industries We Serve with <span className="text-primary">Expert ERPNext Solutions</span>
    </h2>

    {/* Paragraph with scroll animation */}
    <motion.p
      className="mb-12 text-gray-700 text-center max-w-3xl mx-auto text-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      As a trusted ERPNext Implementation Partner based in Ahmedabad, Gujarat, FinByz Tech serves diverse industries with custom ERPNext solutions. Our ERPNext service providers design systems that meet unique operational needs across sectors.
    </motion.p>

    {/* Industries Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
      {industries.map((industry, idx) => (
        <a
          key={idx}
          href={industry.link || undefined}
          className="group relative flex flex-col items-center justify-center 
                     bg-gray-100 rounded-full shadow-md 
                     transition-all duration-500 
                     hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] 
                     w-40 h-40"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-full bg-white opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"></div>

          {/* Icon */}
          <div className="w-20 h-20 mb-3 relative z-10 flex items-center justify-center">
            <img
              src={industry.image}
              alt={industry.alt}
              title={industry.alt}
              className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <span className="text-sm sm:text-base font-semibold text-gray-800 relative z-10 text-center leading-snug transition-colors duration-300 group-hover:text-primary px-2">
            {industry.title}
          </span>
        </a>
      ))}
    </div>
  </div>
</Section>






      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4">Our ERPNext Implementation Strategy</h2>
          <ERPNextImplementationProcessGrid steps={processSteps} />
        </div>
      </Section>



      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">We Serve Businesses Across the Globe</h2>
          <p className="mb-8 text-gray-700 text-center">FinByz is a leading <a href="/erpnext-services-in-uae" className="text-primary underline">ERPNext service provider in UAE</a>, India, Canada, USA, Saudi Arabia, UK, and beyond. As a renowned global <a href="/erp-software" className="text-primary underline">ERP implementation</a> partner, we proudly offer our expertise to businesses spanning these regions. Our committed team stands ready to address all your ERP implementation challenges, from consultations to hands-on assistance. Should you have any questions or need guidance, please don't hesitate to contact us.</p>
          <ClientCountryGrid countries={countries} />
        </div>
      </Section>



      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'rocket',
              },
              title: 'Start Your ERPNext Implementation Journey with Finbyz Tech',
              description: 'Contact us today to discuss your requirements and discover how our ERPNext experts can help you achieve operational excellence.',
              primaryButton: {
                text: 'Get a Free Consultation',
                icon: 'arrow-right',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'info',
                action: () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                },
              },
              trustIndicator: {
                text: 'Trusted by 140+ businesses',
                icon: 'check-circle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
