'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import Image from 'next/image';
import { Brain, Search, Users, FileText, Zap, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

export default function Page() {
    const handleContact = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/contact';
        }
    };

    const aiToolsData = {
        title: 'Precision AI Toolset',
        subtitle: 'Powerful integrations designed to eliminate manual data entry and elevate human productivity.',
        cards: [
            {
                id: 1,
                title: 'Lead Intelligence',
                description: 'Automated inquiry classification and deduplication. Turn emails into CRM leads instantly.',
                icon: 'MessageSquare',
                iconBg: '#1A5276',
                iconColor: '#ffffff',
                action: '/erpnext/ai/lead-intelligence'
            },
            {
                id: 2,
                title: 'AI Resume Ranker',
                description: 'Rank candidates based on skill proximity and job requirements with explainable AI scores.',
                icon: 'FileUser',
                iconBg: '#FF8C00',
                iconColor: '#ffffff',
                action: '/erpnext/ai/ai-powered-resume-ranker'
            },
            {
                id: 3,
                title: 'Smart Card Scanner',
                description: 'OCR-powered card scanning to sync physical contacts directly with your ERPNext database.',
                icon: 'CreditCard',
                iconBg: '#27AE60',
                iconColor: '#ffffff',
                action: '/erpnext/ai/ai-powered-smart-card-scanner'
            },
            {
                id: 4,
                title: 'Quote Assistant',
                description: 'Intelligent quotation drafting that learns from historical data to suggest optimal terms.',
                icon: 'FileText',
                iconBg: '#8E44AD',
                iconColor: '#ffffff',
                action: '/erpnext/ai/ai-powered-quote-assistant'
            }
        ],
        layout: 'standard' as const,
        variant: 'iconCard' as const,
        showImage: false
    };

    return (
        <>
            {/* Section 1: Hero Section */}
            <HeroSection
                headline="ERPNext + AI: Intelligent Enterprise Automation"
                highlightWords={["ERPNext", "AI"]}
                description="Supercharge your enterprise operations with cutting-edge AI integrations. From autonomous lead processing to predictive recruitment, we bring the power of intelligence to your ERP."
                primaryButton={{ text: 'Explore Solutions', action: '#tools' }}
                secondaryButton={{
                    text: 'Get a Demo', action: handleContact
                }}
                heroImage={{
                    alt: 'ERPNext AI Automation',
                    // src: '/AI_Powered_Resume_Ranker.gif', 
                    src:"/erpnext-ai.png"
                }}
            />

            {/* Section 2: Overview */}
            <Section id="overview">
                <div className="container-custom py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl text-[#1A5276] font-bold mb-8">The Renaissance of ERP</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            Traditional ERPs record what happened. AI-powered ERPNext predicts what should happen. At Finbyz Tech, we bridge the gap between static data and autonomous action by embedding Artificial Intelligence into the core of your business processes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {[
                                { icon: Zap, title: "Autonomous Speed", desc: "Process inquiries and rank resumes in seconds, not hours." },
                                { icon: ShieldCheck, title: "Predictive Accuracy", desc: "Reduce human error with AI-driven validation and extraction." },
                                { icon: TrendingUp, title: "Scalable Insights", desc: "Gain deeper visibility into your data with intelligent analysis." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <item.icon className="w-10 h-10 text-[#1A5276] mx-auto mb-4" />
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Quote Block */}
            <Section>
                <div className="container-custom py-8">
                    <QuoteBlock
                        text="The goal of AI in the enterprise isn't to replace humans, but to augment them—moving from manual data entry to strategic decision-making."
                        isHeading={false}
                    />
                </div>
            </Section>

            {/* Section 3: AI Toolset (Grid) */}
            <Section id="tools" useGradient>
                <div className="py-16">
                    <ResponsiveCardGrid data={aiToolsData} />
                </div>
            </Section>

            {/* Section 4: Agentic Workflows */}
            <Section className="overflow-hidden">
                <div className="container-custom py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl text-[#1A5276] font-bold mb-6">Autonomous Multi-Agent Workflows</h2>
                            <p className="text-gray-700 text-lg mb-8">
                                Our AI strategy goes beyond single-task tools. We build "Agentic Workflows" where multiple AI agents collaborate to handle complex business logic—like our n8n-powered **Follow-up Buddy** that autonomously nurtures leads while keeping your CRM clean.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Seamless n8n & LangChain integrations",
                                    "Cross-module data intelligence",
                                    "Human-in-the-loop validation points",
                                    "Enterprise-grade security and audibility"
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-2 h-2 bg-[#1A5276] rounded-full" />
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
                                alt="AI Network Illustration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 5: Advantage Grid */}
            <Section useGradient className="bg-[#1A5276]/5">
                <div className="container-custom py-16">
                    <h2 className="text-3xl text-[#1A5276] font-bold text-center mb-12">The Finbyz AI Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Brain, title: "Deep Integration", desc: "Not just a wrapper; our AI is deeply baked into ERPNext schemas." },
                            { icon: FileText, title: "Clean Data", desc: "Automated extraction ensures your CRM stays single-source-of-truth." },
                            { icon: Search, title: "Auditable AI", desc: "Every AI decision is logged and explainable for compliance." },
                            { icon: Cpu, title: "Custom Models", desc: "We train and fine-tune models on your specific industry datasets." }
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-[#1A5276]" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
