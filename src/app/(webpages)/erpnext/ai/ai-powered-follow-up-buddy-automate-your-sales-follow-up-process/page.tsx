"use client"
import HeroSection from '@/components/sections/dynamic-hero'
import Section from '@/components/sections/Section'
import TextSection from '@/components/sections/text'
import ProcessWorkflow from '@/components/sections/process-workflow'
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid'
import CTA from '@/components/sections/cta'

export default function Page() {
  const heroProps = {
    headline: 'Effective Sales Follow-Up Automation Tool',
    highlightWords: ['Automation', 'Effective Sales'],
    description:
      'Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.',
    primaryButton: { text: 'Get a Demo', action: '/contact' },
    // secondaryButton: { text: 'Learn More', action: () => {
    //   const el = document.getElementById('follow-up');
    //   if (el) el.scrollIntoView({ behavior: 'smooth' });
    // } },
    heroImage: { alt: 'Effective Sales Follow-Up Automation Tool', src: "/images/Followup Buddy.gif" },

  }

  const introTextData = {
    component_type: 'Text' as const,
    title: 'Lead Follow-Up, Fully Automated',
    paragraphs: [
      'The Lead Follow-Up AI Tool automates the sales follow-up process by identifying inactive opportunities, analyzing customer context, and generating personalized follow-up emails using AI. It ensures every lead is nurtured on time without requiring manual effort from the sales team.',
    ],
  }

  const workflowData = {
    component_type: 'Timeline' as const,
    title: 'How Follow Up Buddy Works',
    subtitle: 'From detection to delivery — a complete AI-assisted workflow',
    processSteps: [
      {
        step: '01',
        title: 'Identify Stale Opportunities',
        description:
          'Automatically flags leads with no customer response for more than 5 days.',
        icon: 'Timer',
        details: [
          'Monitors email threads and CRM activity',
          'Configurable inactivity threshold',
          'Real-time detection with zero manual checks',
        ],
        duration: 'Continuous',
        iconColor: 'text-orange-600',
        iconBg: 'bg-orange-50',
      },
      {
        step: '02',
        title: 'Retrieve Customer & Lead Information',
        description:
          'Fetches contact details and company profiles directly from ERPNext.',
        icon: 'Database',
        details: [
          'Syncs contacts, companies, and opportunities',
          'Respects ERPNext permissions and roles',
          'Runs on schedule or on-demand',
        ],
        duration: 'Instant',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
      {
        step: '03',
        title: 'AI-Powered Research',
        description:
          'Enriches lead data with company updates, industry trends, and insights.',
        icon: 'Search',
        details: [
          'Company news and recent mentions',
          'Relevant industry trends and benchmarks',
          'Key context compiled into a concise brief',
        ],
        duration: 'Under a minute',
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-50',
      },
      {
        step: '04',
        title: 'Context Storage',
        description:
          'Saves summaries and insights for fast recall in future follow-ups.',
        icon: 'Archive',
        details: [
          'Lightweight profiles per lead and account',
          'Versioned context for auditability',
          'Reusable across teams and threads',
        ],
        duration: 'Instant',
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
      {
        step: '05',
        title: 'Analyze Previous Communication',
        description:
          'Understands tone, style, and engagement patterns from past emails.',
        icon: 'MessageSquare',
        details: [
          'Learns preferred tone (formal/informal)',
          'Detects objections and unresolved items',
          'Optimizes send-time suggestions',
        ],
        duration: 'Seconds',
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
      {
        step: '06',
        title: 'Generate Personalized Follow-Up Email',
        description:
          'Drafts tailored emails using research and history for higher relevance.',
        icon: 'Sparkles',
        details: [
          'Human-like, on-brand copy',
          'Clear CTA aligned to stage',
          'Editable preview before sending (optional)',
        ],
        duration: 'Seconds',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
      },
      {
        step: '07',
        title: 'Send Automated Follow-Up',
        description:
          'Delivers emails on time with consistent, context-aware messaging.',
        icon: 'Send',
        details: [
          'Automatic sending or approval workflow',
          'Tracks opens, clicks, and replies',
          'Logs activity back to ERPNext',
        ],
        duration: 'Scheduled',
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
    ],
    stats: {
      steps: '7 automated steps',
      weeks: 'Go live in days',
      transparency: '100% visibility',
      support: '24/7 monitoring',
    },
  }

  const benefitsData = {
    title: 'Benefits',
    subtitle:
      'Automate repetitive tasks, stay consistent, and engage with context that converts.',
    cards: [
      {
        id: 'time',
        title: 'Saves Time',
        description:
          'Automates repetitive follow-ups so your team can focus on high-impact selling.',
        icon: 'Cpu',
        iconColor: '#ffffff',
        iconBg: '#1A5276',
      },
      {
        id: 'response',
        title: 'Boosts Response Rates',
        description:
          'Personalized, context-aware emails increase engagement and replies.',
        icon: 'TrendingUp',
        iconColor: '#ffffff',
        iconBg: '#FF8C00',
      },
      {
        id: 'never-miss',
        title: 'Never Miss a Lead',
        description:
          'Every opportunity gets timely attention with automated triggers.',
        icon: 'Target',
        iconColor: '#ffffff',
        iconBg: "#27AE60",
      },
      {
        id: 'relationships',
        title: 'Strengthens Relationships',
        description:
          'Consistent touchpoints build trust and long-term loyalty.',
        icon: 'Award',
        iconBg: "#8E44AD",
        iconColor: "#ffffff"
      },
    ],
    layout: 'standard' as const,
    variant: 'iconCard' as const,
    showImage: false,
    cardClassName: 'border-none hover:shadow-xl transition-all hover:-translate-y-0.5',
  }

  const ctaData = {
    component_type: 'Text' as const,
    subheading: { text: 'Start automating follow-ups', icon: 'Sparkles' },
    title: 'Never let a lead go cold again',
    description:
      'Deploy Follow Up Buddy to identify stale opportunities, craft on-brand outreach, and send perfectly timed follow-ups — automatically.',
    primaryButton: { text: 'Get a Demo', icon: 'Send', action: '/contact' },
    secondaryButton: {
      text: 'See how it works', icon: 'Play', action: () => {
        const el = document.getElementById('follow-up');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    trustIndicator: { text: 'Secure by design • ERPNext-ready', icon: 'ShieldCheck' },
  }


  return (
    <>
      {/* 1️⃣ Hero Section (Required - First) */}
      <HeroSection {...heroProps} />

      {/* 2️⃣ Overview Section (Required) */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A5276]">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify" id="follow-up">
            Follow Up Buddy is an AI-driven Lead Follow-Up Tool designed to streamline sales processes by automatically identifying stale opportunities, analyzing customer context, and crafting personalized follow-up emails. This ensures that every lead is nurtured effectively without manual intervention, promoting timely communication and enhancing customer engagement. With features like automated lead detection, AI-powered research, and engagement analysis, Follow Up Buddy helps sales teams focus on higher-value tasks while boosting response rates and building stronger customer relationships.
          </p>
        </div>
      </Section>

      {/* 3️⃣ Main Content Sections */}
      <TextSection data={introTextData} />

      <ProcessWorkflow data={workflowData} />

      <ResponsiveCardGrid
        data={benefitsData}
        className="container-custom"
      />

      {/* 4️⃣ CTA Section (Required - Last) */}
      <CTA data={ctaData} />
    </>
  )
}
