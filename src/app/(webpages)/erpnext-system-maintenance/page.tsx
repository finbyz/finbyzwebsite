'use client';
import { ReactElement } from 'react';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Comment from '@/components/sections/comment';
import CTA from '@/components/sections/cta';
import { List } from '@/components/sections/list';

export default function Page(): ReactElement {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <DynamicHero
          headline="ERPNext System Maintenance Updates Performance Optimization"
          highlightWords={["Maintenance", "Updates", "Performance"]}
          description="Ensure your ERPNext system runs flawlessly with Finbyz Tech's comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security."
          heroImage={{
            alt: 'ERPNext System Maintenance Updates Performance Optimization',
            src: '/images/erpnext-system-maintenance.png',
          }}
          primaryButton={{
            text: 'Get Started',
            action: 'https://finbyz.tech/contact',
          }}
          secondaryButton={{
            text: 'Learn More',
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            },
          }}
          accentColor="orange"
        />
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="w-full">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">At Finbyz Tech, we understand the immense importance of a robust and well-maintained ERP system for modern businesses. ERPNext lies at the heart of efficient operations, integrating crucial processes, automating workflows, and ensuring the security and reliability needed to compete in today's digital world. As your business evolves and grows, ensuring peak ERP performance, continuous updates, and regular maintenance is critical to avoid disruption, mitigate risks, and accelerate your digital transformation journey. Our certified experts follow a holistic, proactive approach — focused on minimizing downtime, enhancing security, and streamlining system updates so that your organization remains agile and prepared for future challenges.</p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">By partnering with Finbyz Tech, you gain a team with extensive experience and technical know-how in managing all aspects of ERPNext maintenance, updates, and performance optimization. Our experts develop tailored plans and utilize industry best practices to proactively address performance bottlenecks, quickly apply critical security patches, resolve issues before they arise, and ensure your ERPNext system remains a powerful asset aligned with your strategic business goals.</p>          
        </div>
      </section>

      {/* INTRODUCTORY TEXT SECTION */}
      <section>
      <h2 className="text-3xl font-bold text-[#1A5276] mb-4 container-custom">Comprehensive ERPNext System Maintenance and Optimization Services</h2>
        
          <TextSection
            data={{
              title: '',
              paragraphs: [
                "In today's fast-paced business environment, your Enterprise Resource Planning (ERP) system is the backbone of your operations. For businesses leveraging ERPNext, maintaining its peak performance, security, and stability is not just an option—it's a necessity. Without consistent care, even the most robust ERP system can face performance bottlenecks, security vulnerabilities, or outdated functionalities that hinder your business growth.",
                "Finbyz Tech, an ISO 27001:2013 Certified IT Consulting & Software Development Company and a Certified ERPNext Partner, offers comprehensive system maintenance, updates, and performance optimization services designed to keep your ERPNext instance running flawlessly. With over a decade of experience in ERP implementation and consulting, we understand the intricacies of ensuring your system remains a powerful asset, not a liability."
              ],
            }}
          />
        
      </section>

      {/* WHY PROACTIVE MAINTENANCE BENEFITS */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: 'Why Proactive ERPNext Maintenance is Essential',
              subtitle: '',
              benefits: [
                {
                  
                  suffix: '',
                  label: '',
                  header: 'Prevent Downtime',
                  description: 'Unplanned outages can halt operations, leading to significant financial losses and customer dissatisfaction.',
                  icon: 'Activity',
                  palette: { iconBg: 'bg-orange-500', iconColor: 'text-white' }
                },
                {
                  
                  suffix: '',
                  label: '',
                  header: 'Enhance Security',
                  description: 'Stay ahead of cyber threats with timely security patches and robust monitoring.',
                  icon: 'ShieldCheck',
                  palette: { iconBg: 'bg-orange-500', iconColor: 'text-white' }
                },
                {
                  
                  suffix: '',
                  label: '',
                  header: 'Optimize Performance',
                  description: 'Ensure your system responds quickly, handling increasing data volumes and user loads without slowdowns.',
                  icon: 'Zap',
                  palette: { iconBg: 'bg-orange-500', iconColor: 'text-white' }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Ensure Data Integrity',
                  description: 'Regular checks and backups safeguard your valuable business data.',
                  icon: 'Database',
                  palette: { iconBg: 'bg-orange-500', iconColor: 'text-white' }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Stay Compliant',
                  description: 'Keep your system updated with the latest regulatory requirements and software standards.',
                  icon: 'CheckCircle',
                  palette: { iconBg: 'bg-orange-500', iconColor: 'text-white' }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Maximize ROI',
                  description: 'Extend the lifespan and effectiveness of your ERPNext investment.',
                  icon: 'TrendingUp',
                  palette: { iconBg: 'bg-orange-500', iconColor: 'text-white' }
                },
              ],
            }}
          />
        </div>
      </section>

      {/* CORE SERVICES CARDS SECTION */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Comprehensive ERPNext System Maintenance Services',
              cards: [
                {
                  id: 1,
                  title: 'ERPNext Updates & Upgrades',
                  description: 'Seamlessly transition systems to newer versions, apply critical security patches, and ensure all modules and integrations remain compatible.',
                  icon: 'Shield',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Performance Optimization',
                  description: 'Database cleanup and tuning, server resource management, and ERPNext configuration adjustments for speed and stability.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'Security Audits & Vulnerability Management',
                  description: 'Regular security assessments, access control review, and proactive threat mitigation for your ERP and business data.',
                  icon: 'Shield',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'Data Backup & Recovery',
                  description: 'Automated backup strategies, disaster recovery planning, and data integrity checks ensure full business continuity.',
                  icon: 'BookUser',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: '24/7 Monitoring & Issue Resolution',
                  description: 'Continuous monitoring, real-time alerts, and rapid expert support for round-the-clock peace of mind.',
                  icon: 'Eye',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: 'Customization & Integration Support',
                  description: 'Post-update testing and troubleshooting for all custom modules and integrations, ensuring seamless business processes.',
                  icon: 'Puzzle',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                }
              ],
              variant: 'iconCard'
            }}
          />
        </div>
      </section>

      {/* FINBYZ TECH DIFFERENTIATORS SECTION */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'The Finbyz Tech Advantage: Why Partner With Us?',
              cards: [
                {
                  id: 1,
                  title: 'Certified ERPNext Partner',
                  description: 'Our official partnership status reflects deep expertise and stringent best practices.',
                  icon: 'Award',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Over a Decade of Experience',
                  description: '10+ years in ERP implementation, support, and consulting across multiple sectors.',
                  icon: 'Briefcase',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'Expert Team',
                  description: 'Experience the power of 30+ certified ERP consultants, developers, and functional experts.',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'ISO 27001:2013 Certified',
                  description: 'We handle your business data with the highest level of information security.',
                  icon: 'Lock',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: 'Global Reach, Local Expertise',
                  description: 'Serving clients in 12+ countries, with personalized support for every business need.',
                  icon: 'Globe',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: 'Proactive, Tailored Approach',
                  description: 'Customized maintenance plans and strategies to keep your ERPNext aligned with your goals.',
                  icon: 'Target',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                }
              ],
              variant: 'iconCard',
            }}
          />
        </div>
      </section>

      {/* INDUSTRY MODULES & EXPERTISE HIGHLIGHT SECTION */}
      <section>
        <div className="py-8">
        <h2 className="text-3xl font-bold text-[#1A5276] mb-4 container-custom ">Industry Expertise & AI-Driven Optimization</h2>
          <TextSection
            data={{
              title: '',
              paragraphs: [
                'Our extensive experience covers industry-specific ERP modules, including Chemical Manufacturing, EXIM, Metal Foundry, and Logistics. We further enhance your ERP system with innovative AI-driven automation solutions tailored for specialized and core ERPNext features, delivering ongoing process efficiency, accuracy, and invaluable business intelligence.',
                'Entrust your digital transformation to Finbyz Tech—the trusted partner in ERPNext maintenance, upgrades, and performance excellence.'
              ],
            }}
          />
        </div>
      </section>

      {/* COMMENT/QUOTE SECTION */}
      <section>
        <div className="container-custom">
          <Comment
            data={{
              text: "Don't let neglected maintenance compromise your business operations. Partner with Finbyz Tech to ensure your ERPNext system is always secure, high-performing, and ready to support your growth.",
              symbol: '',
            }}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              component_type: 'Text',
              subheading: {
                text: 'Secure your ERPNext investment',
                icon: 'ShieldCheck',
              },
              title: 'Ready to Optimize Your ERPNext Performance?',
              highlightText:'ERPNext',
              description: 'Contact Finbyz Tech today for a consultation and discover how our experts can design a comprehensive maintenance and optimization plan for your business.',
              primaryButton: {
                text: 'Connect with Experts',
                icon: 'Send',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'Explore Our Methodology',
                icon: 'Lightbulb',
                action: () => {
                  const el = document.getElementById('overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                },
              },
              trustIndicator: {
                text: 'Over 200+ ERPNext projects delivered for 7000+ users globally',
                icon: 'Users',
              },
            }}
          />
        </div>
      </section>
    </>
  );
}
