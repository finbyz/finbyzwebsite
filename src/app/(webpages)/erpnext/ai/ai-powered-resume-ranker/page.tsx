import React from 'react'
import Image from 'next/image'
import HeroSection from '@/components/sections/dynamic-hero'
import Section from '@/components/sections/Section'
import ProcessWorkflow from '@/components/sections/process-workflow'
import Benefits from '@/components/sections/benefits'
import Points, { PointsData } from '@/components/sections/points'
import CTA from '@/components/sections/cta'

export default function Page() {
  const seoTitle = 'AI Powered Resume Ranker'
  const seoDescription = 'Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.'

  const workflowData = {
    title: 'Recruitment Workflow',
    subtitle: 'From submission to fair, data-driven decisions',
    processSteps: [
      {
        step: '01',
        title: 'Job Application Submitted',
        description: 'Candidate uploads a resume for an open role, triggering the workflow.',
        icon: 'Upload',
        details: [
          'Resume received via portal or email',
          'Metadata captured (role, location, source)',
          'Workflow initiated automatically'
        ],
        duration: 'Instant',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50'
      },
      {
        step: '02',
        title: 'Job Description Retrieval',
        description: 'Fetches the complete JD from ERPNext or webhook for accurate requirements.',
        icon: 'FileSearch',
        details: [
          'Pulls responsibilities and must-have skills',
          'Extracts seniority and role context',
          'Normalizes JD formatting'
        ],
        duration: 'Seconds',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50'
      },
      {
        step: '03',
        title: 'Resume Parsing',
        description: 'AI parses and cleans resume text into structured skills and experience.',
        icon: 'FileCog',
        details: [
          'Extracts skills, roles, education',
          'Deduplicates and normalizes entities',
          'Handles PDF/DOCX variations'
        ],
        duration: 'Seconds',
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50'
      },
      {
        step: '04',
        title: 'Skill Matching',
        description: 'Matches candidate skills to JD requirements to find alignment and gaps.',
        icon: 'ListChecks',
        details: [
          'Identifies exact and related skills',
          'Highlights missing competencies',
          'Weights recency and relevance'
        ],
        duration: 'Seconds',
        iconColor: 'text-orange-600',
        iconBg: 'bg-orange-50'
      },
      {
        step: '05',
        title: 'Skill Scoring',
        description: 'Scores each skill using proficiency, experience, and relevance.',
        icon: 'Gauge',
        details: [
          'Standardized scoring logic',
          'Configurable weights and rules',
          'Bias-reduction heuristics'
        ],
        duration: 'Real-time',
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-50'
      },
      {
        step: '06',
        title: 'Overall Rating',
        description: 'Aggregates the skill scores into a recruiter-friendly rating.',
        icon: 'Star',
        details: [
          'Overall fit score generated',
          'Clear explanation and feedback',
          'Ready for fast shortlisting'
        ],
        duration: 'Real-time',
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50'
      }
    ],
    stats: {
      steps: '6 steps',
      weeks: 'Real-time',
      transparency: 'Explainable scores',
      support: 'ERPNext-ready'
    }
  }

  const benefitsData = {
    component_type: 'Card' as const,
    title: 'Benefits',
    subtitle: 'Speed up hiring with accurate, unbiased AI ranking',
    benefits: [
      {
        number: 70,
        suffix: '%',
        label: 'Faster Screening',
        header: 'Automated parsing & matching',
        description: 'Save recruiter hours by automating resume parsing and JD matching.',
        icon: 'Timer',
        palette: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600' }
      },
      {
        number: 100,
        suffix: '%',
        label: 'Fair Evaluation',
        header: 'Standardized scoring logic',
        description: 'Consistent evaluations reduce bias and improve decision quality.',
        icon: 'Scale',
        palette: { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' }
      },
      {
        number: 95,
        suffix: '%',
        label: 'Accuracy',
        header: 'High-precision skill extraction',
        description: 'Advanced extraction lowers the chance of missing qualified candidates.',
        icon: 'Target',
        palette: { iconBg: 'bg-violet-50', iconColor: 'text-violet-600' }
      },
      {
        number: 40,
        suffix: '%',
        label: 'Better Decisions',
        header: 'Clear ratings & feedback',
        description: 'Transparent explanations enable confident shortlisting.',
        icon: 'CheckCircle2',
        palette: { iconBg: 'bg-orange-50', iconColor: 'text-orange-600' }
      }
    ]
  }

  const outputsPoints: PointsData = {
    component_type: 'Text',
    title: 'What You Get ?',
    points: [
      'Skill-by-skill scores mapped to JD requirements',
      'Overall candidate rating with rationale',
      'Actionable feedback highlighting strengths and gaps',
      'AI-driven matching accuracy for every candidate profile',
      'Ranking of candidates by job relevance and skill proficiency'
    ]
  }

  const ctaData = {
    subheading: { text: 'Start Screening with AI', icon: 'Sparkles' },
    title: 'Hire faster with unbiased AI resume ranking',
    description:
      'Plug into ERPNext, parse resumes automatically, and get explainable candidate scores for faster, fairer shortlisting.',
    primaryButton: { text: 'Request a Demo', icon: 'Rocket', action: '/contact' },
    secondaryButton: { text: 'See How It Works', icon: 'Play', action: '/erpnext/ai/ai-powered-resume-ranker' },
    trustIndicator: { text: 'GDPR-ready • ERPNext integration', icon: 'ShieldCheck' }
  }

  return (
    <main className="flex flex-col">
      {/* 1️⃣ HERO SECTION */}
      <HeroSection
        headline={seoTitle}
        highlightWords={["Resume Ranker"]}
        description={seoDescription}
        heroImage={{ src: "/AI_Powered_Resume_Ranker.gif", alt: seoTitle }}
        primaryButton={{ text: 'Get a Demo', action:'/contact' }}

      />

      {/* 2️⃣ OVERVIEW SECTION */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A5276]">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The AI Powered Resume Ranker automates the recruitment process by extracting key skills from job descriptions and resumes, comparing them using a scoring logic for fair evaluations. This system produces skill scores and overall ratings to expedite hiring decisions while ensuring unbiased assessments. Key workflows include job application submission, job description retrieval, resume parsing, skill matching, and skill scoring, leading to faster screening, improved accuracy, and better decision-making for recruiters.
          </p>
        </div>
      </Section>

      {/* 3️⃣ MAIN CONTENT SECTIONS */}
      <Section>
        <div className="py-12">
          <ProcessWorkflow data={workflowData} />
        </div>
      </Section>

      <Section>
        <div className="container-custom ">
          <Points data={outputsPoints} />
        </div>
      </Section>

      <Section>
        <div>
          <Benefits data={benefitsData} />
        </div>
      </Section>

      {/* 4️⃣ CTA SECTION */}
      <Section>
        <div className=" py-12">

          <CTA data={ctaData} />
        </div>
      </Section>
    </main>
  )
}
