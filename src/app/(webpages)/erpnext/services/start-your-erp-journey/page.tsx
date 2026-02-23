'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Comment from '@/components/sections/comment';


export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section >
        <DynamicHero
          headline="Begin Your Digital Transformation Journey with ERPNext Adoption"
          highlightWords={[
            'Digital',
            'Transformation',
            'ERPNext',
            'Adoption'
          ]}
          description="Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey."
          primaryButton={{ text: 'Get Started', action: 'https://finbyz.tech/contact' }}
          secondaryButton={{
            text: 'Learn More',
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          heroImage={{
            alt: 'Begin Your Digital Transformation Journey with ERPNext Adoption',
            src: '/images/start-your-erp-journey.png',
           
          }}
          accentColor="orange"
        />
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview">
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Overview</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Finbyz Tech empowers organizations to embark on their digital transformation journey with confidence and clarity. As an experienced ERPNext implementation partner, we provide comprehensive solutions that address every stage of ERP adoption — from initial discovery and planning to seamless integration and continuous optimization. Our methodology is focused on delivering measurable business value: streamlining operations, enhancing data-driven decision making, and driving greater profitability. With deep industry expertise and a commitment to hands-on, result-oriented service, we ensure our clients achieve operational excellence and sustainable competitive advantage using ERPNext as the backbone of their digital evolution.
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

      {/* INTRO SECTION */}
      <section>
        <div className="container-custom py-8">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Start Your ERP Journey: Navigate Digital Transformation with Finbyz Tech</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
         In today's dynamic business landscape, embarking on an Enterprise Resource Planning (ERP) journey is no longer a luxury but a strategic imperative. It's about more than just software; it's a commitment to digital transformation, operational efficiency, and sustainable growth. At Finbyz Tech, we understand that every business's journey is unique. That's why we offer a guided, comprehensive approach to ERPNext adoption and digital transformation, tailored for businesses at every stage of implementation.
           </p>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
         Whether you're taking your first step towards integrated systems, optimizing an existing setup, or seeking advanced automation, Finbyz Tech is your trusted partner. With over a decade of specialized experience, we ensure your ERP journey is not just successful, but truly transformative.
           </p>
          {/* <TextSection
            data={{
              title: 'Start Your ERP Journey: Navigate Digital Transformation with Finbyz Tech',
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* WHY GUIDED ERP SECTION */}
      <section>
        <div className="container-custom py-8">
          
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">The Path to Digital Excellence: Why a Guided ERP Journey Matters</h2>
           <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
         Implementing an ERP system can be complex. Without expert guidance, businesses often face critical challenges that can derail success.
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ''
              ]
            }}
          /> */}
          <List
            title="Common ERP Implementation Risks"
            items={[
              'Scope Creep: Uncontrolled expansion of project requirements.',
              'User Adoption Issues: Resistance from employees to new systems.',
              'Budget Overruns: Exceeding planned financial allocations.',
              'Integration Headaches: Difficulties connecting ERP with other business tools.',
              'Lack of Customization: Generic solutions failing to meet specific industry needs.'
            ]}
            accentColor="orange"
            iconColor="orange"
          />
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
         Finbyz Tech mitigates these risks by providing a structured, step-by-step methodology that focuses on clarity, efficiency, and measurable impact. Our approach ensures that your ERPNext adoption is smooth, effective, and perfectly aligned with your business objectives.
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

      {/* COMPANY EXPERTISE / TRUSTED PARTNER */}
      <section>
        <div className="py-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Your Trusted Partner for ERPNext Adoption</h2> */}
          <Benefits
            data={{
              component_type: 'Card',
              benefits: [
                {
                  number: 10,
                  suffix: '+',
                  label: 'Years Experience',
                  header: 'ERP Expertise',
                  description: 'Over a decade of ERP implementation and consulting.',
                  icon: 'Medal',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  number: 200,
                  suffix: '+',
                  label: 'Projects',
                  header: 'ERPNext Success',
                  description: 'Successful ERPNext projects delivered across industries.',
                  icon: 'BarChart2',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  number: 30,
                  suffix: '+',
                  label: 'Experts',
                  header: 'Skilled Team',
                  description: 'ERP consultants, developers, and functional experts.',
                  icon: 'Users',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                },
                {
                  number: 7000,
                  suffix: '+',
                  label: 'ERPNext Users',
                  header: 'Global Users',
                  description: 'Serving ERPNext users worldwide in 12+ countries.',
                  icon: 'Globe',
                  palette: { iconBg: 'bg-orange-100', iconColor: 'text-orange-500' }
                }
              ],
              title: 'Finbyz Tech by the Numbers',
              subtitle: 'Proven capability, certified excellence'
            }}
          />
          <TextSection
            data={{
              paragraphs: [
                'Finbyz Tech stands as an ISO 27001:2013 Certified IT Consulting & Software Development Company and a proud Certified ERPNext Partner. Our expertise extends beyond implementation; we specialize in industry-specific ERP modules and AI-driven automation, ensuring your solution is future-proof and highly effective.'
              ]
            }}
          />
        </div>
      </section>

      {/* WHY ERPNext / FOUNDATION */}
      <section>
        <div className="container-custom py-8">
         
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Unlocking Potential with ERPNext: A Powerful Foundation</h2>
           <p className='text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify'>
We champion ERPNext for its flexibility, comprehensive features, and open-source advantage. As a robust and scalable platform, ERPNext integrates critical business functions into a single system, enabling a unified view of your operations. From manufacturing to CRM and HR, ERPNext streamlines processes and fosters collaboration.
           </p>
           <p className='text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify'>
Our Certified Partner status signifies our deep technical and functional mastery—empowering your business to thrive with secure, custom ERP solutions purpose-built for your sector.
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
                '',
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Our Comprehensive Services for Your Digital Transformation</h2>
          
        </div>
        <ResponsiveCardGrid
            data={{
              title: '',
              variant: 'iconCard',
              cards: [
                {
                  id: 1,
                  title: 'ERPNext Implementation',
                  description:
                    'End-to-end ERP deployment—discovery, planning, configuration, migration, training, and post-go-live support. Industry-focused customizations for ideal workflows.',
                  icon: 'Settings',
                   iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Custom Software Development',
                  description:
                    'Tailored automation and business process applications. Custom modules, integrations, and extensions to enhance ERPNext for your challenges.',
                  icon: 'Code',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'IT Consulting & Digital Advisory',
                  description:
                    'Strategic consultants guide your digital transformation journey. We help define IT roadmaps, optimize processes, and realize long-term value.',
                  icon: 'Compass',
                    iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Resource Augmentation',
                  description:
                    'On-demand ERPNext consultants and developers infused into your team for project continuity and specialized expertise.',
                  icon: 'UserPlus',
                 iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'CRM & HR Systems',
                  description:
                    'Integrated CRM and HR tools for seamless management of your customer interactions and workforce.',
                  icon: 'Users2',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Data Analytics',
                  description:
                    'Real-time dashboards and business intelligence to convert data into actionable insights for informed decisions.',
                  icon: 'BarChartHorizontal',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ]
            }}
          />
      </section>

      {/* INDUSTRY EXPERTISE & MODULES */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Industry-Specific Expertise: Solutions That Resonate</h2>
          </div>
          <ResponsiveCardGrid
            data={{
              title: '',
              variant: 'iconCard',
              cards: [
                {
                  id: 'manuf',
                  title: 'Manufacturing',
                  description:
                    'Chemical, Pharma, Metal Casting, Engineering, Ceramic, Textile, Plastic, General Manufacturing.',
                  icon: 'Factory',
                 iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'trade',
                  title: 'Trade & Distribution',
                  description:
                    'FMCG, Commodity Trading, Trading & Distribution, Export/Import (EXIM).',
                  icon: 'Package',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'services',
                  title: 'Services',
                  description: 'Education, Healthcare, Logistics.',
                  icon: 'Briefcase',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'agro',
                  title: 'Agriculture',
                  description: 'Agro solutions for modern farming businesses.',
                  icon: 'Sprout',
                 iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ]
            }}
          />
          <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4 text-[#1A5276] animate-fadeIn">Proprietary Modules & Key Solutions</h2>
          
        </div>
        <ResponsiveCardGrid
            data={{
              title: '',
              variant: 'iconCard',
              cards: [
                {
                  id: 'chem',
                  title: 'Chemical Manufacturing Module',
                  description:
                    'Batch process management, BOM, QA checks, and compliance reporting.',
                  icon: 'TestTube2',
                 iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'exim',
                  title: 'EXIM (Export-Import) Module',
                  description:
                    'Complete export documentation, customs procedures, packing lists, RoDTEP management.',
                  icon: 'FileText',
                   iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'foundry',
                  title: 'Metal Foundry Module',
                  description:
                    'Specialized workflows for casting and foundry production.',
                  icon: 'Cpu',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'logistics',
                  title: 'Logistics Module',
                  description: 'Fleet, shipment, and route management workflows.',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'whatsapp',
                  title: 'WhatsApp Integration',
                  description:
                    'Seamless ERPNext-linked communication workflows.',
                  icon: 'MessageCircle',
                 iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'ai',
                  title: 'AI-Driven Automation',
                  description:
                    'Unlock advanced workflow automations, insights, and process intelligence.',
                  icon: 'Bot',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ]
            }}
          />
      </section>

      {/* AI AUTOMATION SECTION */}
      <section>
        <div className="container-custom py-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Beyond ERP: AI-Driven Automation for the Future</h3>
          
        </div>
        <div className=''>
          <ResponsiveCardGrid
            data={{
              title: '',
              variant: 'iconCard',
              cards: [
                {
                  id: 'ai-crm',
                  title: 'AI-CRM Integration',
                  description:
                    'AI agents provide expert assistance with CRM tasks.',
                  icon: 'UserCog',
                   iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'resume',
                  title: 'Resume Ranker & Smarter Hiring',
                  description:
                    'AI-driven resume screening and applicant match scoring.',
                  icon: 'FileSearch',
                   iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'call-feedback',
                  title: 'Call Feedback',
                  description:
                    'AI-powered sentiment and objection analysis for customer calls.',
                  icon: 'Mic',
                   iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'lead-intel',
                  title: 'AI Outreach & Lead Intelligence',
                  description:
                    'Automated lead generation, research, and AI prospect enrichment.',
                  icon: 'Lightbulb',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'content',
                  title: 'Content Spark',
                  description:
                    'AI content creation & LinkedIn posting automation.',
                  icon: 'PenTool',
                   iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'card-scan',
                  title: 'Smart Card Scanner',
                  description:
                    'Scan business cards directly into ERPNext.',
                  icon: 'Contact',
                   iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'followup',
                  title: 'Follow-up Buddy',
                  description:
                    'Automated, personalized AI-powered follow-ups.',
                  icon: 'Repeat',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 'productify',
                  title: 'Productify ',
                  description:
                    'Proprietary product for productivity scoring, auto-timesheets, meeting visualization and transparent team management.',
                  icon: 'LineChart',
                   iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ]
            }}
          />
        </div>
      </section>

      {/* CLOSING / QUOTE SECTION */}
      <section>
        <div className="container-custom py-8">
          <h4 className='text-2xl md:text-2xl font-bold mb-4 text-[#1A5276] animate-fadeIn'>Under the leadership of Mukesh Variyani, Managing Director, Finbyz Tech is committed to driving clarity, efficiency, and impact in every project. Our philosophy is rooted in showing tangible value and practical benefits – saving time, improving efficiency, boosting profits, and simplifying work. We believe in educating, engaging, and sparking curiosity, rather than hard selling. Your product or service should be the hero of the story, and our role is to make sure it shines through a seamless, powerful ERP solution.</h4>
          {/* <Comment data={{
            text: '',
            symbol: ''
          }} /> */}
        </div>
      </section>
    </>
  );
}
