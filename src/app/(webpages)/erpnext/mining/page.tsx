'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Mining ERP Solutions Efficient Operations Streamlined"
        highlightWords={["ERP", "Efficient", "Streamlined", "Mining"]}
        description="Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability."
        heroImage={{
          alt: 'Mining ERP Solutions Efficient Operations Streamlined',
          src:'/images/erp-for-mining-industry1.png'
        }}
        primaryButton={{ text: 'Get Started',action:"/contact" }}
        secondaryButton={{ text: 'Learn More',action: '/#mining-resources'}}
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8" id="mining-resources">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Overview</h2>
          <p className="leading-relaxed text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify" >
            Unlock the full potential of your mining operations with Finbyz Tech's industry-focused ERPNext solutions, expertly designed to meet the complex requirements of today's mining sector. From managing expansive supply chains and regulatory compliance to optimizing asset lifecycles and production analytics, our specialized ERP empowers your business to achieve end-to-end operational excellence. By consolidating disparate processes and providing real-time, actionable insights, Finbyz Tech enables mining companies to increase efficiency, ensure compliance, reduce costs, and drive sustained profitability—from resource extraction all the way to market delivery. Discover how an integrated ERP system tailored for mining can future-proof your operations and deliver a significant competitive advantage.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT: Industry Background & Challenges */}
      <TextSection
        data={{
          title: 'Transform Your Mining Operations with Specialized ERP Solutions',
          paragraphs: [
            'The mining industry, a cornerstone of the global economy, faces unique challenges—from complex logistical networks and stringent regulatory compliance to volatile commodity prices and the need for efficient resource management. Relying on fragmented systems or manual processes can severely hinder productivity and impede growth, while driving up costs. To truly thrive, mining companies require a robust, integrated, and intelligent system that manages every facet of operations from initial extraction to final market delivery. This is precisely where a specialized Enterprise Resource Planning (ERP) solution becomes indispensable.',
            'Finbyz Tech delivers cutting-edge ERP solutions meticulously customized for the mining sector. Harnessing the flexibility and power of ERPNext, we provide a unified platform that streamlines inventory, logistics, and compliance tracking, enabling efficient mine-to-market operations and significantly enhancing profitability.'
          ]
        }}
      />

      {/* MAIN CONTENT: Industry Challenges List */}
      <ResponsiveCardGrid
        className="container-custom py-8"
        data={{
          title: 'Unique Challenges of Mining',
          cards: [
            {
              id: 1,
              title: 'Intricate Supply Chains',
              description:
                'Managing the flow of raw materials, equipment, spare parts, and products across vast, often remote, locations.',
              icon: 'Truck',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 2,
              title: 'Asset-Intensive Operations',
              description:
                'Heavy machinery, vehicles, and infrastructure require meticulous maintenance and optimization to prevent costly downtime.',
              icon: 'HardHat',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 3,
              title: 'Strict Regulatory Compliance',
              description:
                'Stay on top of rapidly changing environmental, safety, labor, and trade regulations across all jurisdictions.',
              icon: 'ShieldCheck',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 4,
              title: 'Volatile Market Conditions',
              description:
                'Need for agile financial planning and accurate forecasting in response to fluctuating commodity prices.',
              icon: 'TrendingUp',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 5,
              title: 'Remote Workforce Management',
              description:
                'Coordinate, track, and ensure safety for personnel working in diverse and challenging mining environments.',
              icon: 'Users',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 6,
              title: 'Complex Project Management',
              description:
                'Oversee exploration, development, and production phases, each with distinct requirements and timelines.',
              icon: 'Layers',
             iconColor: "#ffffff",
              iconBg: '#FFB347',
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 7,
              title: 'Inventory & Spares Management',
              description:
                'Ensure availability of highly specialized spare parts to minimize operational disruptions.',
              icon: 'Box',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all'
            }
          ],
          variant: 'iconCard'
        }}
      />

      {/* MAIN CONTENT: ERP Solution Features */}
      <Benefits
        data={{
          title: 'Key ERP Features for Mining',
          benefits: [
            {
              header: 'Inventory & Warehouse',
              label: 'Real-time Stock, Batch Tracking',
              description:
                'Gain total visibility across sites, automate reorder points, link inventory with maintenance, and ensure quality control through batch and serial number tracking.',
              icon: 'Boxes',
              palette: { iconBg: '#FFF7ED', iconColor: '#EA580C' }
            },
            {
              header: 'Logistics & Supply Chain',
              label: 'Fleet, EXIM, Vendors',
              description:
                'Manage fleets, monitor shipments, handle international trade (EXIM), and streamline vendor/contractor management all from a single platform.',
              icon: 'Plane',
              palette: { iconBg: '#FFF7ED', iconColor: '#EA580C' }
            },
            {
              header: 'Compliance & Reporting',
              label: 'Automated, Centralized',
              description:
                'Generate audit-ready reports, track safety and incidents, document compliance, and centralize all critical records for easy access.',
              icon: 'FileCheck2',
              palette: { iconBg: '#FFF7ED', iconColor: '#EA580C' }
            },
            {
              header: 'Asset & Equipment',
              label: 'Preventive Maintenance, Tracking',
              description:
                'Maximize uptime with intelligent scheduling, lifecycle tracking, and a direct link between maintenance and spare parts inventory.',
              icon: 'Activity',
              palette: { iconBg: '#FFF7ED', iconColor: '#EA580C' }
            },
            {
              header: 'Production Planning',
              label: 'Scheduling, QC, Consistency',
              description:
                'Optimize production flow, enforce quality checks, and manage batch processes to ensure consistent delivery and yield.',
              icon: 'CalendarClock',
              palette: { iconBg: '#FFF7ED', iconColor: '#EA580C' }
            },
            {
              header: 'Financial Management',
              label: 'Cost, Budgeting, Multi-currency',
              description:
                'Precise project accounting, budgeting tools, cost-of-production analysis, and robust support for global operations.',
              icon: 'DollarSign',
              palette: { iconBg: '#FFF7ED', iconColor: '#EA580C' }
            }
          ]
        }}
      />

      {/* MAIN CONTENT: Why ERPNext + Finbyz Tech */}
      <TextSection
        data={{
          title: 'Why Choose ERPNext for Mining with Finbyz Tech?',
          paragraphs: [
            'Finbyz Tech is a Certified ERPNext Partner with over a decade of experience in ERP implementation and consulting. Our deep specialization in complex industries such as Metal Casting, Manufacturing, Chemical, and Logistics directly benefits mining clients through tailored workflows, real-world best practices, and proven automation. ERPNext is open-source, intuitive, highly customizable, and cost-effective—eliminating license fees and enabling more budget for custom value-additions.',
            'Every mining operation is unique. That’s why we deliver end-to-end deployment, industry-focused custom modules, and AI-driven automation such as predictive analytics and smarter workforce management—guaranteeing your ERPNext is perfectly aligned with your goals.'
          ]
        }}
      />

      {/* MAIN CONTENT: Benefits of Partnership */}
      <ResponsiveCardGrid
        className="container-custom py-8"
        data={{
          title: 'Key Benefits of Partnering with Finbyz Tech',
          cards: [
            {
              id: 1,
              title: 'Optimized Operations',
              description: 'Streamline workflows from extraction to delivery, reduce bottlenecks, and maximize efficiency.',
              icon: 'Settings2',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 2,
              title: 'Enhanced Profitability',
              description: 'Gain tighter cost control, optimize resource use, and drive better bottom-line decisions.',
              icon: 'BarChart2',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 3,
              title: 'Improved Compliance',
              description: 'Automate regulatory adherence with centralized data and reporting tools.',
              icon: 'ClipboardCheck',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 4,
              title: 'Real-time Visibility',
              description: 'Monitor your entire operation in real time, enabling proactive and informed decision-making.',
              icon: 'Eye',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 5,
              title: 'Growth Scalability',
              description: 'Scalable system structure adapts as your mining operation expands and new challenges emerge.',
              icon: 'TrendingUp',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all'
            },
            {
              id: 6,
              title: 'Competitive Advantage',
              description: 'Leverage advanced technology to surpass competitors through superior operational agility.',
              icon: 'Trophy',
              iconColor: "#ffffff",
              iconBg: '#FFB347',
              className: 'border-none hover:shadow-xl transition-all'
            }
          ],
          variant: 'iconCard'
        }}
      />

      {/* MAIN CONTENT: Implementation Approach */}
      <TextSection
        data={{
          title: 'Our Approach: Your Journey to Digital Transformation',
          paragraphs: [
            'Our proven implementation methodology begins with an in-depth consultation to understand your specific mining processes and objectives. We then develop tailored customizations—modules, reporting tools, automations—aligned precisely to your workflows. Deployment is seamless, with minimal operational disruption, and is supplemented by hands-on training. With ongoing support and resource augmentation, Finbyz Tech ensures your mining ERP delivers ongoing value and success.'
          ]
        }}
      />

      {/* CTA SECTION */}
      <section>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Dig Deeper?',
                icon: 'Search'
              },
              title: 'Revolutionize Your Mining Operations with ERPNext',
              highlightText:"Mining Operations with ERPNext",
              description: 'Contact Finbyz Tech for a personalized consultation and see how our mining ERP solutions deliver efficiency and profitability from mine to market.',
              primaryButton: {
                text: 'Talk to Our Experts',
                icon: 'MessageSquare',
                action: 'https://finbyz.tech/contact'
              },
              secondaryButton: {
                text: 'Request a Demo',
                icon: 'PlayCircle',
                action: 'https://finbyz.tech/contact'
              },
              trustIndicator: {
                text: 'Trusted by 200+ Mining & Industrial Clients',
                icon: 'CheckCircle'
              }
            }}
          />
        </div>
      </section>
    </>
  );
}
