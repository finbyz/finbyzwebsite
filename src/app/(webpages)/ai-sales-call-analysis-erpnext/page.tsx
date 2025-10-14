'use client'
import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import ProcessWorkflow from '@/components/sections/process-workflow';
import Points from '@/components/sections/points';
import Benefits from '@/components/sections/benefits';
import CTA from '@/components/sections/cta';
import FeatureCard from '@/components/ai_components/FeatureCard'; // Fixed import
import { Mic, FileAudio, LucideWaves as Waveform, MessageSquare, ScrollText, Database, Bot, ClipboardList } from 'lucide-react';


// --- DATA CONSTANTS ---

const heroData = {
  headline: 'AI Sales Call Recording & Analysis in ERPNext',
  description:
    'Record and analyze sales calls in ERPNext. Get AI-powered transcripts, actionable feedback, and optimized scripts to improve sales conversions and scale coaching.',
  heroImage: {
    alt: 'AI Sales Call Recording & Analysis in ERPNext',
    src: '/images/Ai Call Insights.gif',
  },
  accentColor: 'blue' as const,
  features: [
    { icon: Mic, title: 'In-app recording', description: 'Record or upload calls directly in ERPNext.' },
    { icon: Bot, title: 'AI analysis', description: 'Transcripts, tone, and engagement insights.' },
    { icon: ClipboardList, title: 'Script coaching', description: 'Optimized outreach scripts, on demand.' },
  ],
};

const featureCardsData = [
  {
    icon: Waveform,
    title: 'Detailed Analysis',
    image: '/images/banner-analysis.svg',
    alt: 'Detailed call analysis illustration',
    description: 'Tone shifts, keyword highlights, pauses, and engagement patterns made visible for fast review.',
  },
  {
    icon: MessageSquare,
    title: 'Actionable Feedback',
    image: '/images/Enhanced Communication.png',
    alt: 'Actionable feedback visual',
    description: 'Concrete suggestions to improve clarity, persuasion, objection handling, and delivery.',
  },
  {
    icon: ScrollText,
    title: 'Script Recommendations',
    image: '/images/blog-icon-innovates-your-human-resource.svg',
    alt: 'Script recommendations icon',
    description: 'Auto-generate 2–3 optimized outreach scripts tailored to the call’s context and persona.',
  },
  {
    icon: Database,
    title: 'Seamless ERPNext Storage',
    image: '/images/Document Storage.svg',
    alt: 'ERPNext storage illustration',
    description: 'Transcripts, insights, and scripts saved to the Voice Recording doctype for easy team access.',
  },
];

const workflowData = {
  title: 'Workflow Steps',
  subtitle: 'From recording to insights—fully inside ERPNext',
  processSteps: [
    {
      step: '1',
      title: 'In-App Recording',
      description: 'Record calls directly or upload from third-party tools.',
      icon: 'Mic',
      details: ['Start/stop recording in ERPNext', 'Upload MP3/WAV/M4A files'],
      duration: 'Instant',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
    },
    {
      step: '2',
      title: 'Automatic Transcription',
      description: 'Speech is converted into a word-by-word transcript.',
      icon: 'FileAudio',
      details: ['Speaker labels', 'Timestamps per word'],
      duration: 'Seconds',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
    {
      step: '3',
      title: 'Detailed Analysis',
      description: 'AI highlights tone, keywords, pauses, and engagement.',
      icon: 'Waveform',
      details: ['Tone shifts & sentiment', 'Keyword heatmap & pauses'],
      duration: 'Seconds',
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
    },
    {
      step: '4',
      title: 'Actionable Feedback',
      description: 'Get suggestions on clarity, persuasion, and delivery.',
      icon: 'MessageSquare',
      details: ['What worked / what to improve', 'Coach-style recommendations'],
      duration: 'Seconds',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
    {
      step: '5',
      title: 'Script Recommendations',
      description: 'Generate 2–3 optimized outreach scripts.',
      icon: 'ScrollText',
      details: ['Tailored to context & persona', 'Openers, rebuttals, closes'],
      duration: 'Seconds',
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
    },
    {
      step: '6',
      title: 'Seamless Integration',
      description: 'All results stored in ERPNext Voice Recording doctype.',
      icon: 'Database',
      details: ['Transcripts, feedback, scripts in one place', 'Easy review for reps & managers'],
      duration: 'Instant',
      iconColor: 'text-slate-600',
      iconBg: 'bg-slate-50',
    },
  ],
  stats: { steps: '6 steps', weeks: 'Instant results', transparency: 'Full call context', support: 'Coach at scale' },
};

const howItWorksData = {
  title: 'How It Works',
  points: [
    'Start/stop call recording inside ERPNext or upload existing audio files.',
    'The system sends recordings to an AI model (LLM) for transcription and analysis.',
    'AI analyzes every word and tone, then generates feedback and improvement suggestions.',
    'AI creates personalized outreach scripts based on call context and feedback.',
    'Results appear directly in ERPNext for sales reps and managers to review.',
  ],
};

const benefitsData = {
  component_type: 'Card' as const,
  title: 'Benefits',
  subtitle: 'Improve consistency, speed up training, and boost conversions',
  benefits: [
    {
      number: 1,
      suffix: '',
      label: 'Skills',
      header: 'Improves Sales Skills',
      icon: 'Waveform',
      description: 'Sales reps learn from detailed call breakdowns to improve performance over time.',
      palette: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    },
    {
      number: 2,
      suffix: '',
      label: 'Consistency',
      header: 'Consistency',
      icon: 'ClipboardList',
      description: 'Teams use structured, AI-optimized outreach scripts across every touchpoint.',
      palette: { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    },
    {
      number: 3,
      suffix: '',
      label: 'Training',
      header: 'Faster Training',
      icon: 'Bot',
      description: 'New hires receive instant coaching feedback from calls without waiting for manual review.',
      palette: { iconBg: 'bg-violet-50', iconColor: 'text-violet-600' },
    },
    {
      number: 4,
      suffix: '',
      label: 'Scale',
      header: 'Scalable',
      icon: 'Database',
      description: 'Analyze hundreds of calls automatically and consistently—far beyond manual capacity.',
      palette: { iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    },
    {
      number: 5,
      suffix: '',
      label: 'Conversion',
      header: 'Better Conversions',
      icon: 'MessageSquare',
      description: 'Continuous improvement in tone and delivery results in higher engagement and win rates.',
      palette: { iconBg: 'bg-rose-50', iconColor: 'text-rose-600' },
    },
  ],
};

const ctaData = {
  subheading: { text: 'AI for Sales Teams', icon: 'Bot' },
  title: 'Turn every call into a coaching moment inside ERPNext',
  description:
    'Get AI-powered transcripts, feedback, and scripts—automatically stored in the Voice Recording doctype for faster reviews and better conversions.',
  primaryButton: { text: 'Get a demo', icon: 'Mic', action: 'mailto:hello@example.com?subject=ERPNext%20AI%20Call%20Analysis%20Demo' },
  secondaryButton: { text: 'See workflow', icon: 'ClipboardList', action: '#workflow' },
  trustIndicator: { text: 'Secure by design • Built for ERPNext', icon: 'Database' },
};

export default function AiSalesCallAnalysisPage() {
  return (
    <>
      <HeroSection {...heroData} />

      <Section>
        <div className="container-custom py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-5">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An AI-powered tool integrated within ERPNext that transforms every sales call into a scalable coaching opportunity. It
            allows users to record or upload calls, which are then automatically transcribed and analyzed for tone, keywords, and
            engagement patterns. The system provides actionable feedback and generates optimized outreach scripts to improve sales
            skills, ensure team consistency, and drive better conversions. All data is seamlessly stored and displayed within the
            ERPNext Voice Recording doctype for easy review.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-5">Voice Recording + AI Feedback</h3>
            <p className="text-muted-foreground mt-3">
              Record and analyze sales calls with instant transcripts, actionable feedback, and optimized outreach scripts—all inside ERPNext.
              Turn every call into a coaching opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCardsData.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </Section>

      <ProcessWorkflow data={workflowData} />

      <div className="container-custom mx-auto">
        <Points data={howItWorksData} />
      </div>

      <Section>
        <div className="container-custom py-12">
          <Benefits data={benefitsData} />
        </div>
      </Section>

      <CTA data={ctaData} />
    </>
  );
}
