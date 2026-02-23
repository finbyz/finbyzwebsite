'use client';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import ContentIllustrationLeft from '@/components/sections/content-illustration-left';
import ContentIllustrationRight from '@/components/sections/content-illustration-right';

import { List } from '@/components/sections/list';

const heroImage = {
  alt: 'Custom API Development for Seamless Business Integration',
  src: '/images/api-developement_hero.png',
};

export default function Page() {
  return (
    <Fragment>
      {/* HERO SECTION */}
      <section>
       
          <DynamicHero
            headline="Custom API Development for Seamless Business Integration"
            highlightWords={[
              'Custom API',
              'Development',
              'Seamless',
              
            ]}
            description="Unlock seamless data flow and process automation with custom API development services. Integrate ERPNext with your enterprise applications for enhanced efficiency."
            primaryButton={{ text: 'Get Started' ,action: 'https://finbyz.tech/contact'}}
            secondaryButton={{ text: 'Learn More', action: () => { const el = document.getElementById('overview'); 
              if (el) el.scrollIntoView({ behavior: 'smooth' }); } }}
            heroImage={heroImage}
            accentColor="orange"
          />
      
      </section>

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom mt-5">
        
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn  ">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Finbyz Tech delivers expert custom API development services designed to integrate your disparate business systems, including ERPNext, for unparalleled operational efficiency. Our solutions ensure secure, real-time data exchange, empowering your enterprise with robust connectivity. Partner with us to build powerful, scalable APIs that drive automation and innovation across your digital ecosystem.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Our approach goes beyond simple system connection &mdash; we craft APIs that enable seamless workflows, boost productivity, and drive sustainable business growth. Whether you are aiming to synchronize data, eliminate silos, or automate core processes, our certified team is committed to elevating your digital infrastructure.
          </p>
          {/* <TextSection
            data={{
              paragraphs: [
                '',
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* MAIN CONTENT: Introduction */}
      <section  id='overview'>
        <div className="container-custom ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn  ">Custom API Development Services: Connecting Your Business Ecosystem</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           In today's interconnected business landscape, fragmented systems are a major roadblock to efficiency and growth. Data silos, manual transfers, and incompatible platforms hinder productivity and delay critical decision-making. At Finbyz Tech, we understand that true digital transformation hinges on seamless communication between your applications. That's why we specialize in custom API development services, crafting robust and secure interfaces that enable your entire business ecosystem to work as one.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Our expertise lies in creating bespoke API solutions that integrate your core enterprise applications, including and especially ERPNext, with other crucial platforms. This isn't just about linking systems; it's about unlocking new levels of automation, data consistency, and operational agility.
          </p>
          {/* <TextSection
            data={{
              title: 'Custom API Development Services: Connecting Your Business Ecosystem',
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* API Development Services Explanation */}
      <section >
        
            {/* <h2 className="container-custom text-3xl md:text-4xl font-bold mt-20 text-[#1A5276] animate-fadeIn ">What are API Development Services?</h2> */}
            <div className='container-custom'>
          <ContentIllustrationRight
            data={{
              title: 'What are API Development Services?',
              paragraphs: [
                'An Application Programming Interface (API) acts as a digital bridge, allowing different software applications to communicate and exchange data securely. Think of it as a universal translator that enables your CRM to talk to your ERP, your e-commerce platform to update inventory in real-time, or your custom module to trigger actions in a third-party service.',
                'Custom API development involves building these specific bridges tailored to your unique business needs. Unlike off-the-shelf connectors, custom APIs are designed from the ground up to handle your specific data structures, workflows, and security requirements, ensuring perfect alignment with your operational goals.'
              ],
              imageSrc: '/images/api-development-services_content.png',
              imageAlt: 'api-development-services_content'
            }}
          /></div>
        
      </section>

      {/* WHY CUSTOM APIS - BENEFITS CARD GRID */}
      <section >
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Why Custom APIs are Essential for Your Business Growth',
              variant: 'iconCard',
              layout: 'standard',
              cards: [
                {
                  id: 1,
                  title: 'Enhanced Efficiency & Automation',
                  description: 'Automate routine tasks and data transfers between systems, reducing manual effort and minimizing errors. This frees up your team to focus on strategic initiatives.',
                  icon: 'Zap',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Real-time Data Synchronization',
                  description: 'Ensure all your systems operate with the most current data. From inventory levels updated instantly post-sale to customer information flowing seamlessly between sales and support, real-time sync eliminates discrepancies.',
                  icon: 'RefreshCcw',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'Improved Decision-Making',
                  description: 'With consolidated and accurate data accessible across platforms, you gain a holistic view of your operations, enabling faster, more informed strategic decisions.',
                  icon: 'BarChart2',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'Unlocking Innovation',
                  description: 'APIs open doors for new functionalities, allowing you to connect with emerging technologies, third-party services, and build innovative solutions on top of your existing infrastructure.',
                  icon: 'Layers',
                 iconColor: "#ffffff",
                  iconBg: "#8E44AD", 
                },
                {
                  id: 5,
                  title: 'Scalability & Flexibility',
                  description: 'Custom APIs are built to grow with your business. They provide a flexible architecture that can accommodate new applications, services, or expanding data volumes without overhauling your entire system.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: 'Superior Customer Experience',
                  description: 'Integrated systems mean faster service, personalized interactions, and a consistent customer journey, leading to higher satisfaction and loyalty.',
                  icon: 'Smile',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                }
              ]
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Seamless ERPNext Integration */}
      <section >
        <div className="container-custom py-8">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn  ">Seamless ERPNext Integration: Our Core Expertise</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           As a certified ERPNext Partner with over a decade of experience and 200+ successful projects, Finbyz Tech deeply understands the power of a well-integrated ERPNext system. Our custom API development services are particularly impactful when it comes to extending ERPNext's capabilities.
          </p>
           <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           We build robust APIs that allow ERPNext to communicate effortlessly with core platforms such as e-commerce, payment gateways, CRM & marketing tools, logistics providers, legacy systems, custom modules/apps, and IoT devices & sensors. This seamless integration maximizes your ERPNext investment, turning it into the central nervous system of a truly connected enterprise.
          </p>
          {/* <TextSection
            data={{
              title: 'Seamless ERPNext Integration: Our Core Expertise',
              paragraphs: [
                '',
                ""
              ]
            }}
          /> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn  ">ERPNext Integration Touchpoints</h2>
          <List
            title=""
            items={[
              'E-commerce Platforms: Synchronize products, orders, customer data, inventory (Shopify, Magento, custom stores)',
              'Payment Gateways: Automate invoice generation, payment processing, and reconciliation',
              'CRM & Marketing Automation: Connect ERPNext to your CRM (e.g., Salesforce) and marketing platforms',
              'Logistics & Shipping: Integrate with logistics partners for order fulfillment and tracking',
              'Legacy Systems: Bridge gaps with legacy applications for continuity and data integrity',
              'Custom Modules & Applications: Enable bespoke applications to interact with ERPNext data and functionality',
              'IoT Devices & Sensors: Integrate data from assets for analytics and automation'
            ]}
            Icon={undefined}
            iconColor="text-[#1A5276]"
            accentColor="#FF9000"
          />
        </div>
      </section>

      {/* API Development Process - Steps as Cards */}
      <section >
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Our Comprehensive API Development Process',
              variant: 'iconCard',
              layout: 'standard',
              cards: [
                {
                  id: 1,
                  title: '1. Discovery & Requirements Gathering',
                  description: 'We begin by thoroughly understanding your business processes, existing systems, and specific integration needs. In-depth consultations help define the scope and objectives for your API project.',
                  icon: 'Search',
                 iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: '2. API Design & Architecture',
                  description: 'Our experts design a robust, scalable, and secure API architecture (RESTful, GraphQL, etc.) focusing on performance, usability, and long-term extensibility.',
                  icon: 'PenTool',
                 iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: '3. Development & Implementation',
                  description: 'Leveraging modern frameworks, our team builds your custom APIs with clean code, comprehensive documentation, and modularity for ease of maintenance.',
                  icon: 'Code',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: '4. Rigorous Testing',
                  description: 'Every API undergoes unit, integration, performance, and security testing to ensure reliability and optimal operation under all conditions.',
                  icon: 'CheckCircle2',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: '5. Deployment & Integration',
                  description: 'We handle seamless deployment and facilitate integration with target applications, providing guidance, configuration, and support.',
                  icon: 'Rocket',
                    iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: '6. Maintenance & Support',
                  description: 'Post-launch, we offer proactive maintenance, monitoring, and updates so your APIs remain secure, reliable, and adaptable as your business evolves.',
                  icon: 'LifeBuoy',
                   iconColor: "#ffffff",
                  iconBg: '#FFB347',
                }
              ]
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Why Choose Us - Unique Value Props */}
      <section >
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Why Choose Finbyz Tech for Your API Development?',
              variant: 'iconCard',
              layout: 'standard',
              cards: [
                {
                  id: 1,
                  title: 'Proven ERPNext Integration Expertise',
                  description: 'Our certified ERPNext team ensures API integrations are optimized, extending ERP\'s capabilities for business growth.',
                  icon: 'Medal',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Decades of Experience',
                  description: 'With over a decade in IT consulting and 30+ skilled resources, we deliver value-driven digital solutions.',
                  icon: 'Calendar',
                   iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'Tailored, Scalable Solutions',
                  description: 'No one-size-fits-all &mdash; your APIs are finely crafted for your unique processes and scalable for future growth.',
                  icon: 'Settings',
                   iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'Focus on Security & Performance',
                  description: 'We prioritize secure authentication, encryption, and high-performance design to keep your data and operations protected.',
                  icon: 'Shield',
                   iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: 'ISO 27001:2013 Certified',
                  description: 'We uphold world-class information security standards, giving you confidence in your integrations and data management.',
                  icon: 'Award',
                   iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: 'Client-Centric Approach',
                  description: 'We partner closely at every stage, ensuring transparency and outcomes that exceed your business objectives.',
                  icon: 'UserCheck',
                 iconColor: "#ffffff",
                  iconBg: '#FFB347',
                },
                {
                  id: 7,
                  title: 'Global Reach, Local Touch',
                  description: 'With clients in 12+ countries, we deliver global best practices with a personalized, attentive service.',
                  icon: 'Globe',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 8,
                  title: 'Continuous Support',
                  description: 'Enjoy ongoing support and optimization so your APIs remain reliable as your business evolves.',
                  icon: 'HeartHandshake',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                }
              ]
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Closing Statement */}
      <section >
        <div className="container-custom py-8">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Connect Your Systems, Empower Your Business</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Fragmented systems are a thing of the past. Embrace the power of seamless integration with Finbyz Tech's custom API development services. Whether you need to connect ERPNext with your e-commerce platform, integrate a custom module, or synchronize data across your entire enterprise, our experts are ready to build the bridges you need.
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
           Unlock greater efficiency, drive automation, and gain a competitive edge. It's time to make your business systems work in harmony.
          </p>
          
          {/* <TextSection
            data={{
              title: 'Connect Your Systems, Empower Your Business',
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>
    </Fragment>
  );
}
