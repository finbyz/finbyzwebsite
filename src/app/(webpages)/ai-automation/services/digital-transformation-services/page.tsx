'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Digital Transformation Solutions ERPNext & AI Automation"
        highlightWords={['Digital Transformation', 'ERPNext', 'AI Automation']}
        description="Unlock growth with comprehensive digital transformation services. Finbyz Tech specializes in ERPNext, AI automation, custom software, and strategic IT consulting to modernize your business operations."
        accentColor="orange"
        heroImage={{
          alt: 'Digital Transformation Solutions ERPNext & AI Automation',
          src:'/images/digital-transformation-service.png',
          
        }}
       
        primaryButton={{ text: 'Get Demo', action: 'https://finbyz.tech/contact' }}
        secondaryButton={{ text: 'Learn More', action: () => {
            const el = document.getElementById('contruction-resources');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}}
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-6">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            Overview
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
                'Finbyz Tech empowers organizations to evolve, innovate, and excel in the digital era. By delivering strategic digital transformation powered by ERPNext, AI automation, and custom software, we enable our clients to optimize core business processes, enhance operational agility, and realize new growth opportunities. Our expert team takes a holistic and hands-on approach to modernizing your operations, improving efficiency, and future-proofing your business—all while maintaining a strong focus on security, scalability, and measurable results. Partnering with us ensures you are equipped to navigate the challenges of today’s business landscape and emerge as a true leader in your industry.',
                'Our end-to-end capabilities—from consulting and process re-engineering to advanced technology deployment and continuous optimization—help you accelerate digital adoption, boost productivity, and deliver remarkable experiences for your workforce and customers alike. Finbyz Tech’s ISO-certified, client-centric methodology means your transformation journey will be strategically aligned to your vision and supported every step of the way.'
          </p>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <section>
        <div className="container-custom py-8">
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">

                "In today's rapidly evolving business landscape, digital transformation isn't just an option—it's a necessity for sustained growth and competitive advantage. At Finbyz Tech, we partner with businesses to navigate this complex journey, leveraging our decade of expertise in ERPNext, cutting-edge AI automation, and integrated solutions to redefine operational excellence and unlock new possibilities.",
                "Our approach goes beyond simply adopting new technologies. We focus on a holistic transformation that optimizes processes, empowers your workforce, and delivers tangible, measurable results, ensuring your business is agile, efficient, and ready for the future."
          </p>
        </div>
      </section>

      {/* WHY DIGITAL TRANSFORMATION - BENEFITS LIST SECTION */}
      <div id='contruction-resources'></div>
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">Why Digital Transformation is Your Business Imperative</h2>
          <List
            title="Embracing digital change allows you to:"
            items={[
              'Enhance Operational Efficiency: Streamline workflows, reduce manual errors, and accelerate core business processes.',
              'Drive Cost Savings: Optimize resource allocation, minimize waste, and improve productivity across departments.',
              'Boost Customer Experience: Deliver personalized services, improve responsiveness, and build stronger client relationships.',
              'Gain Actionable Insights: Leverage data analytics to make informed decisions and identify new growth opportunities.',
              'Foster Innovation & Agility: Adapt quickly to market shifts and introduce new products or services with greater speed.',
              'Improve Employee Productivity: Provide tools that simplify tasks, automate routines, and free up your team for strategic work.'
            ]}
          />
        </div>
      </section>

      {/* HOLISTIC APPROACH SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            Finbyz Tech's Holistic Approach to Digital Transformation
          </h2>
         
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Our methodology is built on a foundation of deep industry knowledge, technological prowess, and a client-centric philosophy. As an ISO 27001:2013 Certified IT Consulting & Software Development Company and a Certified ERPNext Partner, we bring reliability and proven expertise to every project. We understand that effective digital transformation requires more than just implementing software; it demands a strategic vision, careful planning, and seamless integration.
            We assess your unique business needs, identify pain points, and design a tailored transformation strategy that aligns with your long-term objectives. Our end-to-end services ensure a smooth transition, from initial consultation and implementation to ongoing support and optimization.
          </p>
           
        </div>
      </section>

      {/* CORE DIGITAL TRANSFORMATION PILLARS - FEATURE CARDS */}
      <section>
        <div className="container-custom py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Our Core Digital Transformation Pillars',
              variant: 'iconCard',
              cards: [
                {
                  id: 1,
                  title: 'ERPNext Implementation & Optimization',
                  description: 'End-to-end ERP deployment, deep industry modules, data migration, integration (including WhatsApp), training & support—trusted by 7000+ users worldwide.' ,
                  icon: 'ServerCog',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'AI-Powered Automation & Intelligence',
                  description: 'AI-CRM Integration, Resume Ranker, Lead Intelligence, Content Spark, Follow-up Buddy & Smart Card Scanner—drive efficiency and smarter decision-making everywhere.',
                  icon: 'Brain',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Custom Software Development',
                  description: 'Web/mobile and enterprise apps built for your process—highly tailored, scalable, and seamlessly integrated to meet unique business needs.',
                  icon: 'Code2',
                  iconColor: '#ffffff',
                  iconBg: '#27AE60',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Strategic IT Consulting',
                  description: 'From cloud strategy to cybersecurity and digital roadmaps, get expert advice and planning to maximize value from your IT investments.',
                  icon: 'Lightbulb',
                  iconColor: '#ffffff',
                  iconBg: '#8E44AD',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Data Analytics & Business Intelligence',
                  description: 'Visualize KPIs, analyze trends, and make data-driven decisions—turn your business data into a competitive advantage.',
                  icon: 'BarChart',
                  iconColor: '#ffffff',
                  iconBg: '#FF3333',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Resource Augmentation',
                  description: 'Flexible, dedicated ERPNext consultants and developers—scale your team on demand for swift project delivery.',
                  icon: 'Users',
                  iconColor: '#ffffff',
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              layout: 'standard',
            }}
            className="animate-fade-in-up"
          />
        </div>
      </section>

      {/* INDUSTRIES WE TRANSFORM - EVEN NUMBER CARD GRID */}
      <section>
        <div className="container-custom py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Industries We Transform',
              subtitle: 'Specialized digital transformation solutions for diverse verticals',
              variant: 'iconCard',
              cards: [
                {
                  id: 1,
                  title: 'Chemical',
                  description: '',
                  icon: 'FlaskConical',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 2,
                  title: 'Pharma',
                  description: '',
                  icon: 'Cross',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 3,
                  title: 'Metal Casting',
                  description: '',
                  icon: 'Hammer',
                  iconColor: '#ffffff',
                  iconBg: '#27AE60',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 4,
                  title: 'Engineering',
                  description: '',
                  icon: 'Settings2',
                  iconColor: '#ffffff',
                  iconBg: '#8E44AD',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 5,
                  title: 'Ceramic',
                  description: '',
                  icon: 'CupSoda',
                  iconColor: '#ffffff',
                  iconBg: '#FF3333',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 6,
                  title: 'Education',
                  description: '',
                  icon: 'GraduationCap',
                  iconColor: '#ffffff',
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 7,
                  title: 'FMCG',
                  description: '',
                  icon: 'ShoppingCart',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 8,
                  title: 'Healthcare',
                  description: '',
                  icon: 'HeartPulse',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 9,
                  title: 'Textile',
                  description: '',
                  icon: 'Scissors',
                  iconColor: '#ffffff',
                  iconBg: '#27AE60',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 10,
                  title: 'Logistics',
                  description: '',
                  icon: 'Truck',
                  iconColor: '#ffffff',
                  iconBg: '#8E44AD',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 11,
                  title: 'Agro',
                  description: '',
                  icon: 'Leaf',
                  iconColor: '#ffffff',
                  iconBg: '#FF3333',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 12,
                  title: 'Plastic',
                  description: '',
                  icon: 'Square',
                  iconColor: '#ffffff',
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 13,
                  title: 'Commodity Trading',
                  description: '',
                  icon: 'Coins',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 14,
                  title: 'Export/Import (EXIM)',
                  description: '',
                  icon: 'Globe',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 15,
                  title: 'General Manufacturing',
                  description: '',
                  icon: 'Factory',
                  iconColor: '#ffffff',
                  iconBg: '#27AE60',
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 16,
                  title: 'Trading & Distribution',
                  description: '',
                  icon: 'PackageOpen',
                  iconColor: '#ffffff',
                  iconBg: '#8E44AD',
                  className: 'border-none hover:shadow-xl transition-all',
                }
              ],
              layout: 'standard',
            }}
            className="animate-fade-in-up"
          />
        </div>
      </section>

      {/* THE FINBYZ TECH ADVANTAGE - BENEFITS */}
      <section>
        <div className="container-custom py-8">
          <Benefits
            data={{
              title: 'The Finbyz Tech Advantage',
              subtitle: 'Why Partner With Us?',
              benefits: [
                {
                  number: 10,
                  suffix: '+',
                  label: 'Years of Experience',
                  header: 'Proven Expertise',
                  description: 'A decade of experience, over 200 ERPNext projects, and 7000+ users served globally.',
                  icon: 'Award',
                  palette: {
                    iconBg: 'white',
                    iconColor: 'orange'
                  }
                },
                {
                  number: 27001,
                  suffix: ':2013',
                  label: 'ISO Certified',
                  header: 'Certified Excellence',
                  description: 'ISO 27001:2013 Certified and Certified ERPNext Partner, ensuring security and quality.',
                  icon: 'ShieldCheck',
                  palette: {
                    iconBg: 'white',
                    iconColor: 'orange'
                  }
                },
                {
                  number: 12,
                  suffix: '+',
                  label: 'Countries',
                  header: 'Global Reach',
                  description: 'Clients across 12+ countries benefit from our worldwide perspective.',
                  icon: 'Globe',
                  palette: {
                    iconBg: 'white',
                    iconColor: 'orange'
                  }
                },
                {
                  number: 1,
                  suffix: '',
                  label: 'Comprehensive Solutions',
                  header: 'End-to-End Offering',
                  description: 'From ERP to AI automation and custom development—all under one roof.',
                  icon: 'Rocket',
                  palette: {
                    iconBg: 'white',
                    iconColor: 'orange'
                  }
                }
              ],
            }}
          />
        </div>
      </section>

      {/* PRODUCTIFY FEATURE SECTION */}
      <section>
        <div className="container-custom py-8">

          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
          Productify: Elevating Work Insights for ERPNext
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
                As part of our commitment to enhancing productivity and transparency, we offer Productify – Work Insights for ERPNext. This innovative product provides:
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
             • Productivity Score Tracking: Monitor and improve team performance.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
             • Task & Project Management with Auto-Timesheets: Streamline project execution and time tracking.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
                      • Phone Call Analysis & Meeting Visualization: Gain insights into communication and field team activities with location tracking.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            • Team Transparency & CRM Sync: Foster collaboration and ensure seamless data flow.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Productify is designed to give you real-time visibility into productivity, smarter CRM, and effortless task management, ensuring your digital transformation extends to every aspect of your workforce.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: { text: 'Get expert guidance', icon: 'Sparkles' },
              title: 'Ready to Transform Your Business?',
              description: 'The future of your business is digital. Lead the change with Finbyz Tech. Schedule a consultation and discover how our experts can empower your growth.',
              primaryButton: {
                text: 'Connect with Our Experts',
                action: 'mailto:inquiry@finbyz.tech',
                icon: 'Mail',
              },
              secondaryButton: {
                text: 'Explore ERPNext Solutions',
                icon: 'ArrowRight',
                action: 'https://finbyz.tech/hire-erpnext-implementer'
              },
              trustIndicator: {
                text: 'ISO 27001:2013 Certified | 200+ ERPNext Projects | 12+ Countries',
                icon: 'CheckCircle',
              },
            }}
          />
        </div>
      </section>
    </>
  );
}
