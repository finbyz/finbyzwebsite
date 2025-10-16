'use client'
import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import ProcessWorkflow from '@/components/sections/process-workflow';
import Benefits from '@/components/sections/benefits';
import Points from '@/components/sections/points';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import CTA from '@/components/sections/cta';

export default function Page() {
  const seoTitle = 'Content Spark Streamline Marketing Automation';
  const seoDescription = 'Content Spark is an advanced marketing automation platform designed to optimize content creation for marketing teams, ensuring brand consistency and rapid ideation.';
  const heroImage = '/images/Content Spark (marketing automation).gif';
  const highlightWords = ['Content Spark', 'Marketing Automation']

  return (
    <>
      {/* 1️⃣ HERO SECTION (Required - First) */}
      <HeroSection
        headline={seoTitle}
        highlightWords={highlightWords}
        description={seoDescription}
        heroImage={{ alt: seoTitle, src: heroImage }}
        primaryButton={{ text: 'Get a demo', action: '/contact' }}
      />

      {/* 2️⃣ OVERVIEW SECTION (Required) */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A5276]" id="content-spark">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Content Spark leverages the Frappe Framework to help businesses enhance their marketing strategies through AI-powered content generation tailored to brand voice and audience demographics. The platform automates the entire workflow from ideation to publishing, allowing users to create professional LinkedIn posts and accompanying visuals in minutes, while ensuring consistency and engagement. With benefits like time savings, creative boosts, and integrated visuals, Content Spark revolutionizes the marketing process in the ERPNext ecosystem.
          </p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      <ProcessWorkflow
        data={{
          component_type: 'Timeline',
          title: 'Workflow Steps',
          subtitle: 'From brand training to scheduled publishing — in minutes',
          processSteps: [
            {
              step: '01',
              title: 'Train your AI Agent',
              description:
                'Define voice, tone, and style so every post reflects your brand without heavy edits.',
              details: ['Voice & tone presets', 'Style and vocabulary guidelines', 'Reusable brand profile'],
              duration: 'One-time setup',
              icon: 'GraduationCap',
              iconColor: 'text-blue-600',
              iconBg: 'bg-blue-50',
            },
            {
              step: '02',
              title: 'Provide Input',
              description:
                'Enter topic keywords, intended audience, and how many ideas you need.',
              details: ['Topics & campaign themes', 'Audience demographics', 'Number of variations'],
              duration: '30–60 seconds',
              icon: 'FormInput',
              iconColor: 'text-indigo-600',
              iconBg: 'bg-indigo-50',
            },
            {
              step: '03',
              title: 'Get Ideas Instantly',
              description:
                'Receive multiple creative directions tailored to your brief and audience.',
              details: ['On-brand concepts', 'Compelling angles', 'Actionable hooks'],
              duration: 'Instant',
              icon: 'Sparkles',
              iconColor: 'text-emerald-600',
              iconBg: 'bg-emerald-50',
            },
            {
              step: '04',
              title: 'Create Content',
              description:
                'Select the best idea and generate a polished LinkedIn post ready to publish.',
              details: ['Clear structure', 'Engaging copy', 'Strong CTAs'],
              duration: 'Under a minute',
              icon: 'FileText',
              iconColor: 'text-violet-600',
              iconBg: 'bg-violet-50',
            },
            {
              step: '05',
              title: 'Generate Images',
              description:
                'Parallel AI agents create branded visuals aligned with your content and guidelines.',
              details: ['Brand-safe palettes', 'Original concepts', 'Consistent templates'],
              duration: 'Seconds',
              icon: 'Image',
              iconColor: 'text-rose-600',
              iconBg: 'bg-rose-50',
            },
            {
              step: '06',
              title: 'Refine with Prompts',
              description:
                'Adjust tone, length, or emphasis via simple feedback to optimize content fast.',
              details: ['Tone & length controls', 'Emphasis tuning', 'Near real-time updates'],
              duration: 'Interactive',
              icon: 'SlidersHorizontal',
              iconColor: 'text-amber-600',
              iconBg: 'bg-amber-50',
            },
            {
              step: '07',
              title: 'Publish or Schedule',
              description:
                'Post now or schedule via ERPNext’s integrated calendar to keep a consistent cadence.',
              details: ['Instant publish', 'ERPNext calendar', 'Campaign-level scheduling'],
              duration: 'On your timeline',
              icon: 'CalendarClock',
              iconColor: 'text-cyan-600',
              iconBg: 'bg-cyan-50',
            },
          ],
          stats: {
            steps: '7 steps',
            weeks: 'Go-live in days',
            transparency: 'Consistent brand voice',
            support: 'ERPNext native',
          },
        }}
      />

      <Benefits
        data={{
          component_type: 'Card',
          title: 'Benefits',
          subtitle: 'Smarter, faster, and fully on-brand marketing execution',
          benefits: [
            {
              number: 1,
              suffix: '',
              label: '',
              header: 'Significant Time Savings',
              description:
                'Compress brainstorming, drafting, and design into minutes with AI-driven workflows.',
              icon: 'Timer',
              palette: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
            },
            {
              number: 2,
              suffix: '',
              label: '',
              header: 'Brand Consistency',
              description:
                'Train once and maintain voice and design standards across every single post.',
              icon: 'ShieldCheck',
              palette: { iconBg: 'bg-green-50', iconColor: 'text-green-600' },
            },
            {
              number: 3,
              suffix: '',
              label: '',
              header: 'Creative Boost',
              description:
                'Beat blank-page syndrome with on-brand ideas tailored to audience and theme.',
              icon: 'Sparkles',
              palette: { iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
            },
            {
              number: 4,
              suffix: '',
              label: '',
              header: 'Integrated Visuals',
              description:
                'Auto-generate matching images—no external design tools or delays required.',
              icon: 'Image',
              palette: { iconBg: 'bg-rose-50', iconColor: 'text-rose-600' },
            },
            {
              number: 5,
              suffix: '',
              label: '',
              header: 'Unified Workflow',
              description:
                'Work end-to-end inside ERPNext—no app switching, smoother collaboration.',
              icon: 'Workflow',
              palette: { iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
            },
            {
              number: 6,
              suffix: '',
              label: '',
              header: 'Scalable Campaigns',
              description:
                'Generate and schedule multiple posts simultaneously to scale with ease.',
              icon: 'Layers3',
              palette: { iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600' },
            },
          ],
        }}
      />

      <section className='container-custom'>
        <Points
          data={{
            component_type: 'Text',
            title: 'How It Works',
            points: [
              'Provide topic and audience details in a simple input interface.',
              'AI engines produce content ideas and on-brand draft posts.',
              'Concurrent agents generate matching branded visuals.',
              'Refine drafts interactively via prompts (tone, length, emphasis).',
              'Publish or schedule directly inside ERPNext.'
            ],
          }}
        />
      </section>

      <ResponsiveCardGrid
        data={{
          title: 'Output',
          subtitle: 'Everything you need to go live with confidence',
          cards: [
            {
              id: 'o1',
              title: 'Ready-to-publish LinkedIn posts',
              description: 'Polished copy aligned to brand voice and audience.',
              icon: 'Cpu',
              iconColor: "#ffffff",
              iconBg: '#1A5276',
            },
            {
              id: 'o2',
              title: 'Custom branded images',
              description: 'Distinct visuals that match your message and guidelines.',
              icon: 'Target',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
            },
            {
              id: 'o3',
              title: 'Flexible scheduling',
              description: 'Publish now or queue in ERPNext’s calendar with ease.',
              icon: 'BarChart3',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
            },
          ],
          layout: 'standard',
          showImage: false,
          variant: 'iconCard',
          cardClassName: 'border-none hover:shadow-xl transition-all',
        }}
        className=""
      />

      {/* 4️⃣ CTA SECTION (Required - Last) */}
      <CTA
        data={{
          subheading: { text: 'Get Started', icon: 'Rocket' },
          title: 'Start creating on-brand content in minutes',
          description:
            'Empower your marketing team with AI agents that ideate, write, and design—right inside ERPNext. Faster campaigns, consistent branding, and better results.',
          primaryButton: { text: 'Request a demo', icon: 'Calendar', action: '/contact' },
          secondaryButton: {
            text: 'See it in action',
            icon: 'PlayCircle',
            action: () => {
              const el = document.getElementById('content-spark');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          trustIndicator: { text: 'Built for ERPNext on Frappe Framework', icon: 'ShieldCheck' },
        }}
      />
    </>
  );
}
