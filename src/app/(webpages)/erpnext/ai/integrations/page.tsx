import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import DynamicHero from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MailCheck, Users, MessageCircle, FileText, Sparkles, FileSearch, Mic, ScanLine, Send, Brain, Bot, DatabaseZap, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Solutions for ERPNext',
  description:
    'Explore a suite of intelligent AI tools designed to automate workflows, enhance productivity, and drive growth, seamlessly integrated with your ERPNext platform.',
};

// --- DATA CONSTANTS ---

const heroData = {
  headline: 'Transform Your Business with AI-Powered ERPNext Solutions',
  description:
    'Unlock unprecedented efficiency and intelligence. Our suite of AI-powered applications seamlessly integrates with ERPNext to automate complex workflows, provide deep insights, and empower your team to focus on what matters most.',
  heroImage: {
    alt: 'AI-Powered Solutions for ERPNext',
    src: '/images/hero_section_image_for_website_hero_section.jpeg', // Placeholder - replace with a relevant hero image
  },
  features: [
    {
      icon: DatabaseZap,
      title: 'Seamless ERPNext Integration',
      description: 'Natively built on the Frappe Framework for perfect harmony.',
    },
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Reduce manual tasks and accelerate your business processes.',
    },
    {
      icon: Bot,
      title: 'Data-Driven Insights',
      description: 'Turn raw data into actionable intelligence to make smarter decisions.',
    },
  ],
};

const productsData = [
  {
    name: 'Email Classification',
    description:
      'A sophisticated AI-based system to streamline incoming emails. It automatically categorizes emails, extracts key information, and manages leads efficiently.',
    slug: '/email-classification',
    icon: MailCheck,
  },
  {
    name: 'Lead Intelligence',
    description:
      'Leverages advanced AI to process inquiry emails, transforming them into structured CRM records while preventing duplication and accelerating response times.',
    slug: '/erpnext/ai/lead-intelligence',
    icon: Users,
  },
  {
    name: 'Follow Up Buddy',
    description:
      'An AI-driven tool that streamlines sales by identifying stale opportunities, analyzing context, and crafting personalized follow-up emails to nurture every lead.',
    slug: '/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process',
    icon: MessageCircle,
  },
  {
    name: 'Quote Assistant',
    description:
      'A sophisticated system that optimizes the sales quotation workflow by automating inquiry extraction and analyzing past purchase data to generate accurate quotes quickly.',
    slug: '/quote-assistant-overview',
    icon: FileText,
  },
  {
    name: 'Content Spark',
    description:
      'Leverages the Frappe Framework for AI-powered content generation tailored to your brand voice, automating the workflow from ideation to publishing.',
    slug: '/ai-automation/apps/content-spark-marketing-automation',
    icon: Sparkles,
  },
  {
    name: 'AI Powered Resume Ranker',
    description:
      'Automates recruitment by extracting key skills from job descriptions and resumes, using a scoring logic for fair and expedited hiring decisions.',
    slug: '/erpnext/ai/ai-powered-resume-ranker',
    icon: FileSearch,
  },
  {
    name: 'AI Sales Call Analysis',
    description:
      'An AI tool that transforms sales calls into coaching opportunities by providing transcripts, tone analysis, actionable feedback, and optimized scripts.',
    slug: '/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext',
    icon: Mic,
  },
  {
    name: 'Smart Card Scanner',
    description:
      'Transforms business card management with AI and ERPNext integration. Scan cards via a Telegram bot for real-time, validated CRM data extraction.',
    slug: '/erpnext/ai/ai-powered-smart-card-scanner',
    icon: ScanLine,
  },
  {
    name: 'AI Outreach Lead Generation',
    description:
      'Enhances lead generation and outreach using Apollo for sourcing, AI for research enrichment, and automated drafting for personalized communication.',
    slug: '/ai-outreach-lead-generation-research',
    icon: Send,
  },
];

const ctaData = {
  subheading: { text: 'Ready to Empower Your ERPNext?', icon: 'CheckCircle' },
  title: 'Integrate Intelligence into Your Workflow Today',
  description:
    'Discover how our suite of AI tools can reduce manual work, accelerate sales, and provide critical insights for your business. Schedule a personalized demo to see them in action.',
  primaryButton: { text: 'Request a Demo', icon: 'ArrowRight', action: '/contact' },
};

export default function AiProductsHomePage() {
  return (
    <>
      <DynamicHero {...heroData} />

      <Section>
        <div className="container-custom py-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Explore Our Suite of AI Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each tool is crafted to solve a specific business challenge, integrating seamlessly
              with ERPNext to create a unified, intelligent ecosystem. Click on any product to learn
              more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <Link key={product.name} href={product.slug} className="block group">
                <Card className="h-full border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/30 flex flex-col">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold leading-snug pt-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-16">
        </div>
      </Section>
    </>
  );
}
