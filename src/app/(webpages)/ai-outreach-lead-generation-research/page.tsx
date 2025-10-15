'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import ProcessWorkflow from '@/components/sections/process-workflow';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Points from '@/components/sections/points';
import CTA from '@/components/sections/cta';
import AdvantageList from '@/components/ai_components/AdvantageList';

export default function Page() {
  // SEO Inputs
  const seoTitle = 'AI-Powered Lead Generation and Email Outreach';
  const seoDescription = 'Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.';
  const heroImageSrc = '';

  return (
    <>
      {/* 1️⃣ HERO SECTION (Required - First) */}
      <HeroSection
        headline={seoTitle}
        highlightWords={[ "Lead Generation", "Email Outreach"]}
        description={seoDescription}
        heroImage={{ src: "/images/Content Spark (marketing automation).gif", alt: 'Content Spark (marketing automation)' }}
        primaryButton={{ text: 'Get a Demo', action:'/contact' }}

      // secondaryButton={{ text: 'See Workflow' }}
      />

      {/* 2️⃣ OVERVIEW SECTION (Required) */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A5276]">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The AI Outreach Workflow enhances lead generation, research, and outreach processes by utilizing Apollo for lead sourcing, applying AI for research enrichment, and automating email drafting for personalized communication. With two lead generation approaches, thorough company and contact insights, and optimized email scheduling, this workflow ensures effective and scalable outreach while minimizing manual effort, ultimately boosting conversion potential.
          </p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      {/* Lead Generation Approaches */}
      <Section>
        <div className="container-custom py-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1A5276]">Lead Generation</h3>
          <p className="text-gray-700 mb-8">Choose the approach that fits your campaign and data sources.</p>

          <ResponsiveCardGrid
            data={{
              title: '',
              subtitle: '',
              layout: 'standard',
              variant: 'iconCard',
              showImage: false,
              cardClassName: 'border-none hover:shadow-xl transition-all',
              cards: [
                {
                  id: 'approach-a',
                  title: 'Approach A – Company List (Sheet Upload)',
                  description:
                    'Upload an Excel or Google Sheet of target companies. Click “Get Companies” to fetch decision-makers and relevant titles from Apollo.',
                  icon: 'Upload',
                  iconColor: 'text-blue-600',
                  iconBg: 'bg-blue-100'
                },
                {
                  id: 'approach-b',
                  title: 'Approach B – Apollo Search URL',
                  description:
                    'Paste an Apollo search URL. We extract and fetch all leads from the link to build a qualified, targeted list aligned with your goals.',
                  icon: 'Link',
                  iconColor: 'text-emerald-600',
                  iconBg: 'bg-emerald-100'
                }
              ]
            }}
          />
        </div>
      </Section>

      {/* Workflow / Steps */}
      <Section>
        <div className="py-12">
          <ProcessWorkflow
            data={{
              component_type: 'Timeline',
              title: 'AI Outreach Workflow',
              subtitle: 'From sourcing to personalized emails—fully streamlined.',
              processSteps: [
                {
                  step: '01',
                  title: 'Lead Generation',
                  description:
                    'Build a qualified list using sheet upload or Apollo search URL to instantly fetch decision-makers.',
                  icon: '',
                  details: [
                    'Upload a company list or paste an Apollo search URL',
                    "Click 'Get Companies' to fetch decision-makers",
                    'Auto-qualify leads aligned to campaign goals'
                  ],
                  duration: 'Minutes',
                  iconColor: 'text-blue-600',
                  iconBg: 'bg-blue-100'
                },
                {
                  step: '02',
                  title: 'Research & Enrichment',
                  description:
                    'AI enriches each company and contact with relevant insights for context-aware messaging.',
                  icon: '',
                  details: [
                    'Company: background, industry, products, recent updates',
                    'Contact: role, history, responsibilities, LinkedIn activity',
                    'Personalized research brief per company & contact'
                  ],
                  duration: 'Automated',
                  iconColor: 'text-amber-600',
                  iconBg: 'bg-amber-100'
                },
                {
                  step: '03',
                  title: 'Email Drafting & Scheduling',
                  description:
                    'Generate three personalized email variations and schedule them for optimal engagement.',
                  icon: '',
                  details: [
                    '3 tailored email drafts per contact',
                    'Intro, value pitch, and soft CTA/follow-up',
                    'Scheduled at optimal times for higher replies'
                  ],
                  duration: 'Ongoing',
                  iconColor: 'text-violet-600',
                  iconBg: 'bg-violet-100'
                }
              ]
            }}
          />
        </div>
      </Section>

      {/* Features as Icon Cards */}
    

      {/* Benefits as List Points */}
      <Section className='container-custom'>
        <Points
          data={{
            component_type: 'Text',
            title: 'Benefits',
            points: [
              'Scalable personalization ensures highly relevant outreach for each lead.',
              'Research-backed messaging improves response rates and engagement.',
              'Time efficiency reduces manual lead research and email drafting workload.',
              'Consistent scheduling avoids missed follow-ups.',
              'Higher conversion potential through tailored communications.',
              'Streamlined workflow integrates lead sourcing, research, drafting, and outreach seamlessly.'
            ]
          }}
        />
      </Section>

      {/* 4️⃣ CTA SECTION (Required - Last) */}
      <CTA
        data={{
          subheading: { text: 'Ready to scale your outreach?', icon: 'Rocket' },
          title: 'Launch AI-Powered Outreach',
          description:
            'See how AI-driven research and automated drafting can transform your pipeline. Get a live demo or talk to an expert today.',
          primaryButton: { text: 'Get a Demo', icon: 'Play', action: () => { window.location.href = '/contact'; } },
          secondaryButton: { text: 'Download Workflow', icon: 'Download', action: '#resources' },
          trustIndicator: { text: 'No spam. Cancel anytime.', icon: 'ShieldCheck' }
        }}
      />
    </>
  );
}
