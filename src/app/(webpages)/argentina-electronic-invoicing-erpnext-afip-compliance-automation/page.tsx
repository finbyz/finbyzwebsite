'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import CTA from '@/components/sections/cta';
import ProcessStepImageCard from '@/components/ai_components/ProcessStepImageCard';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { BsQrCode } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdOutlinePayment } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { GiReceiveMoney } from 'react-icons/gi';
import { Banknote as LuBanknote } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation"
        highlightWords={["Electronic Invoicing", "AFIP Compliance", "Automation", "ERPNext", "Argentina"]}
        description="Implement AFIP-compliant electronic invoicing in ERPNext for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            if (typeof window !== 'undefined') window.scrollTo({ top: 800, behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: () => {
            if (typeof window !== 'undefined') window.location.href = '/contact';
          }
        }}
        heroImage={{
          alt: 'Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation',
          src: 'api/fb/n/files/Line Banner-41 (2)_11zon.png',
          videoSrc: ''
        }}
      />

      {/* Introduction & Compliance Overview */}
      <Section>
        <div className="container-custom py-8 flex flex-col gap-8">
          <div className="text-center animate-fadeinup">
            <p className="text-lg text-gray-700">
              ERPNext is a versatile open-source ERP system that allows businesses to manage various operations efficiently. Implementing electronic-invoicing compliance in ERPNext ensures seamless integration with government tax regulations. It automates invoice generation, validation, and real-time reporting to tax authorities. This customization reduces manual errors, enhances accuracy, and streamlines financial operations. Businesses benefit from improved efficiency and compliance with legal standards.
            </p>
          </div>
        </div>
      </Section>

      {/* Custom Fields Section */}
      <Section useGradient>
        <div className="container-custom py-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <HiOutlineDocumentText className="text-blue-500" size={28} />
              Custom Fields to Support Legal Compliance
            </h3>
            <p className="text-gray-700 mb-4">
              To ensure seamless electronic-invoicing compliance within ERPNext, custom fields are introduced to meet regulatory requirements and facilitate tax reporting.
            </p>
            <List
              title="Key Custom Fields & Requirements"
              items={[
                'Dedicated fields to generate the CAE (Authorization Code) and track its expiration date for each invoice.',
                'Custom fields to manage VAT statuses for both customers and the company, ensuring compliance with local tax regulations.',
                'Support for multiple payment methods, including bank transfers, credit/debit cards, and digital wallets.',
                'Customer-specific tax identification fields to accommodate different tax categories, such as exempt, general, and reduced VAT rates.'
              ]}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="api/fb/n/files/Line Banner-41 (2)_11zon.png"
              alt="Custom Fields to Support Legal Compliance"
              width={400}
              height={260}
              className="rounded-xl shadow-lg object-contain animate-fadeinleft"
            />
          </div>
        </div>
      </Section>

      {/* Enhanced Form Organization */}
      <Section>
        <div className="container-custom py-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <MdOutlinePayment className="text-green-500" size={28} />
              Enhanced Form Organization
            </h3>
            <p className="text-gray-700 mb-4">
              To improve user experience and ensure a structured layout, form enhancements are implemented in ERPNext:
            </p>
            <List
              title="Form Enhancements"
              items={[
                'Tab Breaks: Grouping electronic invoicing fields into logical sections to enhance navigation and user efficiency.',
                'Column Breaks: Optimizing field placement for better readability and workflow organization.',
                'Predefined Select Fields: Standardized dropdown options for VAT statuses, payment methods, and tax categories to reduce manual errors and ensure consistency.'
              ]}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="api/fb/n/files/Line Banner-41 (2)_11zon.png"
              alt="Enhanced Form Organization"
              width={400}
              height={260}
              className="rounded-xl shadow-lg object-contain animate-fadeinleft"
            />
          </div>
        </div>
      </Section>

      {/* Process Flow Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <TbApi className="text-purple-500" size={28} />
              Process Flow for Sales Invoice with Electronic-Invoice Generation
            </h3>
            <p className="text-gray-700">
              A streamlined process flow is established to integrate electronic-invoicing into the sales invoice workflow:
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Here's a quick video demonstrating the process flow integrating Electronic-Invoice into the sales invoice:</p>
            <YouTubeEmbed
              url="https://www.youtube.com/embed/OYy3NZDI3-c?si=saOyQFlCHPgX7O2T"
              title="Electronic-Invoice Process Flow Demo"
              className="rounded-xl shadow-lg w-full h-[320px] md:h-[420px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProcessStepImageCard
              step="1"
              title="Create and Save Sales Invoice"
              description="Enter customer, item, and payment details, ensuring accuracy before saving as a draft."
              image="api/fb/n/files/Create and Save SI.png"
              alt="Create and Save Sales Invoice"
            />
            <ProcessStepImageCard
              step="2"
              title="Final Edits and Save"
              description="Make necessary corrections and updates, then save the invoice for validation."
              image="api/fb/n/files/Final Edits and Save.png"
              alt="Final Edits and Save"
            />
            <ProcessStepImageCard
              step="3"
              title="Generate Electronic-Invoice"
              description="Communicate with the tax authority for validation and authorization. Retrieve the CAE (Authorization Code) and expiration date."
              image="api/fb/n/files/Generate E-Invoice.png"
              alt="Generate Electronic-Invoice"
            />
            <ProcessStepImageCard
              step="3.1"
              title="Electronic-Invoice Details"
              description="View the generated CAE and expiration date for the invoice."
              image="api/fb/n/files/Generate E-Invoice-1.png"
              alt="Generate Electronic-Invoice Details"
            />
            <ProcessStepImageCard
              step="4"
              title="Submit Sales Invoice"
              description="Finalize and submit the invoice after successful Electronic-Invoice generation."
              image="api/fb/n/files/Submit Sales Invoice.png"
              alt="Submit Sales Invoice"
            />
            <ProcessStepImageCard
              step="5"
              title="QR Code"
              description="Embed a QR code on the invoice, enabling instant verification by tax authorities and customers."
              image="api/fb/n/files/QR Code.png"
              alt="QR Code"
            />
          </div>
        </div>
      </Section>

      {/* Support for Various Business Scenarios */}
      <Section>
        <div className="container-custom py-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <LuBanknote className="text-yellow-500" size={28} />
              Support for Various Business Scenarios
            </h3>
            <p className="text-gray-700 mb-4">
              ERPNext customizations cater to different business models and regulatory requirements:
            </p>
            <List
              title="Business Scenario Support"
              items={[
                'Enable businesses to process payments through diverse channels like cash, bank transfers, credit cards, and online payment gateways.',
                'Assign appropriate VAT rates and exemptions based on customer and product categories.'
              ]}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="api/fb/n/files/Line Banner-41 (2)_11zon.png"
              alt="Support for Various Business Scenarios"
              width={400}
              height={260}
              className="rounded-xl shadow-lg object-contain animate-fadeinleft"
            />
          </div>
        </div>
      </Section>

      {/* How We Can Help Companies in Argentina */}
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">How We Can Help Companies in Argentina</h3>
            <p className="text-gray-700 mb-4">
              Our tailored ERPNext localization solution ensures businesses can seamlessly comply with Argentina's electronic-invoicing regulations while enhancing operational efficiency. Here's how we assist:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <TbApi className="text-blue-500" size={24} />
                <span className="font-semibold">Compliance with AFIP Regulations</span>
              </div>
              <p className="text-gray-600 text-sm">
                Integration with AFIP's electronic-invoicing API to validate and authorize invoices. Automatic generation of CAE and management of its expiration dates.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold">Streamlined Invoicing Process</span>
              </div>
              <p className="text-gray-600 text-sm">
                Elimination of manual processes by automating invoice validation and submission. Reduction in errors with predefined options and enhanced form organization.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <GiReceiveMoney className="text-purple-500" size={24} />
                <span className="font-semibold">End-to-End Implementation Support</span>
              </div>
              <p className="text-gray-600 text-sm">
                Customization of ERPNext to include all required fields and features. Comprehensive training and documentation to ensure smooth adoption. Ongoing support for maintenance and future updates as regulations evolve.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <LuBanknote className="text-yellow-500" size={24} />
                <span className="font-semibold">Scalable and Cost-Effective Solution</span>
              </div>
              <p className="text-gray-600 text-sm">
                Leveraging open-source ERPNext minimizes software licensing costs. Modular design allows scalability as businesses grow.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conclusion & CTA */}
      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
          </div>
          <div className="text-gray-700 text-lg">
            <p>
              Implementing electronic-invoicing compliance in ERPNext streamlines tax reporting, reduces manual errors, and enhances regulatory adherence. With custom fields, optimized workflows, and security enhancements, businesses can ensure seamless, accurate, and legally compliant invoicing. <Link href="/erp-for-chemical-industry" className="text-blue-600 underline" target="_blank">ERP for chemical business</Link> to work with your convenience. Know more about our <Link href="/erp-software" className="text-blue-600 underline" target="_blank">ERP Software and ERP Implementation Services</Link>.
            </p>
          </div>
          <div className="mt-6">
            <CTA
              data={{
                subheading: {
                  text: 'Ready to Automate Your Invoicing?',
                  icon: 'BsQrCode'
                },
                title: 'Get AFIP-Compliant Electronic Invoicing in ERPNext',
                description: 'Contact us to implement seamless, automated, and compliant invoicing for your business in Argentina.',
                primaryButton: {
                  text: 'Request a Demo',
                  icon: 'HiOutlineDocumentText',
                  action: () => {
                    if (typeof window !== 'undefined') window.location.href = '/contact';
                  }
                },
                secondaryButton: {
                  text: 'Learn More',
                  icon: 'TbApi',
                  action: () => {
                    if (typeof window !== 'undefined') window.location.href = '/erp-software';
                  }
                },
                trustIndicator: {
                  text: 'Trusted by leading businesses in Argentina',
                  icon: 'FaCheckCircle'
                }
              }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
