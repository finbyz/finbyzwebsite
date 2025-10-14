'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ManufacturingTypesGrid from '@/components/ai_components/ManufacturingTypesGrid';
import ManufacturingBenefitsGrid from '@/components/ai_components/ManufacturingBenefitsGrid';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  // Hero Section CTA actions
  const handlePrimary = () => {
    window.location.href = '/contact';
  };
  const handleSecondary = () => {
    window.location.href = '/demo';
  };

  return (
    <>
      <HeroSection
        headline="ERPNext for Manufacturing"
        highlightWords={["for", "Manufacturing"]}
        description="FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency."
        primaryButton={{ text: 'Get Started', action: handlePrimary }}
        secondaryButton={{ text: 'Request Demo', action: handleSecondary }}
        heroImage={{
          alt: 'ERPNext for Manufacturing',
          src: '/images/Manufacturingc334bc.svg',
          videoSrc: '/images/Manufacturing.mp4',
        }}
      />

      {/* Introduction Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-[#1A5276] mb-6 text-center">ERP software for Manufacturing industry</h2>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="md:w-1/12 flex justify-center mb-4 md:mb-0">
              {/* <Image src="/images/Quotation_marks.svg" alt="Quotation marks" width={40} height={40} className="opacity-80" /> */}
            </div>
            <div className="md:w-11/12 text-[#FF8C00]">
              <p>
                "The surest foundation of a Manufacturing concern is quality. After that, and a long way after, comes cost – Andrew Carnegie"
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>In today's competitive environment, manufacturing companies need more than just machines and manpower—they need smart systems to run efficiently. ERP software tailored for the manufacturing industry brings all business functions like production, inventory, sales, finance, and HR into a single, centralized platform. This integrated approach enables real-time visibility, better decision-making, and significant cost savings.</p>
            <p>Modern ERP systems like ERPNext are designed to handle the unique challenges manufacturers face—from complex supply chains to rapid changes in customer demand. Whether you're producing on a small scale or running a large facility, manufacturing ERP software helps you stay in control, reduce waste, and deliver high-quality products on time.</p>
          </div>
        </div>
      </Section>

      {/* Why ERP is Crucial Section */}
      <Section useGradient>
  <div className="container-custom py-12">
    <h2 className="text-2xl font-bold mb-6 text-center text-[#1A5276]">Why ERP is Crucial for Modern Manufacturing ?</h2>

    {/* Bold Intro Line with larger font, centered */}
    <p className="text-center text-lg sm:text-xl font-semibold text-gray-900 mb-6">
      "Continuous learning and smart process automation are the minimum requirements for success in modern manufacturing - Brian Tracy"
    </p>
    

    {/* Description with Bullet Points */}
    <div className="text-gray-700 space-y-6 max-w-4xl mx-auto">
      <p>
        Manufacturing processes involve many interconnected activities: procurement, production planning, shop floor control, inventory tracking, and delivery. Without an ERP system, these processes often operate in silos, leading to delays, miscommunication, and inefficiencies. A robust manufacturing ERP system bridges these gaps by:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li><strong>Unifying Departments:</strong> Connects production, finance, inventory, sales, and HR into one system.</li>
        <li><strong>Real-Time Visibility:</strong> Tracks operations live from raw materials to finished goods.</li>
        <li><strong>Automated Workflows:</strong> Reduces manual effort by automating tasks like material requests, production scheduling, and billing.</li>
        <li><strong>Improved Decision-Making:</strong> Managers access up-to-date information instantly, helping them make informed decisions.</li>
      </ul>

      <p className="mt-4">
        An effective manufacturing ERP is a game-changer. It optimizes every aspect of production—from inventory management and scheduling to quality control and supply chain logistics. With real-time insights and automation, ERP helps manufacturers make informed decisions, reduce production costs, minimize waste, and improve overall productivity.
      </p>
    </div>
  </div>
</Section>




      {/* Types of ERP in Manufacturing */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1A5276]">Types of ERP in Manufacturing</h2>
          <p className="text-gray-700 mb-8 text-center">Manufacturing spans many sectors (engineering, chemicals, retail, etc.), so ERP solutions are classified accordingly. Below are common types of ERP systems in manufacturing:</p>
          <ManufacturingTypesGrid
            types={[
              {
                title: 'ERP for Discrete Manufacturing',
                image: '/images/2544444.svg',
                alt: 'Discrete Manufacturing',
                description: 'Discrete manufacturers assemble components into finished products (e.g., electronics or automotive). An ERP for discrete manufacturing manages demand forecasting, serialized production, supplier information, and order tracking to ensure smooth assembly operations.'
              },
              {
                title: 'ERP for Process Manufacturing',
                image: '/erp-process-manufacturing.svg',
                alt: 'Process Manufacturing',
                description: 'Process manufacturers combine formulas or raw materials to produce goods (e.g., chemicals, food & beverage). ERP for process manufacturing handles complex recipes and formulas, quality control, waste tracking, and product life cycles to maintain consistent output.'
              },
              {
                title: 'ERP for Mixed Manufacturing',
                image: '/images/25424.svg',
                alt: 'Mixed Manufacturing',
                description: 'Mixed manufacturing companies perform both discrete and process production. An ERP for mixed manufacturing supports both assembly and formula-based processes in one system, giving flexibility to businesses dealing with varied production models.'
              }
            ]}
          />
        </div>
      </Section>

      {/* Benefits of ERP for Manufacturing */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1A5276]">Benefits of ERP for Manufacturing</h2>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="md:w-1/12 flex justify-center mb-4 md:mb-0">
            </div>
            <div className="md:w-11/12">
              <p></p>
              <b>"Continuous improvement is better than delayed perfection – Mark Twain"</b>
            </div>
          </div>
          <div className="mt-6 text-gray-700">
            <div className='mb-4'>
              <p className='text-justify'><a className="text-blue-600 underline" href="/erp-software" target="_blank" rel="noopener noreferrer">Implementation of ERP Software</a> is the answer to many problems related to management in the manufacturing industry. The industry in today’s business environment is very dynamic and innovating rapidly. For being at the same pace as the changing market, latest technology is a must as <a href="/benefits-of-erp" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ERP Software has various benefits</a>, some of them are as follows:</p>
            </div>
            <ManufacturingBenefitsGrid
              benefits={[
                {
                  title: 'Cost Reduction',
                  image: '/images/blog-cost-cutting.svg',
                  alt: 'Reduce costs and save dollars',
                  description: 'ERP systems automate repetitive tasks, reduce paperwork, and optimize resource utilization. By minimizing manual errors and streamlining procurement, production, and inventory processes, companies save both time and money.'
                },
                {
                  title: 'Real-Time Visibility',
                  image: '/images/icon-Real-time-information.svg',
                  alt: 'Real-time information',
                  description: 'Get up-to-date information on stock levels, production status, pending orders, and delivery timelines. Real-time dashboards help supervisors monitor the shop floor, identify bottlenecks, and respond quickly.'
                },
                {
                  title: 'Flexibility and Competitive Edge',
                  image: '/images/icon-Higher-Productivity.svg',
                  alt: 'Flexibility and competitive edge',
                  description: 'ERP systems are highly customizable. Whether you\'re producing seasonal goods, managing job orders, or dealing with varying customer specs, ERP adapts to your workflow giving your business a competitive edge.'
                }
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Key Benefits List Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1A5276]">Key Benefits of ERP in Manufacturing</h2>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="md:w-1/12 flex justify-center mb-4 md:mb-0">
            </div>
            <div className="md:w-11/12">
              <p>
                <b>"Time is needed to convert all ideas and added values into tangible products that benefit the world. - Sunday Adelaja"</b>
              </p>
            </div>
          </div>
          <div className="mt-6 text-gray-700">
  <p className="mb-4">
    The key benefits of implementing an ERP system in the manufacturing industry include:
  </p>
  
  <List
    title=""
    items={[
      'Reduces operating costs',
      'Standardizes business processes',
      'Improves supply chain management',
      'Aligns operations with strategic business goals',
      'Maintains product quality',
      'Enhances overall efficiency'
    ]}
  />
</div>

        </div>
      </Section>

      {/* Conclusion Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1A5276]">Conclusion</h2>
          <div className="text-gray-700 mb-6">
            <p>ERP for Manufacturing provides end-to-end solutions to every kind of industry by increasing the efficiency of the business and helping in its growth in the market. Given the complexity of operations, ERP plays an important role in the manufacturing industry by keeping track of orders and delivery dates, production planning and scheduling, optimizing delivery time, and management of waste and other activities related to manufacturing. Doing everything manually makes it very difficult in the growing dynamic environment and brings a vast possibility of errors and failures. It centralizes and integrates all the operations and departments in a standardized way. It also helps in facing major challenges faced by manufacturers. Management and security of data become advantageous in the long run to achieve the objectives of organizations and increase profits and productivity.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="md:w-1/12 flex justify-center mb-4 md:mb-0">
            </div>
            <div className="md:w-11/12">
              <div className="md:w-11/12">
              <p>
                <b>"Almost all quality improvements come via simplification of design, manufacturing, layout, processes, and procedures - Tom Peters"</b>
              </p>
            </div>
            </div>
          </div>
        </div>
      </Section>

      
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to transform your manufacturing operations?',
                icon: 'Factory',
              },
              title: 'Get Started with ERPNext for Manufacturing',
              highlightText:"ERPNext for Manufacturing",
              description: 'Contact us today to schedule a personalized demo or consultation and see how ERPNext can streamline your production, inventory, and business processes.',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'ArrowRight',
                action: handleSecondary,
              },
              secondaryButton: {
                text: 'Contact Sales',
                icon: 'Phone',
                action: handlePrimary,
              },
              trustIndicator: {
                text: 'Trusted by leading manufacturers',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
