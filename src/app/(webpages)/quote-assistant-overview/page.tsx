"use client"
import React from 'react'
import HeroSection from '@/components/sections/dynamic-hero'
import Section from '@/components/sections/Section'
import ProcessWorkflow from '@/components/sections/process-workflow'
import Benefits from '@/components/sections/benefits'
import TextSection from '@/components/sections/text'
import CTA from '@/components/sections/cta'
import { Bot, Paperclip, Boxes, FileText, CheckCircle2, Zap, ShieldCheck, Users, Briefcase, BarChart3, Layers, Search, Mail, Brain, ListChecks, History, GitMerge } from 'lucide-react'


export default function Page() {
  const seoTitle = 'Quote Assistant Overview: Streamlining Sales Quotations'
  const seoDescription = 'Explore the Quote Assistant, an innovative automation tool that enhances the sales quotation process by intelligently managing customer inquiries and generating tailored quotes.'

  return (
    <>
      {/* 1️⃣ HERO SECTION (Required - First) */}
      <HeroSection
        headline={seoTitle}
        description={seoDescription}
        heroImage={{ alt: seoTitle,src:"/images/Quote Assistant.gif" }}
        features={[
          {
            icon: Bot,
            title: 'AI Item Mapping',
            description: 'Maps requirements to ERP Item Master with match transparency.'
          },
          {
            icon: Paperclip,
            title: 'Attachment Parsing',
            description: 'Understands emails, PDFs, Word, Excel, OCR scans, and images.'
          },
          {
            icon: Boxes,
            title: 'ERPNext-native',
            description: 'Draft quotations linked back to the correct Opportunity.'
          }
        ]}
        accentColor="blue"
      />

      {/* 2️⃣ OVERVIEW SECTION (Required) */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-bold md:text-3xl font-semibold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Quote Assistant is a sophisticated automation system designed to optimize the sales quotation workflow. By automating the extraction of customer inquiries and analyzing past purchase data, it offers sales teams the ability to quickly generate accurate and tailored quotations. This overview highlights the system's step-by-step workflow, from fetching opportunities in ERPNext to AI-driven item mapping, ensuring that quotes align with customer needs and sales opportunities. Key benefits include faster response times, improved accuracy, better customer alignment, and reduced workload for sales professionals.
          </p>
        </div>
      </Section>
      <Section className='container-custom'>
        <h3 className='text-2xl text-bold md:text-3xl font-semibold text-[#1A5276] mb-4'>Quote Assistant (Quotation Automation System)</h3>
        <p className="text-slate-700 text-base md:text-lg leading-8 md:leading-9 mb-6 md:mb-7">
          The Quote Assistant streamlines the entire sales quotation workflow, dramatically reducing the time and effort required in quote generation. It automatically extracts and analyzes customer inquiries—including all linked emails and attachments—to help sales teams respond faster and more accurately.
        </p>
        <p className="text-slate-700 text-base md:text-lg leading-8 md:leading-9 mb-6 md:mb-7">The system intelligently reads inquiry emails and diverse attachments such as Word documents, Excel sheets, PDFs, OCR scans, and images to identify product or item group requirements. Combining this with past purchase history, it suggests the most relevant items for quotations, ensuring proposals are tailored, competitive, and contextually accurate.</p>
        <p className="text-slate-700 text-base md:text-lg leading-8 md:leading-9 mb-6 md:mb-7">A draft quotation is automatically generated and linked back to the relevant sales opportunity within ERPNext, maintaining a connected and transparent sales ecosystem.</p>

      </Section>

      <Section>
        <ProcessWorkflow
          data={{
            component_type: 'Timeline',
            title: 'Expanded Workflow Steps',
            subtitle: 'From opportunity intake to final quote approval',
            processSteps: [
              {
                step: '01',
                title: 'Fetch Opportunity',
                description: 'Identify all open, customer-linked opportunities in ERPNext.',
                icon: 'Search',
                details: [
                  'Filters active pipeline records',
                  'Sets context for quote generation'
                ],
                duration: 'Instant',
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-50'
              },
              {
                step: '02',
                title: 'Collect Linked Emails and Attachments',
                description: 'Aggregate correspondence and documents related to the opportunity.',
                icon: 'Mail',
                details: [
                  'Emails, Word, Excel, PDFs, OCR scans, images',
                  'Centralized data collection'
                ],
                duration: 'Instant',
                iconColor: 'text-indigo-600',
                iconBg: 'bg-indigo-50'
              },
              {
                step: '03',
                title: 'Send Data to AI Agent',
                description: 'Forward compiled content to an AI agent for interpretation.',
                icon: 'Bot',
                details: [
                  'Parses unstructured content',
                  'Extracts product codes, specs, quantities'
                ],
                duration: 'Seconds',
                iconColor: 'text-emerald-600',
                iconBg: 'bg-emerald-50'
              },
              {
                step: '04',
                title: 'Parse Requirements',
                description: 'Identify item descriptions, specifications, and special requests.',
                icon: 'ListChecks',
                details: [
                  'Technical spec extraction',
                  'Capacity and quantity mapping'
                ],
                duration: 'Seconds',
                iconColor: 'text-teal-600',
                iconBg: 'bg-teal-50'
              },
              {
                step: '05',
                title: 'Fetch Past Customer History',
                description: 'Retrieve previous purchases, quotes, and invoices from ERPNext.',
                icon: 'History',
                details: [
                  'Understands preferences',
                  'Learns buying patterns'
                ],
                duration: 'Instant',
                iconColor: 'text-rose-600',
                iconBg: 'bg-rose-50'
              },
              {
                step: '06',
                title: 'Combine Requirements and History',
                description: 'Merge new inquiry details with historical context.',
                icon: 'GitMerge',
                details: [
                  'Unified customer need profile',
                  'Context-aware recommendations'
                ],
                duration: 'Seconds',
                iconColor: 'text-orange-600',
                iconBg: 'bg-orange-50'
              },
              {
                step: '07',
                title: 'AI-Powered Item Mapping',
                description: 'Map refined requirements to ERP Item Master with match quality.',
                icon: 'Boxes',
                details: [
                  'Suggests exact/close matches',
                  'Shows specification match %'
                ],
                duration: 'Seconds',
                iconColor: 'text-yellow-600',
                iconBg: 'bg-yellow-50'
              },
              {
                step: '08',
                title: 'Generate Draft Quotation',
                description: 'Create a draft quote with pricing, terms, and item details.',
                icon: 'FileText',
                details: [
                  'Uses pricing rules',
                  'Standard/custom T&Cs'
                ],
                duration: 'Instant',
                iconColor: 'text-cyan-600',
                iconBg: 'bg-cyan-50'
              },
              {
                step: '09',
                title: 'Sales Team Review and Finalization',
                description: 'Human review for accuracy and final approval.',
                icon: 'CheckCircle2',
                details: [
                  'Manual checkpoints',
                  'Final adjustments and approvals'
                ],
                duration: 'As needed',
                iconColor: 'text-green-600',
                iconBg: 'bg-green-50'
              }
            ],
            stats: {
              steps: '9 steps',
              weeks: '0 weeks to value',
              transparency: 'Transparent mapping %',
              support: 'ERPNext integrated'
            }
          }}
        />
      </Section>

      <Section>
        <Benefits
          data={{
            component_type: 'Card',
            title: 'Benefits',
            subtitle: 'Accelerate quoting while improving accuracy and alignment',
            benefits: [
              {
                number: 1,
                suffix: '',
                label: '',
                header: 'Significantly Faster Response Times',
                description:
                  'AI-driven parsing and matching produce quotations instantly, boosting customer satisfaction and competitiveness.',
                icon: 'Zap',
                palette: { iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600' }
              },
              {
                number: 2,
                suffix: '',
                label: '',
                header: 'Improved Accuracy and Relevance',
                description:
                  'Combines requirement parsing with historical data to closely reflect customer needs and reduce revisions.',
                icon: 'ShieldCheck',
                palette: { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' }
              },
              {
                number: 3,
                suffix: '',
                label: '',
                header: 'Better Customer Alignment',
                description:
                  'Tailored quotations increase alignment with expectations and improve closure rates.',
                icon: 'Users',
                palette: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600' }
              },
              {
                number: 4,
                suffix: '',
                label: '',
                header: 'Reduced Sales Team Workload',
                description:
                  'Automation removes repetitive tasks so teams can focus on relationships and closing.',
                icon: 'Briefcase',
                palette: { iconBg: 'bg-gray-50', iconColor: 'text-gray-700' }
              },
              {
                number: 5,
                suffix: '',
                label: '',
                header: 'Enhanced Pipeline Tracking',
                description:
                  'Quotes link directly to Opportunities in ERPNext, enabling transparency and reporting.',
                icon: 'BarChart3',
                palette: { iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600' }
              },
              {
                number: 6,
                suffix: '',
                label: '',
                header: 'Scalable Efficiency',
                description:
                  'Handles multiple simultaneous inquiries, scaling from SMB to enterprise.',
                icon: 'Layers',
                palette: { iconBg: 'bg-purple-50', iconColor: 'text-purple-600' }
              }
            ]
          }}
        />
      </Section>

      {/* 4️⃣ CTA SECTION (Required - Last) */}
      <Section>
        <CTA
          data={{
            subheading: { text: 'Ready to accelerate quoting?', icon: 'Zap' },
            title: 'Launch Quote Assistant for your ERPNext pipeline',
            description:
              'Cut response times from days to minutes. Automate intake, map items with AI, and ship accurate, tailored quotes—faster.',
            primaryButton: { text: 'Request a Demo', icon: 'Bot', action: '/contact' },
            secondaryButton: { text: 'See Workflow Details', icon: 'FileText', action: '/solutions/quote-assistant' },
            trustIndicator: { text: 'Secure. ERPNext-native. Human-in-the-loop.', icon: 'ShieldCheck' }
          }}
        />
      </Section>
    </>
  )
}
