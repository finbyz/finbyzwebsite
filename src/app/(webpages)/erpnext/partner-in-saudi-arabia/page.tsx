import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';

import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ERPNextBenefitsGrid from '@/components/ai_components/ERPNextBenefitsGrid';
import IndustryServiceGrid from '@/components/ai_components/IndustryServiceGrid';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import PartnerSaudiArabiaMotionCards from '@/components/ai_components/PartnerSaudiArabiaMotionCards';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Partner in Saudi Arabia"
        highlightWords={["Saudi Arabia"]}
        description="Discover leading ERPNext service providers and partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations and drive growth."
        primaryButton={{
          text: 'Get Consultation',
          action: '/contact',
        }}
        secondaryButton={{
          text: 'Learn More',
          action: "#saudi"
        }}
        heroImage={{
          alt: 'ERPNext Partner in Saudi Arabia',
          src: '/images/Frappe-Certified-Erpnext-Partner.svg',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <div className="space-y-4 text-justify">
            <p>
              Welcome FinByz Tech, your trusted <a href="/erpnext/certified-partner" className="text-primary underline hover:text-primary/80 transition-colors">ERPNext partner</a> providing the best ERPNext services specifically designed for Saudi Arabian companies. By focusing on providing innovative ERP systems, we enable Saudi businesses to prosper in a market that is dynamic and full of both opportunities and difficulties. With ERPNext's powerful capabilities, which have been expertly customised to match the particular requirements of Saudi Arabian businesses, you can confidently move into the future.
            </p>
            <p id="saudi">
              A wide range of industries, including manufacturing, distribution, retail, trading, services, education, non-profits, and healthcare, are served by the adaptable open-source ERP software ERPNext. For companies of all sizes in Saudi Arabia, its cost-effectiveness, user-friendliness, and cloud-based architecture make it a desirable choice.
            </p>
          </div>
        </div>
      </Section>

      <PartnerSaudiArabiaMotionCards />

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4  text-[#1A5276]">Some of the many features that ERPNext provides are the following :</h2>
          <List
            title=""
            items={[
              'Management of finances and accounting',
              'Inventory management',
              'Strategies for sales and marketing',
              'Management of production and manufacturing Project coordination',
              'Administration of human resources',
              'Relationship management with customers (CRM)',
              'Services for maintenance and support'
            ]}
            style={{ marginBottom: 0 }}
          />
          <div className="flex items-center gap-4 mt-8">
            {/* <Image src="/images/Quotation_marks.svg" alt="Quotation_mark" width={40} height={40} /> */}
            <QuoteBlock text="ERPNext is flexible enough to meet the particular needs of any size business and is always adding new features and improvements to keep up with market expectations." isHeading={true} />
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#1A5276]">What follows are advantages of ERPNext implementation in Saudi Arabia</h2>
          <p className="text-justify mb-8 text-gray-700">ERPNext offers Saudi Arabian business owners a reliable, affordable, and easy-to-use ERP solution that may improve operational effectiveness, reduce costs, increase operational transparency, and guarantee regulatory compliance.</p>
          <ERPNextBenefitsGrid
            benefits={[
              {
                title: 'Enhanced Efficiency',
                description: 'ERPNext automates repetitive work to optimise corporate processes throughout Saudi Arabia. This frees up staff time for important tasks like customer interaction and sales.'
              },
              {
                title: 'Cost Savings',
                description: 'ERPNext\'s comprehensive ERP solution reduces the need for Saudi companies to purchase and maintain a variety of software platforms, resulting in a major reduction in operating expenses.'
              },
              {
                title: 'Increased Transparency',
                description: 'ERPNext gives Saudi businesses a real-time picture of their operations, making it easier to identify and resolve problems quickly and to make better-informed decisions.'
              },
              {
                title: 'Regulatory Compliance',
                description: 'ERPNext makes it easier for firms operating in Saudi Arabia to follow local rules and regulations by providing frequent updates that guarantee conformance to the most recent versions of these laws and regulations.'
              }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center  mb-6 text-[#1A5276]">Saudi Arabian ERP Services</h2>
          <div className="space-y-4 mb-8 text-justify">
            <p>In Saudi Arabia, there are many organisations that provide ERP services. These companies help businesses customise and deploy ERPNext while also provide continuous support and maintenance. It is important to take into account multiple factors while choosing an ERP service provider in Saudi Arabia, including industry experience, support, and maintenance options.</p>
            <p>For companies thinking about ERPNext, contacting a Saudi Arabian ERP service provider is a wise option. Such a provider can give ongoing support and maintenance, as well as help with the seamless adoption and customisation of ERPNext.</p>
          </div>
          <IndustryServiceGrid
            services={[
              {
                title: 'ERP for Manufacturing',
                image: '/images/97.svg',
                alt: 'Flawless UI with Real-time information',
                description: 'Our ERP software is essential to the manufacturing sector in Saudi Arabia because it streamlines production procedures, inventory control, quality control, and supply chain logistics. This helps manufacturers keep their operations running smoothly and optimise schedules and lead times.'
              },
              {
                title: 'ERP in the Medical Field',
                image: '/erp-in-medical-field.svg',
                alt: 'Higher Productivity',
                description: 'Our ERP for Healthcare software, which is specifically made for Saudi healthcare organisations, addresses the particular requirements of the healthcare industry by improving core operations and adding specialised features like patient management, clinical coordination, and medical billing.'
              },
              {
                title: 'Retail ERP',
                image: '/images/265.svg',
                alt: 'Improved Collaboration',
                description: 'Our ERP for Retail system, specifically designed for the Saudi Arabian retail sector, simplifies procedures related to sales, inventory control, CRM, and financial monitoring. It provides a full range of benefits to improve retail operations and customer experiences.'
              },
              {
                title: 'ERP for Construction',
                image: '/images/customer onboarding.svg',
                alt: 'support & maintenance',
                description: 'Specifically designed for the Saudi Arabian construction market, this software automates financial tracking, resource allocation, procurement, and project management, allowing construction companies to effectively manage budgets and schedules while maintaining regulatory compliance.'
              }
            ]}
          />
          <p className="mt-8">ERPNext, when used in combination with a knowledgeable service provider, may change business operations in Saudi Arabia by providing customised solutions for improved productivity, regulatory compliance, and decision-making in a range of industries.</p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <Image src="/images/238 (2).svg" alt="ERPNext-partner-Saudi-Arebia" width={220} height={220} className="rounded-lg shadow-md object-contain bg-white p-4" />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-[#1A5276]">Serving Saudi Arabian Businesses Globally</h2>
            <p className='text-justify'>FinByz Tech, a leading global ERP implementation partner, is committed to helping companies worldwide, not just in Saudi Arabia. Our skilled staff is always available to handle your ERP implementation requirements, making sure that your company has the greatest ERP solutions available that are suited for the worldwide arena. Please do not hesitate to contact us if you need information, professional advice, or help. Regardless of where your company is located, we are dedicated to meeting your ERP requirements.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
