'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import Benefits from '@/components/sections/benefits';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import ERPIntroText from '@/components/sections/erp-intro-text';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="ERPNext Real-World Use Cases Industry-Specific Solutions"
        highlightWords={[

          'Real-World',
          'Use Cases',
          'Solutions'
        ]}
        description="Discover how ERPNext transforms operations across diverse industries. Explore real-world use cases in manufacturing, EXIM, logistics, and more with expert implementation from a certified partner."
        heroImage={{
          alt: 'ERPNext Real-World Use Cases Industry-Specific Solutions',
          src: '/images/erpnext-use-cases.png',

        }}
        primaryButton={{ text: 'Get Started', action: 'https://finbyz.tech/contact', }}
        secondaryButton={{
          text: 'Learn More', action: () => {
            const el = document.getElementById('erpnext-overview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        accentColor="orange"
      // className="animate-fade-in-up"
      />

      {/* OVERVIEW SECTION */}
      <section id='erpnext-overview'>
        <div className="container-custom py-8">

          <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Overview</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Explore impactful ERPNext use cases that demonstrate Finbyz Tech\'s expertise in driving digital transformation across various sectors. This page highlights how our tailored ERPNext solutions solve complex business challenges, enhance efficiency, and foster sustainable growth. Discover practical applications and success stories from manufacturing to trading, showcasing real-world benefits.
          </p>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            ERPNext is an open-source, robust enterprise resource planning system that empowers organizations to streamline operations, improve decision-making, and adapt to rapidly changing business landscapes. Finbyz Tech, as a Certified ERPNext Partner with over a decade of experience, specializes in implementing and customizing ERPNext to deliver tangible results. Our approach prioritizes aligning solutions with strategic business objectives, ensuring every deployment is transformative, future-ready, and tailored to unique industry requirements.
          </p>
          {/* <TextSection
            data={{
              paragraphs: [
                
              ]
            }}
          /> */}
        </div>
      </section>

      {/* MAIN CONTENT SECTION: Advantage & Stats */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: 'The Finbyz Tech Advantage',
              subtitle: 'Expertise in Action',
              benefits: [
                {
                  number: 200,
                  suffix: '+',
                  label: 'Successful Projects',
                  header: 'ERPNext Implementations',
                  description: 'Over 200+ successful ERPNext implementations delivered across multiple industries globally.',
                  icon: 'Award',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  number: 7000,
                  suffix: '+',
                  label: 'ERPNext Users',
                  header: 'Worldwide User Base',
                  description: 'Serving 7000+ active ERPNext users in 12+ countries, ensuring operational excellence and digital transformation.',
                  icon: 'Globe',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  number: 30,
                  suffix: '+',
                  label: 'Skilled Resources',
                  header: 'Certified Experts',
                  description: 'Team of ERP consultants, developers, and functional experts delivering scalable and secure solutions.',
                  icon: 'Users',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  number: 1,
                  suffix: '',
                  label: 'ISO 27001:2013',
                  header: 'Certified Company',
                  description: 'Highest standards of information security and software development for every client engagement.',
                  icon: 'ShieldCheck',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                }
              ],
              ctaButton: { text: 'Explore Our Expertise', action: '/services' }
            }}
          />
        </div>
      </section>

      {/* INTRO PARAGRAPH - Business Transformation */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Real-World ERPNext Use Cases: Driving Business Transformation</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            In today’s dynamic business landscape, organizations constantly seek robust, integrated solutions to streamline operations, enhance decision-making, and achieve sustainable growth. ERPNext, a powerful open-source ERP system, stands at the forefront of this transformation. At Finbyz Tech, a Certified ERPNext Partner, we don't just implement ERPNext—we craft tailored solutions for real-world impact across diverse industries.
          </p>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Our implementations combine ERPNext’s flexible platform with deep domain expertise and the latest advancements in AI-driven automation to help businesses overcome unique challenges and unlock greater efficiency.
          </p>
          {/* <ERPIntroText
            data={{
              title: 'Real-World ERPNext Use Cases: Driving Business Transformation',
              paragraphs: [
               
              ]
            }}
          /> */}
        </div>
      </section>

      {/* INDUSTRY-SPECIFIC USE CASES - 4 CARDS */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Industry-Specific Use Cases',
              subtitle: 'How ERPNext Powers Complex Workflows',
              cards: [
                {
                  id: 1,
                  title: 'Chemical Manufacturing',
                  description: 'Automated batch process tracking, advanced BOM & formula management, real-time QA, and regulatory compliance reduce errors, improve consistency, and optimize resource utilization.',
                  icon: 'FlaskConical',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Export & Import (EXIM) Operations',
                  description: 'Automated export documentation, customs & compliance, RoDTEP processing, and shipment tracking for enhanced visibility and minimum errors throughout the global supply chain.',
                  icon: 'Ship',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Metal Casting & Foundry',
                  description: 'Specialized casting workflows, complete material traceability, optimized scheduling, and comprehensive quality inspection drive higher product quality and efficiency.',
                  icon: 'Hammer',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Logistics & Supply Chain',
                  description: 'End-to-end fleet, route, warehouse, and freight management for faster, lower-cost delivery and improved customer satisfaction.',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',

            }}
          />
        </div>
      </section>

      {/* ADDITIONAL INDUSTRIES - 10 CARDS, EVEN NUMBERED */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: "Other Industries Transformed by Finbyz Tech's ERPNext Expertise",
              subtitle: '',
              cards: [
                {
                  id: 5,
                  title: 'Pharma',
                  description: 'Regulatory compliance, batch tracking, and inventory management.',
                  icon: 'HeartPulse',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Engineering',
                  description: 'Project management, BOM, quality control, and field service.',
                  icon: 'Wrench',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 7,
                  title: 'Ceramic',
                  description: 'Production planning, quality management, and sales & distribution.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 8,
                  title: 'Education',
                  description: 'Student management, fee collection, and academic administration.',
                  icon: 'BookOpenCheck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 9,
                  title: 'FMCG, Trading & Distribution',
                  description: 'Inventory optimization, sales orders, and supply chain management.',
                  icon: 'ShoppingCart',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 10,
                  title: 'Healthcare',
                  description: 'Patient records, billing, and medical inventory control.',
                  icon: 'Stethoscope',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 11,
                  title: 'Textile',
                  description: 'Production planning, material sourcing, and order fulfillment.',
                  icon: 'Scissors',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 12,
                  title: 'Agro',
                  description: 'Farm management, crop tracking, and sales & distribution.',
                  icon: 'Leaf',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 13,
                  title: 'Plastic',
                  description: 'Process control, BOM, and waste management in plastics manufacturing.',
                  icon: 'Recycle',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 14,
                  title: 'Commodity Trading',
                  description: 'Real-time inventory, pricing, and contract management.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
            }}
          />
        </div>
      </section>

      {/* Proprietary Modules & AI Section */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Enhancing ERPNext with Finbyz Tech's Proprietary Solutions & AI</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Finbyz Tech goes beyond standard ERP implementations, continuously innovating with proprietary add-ons and the latest AI automations to maximize the capabilities of ERPNext.',
            'Marketplace Apps: WhatsApp Integration, Meeting Management, Payment Management, advanced financial modules (FD/EMD/Forward Contract/Investment Portfolio), and trade compliance tools like Advance Authorisation and RoDTEP Management.
          </p>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            AI-Driven Automations: AI-CRM assistants, Resume Ranker & Smarter Hiring, Call Feedback analysis, smart lead generation and outreach, automated content creation, and instant business card scanning connect directly into ERP workflows.',
            'Productify – Work Insights for ERPNext: Instantly visualize productivity, track tasks, and monitor field teams with deep CRM integration.
          </p>
          {/* <TextSection
            data={{
              title: "Enhancing ERPNext with Finbyz Tech's Proprietary Solutions & AI",
              paragraphs: [
                
              ]
            }}
          /> */}
        </div>
      </section>

      {/* WHY CHOOSE FINBYZ TECH */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4 animate-fade-in">Why Choose Finbyz Tech for Your ERPNext Journey?</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Selecting the right ERP partner is vital for long-term success. Finbyz Tech stands out by combining certified technical excellence with deep functional knowledge in industries like chemicals, EXIM, and logistics. Our innovation-first mindset ensures clients always receive solutions that are ahead of the curve. With over 200 successful projects for 7000+ users and a client-centric approach, we are trusted globally for delivering tailored, scalable, and impactful systems.
          </p>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            From end-to-end implementation and custom software development to IT consulting and resource augmentation, Finbyz Tech covers every aspect of digital transformation. Our agile, collaborative philosophy guarantees sustainable business growth and operational excellence.
          </p>
          {/* <TextSection
            data={{
              title: 'Why Choose Finbyz Tech for Your ERPNext Journey?',
              paragraphs: [
                
              ]
            }}
          /> */}
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'Rocket'
              },
              title: 'Unlock ERPNext Success with Finbyz Tech',
              highlightText: 'Finbyz Tech',
              description: 'Get a personalized consultation and discover how our certified ERPNext experts can drive real results for your organization. Embrace efficiency, automation, and growth with solutions tailored to your needs.',
              primaryButton: {
                text: 'Connect for a Demo',
                icon: 'ArrowRight',
                action: 'https://finbyz.tech/contact'
              },
              secondaryButton: {
                text: 'Explore Our Services',
                icon: 'ExternalLink',
                action: 'https://finbyz.tech/hire-erpnext-implementer'
              },
              trustIndicator: {
                text: 'Trusted by 7000+ ERPNext Users Across 12+ Countries',
                icon: 'UserCheck'
              }
            }}
          />
        </div>
      </section>
    </>
  );
}


