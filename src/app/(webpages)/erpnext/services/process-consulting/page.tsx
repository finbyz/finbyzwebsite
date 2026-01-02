'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import ContentIllustrationLeft from '@/components/sections/content-illustration-left';
import CTA from '@/components/sections/cta';
import { CheckCircle, Layers3, DollarSign, BarChart3, ChevronRight, Folders, Award, ShieldCheck, Settings, ListChecks, TrendingUp, Zap,  Users } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* 1️⃣ HERO SECTION */}
      <section >
      
          
            <DynamicHero
              accentColor="orange"
              headline="Optimize Business Processes with Expert Consulting & ERPNext"
              highlightWords={["Processes", "Expert Consulting", ]}
              description="Streamline operations, boost efficiency, and maximize ERPNext with expert process consulting. Finbyz Tech offers tailored solutions for sustainable business growth."
              heroImage={{
                alt: "Optimize Business Processes with Expert Consulting & ERPNext",
                src: "/images/process-consulting.png",
                
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
            />
         
        
      </section>

      {/* 2️⃣ OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Unlock the full potential of your operations with Finbyz Tech's process consulting services. Our approach bridges deep industry expertise, ERPNext mastery, and a relentless focus on tangible business outcomes. We empower organizations to identify bottlenecks, streamline workflows, and maximize technology investments – resulting in sustainable growth and operational excellence. Leveraging more than a decade of hands-on ERPNext implementation experience, our consultants tailor solutions that drive measurable improvements in productivity, cost-efficiency, and scalability. Partner with us to map, optimize, and elevate your business processes, and build a solid foundation for future-ready enterprise performance.
          </p>
        </div>
      </section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      {/* Section 1: Introduction */}
      <section id="overview">
        <div className="container-custom py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Elevate Your Operations: Expert Process Consulting for Sustainable Growth</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           In today's dynamic business landscape, efficiency isn't just a buzzword—it's the bedrock of sustainable growth and competitive advantage.
          </p>
           <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          Finbyz Tech understands that even the most advanced ERP systems, like ERPNext, can only unlock their full potential when underpinned by streamlined, well-defined business processes. Our expert process consulting services are designed to meticulously analyze, optimize, and transform your workflows, ensuring every operation contributes directly to your strategic objectives.
          </p>
        
          {/* <TextSection
            data={{
              title: "Elevate Your Operations: Expert Process Consulting for Sustainable Growth",
              paragraphs: [
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* Section 2: What is Process Consulting and Why Does it Matter? */}
      <section>
        <div className="container-custom py-8">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">What is Process Consulting and Why Does it Matter?</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          Process consulting at Finbyz Tech goes beyond mere advice. It's a deep dive into the heart of your operations, examining how tasks are performed, information flows, and decisions are made. Our goal is to identify inefficiencies, eliminate redundancies, and design optimal workflows that align perfectly with your business goals and the capabilities of your ERPNext system.
          </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ""
              ]
            }}
          /> */}
          <List
            title="Why is this crucial for your business?"
            items={[
              'Enhanced Efficiency: Streamlined processes mean less waste, faster execution, and higher output with the same resources.',
              'Cost Reduction: By eliminating bottlenecks and unnecessary steps, you significantly reduce operational costs.',
              'Improved Accuracy: Well-defined processes minimize human error, leading to better data quality and more reliable outcomes.',
              'Better Decision-Making: Clear processes provide accurate, real-time data, empowering leaders with actionable insights.',
              'Scalability & Adaptability: Optimized processes are easier to scale and adapt to market changes or business growth.',
              'Maximized ERPNext ROI: Ensure your ERPNext investment is fully utilized to support your most efficient workflows.'
            ]}
            accentColor="orange"
            iconColor="text-[#1A5276]"
            Icon={CheckCircle}
            iconSize={24}
          />
        </div>
      </section>

      {/* Section 3: Our Comprehensive Approach to Process Optimization */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Our Comprehensive Approach to Process Optimization</h2>
           
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          At Finbyz Tech, we leverage over a decade of experience in ERP implementation and IT consulting to deliver a holistic process optimization strategy. Our ISO 27001:2013 certification underscores our commitment to structured, secure, and high-quality methodologies.
          </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ""
              ]
            }}
          /> */}
          
        </div>
        <ResponsiveCardGrid
            data={{
              title: '',
              cards: [
                {
                  id: 1,
                  title: 'Discovery & Analysis',
                  description: 'Engage stakeholders to map your current processes, uncover pain points, and identify areas of inefficiency. Analyze technology utilization, resource allocation, and KPIs with stakeholder input.',
                  icon: 'Folders',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Design & Optimization',
                  description: 'Redesign workflows for efficiency, configure ERPNext integration, recommend automation strategies, and document best-in-class processes tailored to your needs.',
                  icon: 'Settings',
                   iconColor: "#ffffff",
                    iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Implementation & Training',
                  description: 'Facilitate adoption via pilot programs, user training, and change management—ensuring engagement, proficiency, and sustained improvement.',
                  icon: 'Award',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Continuous Improvement',
                  description: 'Establish ongoing performance monitoring, feedback loops, and periodic process reviews to ensure your operations remain agile and effective.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",      
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard'
            }}
          />
      </section>

      {/* Section 4: Leveraging ERPNext for Unmatched Process Efficiency */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Leveraging ERPNext for Unmatched Process Efficiency</h2>

           
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          As a Certified ERPNext Partner with over a decade of implementation expertise and 200+ successful projects, Finbyz Tech seamlessly integrates process consulting with your ERPNext ecosystem. Our team configures and customizes ERPNext to enable optimal workflows, delivering a functional and cohesive solution every time.
          </p>
           <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          We further specialize in industry-specific ERP modules tailored for sectors with unique process requirements, enhancing every facet of your operations.
          </p>
          {/* <TextSection
            data={{
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
          
        </div>
        <ResponsiveCardGrid
            data={{
              cards: [
                {
                  id: 1,
                  title: 'Chemical Manufacturing',
                  description: 'Batch process management, BOM, QA checks, compliance reporting.',
                  icon: 'FlaskConical',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Metal Casting',
                  description: 'Specialized workflows for foundry operations and production.',
                  icon: 'Layers3',
                 iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Logistics',
                  description: 'Fleet, shipment, and route management modules designed for operational control.',
                  icon: 'Truck',
                   iconColor: "#ffffff",
                   iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Export/Import (EXIM)',
                  description: 'Export documentation, customs, packing lists, RoDTEP claim management, and more.',
                  icon: 'Globe',
                   iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard'
            }}
          />
      </section>

      {/* Section 5: Finbyz Tech: Your Partner in Operational Excellence */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Finbyz Tech: Your Partner in Operational Excellence</h2>
         
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          Choosing Finbyz Tech means partnering with a team dedicated to your success. Our commitment to clarity, efficiency, and impact, as championed by our CEO, Mukesh Variyani, is embedded in every project. With 30+ skilled resources, serving 7000+ ERPNext users across 12+ countries, we bring proven expertise and a deep understanding of diverse business challenges.
          </p>
           
          {/* <TextSection
            data={{
              paragraphs: [
                ""
              ]
            }}
          /> */}
           </div>
          <ResponsiveCardGrid
            data={{
              cards: [
                {
                  id: 1,
                  title: 'Deep Domain Expertise',
                  description: 'Strong functional knowledge in complex industries.',
                  icon: 'ListChecks',
                   iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'ERPNext Mastery',
                  description: 'Certified partnership and a track record of extensive, successful implementations.',
                  icon: 'CheckCircle',
                 iconColor: "#ffffff",
                 iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'AI-Driven Automation',
                  description: 'Cutting-edge AI automation seamlessly integrated for greater efficiency.',
                  icon: 'Zap',
                   iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Tailored Solutions',
                  description: 'Custom-built recommendations designed specifically for your business needs.',
                  icon: 'Puzzle',
                  iconColor: "#ffffff",
                 iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Measurable Results',
                  description: 'We focus on delivering tangible productivity boosts, cost savings, and agility.',
                  icon: 'BarChart3',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Global Impact',
                  description: '30+ experts, 7000+ users, and projects in 12+ countries worldwide.',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard'
            }}
          />
          <div className="container-custom mt-6">
            <p className='text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify'>
Ready to transform your business processes and unlock new levels of efficiency? Let's build smarter, more efficient workflows together.
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
      
      {/* 4️⃣ CTA SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Let\'s Get Started',
                icon: 'Rocket'
              },
              title: 'Unlock Operational Excellence with Finbyz Tech',
              highlightText:'Finbyz Tech',
              description: 'Contact our expert consultants today and begin your journey to streamlined, scalable business processes integrated with ERPNext.',
              primaryButton: {
                text: 'Book Your Free Assessment',
                icon: 'ArrowRight',
                action: 'https://finbyz.tech/contact'
              },
              secondaryButton: {
                text: 'Talk to Our Experts',
                icon: 'MessageCircle',
                action: 'https://finbyz.tech/contact'
              },
              trustIndicator: {
                text: 'Trusted by 7000+ ERPNext Users',
                icon: 'Users'
              }
            }}
          />
        </div>
      </section>
    </>
  );
}
