'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import FlipCard from '@/components/ai_components/FlipCard';
import FeatureCard from '@/components/ai_components/FeatureCard';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ClientCountryGrid from '@/components/ai_components/ClientCountryGrid';
import { FaCheckCircle } from 'react-icons/fa';

const handlePrimary = () => {
  window.location.href = '/contact';
};
const handleSecondary = () => {
  window.location.href = '/erpnext-certified-partner';
};

const heroHighlightWords = ['ERPNext', 'Canada', 'Services'];

const flipCards = [
  {
    front: (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/api/fb/n/files/icon-sales-automation.svg" alt="Customized ERPNext" width={56} height={56} />
        <h3 className="font-semibold text-lg">Customized ERPNext</h3>
      </div>
    ),
    back: (
      <p className="text-center px-3 text-sm">
        Immerse yourself in a world where every feature and functionality is designed to reflect your business's unique identity. Our tailor-made ERPNext development services stand at the forefront of innovation, delivering modules and features that resonate with your business objectives and meet the dynamic requirements of the Canadian market.
      </p>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/api/fb/n/files/icon-personalized-touch.svg" alt="ERPNext Implementation" width={56} height={56} />
        <h3 className="font-semibold text-lg">ERPNext Implementation</h3>
      </div>
    ),
    back: (
      <p className="text-center px-3 text-sm">
        Embark on a smooth journey from start to finish. Our implementation process is marked by meticulous planning, effective execution, and ongoing support, ensuring your business is ideally positioned to leverage ERPNext’s full potential.
      </p>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/api/fb/n/files/icon-shorter-sales-cycle.svg" alt="Integration Services" width={56} height={56} />
        <h3 className="font-semibold text-lg">Integration Services</h3>
      </div>
    ),
    back: (
      <p className="text-center px-3 text-sm">
        We bridge the gaps with our seamless integration services, enhancing connectivity between ERPNext and a variety of third-party applications and systems. Experience a harmonious blend of integrated solutions functioning together to boost operational efficiency and business intelligence.
      </p>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/api/fb/n/files/icon-improved-service.svg" alt="Support and Maintenance" width={56} height={56} />
        <h3 className="font-semibold text-lg">Support and Maintenance</h3>
      </div>
    ),
    back: (
      <p className="text-center px-3 text-sm">
        Your business merits continuous excellence. Our dedicated team ensures your ERPNext system operates flawlessly, providing steadfast support and maintenance services as a backbone of reliability and confidence.
      </p>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/api/fb/n/files/icon-customer-loyalty.svg" alt="Training and Consultation" width={56} height={56} />
        <h3 className="font-semibold text-lg">Training and Consultation</h3>
      </div>
    ),
    back: (
      <p className="text-center px-3 text-sm">
        Empowering your team with knowledge leads to business excellence. Through our comprehensive training and consultation services, we foster expertise, empower your staff, and open new vistas of proficiency and flexibility within the ERPNext framework.
      </p>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/api/fb/n/files/icon-resource-optimization.svg" alt="Data Migration" width={56} height={56} />
        <h3 className="font-semibold text-lg">Data Migration</h3>
      </div>
    ),
    back: (
      <p className="text-center px-3 text-sm">
        Move beyond traditional limits with our data migration services. We guarantee the integrity, precision, and security of your crucial business data, facilitating a transition that's as impactful as it is smooth.
      </p>
    )
  }
];

const erpnextFunctionalityList = [
  'Accounting and Finance management',
  'Inventory Control',
  'Sales and Marketing Strategies',
  'Manufacturing and Production Oversight',
  'Project Coordination',
  'Human Resources Administration',
  'Customer Relationship Management (CRM)',
  'Support and Maintenance Services'
];

const erpnextBenefits = [
  {
    title: 'Enhanced Efficiency',
    description: 'ERPNext streamlines business processes across Canada by automating routine tasks, allowing employees to dedicate more time to critical activities such as sales and customer engagement.'
  },
  {
    title: 'Cost Savings',
    description: 'By serving as an all-encompassing ERP solution, ERPNext reduces the need for Canadian businesses to invest in and manage multiple software platforms, significantly cutting down operational costs.'
  },
  {
    title: 'Greater Transparency',
    description: 'ERPNext affords Canadian enterprises a real-time overview of their operations, facilitating quick identification and resolution of issues, as well as enabling more informed decision-making.'
  },
  {
    title: 'Regulatory Compliance',
    description: 'With frequent updates to ensure adherence to the latest Canadian laws and regulations, ERPNext simplifies compliance for Canadian businesses, keeping them up to date with local legal requirements.'
  }
];

const erpServiceFactors = [
  {
    title: 'Experience',
    image: '/api/fb/n/files/js%20knowledge.svg',
    alt: 'Experience',
    description: 'Opt for a company with a proven track record in successfully implementing and customizing ERPNext.'
  },
  {
    title: 'Industry Expertise',
    image: '/api/fb/n/files/icon-Real-time-information.svg',
    alt: 'Industry Expertise',
    description: 'Choose a provider with deep knowledge and expertise in your specific industry.'
  },
  {
    title: 'Support and Maintenance',
    image: '/api/fb/n/files/icon-Higher-Productivity.svg',
    alt: 'Support and Maintenance',
    description: 'Ensure the company offers comprehensive support and maintenance services for ongoing operational efficiency.'
  }
];

const industryServices = [
  {
    title: 'ERP for Manufacturing',
    image: '/api/fb/n/files/identifying%20objectives.svg',
    alt: 'ERP-for-Manufacturing',
    description: "In Canada's manufacturing sector, our ERP software plays a crucial role in streamlining production processes, inventory management, quality assurance, and supply chain logistics, enabling manufacturers to optimize schedules, reduce lead times, and maintain efficient operations across various subsectors."
  },
  {
    title: 'ERP for Agro Commodity',
    image: '/api/fb/n/files/make-use-of-clear-call-to-action.svg',
    alt: 'ERP-for-Agro-Commodity',
    description: 'Tailored for the Canadian agribusiness sector, our ERP Agro system automates agricultural processes effectively. It structures data for strategic decision-making, providing real-time insights and connectivity across organizational functions, making it an ideal choice for the agriculture industry in Canada.'
  },
  {
    title: 'ERP for Healthcare',
    image: '/api/fb/n/files/customer%20onboarding.svg',
    alt: 'ERP-for-Healthcare',
    description: 'Specifically designed for Canadian healthcare organizations, our ERP for Healthcare software enhances core operations while including specialized features like patient management, clinical coordination, and medical billing, addressing the unique needs of the healthcare sector.'
  },
  {
    title: 'ERP for Chemical',
    image: '/api/fb/n/files/icon-integrated_paperwork_.svg',
    alt: 'ERP-for-Chemical',
    description: 'Custom-built for the chemical industry in Canada, our ERP for Chemical software automates and integrates key business processes, with industry-specific features for chemical manufacturing and CRM, offering a comprehensive solution to streamline chemical industry operations.'
  },
  {
    title: 'ERP for Pharmaceutical',
    image: '/api/fb/n/files/training%20and%20development.svg',
    alt: 'ERP-for-Pharmaceutical',
    description: 'Our ERP for Pharmaceutical software, developed for the pharmaceutical sector in Canada, integrates core business functions while incorporating specific features essential for pharmaceutical operations, supporting the unique requirements of the industry.'
  },
  {
    title: 'ERP for Paper and Packaging',
    image: '/api/fb/n/files/Customization.svg',
    alt: 'ERP-for-Paper-and-Packaging',
    description: 'Designed for the paper and packaging industry in Canada, our ERP software automates essential business processes and includes features tailored to enhance operations within this sector, supporting the unique needs of paper and packaging businesses.'
  }
];

const clientCountries = [
  { name: 'Vietnam', image: '/api/fb/n/files/vnm.svg', alt: 'erpnext_partner_vietnam' },
  { name: 'USA', image: '/api/fb/n/files/US.svg', alt: 'erpnext_partner_usa' },
  { name: 'UAE', image: '/api/fb/n/files/AE.svg', alt: 'erpnext_partner_uae' },
  { name: 'Singapore', image: '/api/fb/n/files/sgp.svg', alt: 'erpnext_partner_singapore' },
  { name: 'Saudi Arabia', image: '/api/fb/n/files/sau.svg', alt: 'erpnext_partner_saudi_arabia' },
  { name: 'Norway', image: '/api/fb/n/files/NO.svg', alt: 'erpnext_partner_norway' },
  { name: 'Malaysia', image: '/api/fb/n/files/MY.svg', alt: 'erpnext_partner_malaysia' },
  { name: 'Mauritius', image: '/api/fb/n/files/MU.svg', alt: 'erpnext_partner_mauritius' },
  { name: 'India', image: '/api/fb/n/files/ind.svg', alt: 'erpnext_partner_india' },
  { name: 'Hungary', image: '/api/fb/n/files/HU.svg', alt: 'erpnext_partner_hungary' },
  { name: 'HongKong', image: '/api/fb/n/files/HK.svg', alt: 'erpnext_partner_hongkong' },
  { name: 'Germany', image: '/api/fb/n/files/ger.svg', alt: 'erpnext_partner_germany' },
  { name: 'France', image: '/api/fb/n/files/FR.svg', alt: 'erpnext_partner_france' },
  { name: 'China', image: '/api/fb/n/files/chn.svg', alt: 'erpnext_partner_china' },
  { name: 'Canada', image: '/api/fb/n/files/CA.svg', alt: 'erpnext_partner_canada' },
  { name: 'Brunei', image: '/api/fb/n/files/BN.svg', alt: 'erpnext_partner_brunei' },
  { name: 'Belgium', image: '/api/fb/n/files/BE.svg', alt: 'erpnext_partner_belgium' },
  { name: 'Australia', image: '/api/fb/n/files/AU.svg', alt: 'erpnext_partner_australia' }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Services in Canada"
        highlightWords={heroHighlightWords}
        description="ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors."
        primaryButton={{ text: 'Get Started', action: handlePrimary }}
        secondaryButton={{ text: 'Our ERPNext Partners', action: handleSecondary }}
        heroImage={{
          alt: 'ERPNext Services in Canada',
          src: '/api/fb/n/files/Hire-ERPNext-Implementor679475.svg',
          
        }}
      />
      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4 animate-fadeInUp">
            <p>
              Welcome to Finbyz Tech, your go-to <a href="/erpnext-certified-partner" className="text-primary underline hover:text-primary/80 transition">ERPNext partner</a> for top-tier ERPNext services in Canada. Specializing in advanced ERP solutions, we enable Canadian businesses to excel in a market that's both challenging and ripe with opportunity. Step into the future with ERPNext's robust features, customized by our experts to align with your distinct business needs.
            </p>
            <p>
              ERPNext is a flexible open-source ERP software designed to support a diverse array of sectors, including manufacturing, distribution, retail, trading, services, education, non-profits, and healthcare. Its cloud-based nature, ease of use, and affordability make it an attractive option for Canadian businesses of various sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 justify-items-center">
            {flipCards.map((card, idx) => (
              <FlipCard
                key={idx}
                front={
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
               { card.front}
                </div>
                
                }
                back={
                   <div className="flex flex-col items-center justify-center h-full p-6 text-center">
               { card.back}
                </div>
                }
                className="h-full min-h-[300px] lg:w-72 w-64 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                flipOnClick
              />
            ))}
          </div>


           
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-8">
          <h2 className="text-2xl font-bold mb-2">ERPNext offers a wide range of functionalities including:</h2>
          <List
            title="ERPNext offers a wide range of functionalities including:"
            items={erpnextFunctionalityList}
            style={{}}
          />
          <div className="flex flex-col gap-3 mt-4">
            <p>ERPNext is adaptable to cater to the unique requirements of any enterprise, continuously evolving with new features and enhancements to stay ahead of business demands.</p>
            <p>In Canada, <a href="/erpnext-software" className="text-primary text-justify underline hover:text-primary/80 transition">ERPNext</a> is a preferred choice among businesses for several compelling reasons. Firstly, it provides an all-encompassing solution to manage every facet of a business. Secondly, its user-friendly interface and cost-effectiveness make it accessible to companies of all sizes. Lastly, being cloud-based, it allows for flexible access from any location with an internet connection, aligning with the dynamic needs of Canadian businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="border-none bg-gray-50 shadow-sm animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-center">Enhanced Efficiency</CardTitle>
              </CardHeader>
              <CardContent className='text-justify'>
                <p>ERPNext streamlines business processes across Canada by automating routine tasks, allowing employees to dedicate more time to critical activities such as sales and customer engagement.</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white shadow-sm animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-center">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent className="text-justify" >
                <p>By serving as an all-encompassing ERP solution, ERPNext reduces the need for Canadian businesses to invest in and manage multiple software platforms, significantly cutting down operational costs.</p>
              </CardContent >
            </Card>
            <Card className="border-none bg-gray-50 shadow-sm animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-center">Greater Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                <p>ERPNext affords Canadian enterprises a real-time overview of their operations, facilitating quick identification and resolution of issues, as well as enabling more informed decision-making.</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white shadow-sm animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-center">Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                <p>With frequent updates to ensure adherence to the latest Canadian laws and regulations, ERPNext simplifies compliance for Canadian businesses, keeping them up to date with local legal requirements.</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4">
            For business owners in Canada, ERPNext represents a robust, user-friendly, and cost-effective ERP option that can enhance operational efficiency, minimize expenses, boost operational transparency, and ensure regulatory compliance.
          </p>
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8 flex flex-col gap-8">
          <h2 className="text-2xl font-bold">ERP Services in Canada</h2>
          <QuoteBlock
            text="A multitude of companies offer ERP services across Canada, assisting businesses with the implementation and customization of ERPNext, alongside providing ongoing support and maintenance."
            isHeading={false}
          />
          <p>When selecting an ERP service provider in Canada, it's crucial to consider the following factors:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {erpServiceFactors.map((factor, idx) => (
              <FeatureCard
                key={factor.title}
                title={factor.title}
                image={factor.image}
                alt={factor.alt}
                description={factor.description}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-8">
          <h2 className="text-2xl font-bold mb-4">Serving Diverse Industries with Finbyz ERPNext Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryServices.map((service, idx) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                image={service.image}
                alt={service.alt}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8 flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-center mb-2">Serving Businesses Worldwide from Canada</h2>
          <p className="text-justify">
            As a premier global ERP implementation partner, FinByz Tech is dedicated to supporting businesses not only in Canada but also in India, the USA, the UK, UAE, and Saudi Arabia. Our experienced team is always on standby, ready to address your ERP implementation needs, no matter where your business is located. Whether you're looking for information, seeking expert consultations, or in need of any assistance, don't hesitate to reach out to us. We're committed to fulfilling your ERP requirements in these varied markets, ensuring your business is equipped with the best ERP solutions, tailored to the global stage.
          </p>
          <ClientCountryGrid countries={clientCountries} />
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-6 items-center">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'rocket',
              },
              title: 'Get Started with ERPNext Services in Canada',
              highlightText : "ERPNext Services in Canada",
              description: 'Contact our experts today to discuss your ERPNext implementation, customization, or support needs. Let us help you drive efficiency and growth in your business.',
              primaryButton: {
                text: 'Contact Us',
                icon: 'mail',
                action: handlePrimary,
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'info',
                action: handleSecondary,
              },
              trustIndicator: {
                text: 'Trusted by businesses worldwide',
                icon: 'globe',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
