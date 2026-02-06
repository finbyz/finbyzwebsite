'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import TechnologyStack from '@/components/sections/technology-stack';
import ProcessWorkflow from '@/components/sections/process-workflow';
import StatsShowcase from '@/components/sections/stats-showcase';
import CTA from '@/components/sections/cta';
import { Bot, Brain, Workflow, Zap, Shield, Globe, Cpu, Target, TrendingUp, Users, Clock, CheckCircle, Sparkles, Network, Layers } from 'lucide-react';

// Custom AI Models Technology Stack Data
const aiTechnologyStack = [
    {
        category: "Large Language Models",
        icon: "Brain",
        technologies: ["OpenAI GPT-4o", "Claude 3.5", "Gemini Pro", "Llama 3"],
        description: "State-of-the-art AI models for intelligent reasoning and generation",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
    },
    {
        category: "Agent Frameworks",
        icon: "Cpu",
        technologies: ["LangChain", "CrewAI", "AutoGen", "LangGraph"],
        description: "Multi-agent orchestration and autonomous system coordination",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
    },
    {
        category: "Workflow Automation",
        icon: "Workflow",
        technologies: ["n8n", "Webhooks", "REST APIs", "Event Triggers"],
        description: "Visual workflow builder with 400+ native integrations",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
    },
    {
        category: "RAG & Knowledge",
        icon: "Database",
        technologies: ["Vector DBs", "Pinecone", "ChromaDB", "Embeddings"],
        description: "Retrieval-augmented generation for contextual AI responses",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
    },
    {
        category: "Self-Hosted LLMs",
        icon: "Shield",
        technologies: ["Ollama", "vLLM", "LocalAI", "Text Gen UI"],
        description: "On-premise AI deployment for data sovereignty and compliance",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
    },
    {
        category: "Enterprise Integration",
        icon: "GitBranch",
        technologies: ["ERPNext", "CRM", "Databases", "Cloud Services"],
        description: "Seamless connection to your existing business systems",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
    }
];

// Implementation Process Steps
const implementationSteps = [
    {
        step: "01",
        title: "Discovery & Assessment",
        description: "We analyze your business processes, identify automation opportunities, and define the scope of your AI agent ecosystem.",
        icon: "Search",
        details: ["Process mapping", "Use case identification", "ROI analysis", "Technology assessment"],
        duration: "1-2 weeks",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
    },
    {
        step: "02",
        title: "Agent Architecture Design",
        description: "Design the multi-agent system architecture, define agent roles, communication patterns, and orchestration logic.",
        icon: "Lightbulb",
        details: ["Agent role definition", "Workflow mapping", "Integration planning", "Security design"],
        duration: "2-3 weeks",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
    },
    {
        step: "03",
        title: "Development & Integration",
        description: "Build and integrate AI agents with n8n workflows, connecting to your existing systems and data sources.",
        icon: "Code",
        details: ["Agent development", "n8n workflow creation", "API integration", "Custom connectors"],
        duration: "4-6 weeks",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
    },
    {
        step: "04",
        title: "Testing & Optimization",
        description: "Rigorous testing of agent behaviors, edge cases, and performance optimization for production readiness.",
        icon: "TestTube",
        details: ["Unit testing", "Integration testing", "Performance tuning", "Error handling"],
        duration: "2-3 weeks",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
    },
    {
        step: "05",
        title: "Deployment & Training",
        description: "Deploy the AI agent system to your infrastructure and train your team on operation and maintenance.",
        icon: "Rocket",
        details: ["Production deployment", "Team training", "Documentation", "Handover"],
        duration: "1-2 weeks",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
    },
    {
        step: "06",
        title: "Ongoing Support & Scaling",
        description: "Continuous monitoring, optimization, and scaling of your AI agent ecosystem as your needs evolve.",
        icon: "CheckCircle",
        details: ["24/7 monitoring", "Performance reports", "Feature updates", "Capacity scaling"],
        duration: "Ongoing",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
    }
];

// Success Metrics / Stats
const successStats = [
    {
        icon: Workflow,
        value: 500,
        suffix: "+",
        label: "Workflows Automated",
        description: "Complex business processes automated with AI agents",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
    },
    {
        icon: TrendingUp,
        value: 40,
        suffix: "%",
        label: "Efficiency Improvement",
        description: "Average productivity gain for our clients",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
    },
    {
        icon: Clock,
        value: 24,
        suffix: "/7",
        label: "Autonomous Operations",
        description: "AI agents working around the clock for you",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
    },
    {
        icon: Target,
        value: 90,
        suffix: "%",
        label: "Error Reduction",
        description: "Fewer manual errors with AI-driven automation",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
    }
];

// Use Cases / Industry Applications
const useCases = [
    {
        title: "Customer Support Automation",
        description: "Multi-agent systems that handle tickets, route queries, and provide intelligent responses 24/7.",
        icon: Users,
        color: "#1A5276"
    },
    {
        title: "Document Processing",
        description: "AI agents that extract, classify, and process documents with human-level accuracy.",
        icon: Layers,
        color: "#FF8C00"
    },
    {
        title: "Data Analysis & Reporting",
        description: "Automated data pipelines and intelligent reporting with natural language insights.",
        icon: TrendingUp,
        color: "#27AE60"
    },
    {
        title: "Sales & Lead Qualification",
        description: "AI-powered lead scoring, outreach automation, and CRM enrichment workflows.",
        icon: Target,
        color: "#8E44AD"
    },
    {
        title: "IT Operations & DevOps",
        description: "Automated incident response, infrastructure monitoring, and deployment workflows.",
        icon: Cpu,
        color: "#1A5276"
    },
    {
        title: "Research & Knowledge Management",
        description: "RAG-powered knowledge bases and intelligent research assistants for your team.",
        icon: Brain,
        color: "#FF8C00"
    }
];

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="n8n AI Agent Orchestration"
                highlightWords={["AI Agent", "Orchestration"]}
                description="Build intelligent multi-agent automation systems that autonomously execute complex workflows. Harness the power of OpenAI, Claude, Gemini, and LangChain with n8n's visual workflow builder."
                primaryButton={{
                    text: 'Get a Demo',
                    action: '#contact-section'
                }}
                secondaryButton={{
                    text: 'View Use Cases',
                    action: '#use-cases'
                }}
                heroImage={{
                    alt: 'n8n AI Agent Orchestration - Multi-Agent Automation Systems',
                    src: '/images/ai-automation.jpeg',
                }}
                accentColor="orange"
            />

            {/* Introduction Section */}
            <Section>
                <div className="container-custom py-12">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#1A5276]">
                            What is AI Agent Orchestration?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            AI Agent Orchestration combines the power of <strong>large language models</strong> with <strong>n8n&apos;s visual workflow automation</strong> to create intelligent systems that can reason, plan, and execute complex tasks autonomously. Unlike simple automation, AI agents can make decisions, handle exceptions, and learn from outcomes.
                        </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#1A5276] rounded-xl flex items-center justify-center mb-6">
                                <Network className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-3">Multi-Agent Coordination</h3>
                            <p className="text-muted-foreground">
                                Deploy specialized agents that work together—researchers, writers, analysts, and executors—each handling their domain with AI-powered intelligence.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-orange-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-3">Autonomous Execution</h3>
                            <p className="text-muted-foreground">
                                AI agents that think, decide, and act. They handle edge cases, recover from errors, and complete complex workflows without constant human intervention.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-green-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#27AE60] rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-3">n8n as Command Center</h3>
                            <p className="text-muted-foreground">
                                n8n orchestrates your AI agents, managing triggers, routing, error handling, and integrations with 400+ business applications.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Technology Stack */}
            <Section useGradient>
                <TechnologyStack
                    data={{
                        title: "AI Technology Stack",
                        subtitle: "Cutting-edge AI technologies and frameworks powering your intelligent automation systems",
                        technologies: aiTechnologyStack
                    }}
                />
            </Section>

            {/* Use Cases Section */}
            <Section>
                <div className="container-custom py-12" id="use-cases">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-2xl font-bold text-[#1A5276] mb-4">
                            Industry Applications
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            AI agent orchestration transforms how enterprises operate across every domain
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#1A5276] hover:shadow-xl transition-all duration-300"
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: `${useCase.color}15` }}
                                >
                                    <useCase.icon className="w-6 h-6" style={{ color: useCase.color }} />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A5276] mb-2">{useCase.title}</h3>
                                <p className="text-muted-foreground text-sm">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Process Workflow */}
            <Section>
                <ProcessWorkflow
                    data={{
                        title: "Implementation Methodology",
                        subtitle: "Our proven 6-step process to deliver production-ready AI agent systems",
                        processSteps: implementationSteps
                    }}
                />
            </Section>

            {/* Stats Showcase */}
            {/* <Section>
                <StatsShowcase
                    data={{
                        title: "Proven Results",
                        subtitle: "Measurable outcomes from our AI agent implementations",
                        stats: successStats
                    }}
                />
            </Section> */}

            {/* Why Choose Finbyz Section */}
            <Section useGradient>
                <div className="container-custom py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
                            Why Choose Finbyz for AI Agent Orchestration?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Decades of enterprise automation expertise combined with cutting-edge AI capabilities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#1A5276] rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1A5276] mb-2">n8n Certified Experts</h3>
                                <p className="text-muted-foreground">Our team includes certified n8n developers with extensive experience building complex automation workflows.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1A5276] mb-2">AI/ML Engineering Team</h3>
                                <p className="text-muted-foreground">Dedicated AI engineers experienced with LangChain, RAG systems, and deploying production LLM applications.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#27AE60] rounded-lg flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1A5276] mb-2">Enterprise Security Focus</h3>
                                <p className="text-muted-foreground">Self-hosting options, data sovereignty compliance, and enterprise-grade security for sensitive workloads.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#8E44AD] rounded-lg flex items-center justify-center flex-shrink-0">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1A5276] mb-2">ERPNext Integration Specialists</h3>
                                <p className="text-muted-foreground">Deep expertise in integrating AI agents with ERPNext and other enterprise systems for unified automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section>
                <div className="container-custom py-8" id="contact-section">
                    <CTA
                        data={{
                            subheading: {
                                text: 'Ready to Transform Your Business with AI?',
                                icon: 'Sparkles',
                            },
                            title: 'Build Your AI Agent Ecosystem Today',
                            highlightText: "AI Agent Ecosystem",
                            description: 'Schedule a consultation with our AI automation experts to explore how multi-agent systems can revolutionize your workflow.',
                            primaryButton: {
                                text: 'Schedule Consultation',
                                icon: 'ArrowRight',
                                action: '/contact-us'
                            },
                            secondaryButton: {
                                text: 'View Case Studies',
                                icon: 'FileText',
                                action: '/ai-automation/insights'
                            },
                            trustIndicator: {
                                text: 'Trusted by 100+ enterprises worldwide',
                                icon: 'ShieldCheck',
                            },
                        }}
                    />
                </div>
            </Section>
        </>
    );
}
