'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ChemFeatureCheckboxGrid from '@/components/ai_components/ChemFeatureCheckboxGrid';
import ChemInfoBox from '@/components/ai_components/ChemInfoBox';
import { CheckCircle } from 'lucide-react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext for Chemical Industry"
        highlightWords={["ERPNext", "Chemical Industry"]}
        description="Discover Finbyz Tech's tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software."
        primaryButton={{
          text: 'Get Free Consultation',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        secondaryButton={{
          text: 'Download Brochure',
          action: () => {
            window.open('/api/fb/n/files/chemical_new.svg', '_blank');
          },
        }}
        heroImage={{
          alt: 'ERPNext for Chemical Industry',
          src: '/api/fb/n/files/chemical_new.svg',
          videoSrc: '/api/fb/n/files/ERP For Chemical .mp4',
        }}
      />

      <Section>
        <div className="container-custom py-8 animate-fadeInUp">
          <p className="mb-4 text-gray-700 text-lg">
            Finbyz is a leading provider of chemical industry ERP software based in Ahmedabad, Gujarat, India, serving both engineering and chemical sectors. If you're considering integrating ERP software for your engineering or chemical company, we offer complimentary consultations to identify the best solutions tailored to your requirements.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4">ERP Software for Chemical Industry</h2>
          <p className="mb-4 text-gray-700 text-lg">
            For businesses involved in manufacturing chemicals and allied products, Finbyz's ERP for the chemical industry offers a comprehensive solution to manage complex operations. From manufacturing and distribution to exports, our experience with chemical industry ERP helps streamline operations, improve efficiency, and increase overall productivity.
          </p>
          <div className="my-8">
            <QuoteBlock
              text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency – Bill Gates"
              isHeading={false}
            />
          </div>
          <p className="mb-6 text-gray-700 text-lg">
            The primary goal of every business is to reduce costs and enhance productivity and efficiency through automation. However, it's essential to understand that ERP for the chemical industry requires specific considerations:
          </p>
          <List
            title="Key Considerations for ERP in Chemical Industry"
            items={[
              'Strict compliance with regulations',
              'Batch/lot wise inventory management',
              'Formula Adjustments to improve efficiency or quality',
              'Rigorous quality checks at various production stages',
              'Managing complex manufacturing with variation in product quality/quantity.',
              'Accurate cost accounting considering by-Products & recycling.',
              'Shelf-life and Reformulation',
              'Research and development tracking',
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h3 className="text-xl font-semibold text-primary mb-8">Key features of ERP for Chemical Industry</h3>
          {/* Manage chemical formulation */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12 animate-fadeInUp">
            <div className="md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl opacity-40" />
                <Image fill  src="/images/manage-chemical-formulation.svg" alt="Manage chemical formulation" />
              </div>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Manage chemical formulation</h3>
              <p className="mb-4 text-gray-700">
                Chemical manufacturing companies invest significant time in research and development for better formulations. Our ERP's lab module records all lab activities, including various formulations and the chemical parameters of resultant products. It also provides expected costs for new formulations based on current raw material prices.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Track all research for new chemical formulas and recipes</li>
                <li>Generate reports to stay ahead of the competition</li>
              </ul>
            </div>
          </div>

          {/* Manage samples and quotation */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-12 animate-fadeInUp">
            <div className="md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl opacity-40" />
                <Image fill  src="/images/sample-and-quotation.svg" alt="Manage samples and quotation" />
              </div>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Manage samples and quotation</h3>
              <p className="mb-4 text-gray-700">
                Understanding that many chemical industries operate based on sample orders, our ERP includes a unique CRM tailored for chemical companies. It manages all samples sent to prospects, tracks courier details, and records client responses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChemInfoBox
                  icon={<CheckCircle className="text-blue-600" size={22} />}
                  title="Supplier Samples"
                  description="Store supplier samples with details of price fluctuations in quotations."
                />
                <ChemInfoBox
                  icon={<CheckCircle className="text-blue-600" size={22} />}
                  title="Automated Follow-Up"
                  description="Automated follow-up emails based on tracking details to maximize business opportunities."
                />
              </div>
            </div>
          </div>

          {/* Chemical manufacturing ERP process */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12 animate-fadeInUp">
            <div className="md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl opacity-40" />
                <Image fill  src="/images/chemical-mfg-process.svg" alt="Chemical manufacturing ERP process" />
              </div>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Chemical manufacturing ERP process</h3>
              <p className="mb-4 text-gray-700">
                The chemical manufacturing ERP process encompasses two main operations: reaction and blending. Our ERP system facilitates both activities efficiently. Recognizing that raw material consumption can vary from standard BOMs, the ERP allows production entries with actual batch quantities defined by the user, comparing them against BOM standards. It calculates key parameters such as yield, handling loss, and costing based on actual raw materials consumed.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Alerts management on subpar production outputs</li>
                <li>Ensures end-to-end traceability from raw materials to final products</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <ChemFeatureCheckboxGrid
            features={[
              { label: 'Warehouse structure' },
              { label: 'Quality checks' },
              { label: 'Email/SMS integration' },
              { label: 'Item variants' },
              { label: 'Blending datasheet' },
              { label: 'Exports documentation' },
              { label: 'Batch-wise inventory' },
              { label: 'Bill of Materials' },
              { label: 'Integrated HRMS' },
              { label: 'Samples Management' },
              { label: 'ETP Cost calculation' },
              { label: 'RMC calculation' },
              { label: 'Integrated CRM' },
              { label: 'Manage waste material' },
              { label: 'GST Accounting' },
              { label: 'Automated follow-up' },
              { label: 'Samples Management' },
              { label: 'Lab Module' },
              { label: 'System alters' },
              { label: 'Concentration/ yield info' },
              { label: 'Reaction & Blending' },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          {/* Robust Chemical Inventory Management */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-12 animate-fadeInUp">
            <div className="md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl opacity-40" />
                <Image fill  src="/images/inventory.svg" alt="Chemical Inventory saves dollars" />
              </div>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-2">Robust Chemical Inventory Management</h2>
              <p className="mb-4 text-gray-700">
                Effectively manage your chemical inventory with features like:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Batch/lot number tracking with chemical properties (e.g., concentration, yield).</li>
                <li>Tree-structure warehouses and item groups.</li>
                <li>Management of item variants and their use as alternatives.</li>
              </ul>
            </div>
          </div>

          {/* Comprehensive Quality Assurance & Control */}
          <div className="flex flex-col md:flex-row gap-8 items-center animate-fadeInUp">
            <div className="md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl opacity-40" />
                <Image fill  src="/images/quality-assurance.svg" alt="quality-assurance" />
              </div>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-2">Comprehensive Quality Assurance & Control</h2>
              <p className="mb-4 text-gray-700">
                Define and enforce quality inspection criteria for all items – at raw material receipt, during any manufacturing stage, or before delivery. Reduce wastage and improve the quality of finished chemicals.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <List
            title='Benefits of Implementing Our Chemical ERP Software'
            items={[
              'Enhanced Operational Efficiency: Automate processes, reduce manual work, and improve workflow.',
              'Improved Regulatory Compliance: Simplify adherence to complex chemical industry standards.',
              'Superior Inventory Control: Minimize waste, track shelf life, and optimize stock levels.',
              'Data-Driven Decision Making: Access real-time analytics and reports for actionable insights.',
              'Increased Productivity: Streamline manufacturing, quality control, and supply chain operations.',
              'Better Cost Management: Accurately track costs and identify areas for savings.',
              'Enhanced Traceability: Full lot and batch traceability from raw materials to customers.',
              'Scalability: A flexible system that grows with your business needs.',
            ]}
            conclusion="Apart from these key benefits for the chemical industry, our ERP software offers a variety of other advantages if you are looking to automate your processes."
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 animate-fadeInUp">
          <p className="mb-4 text-gray-700 text-lg">
            Give your chemical business an upgrade with automation and technology and use the ERP software for managing all your business processes. Get an edge over your competitors and grow your business to heights with increased efficiency and strong insights. All the other key functions such as finance, procurement, delivery and marketing of the product is also handled by in-built modules of the ERP. A well-integrated ERP system can help bring in the simplicity to manage complex operations of the chemical industry.
          </p>
          <p className="mb-4 text-gray-700 text-lg">
            Finbyz, offers specialized ERP solutions tailored for the chemical industry. Our chemical ERP service is designed to meet the unique challenges and requirements of this sector. By integrating key processes such as inventory management, quality control, regulatory compliance, and supply chain optimization, our ERP software for the chemical industry ensures streamlined operations and enhanced efficiency. We understand the critical importance of precision and safety in the chemical sector, and our ERP solution reflects this with robust features for tracking and managing hazardous materials, maintaining strict quality standards, and adhering to industry-specific regulatory requirements.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Chemical Business?',
                icon: 'flask-conical',
              },
              title: 'Get Started with ERPNext for Chemical Industry',
              highlightText:"ERPNext for Chemical Industry",
              description: 'Streamline your operations, ensure compliance, and boost productivity. Book a free consultation with our experts today!',
              primaryButton: {
                text: 'Book Free Consultation',
                icon: 'calendar-check',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Download Brochure',
                icon: 'download',
                action: () => {
                  window.open('/api/fb/n/files/chemical_new.svg', '_blank');
                },
              },
              trustIndicator: {
                text: 'Trusted by leading chemical manufacturers',
                icon: 'award',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
