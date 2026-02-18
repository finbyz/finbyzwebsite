'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import { List } from '@/components/sections/list';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Expert Technology Consulting & Digital Transformation Strategy"
        highlightWords={["Consulting", " Transformation", "Strategy"]}
        description="Unlock growth with Finbyz Tech's expert technology consulting. We guide businesses through digital transformation, ERPNext adoption, and IT strategy for measurable success."
        heroImage={{
          alt: 'Expert Technology Consulting & Digital Transformation Strategy',
          src: '/images/technology-consulting.png',
         
        }}
         primaryButton={{
            text: "Get Started",
            action: 'https://finbyz.tech/contact'
          }}
          secondaryButton={{
            text: "Learn More",
            action: () => { const el = document.getElementById('overview'); 
              if (el) el.scrollIntoView({ behavior: 'smooth' }); }
          }}
        accentColor="orange"
        // className="animate-fadeInDown duration-700"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom mt-5">
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn  ">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Finbyz Tech is dedicated to empowering businesses with strategic technology consulting designed to drive real, sustainable growth. Our approach bridges deep industry insight with proven methodologies, ensuring your organization leverages cutting-edge innovations with a clear, actionable roadmap. Whether you face a complex digital transformation, seek optimization in IT infrastructure, or navigate ERPNext adoption, our seasoned experts provide tailored solutions that generate measurable outcomes. With a decade-long track record, ISO 27001:2013 certification, and a commitment to excellence, Finbyz Tech is the trusted partner for enterprises looking to transform challenges into opportunities and achieve enduring success through technology.
          </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* INTRO & VALUE SECTION */}
      <section id='overview'>
        <div className="container-custom ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn  ">Expert Technology Consulting: Guiding Your Digital Future</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          In today's fast-evolving business landscape, technology is more than a support function—it is the engine of growth, innovation, and competitive advantage. Navigating the complexities of digital transformation, optimizing IT infrastructure, and leveraging emerging technologies requires both vision and expertise. At Finbyz Tech, we deliver strategic technology consulting focused on empowerment and unparalleled success.  
          </p>
           <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            With over a decade of enterprise technology experience, Finbyz Tech is your trusted ally for building and executing robust IT strategies. We turn challenges into opportunities and ensure your technology investments deliver maximum impact for sustainable growth.
          </p>
          {/* <TextSection
            data={{
              title: 'Expert Technology Consulting: Guiding Your Digital Future',
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* WHY CHOOSE FINBYZ TECH - BENEFITS */}
      <section>
        <div className=" py-8">
          <Benefits
            data={{
              title: 'Why Choose Finbyz Tech for Your Technology Consulting Needs?',
              benefits: [
                {
                  // number: 10,
                  // suffix: '+',
                  // label: 'Years of Expertise',
                  label:'',
                  header: 'Decade of Expertise',
                  description: "10+ years in ERP implementation and IT services—deep practical knowledge to ensure your success.",
                  icon: 'Award',
                  palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                },
                {
                  // number: 2,
                  // suffix: '',
                  // label: 'Certifications',
                  label:'',
                  header: 'Certified Excellence',
                  description: 'ISO 27001:2013 & Certified ERPNext Partner—proven commitment to quality and security.',
                  icon: 'ShieldCheck',
                  palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                },
                {
                  // number: 12,
                  // suffix: '+',
                  // label: 'Countries Served',
                  label:'',
                  header: 'Global Footprint',
                  description: 'Clients in 12+ countries—expertise across diverse global business and regulatory contexts.',
                  icon: 'Globe2',
                  palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                },
                {
                  // number: 30,
                  // suffix: '+',
                  // label: 'Consultants',
                  label:'',
                  header: 'Skilled Resource Pool',
                  description: 'A diverse team of skilled consultants, developers, and domain experts.',
                  icon: 'Users',
                  palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                },
                {
                  // number: 1,
                  // suffix: '',
                  // label: 'Approach',
                  label:'',
                  header: 'Holistic Approach',
                  description: 'End-to-end partnership—from strategy to implementation for tangible outcomes.',
                  icon: 'Settings',
                  palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                },
                {
                  // number: 1,
                  // suffix: '',
                  // label: 'Value',
                  label:'',
                  header: 'Innovation at Core',
                  description: 'AI-driven automation and future-proof strategies as the foundation.',
                  icon: 'Brain',
                  palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                }
              ],
            }}
          />
        </div>
      </section>

      {/* SERVICE OFFERINGS & HIGHLIGHTS AS CARD GRID */}
      <section>
        <div className=" py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Our Comprehensive Technology Consulting Services',
              subtitle: '',
              cards: [
                {
                  id: 1,
                  title: 'Digital Transformation Advisory & Strategy',
                  description: 'Roadmaps for digital innovation, process optimization, change management and technology adoption tailored to your goals.',
                  icon: 'Lightbulb',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 2,
                  title: 'ERPNext Adoption & Optimization',
                  description: 'ERP readiness, scoping, seamless implementation, and post-deployment optimization; specialization across industry verticals.',
                  icon: 'Settings',
                   iconColor: "#ffffff",
                    iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 3,
                  title: 'Custom Software & Application Strategy',
                  description: 'Requirements definition, technology stack advice, robust architectures, and lifecycle planning for custom solutions.',
                  icon: 'Star',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 4,
                  title: 'Cloud Strategy & Migration Consulting',
                  description: 'Cloud readiness assessment, platform selection, smooth migration with minimal downtime, cost optimization, and governance.',
                  icon: 'Cloud',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 5,
                  title: 'Data Analytics & Business Intelligence',
                  description: 'Data strategy, BI tool selection, reporting dashboard design, and predictive analytics for data-driven decision-making.',
                  icon: 'BarChart3',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 6,
                  title: 'AI & Automation Strategy',
                  description: 'Identify and integrate AI-powered tools and automation from CRM workflows to HR processes for next-level efficiency.',
                  icon: 'Brain',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all',
                }
              ],
              variant: 'iconCard',
            }}
            className="animate-fadeInUp duration-700"
          />
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION ADVISORY DETAILS AS BULLET LIST */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Digital Transformation Advisory & Strategy: Key Services"
            items={[
              "Current State Analysis: Assessing your IT landscape, business processes, and organizational capabilities.",
              "Future State Vision: Envisioning a digital future that's realistic and aligned with business goals.",
              "Technology Roadmap Development: Phased adoption, integration, and migration to maximize value.",
              "Change Management: Advisory to ensure smooth adoption and minimal disruption."
            ]}
            // Icon={Lightbulb}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* ERPNEXT CONSULTING BULLET DETAILS */}
      <section>
        <div className="container-custom py-8">
          <List
            title="ERPNext Adoption & Optimization Consulting: Scope"
            items={[
              "ERP Readiness Assessment: Gauge your organization's state for ERPNext adoption.",
              "System Selection & Scoping: Match business needs with ERP capabilities for maximum impact.",
              "Implementation Strategy: Seamless deployment, smooth migration, and comprehensive user training.",
              "Post-Implementation Optimization: Evolve ERPNext as your business grows and ensure sustained value.",
              "Industry-Specific Modules: Guidance using proprietary modules built for chemicals, EXIM, foundry, and more."
            ]}
            // Icon={Settings}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* CUSTOM SOFTWARE STRATEGY AS BULLET LIST */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Custom Software & Application Strategy Overview"
            items={[
              "Requirements Definition: Translate business needs to actionable specifications.",
              "Technology Stack Recommendation: Choose optimal technologies for scalability, performance, and cost.",
              "Architecture Design: Build robust, secure, and future ready solutions.",
              "Development Lifecycle Planning: Efficient processes for development, QA, and deployment."
            ]}
            // Icon={Star}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* CLOUD STRATEGY AS BULLET LIST */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Cloud Strategy & Migration Consulting - What We Cover"
            items={[
              "Cloud Readiness Assessment: Evaluate infrastructure and application suitability for cloud.",
              "Cloud Provider Selection: Choose between AWS, Azure, GCP, or hybrid strategies.",
              "Migration Planning & Execution: Plan and execute low-downtime migrations.",
              "Cost Optimization & Governance: Manage costs efficiently and maintain compliance."
            ]}
            // Icon={Cloud}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* DATA ANALYTICS & AI STRATEGY AS BULLET LIST */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Data Analytics & Business Intelligence Advisory: Solutions"
            items={[
              "Data Strategy Development: Framework for collection, storage, and analytics.",
              "BI Tool Selection: Identify the best-fit BI platform for your needs.",
              "Reporting & Dashboard Design: Build meaningful and actionable business dashboards.",
              "Predictive Analytics & AI Integration: Leverage analytics to drive automation and forecasting."
            ]}
            // Icon={BarChart3}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* AI & AUTOMATION STRATEGY BULLET LIST */}
      <section>
        <div className="container-custom py-8">
          <List
            title="AI & Automation Strategy Key Features"
            items={[
              "Automation Opportunity Identification: Design smarter workflows & reduce manual effort.",
              "AI Solution Design: Build and integrate AI-powered solutions (Resume Ranker, AI-CRM, and more).",
              "Implementation Roadmapping: Stepwise integration with ERPNext and other systems.",
              "Performance Monitoring & Optimization: Track KPIs and evolve solutions for ongoing ROI."
            ]}
            // Icon={Brain}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* PROCESS SECTION AS NUMBERED LIST */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Our Process: Clarity, Efficiency, Impact"
            items={[
              "Discovery & Assessment: Understand your business, challenges, and aspirations.",
              "Strategy Formulation: Develop tailored IT strategies and actionable roadmaps.",
              "Recommendation & Planning: Deliver detailed solutions, phased plans, and projections.",
              "Implementation & Support (Optional): End-to-end support for frictionless execution.",
              "Review & Optimization: Continuous improvement for long-term success."
            ]}
            // Icon={RefreshCcw}
            iconColor="text-[#1A5276]"
            iconSize={24}
          />
        </div>
      </section>

      {/* FINAL CONVINCER AS PARAGRAPH */}
      <section>
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Empower Your Business with Strategic IT Consulting</h2>
           
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Don&apos;t let technological complexities hinder growth. Finbyz Tech transforms IT strategy into business success—helping you optimize operations, drive efficiency, and achieve your goals confidently. Whether you need a new ERP system, AI-driven process automation, or a comprehensive digital transformation partner, our expert consultants are ready to deliver measurable results at every step.
          </p>
          {/* <TextSection
            data={{
              title: 'Empower Your Business with Strategic IT Consulting',
              paragraphs: [
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="mt-5">
          <CTA
            data={{
              subheading: { text: 'Ready to Accelerate Your Digital Journey?', icon: 'Rocket' },
              title: 'Get a Personalized Technology Consultation',
              highlightText:'Technology Consultation',
              description: 'Contact Finbyz Tech and partner with experienced consultants who turn technology challenges into measurable success—let\'s unlock your business\'s full potential.',
              primaryButton: { text: 'Book Consultation', icon: 'Star', action: '/contact' },
              secondaryButton: { text: 'Learn More', icon: 'Lightbulb',
                 action: () => { const el = document.getElementById('overview'); 
              if (el) el.scrollIntoView({ behavior: 'smooth' }); } },
              trustIndicator: { text: 'Trusted by clients in 12+ countries', icon: 'Globe2' }
            }}
          />
        </div>
      </section>
    </>
  );
}
