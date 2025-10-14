"use client"
import React from 'react'
import HeroSection from '@/components/sections/dynamic-hero'
import Section from '@/components/sections/Section'
import ProcessWorkflow from '@/components/sections/process-workflow'
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid'
import CTA from '@/components/sections/cta'

export default function Page() {
  const seo = {
    title: 'Email classification',
    description: ''
  }

  const workflowData = {
    title: 'Workflow Details',
    subtitle: 'From inbox to ERPNext—fully automated, accurate, and auditable.',
    processSteps: [
      {
        step: '1',
        title: 'Incoming Email Scanning',
        description:
          'AI intercepts and analyzes every incoming inquiry email, including content, metadata, and attachments.',
        icon: 'Mail',
        details: [
          'Parses headers, body, and attachments',
          'Understands thread and reply context',
          'Secure, policy-compliant processing'
        ],
        duration: 'Real-time',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100'
      },
      {
        step: '2',
        title: 'Intent Classification',
        description:
          'NLP models classify emails into categories like sales, support, general, or spam for auto-routing.',
        icon: 'Bot',
        details: [
          'Multi-label classification',
          'Priority and department routing',
          'Continuously improving accuracy'
        ],
        duration: 'Milliseconds',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-100'
      },
      {
        step: '3',
        title: 'Data Extraction',
        description:
          'Automatically extracts sender, phone, company, address, and inquiry details into structured fields.',
        icon: 'FileText',
        details: [
          'Robust entity extraction',
          'Attachment parsing',
          'Normalized, validated fields'
        ],
        duration: 'Instant',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-100'
      },
      {
        step: '4',
        title: 'ERP Record Verification',
        description:
          'Cross-references extracted details with ERPNext to avoid duplicates and maintain data integrity.',
        icon: 'Search',
        details: [
          'Lead/customer/contact matching',
          'Duplicate prevention',
          'Accurate relationship mapping'
        ],
        duration: 'Instant',
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-100'
      },
      {
        step: '5',
        title: 'Auto Lead Creation',
        description:
          'Automatically creates a new lead when no matching record is found, ensuring zero missed opportunities.',
        icon: 'UserPlus',
        details: [
          'Pre-filled lead details',
          'Ownership and assignment rules',
          'Notifications to the right team'
        ],
        duration: 'Real-time',
        iconColor: 'text-fuchsia-600',
        iconBg: 'bg-fuchsia-100'
      },
      {
        step: '6',
        title: 'Structured Data Storage',
        description:
          'Stores contacts, addresses, and inquiry details with proper field mapping for reporting and follow-ups.',
        icon: 'Database',
        details: [
          'Centralized in ERPNext',
          'Consistent field mapping',
          'Audit trails and history'
        ],
        duration: 'Continuous',
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-100'
      }
    ],
    stats: {
      steps: '6',
      weeks: '0 setup weeks (API-first)',
      transparency: 'Full audit logs',
      support: '24/7 monitoring ready'
    }
  }

  const featureCards = {
    title: 'Key Features',
    subtitle:
      'Purpose-built for high-volume inboxes that demand accuracy, speed, and end-to-end ERPNext sync.',
    cards: [
      {
        id: 'f1',
        title: 'AI-Powered Email Reading',
        description:
          'Understands full email context, including attachments and headers, not just keywords.',
        icon: 'MailOpen',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-100'
      },
      {
        id: 'f2',
        title: 'Smart Intent Classification',
        description:
          'Multi-label classification with priority and routing that improves over time.',
        icon: 'BrainCircuit',
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-100'
      },
      {
        id: 'f3',
        title: 'Automated Data Capture',
        description:
          'Extracts names, phones, companies, addresses, and inquiry details reliably.',
        icon: 'FileText',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-100'
      },
      {
        id: 'f4',
        title: 'ERPNext Integration',
        description:
          'Real-time updates to leads, contacts, and pipeline objects keep teams in sync.',
        icon: 'Cable',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100'
      },
      {
        id: 'f5',
        title: 'Adaptive Learning',
        description:
          'Learns from user feedback and corrections to master industry terminology.',
        icon: 'Sparkles',
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-100'
      },
      {
        id: 'f6',
        title: 'End-to-End Automation',
        description:
          'Runs unattended from email receipt to lead creation with audit logs and alerts.',
        icon: 'Workflow',
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-100'
      }
    ],
    layout: 'standard' as const,
    variant: 'iconCard' as const,
    showImage: false,
    imageHeight: 0,
    imageWidth: 0,
    cardClassName: 'border-none hover:shadow-xl transition-all duration-300'
  }

  const benefitCards = {
    title: 'Benefits',
    subtitle: 'What your team gains on day one.',
    cards: [
      {
        id: 'b1',
        title: 'Saves Time & Resources',
        description: 'Cuts manual sorting and data entry—respond faster with less effort.',
        icon: 'Clock',
        iconColor: 'text-slate-700',
        iconBg: 'bg-slate-100'
      },
      {
        id: 'b2',
        title: 'Improves Accuracy',
        description: 'AI reduces human error and duplicate records in your CRM.',
        icon: 'Target',
        iconColor: 'text-green-700',
        iconBg: 'bg-green-100'
      },
      {
        id: 'b3',
        title: 'Accelerates Lead Response',
        description: 'Leads are generated immediately, enabling rapid engagement.',
        icon: 'Rocket',
        iconColor: 'text-orange-700',
        iconBg: 'bg-orange-100'
      },
      {
        id: 'b4',
        title: 'Improves Lead Management',
        description: 'Structured data drives better segmentation, reporting, and campaigns.',
        icon: 'ListChecks',
        iconColor: 'text-indigo-700',
        iconBg: 'bg-indigo-100'
      },
      {
        id: 'b5',
        title: 'Enhances Sales Productivity',
        description: 'Free your team to focus on nurturing and closing deals.',
        icon: 'Briefcase',
        iconColor: 'text-fuchsia-700',
        iconBg: 'bg-fuchsia-100'
      },
      {
        id: 'b6',
        title: 'Scalability',
        description: 'Designed to handle high email volumes without performance loss.',
        icon: 'TrendingUp',
        iconColor: 'text-cyan-700',
        iconBg: 'bg-cyan-100'
      }
    ],
    layout: 'standard' as const,
    variant: 'iconCard' as const,
    showImage: false,
    imageHeight: 0,
    imageWidth: 0,
    cardClassName: 'border-none hover:shadow-xl transition-all duration-300'
  }

  return (
    <>
      {/* 1️⃣ HERO SECTION (Required - First) */}
      <HeroSection
        headline={seo.title}
        description={seo.description || undefined}
        heroImage={{ alt: seo.title, src:"/images/email_classifiaction.gif" }}
        accentColor="blue"
      />

      {/* 2️⃣ OVERVIEW SECTION (Required) */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-bold md:text-3xl font-semibold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Email Classification is an AI-driven workflow that automates the handling of incoming inquiries. Deep ERPNext integration classifies intent, extracts contact and inquiry details, and automatically creates or updates leads and contacts—eliminating manual sorting and data entry so sales and support can focus on high-value work.
          </p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      <div className=" py-8">
        <ProcessWorkflow data={workflowData} />
      </div>

      <ResponsiveCardGrid data={featureCards} />
      <ResponsiveCardGrid data={benefitCards} />

      {/* 4️⃣ CTA SECTION (Required - Last) */}
      <CTA
        data={{
          subheading: { text: 'Get started', icon: 'Sparkles' },
          title: 'Automate your inquiry inbox with AI + ERPNext',
          description:
            'Deploy a production-ready email classification workflow that classifies, extracts, and creates leads automatically—so your team can move faster.',
          primaryButton: { text: 'Book a demo', action: '/contact' },
          secondaryButton: { text: 'Talk to an expert', action: '/contact' },
          trustIndicator: { text: 'Built with enterprise security in mind', icon: 'ShieldCheck' }
        }}
      />
    </>
  )
}
