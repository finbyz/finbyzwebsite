'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Differentiators from '@/components/sections/differentiators';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <DynamicHero
        headline="Fintech ERPNext & Custom Software Solutions for Financial Tech"
        highlightWords={["Custom Software", "Financial Tech"]}
        description="Empower your FinTech business with robust ERPNext and custom software solutions. We deliver AI automation, secure platforms, and expert consulting."
        heroImage={{
          alt: "Fintech ERPNext & Custom Software Solutions for Financial Tech",
          // src: "/web-api/fb/n/files/placeholder.jpg",
          src:"/images/fintech-solutions.png",
        }}
        primaryButton={{ text: "Get Started" , action: 'https://finbyz.tech/contact'}}
        secondaryButton={{ text: 'Learn More' , action: () => {
          const el = document.getElementById('fintech');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        },}}
        accentColor="orange"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-6 text-justify">Finbyz Tech provides transformative ERPNext solutions and custom software development services, designed with the unique and ever-evolving demands of the FinTech industry in mind. Our team works closely with financial technology organizations to optimize operations, adapt seamlessly to evolving regulatory standards, and ignite innovation at every level. Through a blend of deep industry knowledge and technical excellence, we empower global FinTech businesses to simplify complex workflows, enhance data security, and achieve scalable growth. Streamline compliance processes, boost productivity, and gain a competitive edge by partnering with experts who understand both the macro and micro-challenges of the modern financial landscape.</p>
          <TextSection
            data={{
              paragraphs: [
                ''
              ]
            }}
          />
        </div>
      </section>

      {/* MAIN CONTENT SECTION 1: Industry Context & Approach */}
      <section>
        <div className="container-custom py-5 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-[#1A5276] mb-4" id="fintech">Fintech Solutions: Powering the Future of Finance with ERPNext & Custom Software</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-6 text-justify">The financial technology (FinTech) sector is a dynamic environment defined by constant innovation, strict regulations, and an ever-increasing need for both efficiency and security. To excel, FinTech businesses demand robust, flexible, and intelligent software solutions that evolve with market changes and customer expectations.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-6 text-justify">At Finbyz Tech, we specialize in not just providing solutions, but in architecting comprehensive ERPNext and custom software platforms tailored for the financial technology industry. With more than a decade of expertise in ERP implementation and digital transformation, our team helps FinTech companies streamline operations, heighten security, ensure regulatory compliance, and unlock possibility for future growth.</p>
          <TextSection
            data={{
              title: "",
              paragraphs: [
                ''
                
              ]
            }}
          />
        </div>
      </section>

      {/* MAIN CONTENT SECTION 2: Navigating FinTech Complexities */}
      <section>
        <div className="container-custom py-5 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Navigating the Complexities of FinTech with Strategic Solutions</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-6 text-justify">Operating in FinTech means dealing with multifaceted challenges—from managing intricate financial transactions and safeguarding sensitive data, to keeping up with ever-shifting regulatory landscapes such as GDPR and PCI DSS. Off-the-shelf tools often fail to provide the agility and security needed, resulting in bottlenecks and missed opportunities.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-6 text-justify">Finbyz Tech solves these challenges with custom-fit solutions built to blend seamlessly with your FinTech ecosystem. Our strategic approach combines the depth of ERPNext’s capabilities, advanced AI automation, and tailored software development for a fully integrated, future-ready digital infrastructure.</p>
          <TextSection
            data={{
              title: "",
              paragraphs: [
                ''
              ]
            }}
          />
        </div>
      </section>

      {/* MAIN CONTENT SECTION 3: Solution Portfolio (ERPNext, Custom Dev, AI, Analytics) */}
      <section>
        <div className="py-8 animate-fade-in-up">
          <ResponsiveCardGrid
            data={{
              title: 'Our FinTech Solution Portfolio',
              variant: 'iconCard',
              cards: [
                {
                  id: 'erpnext',
                  title: 'ERPNext Implementation',
                  description: 'Custom deployments for financial operations: accounting, multi-currency, project management, CRM & onboarding, HR & payroll, compliance, and FinTech integrations.',
                  icon: 'Database',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 'custom-software',
                  title: 'Custom Software Development',
                  description: 'Bespoke trading platforms, loan origination, payment gateways, fraud detection, regulatory tools, and robust API integrations for specialized FinTech needs.',
                  icon: 'Rocket',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 'ai-automation',
                  title: 'AI-Driven Automation',
                  description: 'Automated compliance, intelligent chatbots, real-time fraud detection, algorithmic trading, lead intelligence, and sentiment analysis for smarter FinTech processes.',
                  icon: 'Brain',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 'data-analytics',
                  title: 'Data Analytics & Insights',
                  description: 'Transform financial data into actionable insights with dashboards, reporting, risk analysis, customer segmentation, and operational performance tracking.',
                  icon: 'Activity',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                },
              ],
            }}
          />
        </div>
      </section>

      {/* MAIN CONTENT SECTION 4: Benefits / Why Finbyz Tech */}
      <section>
        <div className=" py-8 animate-fade-in-up">
          <Benefits
            data={{
              component_type: 'Card',
              title: 'Why Finbyz Tech is Your Ideal FinTech Partner',
              benefits: [
                {
                  number: 10,
                  suffix: '+',
                  label: 'Years',
                  header: 'Deep ERPNext Expertise',
                  description: 'Certified ERPNext Partner with over a decade of hands-on FinTech implementations, delivering value across 200+ projects.',
                  icon: 'Database',
                  palette: {
                    iconBg: 'bg-white',
                    iconColor: 'text-orange-500',
                  }
                },
                {
                  number: 7000,
                  suffix: '+',
                  label: 'Users',
                  header: 'Proven Track Record',
                  description: 'Empowering thousands of users in 12+ countries, we showcase a consistent record of supporting financial growth and transformation.',
                  icon: 'Users',
                  palette: {
                    iconBg: 'bg-white',
                    iconColor: 'text-orange-500',
                  }
                },
                {
                  number: 1,
                  suffix: '',
                  label: 'ISO 27001:2013',
                  header: 'Certified Security',
                  description: 'Our ISO-certified approach to information security protects your sensitive financial data and ensures full peace of mind.',
                  icon: 'ShieldCheck',
                  palette: {
                    iconBg: 'bg-white',
                    iconColor: 'text-orange-500',
                  }
                },
                {
                  number: 100,
                  suffix: '%',
                  label: 'Custom Fit',
                  header: 'Industry Customization',
                  description: 'We tailor solutions for your specific FinTech model and compliance environment—never one-size-fits-all.',
                  icon: 'CheckCircle2',
                  palette: {
                    iconBg: 'bg-white',
                    iconColor: 'text-orange-500',
                  }
                }
              ]
            }}
          />
        </div>
      </section>

      {/* MAIN CONTENT SECTION 5: Quote / Partner Highlight */}
      <section>
        <div className="py-8 animate-fade-in-up">
          <Differentiators
            data={{
              title: 'Transform Your FinTech Business Today',
              subtitle: '',
              quote: {
                text: 'The future of finance is digital, intelligent, and interconnected. Partner with Finbyz Tech to build a robust, secure, and scalable technology infrastructure that empowers your FinTech business to innovate faster, operate more efficiently, and achieve sustainable growth.',
                highlight: 'FinTech operations?',
                author: 'Finbyz Tech',
              }
            }}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="py-4 animate-fade-in-up">
          <CTA
            data={{
              component_type: 'Text',
              subheading: {
                text: 'Let\'s Build the Future of Finance',
                icon: 'Rocket',
              },
              title: 'Contact Finbyz Tech for a Personalized Demo & Strategy Session',
              description: 'Partner with experts for tailor-made ERPNext and FinTech software solutions. Let\'s drive growth, security, and innovation together.',
              primaryButton: {
                text: 'Get Started',
                icon: 'UserCheck',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'Radar',
                action: () => {
                  const el = document.getElementById('fintech');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              },
              trustIndicator: {
                text: 'Trusted by 200+ FinTech organizations worldwide',
                icon: 'TrendingUp',
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}
