'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Comment from '@/components/sections/comment';
import CTA from '@/components/sections/cta';
import { ShieldCheck, Users, Hospital, HeartPulse, UserCheck, CheckCircle, CalendarDays, FileText, FileCheck2, LineChart, Smartphone, Zap } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="ERP Solutions for Healthcare Providers Streamline Operations"
        highlightWords={['Healthcare Providers', 'Streamline Operations']}
        description="Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory."
        primaryButton={{ text: 'Get Started',action: 'https://finbyz.tech/contact' }}
        secondaryButton={{ text: 'Learn More' , action: () => {
          const el = document.getElementById('healthcare');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}}
        heroImage={{
          alt: 'ERP Solutions for Healthcare Providers Streamline Operations',
          src: '/images/ai-image.png',
        }}
        accentColor="orange"
      />

      {/* OVERVIEW SECTION */}
      <section id="healthcare">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify" >
          Finbyz Tech delivers specialized ERPNext solutions for the healthcare industry, empowering hospitals, clinics, and healthcare providers to achieve unparalleled operational efficiency. Our systems streamline patient management, billing, inventory, and regulatory compliance to ensure excellent patient care. Through a decade of ERP experience and certified ERPNext partnership, we unite clinical, administrative, financial, and operational functions on a seamless digital platform. By integrating all vital processes, we help healthcare organizations modernize operations, enhance compliance, save administrative time, and reduce costs. Partnering with Finbyz Tech gives you an edge in digital healthcare transformation with technology tailored for your unique needs.
          </p>
          {/* <TextSection
            data={{
              component_type: 'Text',
              paragraphs: [
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* INTRODUCTION TO FINBYZ HEALTHCARE ERP */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-bold text-[#1A5276] mb-6">Revolutionizing Healthcare with Advanced ERP Solutions</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Modern healthcare organizations operate at the intersection of high precision, sensitive data handling, and exceptional patient care. From patient records to compliance, hospitals and clinics face complex challenges daily. Finbyz Tech’s ERPNext-based healthcare solutions are designed to bring clarity, efficiency, and innovation into this landscape.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">With over a decade of ERP experience, global delivery expertise, and ERPNext partnership certification, Finbyz Tech delivers integrated systems that unite all vital functions—clinical, administrative, financial, and operational—on one seamless digital platform.</p>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section>
        <div className="container-custom py-8">
          {/* <h2 className="text-2xl font-bold text-orange-500 mb-6">The Unique Challenges of Healthcare Management</h2> */}
          <List
            title="Common Challenges Faced by Healthcare Organizations"
            items={[
              'Disjointed patient data: Patient records and billing stored in separate systems cause duplication and access delays.',
              'Manual claims handling: Complex billing and insurance management drain valuable administrative resources.',
              'Inventory inefficiency: Mismanagement of medical supplies or pharmaceutical stock can cause shortages or wastage.',
              'Scheduling conflicts: Poor resource scheduling results in underutilized facilities and long wait times.',
              'Compliance risks: Healthcare data security laws (HIPAA, GDPR, and local health authority mandates) require high accountability.',
              'Subpar patient experience: Lengthy waiting, unclear communication, and uncoordinated services reduce satisfaction.'
            ]}
            conclusion="An integrated ERP system resolves these challenges by providing a unified, transparent, and intelligent infrastructure for healthcare management."
            iconColor="text-[#1A5276]"
            iconSize={28}
          />
        </div>
      </section>

      {/* SOLUTION OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-bold text-[#1A5276] mb-6">Finbyz Tech's ERPNext Healthcare Solution</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Built on the flexible ERPNext framework, Finbyz Tech’s healthcare ERP directly addresses the operational and clinical needs of hospitals, laboratories, and clinics.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">It unites Electronic Health Records (EHR), patient management, and billing systems with real-time analytics—helping healthcare institutions save time, reduce costs, and elevate patient care quality.</p>
        </div>
      </section>

      {/* KEY MODULES SECTION (as cards in ResponsiveCardGrid) */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              variant: 'iconCard',
              cards: [
                {
                  id: '1',
                  icon: 'UserCheck',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  title: 'Patient Management',
                  description: 'Unified health records, automated appointment scheduling, and engaging patient portals improve accessibility and transparency.'
                },
                {
                  id: '2',
                  icon: 'FileCheck2',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  title: 'Billing & Claims Automation',
                  description: 'Streamlined billing, integrated insurance tracking, and payment gateways enable secure, efficient transactions.'
                },
                {
                  id: '3',
                  icon: 'Hospital',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  title: 'Pharmacy & Inventory',
                  description: 'Real-time stock tracking, batch/expiry control, and automated procurement prevent shortages or wastage.'
                },
                {
                  id: '4',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  title: 'HR & Payroll',
                  description: 'Efficient workforce scheduling, staff performance management, and payroll automation support operational excellence.'
                },
                {
                  id: '5',
                  icon: 'FileText',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  title: 'Laboratory Integration',
                  description: 'Automated lab requests, sample tracking, and real-time result reporting enhance diagnostics.'
                },
                {
                  id: '6',
                  icon: 'ShieldCheck',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  title: 'Compliance & Analytics',
                  description: 'HIPAA-ready privacy controls and data dashboards empower safer, smarter hospital management.'
                }
              ],
              layout: 'standard',
              cardClassName: 'border-none hover:shadow-xl transition-all'
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* MEASURABLE BENEFITS (Benefits component) */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: 'Measurable Benefits',
              component_type: 'Card',
              benefits: [
                {
                  number: 40,
                  suffix: '%',
                  header: 'Waiting Time Reduction',
                  label: 'Decrease',
                  description: 'Automated workflows and scheduling lead to a 40% reduction in patient waiting times.',
                  icon: 'CalendarDays',
                  palette: { iconBg: '#FEF3C7', iconColor: '#F59E42' }
                },
                {
                  number: 20,
                  suffix: '%',
                  header: 'Operational Cost Reduction',
                  label: 'Lower',
                  description: 'Streamlined processes cut costs by up to 20%.',
                  icon: 'LineChart',
                  palette: { iconBg: '#F0FDF4', iconColor: '#10b981' }
                },
                {
                  number: 7_000,
                  suffix: '+',
                  header: 'Global Users Supported',
                  label: 'Supported/day',
                  description: 'Thousands of active users benefit daily from Finbyz ERP solutions.',
                  icon: 'Users',
                  palette: { iconBg: '#EFF6FF', iconColor: '#3B82F6' }
                },
                {
                  number: 200,
                  suffix: '+',
                  header: 'Implementations',
                  label: 'in 12+ countries',
                  description: 'Proven expertise across a wide healthcare client base.',
                  icon: 'CheckCircle',
                  palette: { iconBg: '#ECFDF5', iconColor: '#10b981' }
                }
              ]
            }}
          />
        </div>
      </section>

      {/* WHY CHOOSE FINBYZ (Icon Cards) */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title:'Why Choose Finbyz Tech for Healthcare ERP?',
              variant: 'iconCard',
              cards: [
                {
                  id: '1',
                  icon: 'FileCheck2',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  title: 'Certified ERPNext Experts',
                  description: 'Frappe and ERPNext certified with deep healthcare domain specialization.'
                },
                {
                  id: '2',
                  icon: 'CheckCircle',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  title: 'Proven Track Record',
                  description: '200+ ERP implementations, 7,000+ global users, and a decade refining clinical workflows.'
                },
                {
                  id: '3',
                  icon: 'Zap',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  title: 'AI & Automation-Driven',
                  description: 'AI-powered CRM, WhatsApp integration, and predictive analytics enhance efficiency.'
                },
                {
                  id: '4',
                  icon: 'Hospital',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  title: 'Tailored Development',
                  description: 'Customizable for large networks or single hospitals, including lab and imaging integrations.'
                }
              ],
              layout: 'standard',
              cardClassName: 'border-none hover:shadow-xl transition-all'
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* CASE HIGHLIGHTS SECTION: List */}
      <section>
        <div className="container-custom py-8">
          <List
          title='Industry Impact and Case Highlights'
            items={[
              '40% decrease in waiting times through automated workflows.',
              'Reduced paperwork and manual errors from centralized EHR.',
              'Operational cost reduction by up to 20% through data-driven resource planning.',
              'Improved patient satisfaction scores, with real-time access to reports and updates.'
            ]}
            // Icon={HeartPulse}
            iconColor="text-[#1A5276]"
            iconSize={28}
          />
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section>
        <div className="container-custom py-4">
          <Comment
            data={{
              text:
                '“Our mission is to make advanced technology accessible to every healthcare institution. ERPNext helps hospitals evolve into intelligent ecosystems—where data, efficiency, and compassion coexist seamlessly.”\n\nMukesh Variyani, Managing Director at Finbyz Tech',
              symbol: ''
            }}
          />
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              subheading: { text: 'Ready to Transform Your Healthcare Operations?', icon: 'HeartPulse' },
              title: 'Start Your Digital Healthcare Transformation',
              highlightText:'Digital Healthcare',
              description: 'Empower your hospital or clinic with seamless, integrated ERPNext solutions from Finbyz Tech. Our experts will guide you every step of the way.',
              primaryButton: { text: 'Get Started', icon: 'Hospital', action: '/contact' },
              secondaryButton: { 
                text: 'Learn More', 
                icon: 'Users', 
                action: () => {
                  const el = document.getElementById('healthcare');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              },
              trustIndicator: { text: 'Trusted by leading healthcare providers', icon: 'CheckCircle' }
            }}
          />
        </div>
      </section>
    </>
  );
}
