import React from 'react'
import type { Metadata } from 'next'
import DynamicHero from '@/components/sections/dynamic-hero'
import Section from '@/components/sections/Section'
import Points from '@/components/sections/points'
// 👇 1. Import the new component
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid'
import Benefits from '@/components/sections/benefits'
import CTA from '@/components/sections/cta'
import { Cpu, Bot, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Card Scanner Overview',
  description:
    'The Smart Card Scanner revolutionizes business card management by leveraging artificial intelligence and seamless integration with ERPNext.',
}

// Data for the Hero Section
const heroData = {
  headline: 'Smart Card Scanner',
  description:
    'The Smart Card Scanner revolutionizes business card management by leveraging artificial intelligence and seamless integration with ERPNext. This intelligent tool allows users to scan or upload business card images using a Telegram chatbot interface, making the process highly accessible and convenient from anywhere.',
  heroImage: {
    alt: 'Smart Card Scanner Overview',
    src: '/api/fb/n/files/ChatGPT%20Image%20Oct%2014,%202025,%2003_00_34%20PM.png',
  },
  features: [
    {
      icon: Cpu,
      title: 'AI-powered OCR',
      description: 'Structured extraction of names, phones, emails, roles, and more.',
    },
    {
      icon: Bot,
      title: 'Telegram-first UX',
      description: 'Scan or upload cards right from a mobile-friendly chatbot.',
    },
    {
      icon: Database,
      title: 'ERPNext Sync',
      description: 'Duplicate checks, linking, and instant CRM updates.',
    },
  ],
  backgroundColor: '#0b1220',
}

// Data for the Overview Section
const pageDescription =
  "Upon receiving the scan, advanced AI models analyze the image, extracting structured contact information including full name, phone numbers, email addresses, company names, job titles, and other relevant data fields. This extracted data is then automatically pushed and validated within ERPNext, ensuring clean, accurate, and immediately actionable CRM records. The system performs a robust duplicate check to verify whether the contact already exists in ERPNext. If a match is found, the existing record is updated with any new information, maintaining data freshness and avoiding redundancy. If no match exists, the system looks for an associated lead or customer record. Based on this check, contacts are either linked to existing leads/customers or new lead/contact entries are created, keeping the sales funnel complete and current. This automated pipeline eliminates the tedious manual entry of business card details, reducing human errors, and accelerates the process of lead generation and follow-up with real-time integration."

// Data for the Purpose/Points Section
const purposeData = {
  component_type: 'Text' as const,
  title: 'Purpose',
  points: [
    'To guide limited-access users through a simplified contact creation process inside ERPNext.',
    'To ensure strict compliance with internal system permissions and data governance standards.',
    'To maintain high-quality, standardized, and consistent contact data within the ERP system.',
    'To provide a streamlined, step-by-step workflow for business card capture and CRM data enrichment.',
  ],
}

// 👇 2. Transform the workflow data into the format for ResponsiveCardGrid
const workflowCardData = {
  title: 'Streamlined Contact Capture Workflow',
  subtitle: 'From card capture to clean CRM records in three efficient steps',
  variant: 'iconCard' as const, // Use the icon card style
  cardClassName: 'border-none hover:shadow-xl transition-all', // Optional styling
  cards: [
    {
      id: 'step-1',
      title: '1. Scan, Upload & AI Extraction',
      description: 'Users scan or upload a business card via Telegram. Our AI engine immediately processes the image, extracting all contact details and validating data for accuracy.',
      icon: 'Scan',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
    },
    {
      id: 'step-2',
      title: '2. ERP Contact Verification & Sync',
      description: 'The system queries ERPNext to prevent duplicates. It intelligently updates existing records or creates new leads and contacts, ensuring data integrity across the sales pipeline.',
      icon: 'Database',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
    {
      id: 'step-3',
      title: '3. Instant User Confirmation',
      description: 'A confirmation message is sent back to the user via Telegram, summarizing the action taken and displaying the key contact details that were saved in the CRM.',
      icon: 'Send',
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
    },
  ],
}

// Data for the Benefits Section
const benefitsData = {
  component_type: 'Card' as const,
  title: 'Benefits',
  subtitle: 'Accelerate lead capture while improving CRM hygiene',
  benefits: [
    {
      number: 1,
      suffix: '',
      label: 'Time Savings',
      header: 'Drastically Reduces Time',
      description: 'Removes the necessity for manual typing, enabling near-instantaneous capture and CRM updates.',
      icon: 'Clock',
      palette: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    },
    {
      number: 2,
      suffix: '',
      label: 'Accuracy',
      header: 'Minimizes Errors',
      description: 'Automated data extraction dramatically decreases human transcription mistakes, leading to cleaner databases.',
      icon: 'FileCheck2',
      palette: { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    },
    {
      number: 3,
      suffix: '',
      label: 'Efficiency',
      header: 'Speeds Lead Generation',
      description: 'Real-time creation and updating of leads and contacts keep sales pipelines robust, enabling faster follow-ups and conversions.',
      icon: 'Rocket',
      palette: { iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600' },
    },
    {
      number: 4,
      suffix: '',
      label: 'Availability',
      header: 'Operates Continuously',
      description: 'The Telegram bot works 24/7, empowering users to capture leads anytime, anywhere, without relying on office hours.',
      icon: 'Bot',
      palette: { iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    },
    {
      number: 5,
      suffix: '',
      label: 'Data Hygiene',
      header: 'Improves Data Hygiene',
      description: 'Duplicate prevention and intelligent linking maintain CRM consistency, providing a single source of truth.',
      icon: 'ShieldCheck',
      palette: { iconBg: 'bg-fuchsia-50', iconColor: 'text-fuchsia-600' },
    },
    {
      number: 6,
      suffix: '',
      label: 'Engagement',
      header: 'Enhances User Engagement',
      description: 'Interactive notifications make users aware of updated CRM states immediately, fostering collaboration and trust.',
      icon: 'MessageSquare',
      palette: { iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600' },
    },
  ],
}

// Data for the CTA Section
const ctaData = {
  component_type: 'Text' as const,
  subheading: { text: 'Get Started', icon: 'Rocket' },
  title: 'Turn business cards into qualified CRM data in seconds',
  description: 'Adopt the Smart Card Scanner to streamline capture, enrich contacts, and keep ERPNext clean and current—without extra effort.',
  primaryButton: { text: 'Request a Demo', icon: 'Play', action: '/contact' },
  secondaryButton: { text: 'Learn More', icon: 'BookOpen', action: '/resources' },
  trustIndicator: {
    text: 'Secure by design • ERPNext-native • 24/7 intake',
    icon: 'Shield',
  },
}

export default function SmartCardScannerPage() {
  return (
    <>
      {/* 1️⃣ HERO SECTION */}
      <DynamicHero {...heroData} />

      {/* 2️⃣ OVERVIEW SECTION */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{pageDescription}</p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      <Section>
        <div className="container-custom py-12">
          <Points data={purposeData} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-12">
          {/* 👇 3. Use the new component and its data */}
          <ResponsiveCardGrid data={workflowCardData} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-12">
          <Benefits data={benefitsData} />
        </div>
      </Section>

      {/* 4️⃣ CTA SECTION */}
      <Section>
        <div className="container-custom py-12">
          <CTA data={ctaData} />
        </div>
      </Section>
    </>
  )
}