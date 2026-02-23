'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';

import { List } from '@/components/sections/list';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      
      <section >
        <DynamicHero
          headline="ERP for Pharmaceuticals Streamline Operations & Compliance"
          highlightWords={[
             'Pharmaceuticals', 'Operations', 'Compliance'
          ]}
          description="Transform your pharmaceutical operations with tailored ERPNext solutions. Manage production, inventory, and ensure regulatory compliance efficiently. Boost efficiency and reduce costs."
          heroImage={{
            alt: 'ERP for Pharmaceuticals Streamline Operations & Compliance',
            src: '/images/erp-for-pharmaceuticals.png'
          }}
          primaryButton={{
            text: 'Get Started',
            action: 'https://finbyz.tech/contact'
          }}
          secondaryButton={{
            text: 'Learn More',
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          accentColor="orange"
        />
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview">
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Overview</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Discover how Finbyz Tec\'s specialized ERPNext solutions transform pharmaceutical companies by empowering them to achieve outstanding operational excellence and regulatory compliance. With a deep understanding of the unique requirements and challenges in the pharmaceutical industry, our end-to-end ERP implementation and AI-driven automation provide a strategic advantage across the entire pharma value chain. Optimize your production workflows, strengthen quality controls, and achieve real-time visibility throughout your business. With our tailored approach, companies experience sustainable growth, improved efficiency, and exceptional cost savings.
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      {/* Elevating Pharmaceutical Operations Introduction */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Elevating Pharmaceutical Operations with Tailored ERPNext Solutions</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        The pharmaceutical industry sits at the intersection of scientific innovation, rigorous regulatory demands, and highly complex global supply chains. Ensuring product quality and maintaining compliance is not just important – it\'s vital for success. At Finbyz Tec, we understand these unique challenges and deliver specialized ERPNext solutions that empower pharmaceutical companies to reach new levels of operational excellence and competitiveness.
           </p>
            <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        Our team\'s deep ERPNext implementation expertise, combined with in-depth industry knowledge, enables us to deliver a robust, compliant, and scalable platform that seamlessly integrates every segment of your pharmaceutical business.
           </p>
          {/* <TextSection
            data={{
              title: 'Elevating Pharmaceutical Operations with Tailored ERPNext Solutions',
              paragraphs: [
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* The Unique Demands of the Pharmaceutical Sector */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">The Unique Demands of the Pharmaceutical Sector</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        Pharmaceutical companies navigate a landscape filled with specific operational and regulatory hurdles. From research and development to post-market surveillance, every business function must adhere to strict international guidelines including FDA, GMP, and GxP standards. Below are the critical challenges faced by pharma organizations:
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ''
              ]
            }}
          /> */}
          
        </div>
        <ResponsiveCardGrid
            data={{
              variant: 'iconCard',
              cards: [
                {
                  id: 1,
                  title: 'Batch Process Manufacturing',
                  description:
                    'Manage complex formulations, precise ingredient measurements, and multi-stage production workflows.',
                  icon: 'FlaskConical',
                 iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Stringent Quality Control',
                  description:
                    'Implement rigorous QA/QC checks, sample management, stability studies, and deviation tracking.',
                  icon: 'CheckCircle',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'Regulatory Compliance',
                  description:
                    'Ensure comprehensive documentation, audit trails, electronic batch records, and reporting for global standards.',
                  icon: 'FileBadge',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'Inventory Traceability',
                  description:
                    'Track lots, batches, expiries, and cold chain logistics for end-to-end traceability.',
                  icon: 'Boxes',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: 'Supply Chain Visibility',
                  description:
                    'Maintain real-time oversight across procurement, vendor management, and distribution networks.',
                  icon: 'LineChart',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  
                },
                {
                  id: 6,
                  title: 'Data Integrity & Security',
                  description:
                    'Protect sensitive R&D data and patient information while ensuring system reliability.',
                  icon: 'ShieldCheck',
                   iconColor: "#ffffff",
                  iconBg: '#FFB347',
                }
              ]
            }}
            className="pt-6"
          />
      </section>

      {/* Specialized ERPNext for Pharmaceuticals */}
      <section>
        <div className="container-custom py-8">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Finbyz Tec's Specialized ERPNext for Pharmaceuticals</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        With over a decade of experience in ERP implementation and consulting, Finbyz Tec provides pharmaceutical companies with ERPNext systems that act as strategic assets—not just software tools. Being a Certified ERPNext Partner, we tailor every deployment for industry-specific needs to drive efficiency, compliance, and sustainable growth.
           </p>
          {/* <TextSection
            data={{
              title: "Finbyz Tec's Specialized ERPNext for Pharmaceuticals",
              paragraphs: [
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* Core Capabilities for Pharma Excellence as Icon Cards */}
      <section>
        <div className="container-custom py-8">
          <h3 className="text-3xl md:text-3xl font-semibold mb-4 text-[#1A5276] animate-fadeIn">Core Capabilities for Pharma Excellence</h3>
        
        </div>
          <ResponsiveCardGrid
            data={{
              title: '',
              variant: 'iconCard',
              cards: [
                {
                  id: 'production',
                  title: 'Production Management',
                  description:
                    'Control batch recipes, BOMs, multi-stage workflows, ingredient allocation, yield, and digitize batch records with compliance.',
                  icon: 'Factory',
                 iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 'quality',
                  title: 'Quality Assurance & Control',
                  description:
                    'In-process quality checks, sample management, deviation/CAPA tracking, and stability study management.',
                  icon: 'FlaskConical',
                iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 'inventory',
                  title: 'Inventory & Warehouse',
                  description:
                    'Full batch/lot traceability, expiry management, and specialized storage (cold chain, etc.) features.',
                  icon: 'Warehouse',
                   iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 'compliance',
                  title: 'Regulatory Compliance',
                  description:
                    'Comprehensive audit trails, centralized document management, and automated regulatory reporting.',
                  icon: 'Shield',
                   iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 'supplychain',
                  title: 'Supply Chain Management',
                  description:
                    'Supplier qualification, advanced demand forecasting, streamlined logistics, and end-to-end delivery tracking.',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 'financial',
                  title: 'Financial Management',
                  description:
                    'Batch-wise costing, detailed budgeting, profitability tracking, and robust financial analytics/reports.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                }
              ]
            }}
            className="pt-6"
          />
      </section>

      {/* Why Choose Finbyz Tec Section as Card List (Benefits) */}
      <section>
        <div className="container-custom py-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Why Choose Finbyz Tech for Your Pharmaceutical ERP Needs?</h3>
         
        </div>
         <ResponsiveCardGrid
          
            data={{
              variant: 'iconCard',
              cards: [
                {
                  id: 'acumen',
                  title: 'Deep Industry Acumen',
                  description:
                    'Leverage extensive knowledge of chemical and pharma operations for highly relevant ERP configurations.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 'endtoend',
                  title: 'End-to-End Implementation',
                  description:
                    'Complete ERP process, from consultation and customization to migration, training, and ongoing support.',
                  icon: 'Repeat',
                 iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 'iso',
                  title: 'ISO 27001:2013 Certified',
                  description:
                    'Adherence to global information security standards ensuring protection of your sensitive data.',
                  icon: 'Lock',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 'customdev',
                  title: 'Custom Software Development',
                  description:
                    'Tailored automation & business process apps to perfectly align with your unique pharma workflows.',
                  icon: 'Puzzle',
                   iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 'ai',
                  title: 'AI-Driven Automation',
                  description:
                    'Integrate advanced analytics, predictive QC, and intelligent sales outreach for next-gen operations.',
                  icon: 'Brain',
                   iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 'track',
                  title: 'Proven Track Record',
                  description:
                    '200+ ERPNext projects delivered, 7000+ users served across 12+ countries with measurable results.',
                  icon: 'Award',
                   iconColor: "#ffffff",
                  iconBg: '#FFB347',
                },
                {
                  id: 'resources',
                  title: 'Resource Augmentation',
                  description:
                    'Flexible engagement models with skilled consultants and developers available whenever you need them.',
                  icon: 'UserPlus',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 'agile',
                  title: 'Agile Digital Transformation',
                  description:
                    'Simplify complexity and enable seamless digital transformation for enduring business efficiency.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
              ]
            }}
            className="pt-6"
          />
      </section>

      {/* Call To Action Section */}
      <section>
        <div className="py-8">
        </div>
      </section>
    </>
  );
}
