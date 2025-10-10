'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import EngineeringBenefitsGrid from '@/components/ai_components/EngineeringBenefitsGrid';
import EngineeringTypesGrid from '@/components/ai_components/EngineeringTypesGrid';
import React from 'react';

export default function Page() {
  // CTA actions
  const handlePrimaryCTA = () => {
    window.location.href = '/contact';
  };
  const handleSecondaryCTA = () => {
    window.location.href = '/erp-software';
  };

  return (
    <>
      <HeroSection
        headline="ERPNext for the Engineering Industry"
        highlightWords={["ERPNext", "Engineering Industry"]}
        description="FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management."
        primaryButton={{ text: 'Get Free Consultation', action: handlePrimaryCTA }}
        secondaryButton={{ text: 'Learn More', action: handleSecondaryCTA }}
        heroImage={{
          alt: 'ERPNext for the Engineering Industry',
          src: '/images/Engineeringaced93.svg',
          videoSrc: '/images/Benefiys_for_ERP_software_for_engineering.mp4',
        }}
      />

      {/* Introduction Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">ERP Software for Engineering Companies</h2>
          <p className="mb-6 text-gray-700 text-center">
            <span className="font-semibold">Why implement <a href="/erp-software" target="_blank" className="text-blue-600 underline">ERP software</a> for engineering companies?</span> ERP software for engineering companies offers benefits such as better project management, cost reduction, real-time calculated information, and a total integrated package. It improves decision making and helps your business grow. Core <a href="/benefits-of-erp" target="_blank" className="text-blue-600 underline">advantages of ERP</a> for engineering include customer-oriented systems, data efficiency, and effective communication.
          </p>
          <QuoteBlock text="The proposed process designs should always be designed within the logic of the ERP systems. - Andera." isHeading={false} />
          <p className="mt-6 text-gray-700">
            Engineering industry companies deal with manufacturing and designing machines, complex structures, and various devices. The main functions are manufacturing, design, processing, and construction. This industry faces challenges like complex projects, production costs, and pricing. ERP helps manage operations systematically and standardizes processes. It automates business processes, integrates all departments, and simplifies complex elements (like 3D designs) for professionals. ERP also solves inventory tracking and management challenges for engineering companies.
          </p>
        </div>
      </Section>

      {/* Features Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Key Features of Engineering ERP Software</h2>
          <QuoteBlock text="A project is complete when it starts working for you, Rather than you working for it – Scott Allen" isHeading={false} />
          <p className="mt-6 text-gray-700">
            Engineering ERPs are customized to each company's needs, but typically include modules for project planning, inventory control, finance, procurement, human resources, and customer management. Key features often cover:
          </p>
          <List
            title="Core Features of Engineering ERP Software"
            items={[
              "Project Management: ERPNext’s project module plans and tracks engineering projects, enabling teams to set milestones, deadlines, and budgets, and visualize tasks on Gantt charts.",
              "Inventory & BOM Management: Supports multi-level Bills of Material and real-time inventory updates. It automates procurement and replenishment, helping engineers manage raw materials, spare parts, and stock levels efficiently.",
              "Accounting & Finance: Automates financial processes (invoices, payments, depreciation), offers multi-currency and multi-company support, and generates consolidated reports.",
              "Customer Relationship Management (CRM): Centralizes customer information with sales pipeline tracking, lead management, and support ticketing to maintain strong client relationships."
            ]}
          />
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Benefits of Engineering ERP Software</h2>
          <QuoteBlock text="One of the advantages, but also criticisms, of ERP systems is that they impose a standardized way of conducting business processes. - Marianne Bradford." isHeading={false} />
          <p className="mt-6 text-gray-700">
            Companies should only adopt solutions that add value to the business. ERP software for engineering companies is essential, providing many benefits:
          </p>
          <EngineeringBenefitsGrid
            benefits={[
              {
                title: 'Accurate Cost & Revenue Estimation',
                image: '/images/estimation-of-cost.svg',
                alt: 'Estimation of cost and revenue',
                description: 'ERP systems automate calculations for project costs and revenue. This accuracy saves time and reduces errors in budgeting complex engineering projects.',
                bg: 'gray',
              },
              {
                title: 'Increased Productivity',
                image: '/images/automation-increases.svg',
                alt: 'Automation increases productivity',
                description: 'By automating routine tasks, ERP software frees engineers from paperwork. This efficiency boost accelerates project completion and overall productivity.',
                bg: 'lightgray',
              },
              {
                title: 'Efficient Workflows',
                image: '/images/efficient-working-methods.svg',
                alt: 'Efficient working methods',
                description: 'Digital workflows replace manual processes, improving data organization and collaboration. All engineering data and documentation are stored systematically, enabling faster responses and better decisions.',
                bg: 'lightgray',
              },
              {
                title: 'Higher Return on Investment',
                image: '/images/return-on-investment.svg',
                alt: 'Increase in the Return on Investment',
                description: 'Engineering ERP reduces waste and labor costs. With real-time data at every step, managers can spot and fix issues early. Improved accuracy and efficiency lead to faster returns on investment and greater profitability.',
                bg: 'gray',
              },
            ]}
          />
          <div className="mt-8">
            <p className="mb-4 text-gray-700">ERP software for engineering companies also provides additional benefits:</p>
            <List
              title=''
              items={[
                'Operational excellence',
                'Simplifies the Exchange of Information',
                'Improved Decision making',
                'Data efficiency and assimilation',
                'Customer Relationship Management',
                'Easy Accessibility to Inventory',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Types of ERP Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Types of Engineering ERP Solutions</h2>
          <QuoteBlock text="Projects we have completed demonstrate what we know - future projects decide what we will learn. - Dr. Mohsin Tiwana" isHeading={false} />
          <p className="mt-6 text-gray-700">
            Engineering companies manage complex projects of varying sizes, raising issues of cost estimation and workforce management. ERP solutions are designed for two main categories:
          </p>
          <EngineeringTypesGrid
            types={[
              {
                title: 'ERP for Project Engineering',
                image: '/images/project-engineering.svg',
                alt: 'ERP for Project engineering',
                description: 'Project engineering involves designing or manufacturing projects (such as structures or devices). This category includes planning, scheduling, resource forecasting, and vendor management. ERPNext manages these activities by coordinating tasks and tracking resources across the project lifecycle.',
                bg: 'gray',
              },
              {
                title: 'ERP for System Engineering',
                image: '/images/system-engineering.svg',
                alt: 'ERP for System Engineering',
                description: 'System engineering focuses on creating complex systems from multiple components. ERPNext supports this by linking the entire development process – from design to implementation – so all parts work together seamlessly. It manages system designs, documentation, and processes over the project’s life cycle.',
                bg: 'lightgray',
              },
            ]}
          />
          <div className="mt-8">
            <p className="mb-4 text-gray-700">
              Finbyz as ERP Service Provider plays a pivotal role in the realm of ERP software for engineering, offering a comprehensive solution tailored to meet the specific needs of the engineering sector. As an ERP Partner, these systems specialize in integrating various critical functions, such as project management, resource planning, and financial tracking, all within a cohesive platform. This integration is essential for engineering projects, where precision and efficiency are paramount.
            </p>
            <p className="mb-4 text-gray-700">
              ERP software is vital for engineering companies, streamlining complex tasks and operations, and enhancing the design process. For these companies to thrive and boost their operational efficiency and overall productivity, it's essential to adopt a customized ERP system tailored to their unique requirements. Specifically, a <a href="/erp-for-chemical-industry" className="text-blue-600 underline">ERP For Chemical Industry</a> solution, along with <a href="/erp-for-logistics-industry" className="text-blue-600 underline">transport ERP</a>, and <a href="/erp-for-trading-industry" className="text-blue-600 underline">ERP for trading</a>, can be instrumental in addressing the specific challenges and demands of the engineering sector, ensuring more precise management of every critical activity in this industry.
            </p>
          </div>
          <QuoteBlock text="Improvements in the use of the ERP system are an outcome of improvements in the process.  - Stephen Harwood" isHeading={false} />
        </div>
      </Section>

      {/* Conclusion & CTA */}
      <Section>
        <div className="container-custom">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Engineering Operations?',
                icon: 'settings',
              },
              title: 'Get a Free ERP Consultation for Your Engineering Company',
              highlightText:"Engineering Company",
              description: 'Discover how ERPNext can streamline your engineering business. Contact us for a free consultation and see how we can tailor a solution for your needs.',
              primaryButton: {
                text: 'Book Consultation',
                icon: 'arrowRight',
                action: handlePrimaryCTA,
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'info',
                action: handleSecondaryCTA,
              },
              trustIndicator: {
                text: 'Trusted by leading engineering firms',
                icon: 'checkCircle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
