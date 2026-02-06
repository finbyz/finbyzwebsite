"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function CustomAIDevelopmentContent() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Tailored AI Solutions for Your Business"
                    highlightWords={["Tailored AI Solutions"]}
                    description="Move beyond generic tools. Finbyz Tech engineers custom Artificial Intelligence solutions designed to integrate perfectly with your workflows and data."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        src: "/images/ai-image.png",
                        alt: "Custom AI Development"
                    }}
                    primaryButton={{
                        text: 'Explore AI Services',
                        action: () => {
                            const el = document.getElementById('services')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Book Consultation',
                        action: '/contact',
                    }}
                />
            </Section>

            {/* AI Services Grid */}
            <Section id="services" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Our Custom AI Capabilities",
                        subtitle: "From training proprietary models to building intelligent agents",
                        cards: [
                            {
                                id: 1,
                                title: "Generative AI & LLMs",
                                description:
                                    "Fine-tune Large Language Models (LLMs) on your enterprise data to create secure, domain-specific chat interfaces and content generators.",
                                icon: "Brain",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "Natural Language Processing",
                                description:
                                    "Build systems that understand, analyze, and generate human language for sentiment analysis, document processing, and automated support.",
                                icon: "MessageSquare",
                                iconBg: "#FF8C00",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "Computer Vision",
                                description:
                                    "Implement visual recognition systems for quality control in manufacturing, automated surveillance, or image metadata extraction.",
                                icon: "Eye",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "Intelligent AI Agents",
                                description:
                                    "Deploy autonomous agents (like our Moltbot) that can execute multi-step workflows, query databases, and interact with APIs.",
                                icon: "Bot",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 5,
                                title: "Predictive Analytics",
                                description:
                                    "Leverage machine learning algorithms to forecast trends, demand, and customer behavior based on historical data patterns.",
                                icon: "LineChart",
                                iconBg: "#E74C3C",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 6,
                                title: "Data Engineering & Pipelines",
                                description:
                                    "Build the robust data infrastructure required to feed your AI models, ensuring data quality, security, and real-time processing.",
                                icon: "Database",
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Why Finbyz for AI */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "Why Partner with Finbyz for AI?",
                        subtitle: "Bridging the gap between cutting-edge research and business value",
                        benefits: [
                            {
                                label: "Practical Application",
                                header: "Results-Oriented",
                                description:
                                    "We focus on AI that solves real problems—reducing costs, increasing speed, or unlocking new revenue streams—not just hype.",
                                icon: "Target",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Security First",
                                header: "Data Privacy",
                                description:
                                    "Your data is your asset. We build secure environments for model training and inference that protect your intellectual property.",
                                icon: "ShieldCheck",
                                palette: { iconBg: "#FF8C00", iconColor: "#ffffff" },
                            },
                            {
                                label: "Integration Masters",
                                header: "Seamless Connectivity",
                                description:
                                    "As ERP experts, we know how to integrate AI directly into your core business systems (ERPNext, CRMs) for maximum impact.",
                                icon: "Plug",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* Development Process (Using ResponsiveCardGrid with different layout/content as placeholder for process) */}
            <Section className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Our AI Development Process",
                        subtitle: "A structured approach to innovation",
                        cards: [
                            {
                                id: 101,
                                title: "1. Discovery & Feasibility",
                                description: "We analyze your problem and data availability to determine the best technical approach and ROI.",
                                icon: "Search",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 102,
                                title: "2. Data Preparation",
                                description: "Structuring, cleaning, and labeling your data to ensure high-quality inputs for model training.",
                                icon: "FileText",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 103,
                                title: "3. Modeling & Development",
                                description: "Iterative development of models or agents, fine-tuning for accuracy and performance.",
                                icon: "Cpu",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 104,
                                title: "4. Integration & Deployment",
                                description: "Deploying the solution into your live environment and integrating it with user interfaces.",
                                icon: "Rocket",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* CTA Section */}
            <Section className="py-16">
                <CTA
                    data={{
                        subheading: { text: "Future-Proof Your Business", icon: "Zap" },
                        title: "Ready to Build Your Custom AI Strategy?",
                        description:
                            "Schedule a consultation with our AI specialists to discuss your use case and explore the possibilities.",
                        primaryButton: {
                            text: "Start the Conversation",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "View AI Solutions",
                            action: "/solutions",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
