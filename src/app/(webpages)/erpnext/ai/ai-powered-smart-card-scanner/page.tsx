'use client'
import React from 'react'
import type { Metadata } from 'next'
import DynamicHero from '@/components/sections/dynamic-hero'
import Section from '@/components/sections/Section'
import Points from '@/components/sections/points'
import ProcessWorkflow from '@/components/sections/process-workflow'
import Benefits from '@/components/sections/benefits'
import CTA from '@/components/sections/cta'
import { Cpu, Bot, Database } from 'lucide-react'


// Data for the Hero Section
const heroData = {
  headline: 'Smart Card Scanner',
  highlightWords: ['Card Scanner'],
  description:
    'The Smart Card Scanner revolutionizes business card management by leveraging artificial intelligence and seamless integration with ERPNext. This intelligent tool allows users to scan or upload business card images using a Telegram chatbot interface, making the process highly accessible and convenient from anywhere.',
  heroImage: {
    alt: 'Smart Card Scanner Overview',
    src: '/images/contact creation.gif',
  },
  primaryButton: {
    text: 'Get a Demo',
    action: '/contact'
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

// Data for the ProcessWorkflow Section
const workflowData = {
  component_type: 'Timeline' as const,
  title: 'Expanded Workflow Steps',
  subtitle: 'From card capture to clean CRM records in minutes',
  processSteps: [
    {
      step: '1',
      title: 'Telegram Bot Scan & Upload',
      description: 'Users initiate contact capture by scanning or uploading business card images to a dedicated Telegram bot. This familiar and mobile-friendly interface allows immediate submission from any device.',
      icon: 'Scan',
      details: ['Mobile-friendly interface', 'Immediate submission from any device', 'User-friendly workflow'],
      duration: '~10s',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-50',
    },
    {
      step: '2',
      title: 'AI Extraction of Contact Data',
      description: 'The backend AI engine processes the uploaded images, extracting not only common contact fields (name, email, phone) but also company, designations, addresses, and even social media handles where available. Data quality validation routines verify field accuracy upon ingestion.',
      icon: 'Brain',
      details: [
        'Extracts contact fields, company, and social handles',
        'Data quality validation for accuracy',
        'Automated data ingestion',
      ],
      duration: '~15s',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
    {
      step: '3',
      title: 'ERP Contact Verification',
      description: 'The system queries ERPNext for existing contacts using intelligent matching algorithms. If found, details are updated. If not, it searches for a linked lead or customer to associate the new contact with. If no link exists, a new lead and contact record are created.',
      icon: 'Database',
      details: [
        'Intelligent matching algorithms',
        'Updates existing records or creates new ones',
        'Preserves data integrity in the sales pipeline',
      ],
      duration: '~10-20s',
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
    },
    {
      step: '4',
      title: 'Instant User Confirmation via Telegram',
      description: 'Upon successful creation or update, users receive a confirmation message summarizing the action taken—whether it was an update or new record creation—alongside key extracted contact details, enhancing transparency and accountability.',
      icon: 'Send',
      details: ['Summary of action taken', 'Key extracted contact details provided', 'Enhances transparency and accountability'],
      duration: 'Instant',
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
    },
  ],
  stats: {
    steps: '4 Steps',
    weeks: 'Real-time',
    transparency: 'Full Transparency',
    support: '24/7 Bot Intake',
  },
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
      palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-600' },
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
  secondaryButton: {
    text: 'Learn More',
    icon: 'BookOpen',
    action: () => {
      const el = document.getElementById('smart-card');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  },
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
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-5" id="smart-card">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{pageDescription}</p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      <Section>
        <div className="container-custom py-12">
          <Points data={purposeData} />
        </div>
      </Section>

      <ProcessWorkflow data={workflowData} />


      <Section>
        <div className="container-custom py-12">
          <Benefits data={benefitsData} />
        </div>
      </Section>

      {/* 4️⃣ CTA SECTION */}
      <CTA data={ctaData} />
    </>
  )
}