"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function AIConsultingContent() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Expert Guidance for Your AI Journey"
                    highlightWords={["Expert Guidance"]}
                    description="AI adoption is not just technical; it's strategic. Finbyz Tech helps you identify high-impact opportunities, mitigate risks, and build a winning AI roadmap."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        src: "/images/consult-finbyz.svg",
                        alt: "AI Consulting Services"
                    }}
                    primaryButton={{
                        text: 'Explore Consulting Services',
                        action: () => {
                            const el = document.getElementById('consulting-services')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Book Strategy Session',
                        action: '/contact',
                    }}
                />
            </Section>

            {/* Consulting Services Grid */}
            <Section id="consulting-services" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "AI Strategy & Consulting",
                        subtitle: "From ideation to execution readiness",
                        cards: [
                            {
                                id: 1,
                                title: "AI Strategy & Roadmap",
                                description:
                                    "We help you define a clear, phased approach to AI adoption that aligns with your long-term business goals and budget.",
                                icon: "Map",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "Use Case Discovery",
                                description:
                                    "Identify the specific areas within your operations where AI can deliver the highest value and fastest return on investment.",
                                icon: "Search",
                                iconBg: "#FF8C00",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "Technical Feasibility",
                                description:
                                    "Assess your data quality, infrastructure, and technical readiness to ensure your AI projects utilize viable approaches.",
                                icon: "CheckCircle",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "Vendor & Tool Evaluation",
                                description:
                                    "Navigate the crowded AI market. We help you choose the right models (OpenAI vs Llama, etc.) and platforms for your needs.",
                                icon: "ShoppingBag",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 5,
                                title: "ROI Analysis",
                                description:
                                    "Develop detailed cost-benefit models to project the financial impact of your AI initiatives before writing a single line of code.",
                                icon: "PieChart",
                                iconBg: "#E74C3C",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 6,
                                title: "Ethics, Security & Compliance",
                                description:
                                    "Establish governance frameworks to ensure your AI systems are fair, transparent, secure, and compliant with regulations.",
                                icon: "Shield",
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Why Consulting Matters */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "Why Start with Consulting?",
                        subtitle: "Minimize risk and maximize success rates",
                        benefits: [
                            {
                                label: "Clarity & Focus",
                                header: "Avoid the Hype Cycle",
                                description:
                                    "Don't implement AI just because it's trendy. We ensure you solve real problems that move the needle for your business.",
                                icon: "Lightbulb",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Cost Efficiency",
                                header: "Prevent Waste",
                                description:
                                    "A well-defined strategy prevents costly experiments and dead-ends, ensuring your resources are invested where they count.",
                                icon: "DollarSign",
                                palette: { iconBg: "#FF8C00", iconColor: "#ffffff" },
                            },
                            {
                                label: "Faster Adoption",
                                header: "Accelerated Time-to-Value",
                                description:
                                    "With a clear plan and the right technology choices, you can move from pilot to production significantly faster.",
                                icon: "FastForward",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* Consulting Process */}
            <Section>
                <ResponsiveCardGrid
                    data={{
                        title: "Our Engagement Process",
                        subtitle: "Collaborative, data-driven, and result-focused",
                        cards: [
                            {
                                id: 101,
                                title: "1. Assess",
                                description: "We interview stakeholders and analyze your data ecosystem to understand your current state and aspirations.",
                                icon: "Activity",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 102,
                                title: "2. Plan",
                                description: "We co-create a prioritized AI roadmap, defining pilot projects, resource requirements, and success metrics.",
                                icon: "Calendar",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 103,
                                title: "3. Pilot",
                                description: "We oversee rapid Proof of Concepts (PoCs) to validate assumptions and demonstrate value with minimal risk.",
                                icon: "FlaskConical",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 104,
                                title: "4. Scale",
                                description: "Based on pilot results, we help you plan the full-scale deployment and organizational change management.",
                                icon: "TrendingUp",
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
                        subheading: { text: "Lead with Confidence", icon: "Compass" },
                        title: "Ready to Define Your AI Future?",
                        description:
                            "Book a strategy session with our principal consultants to discuss your business challenges.",
                        primaryButton: {
                            text: "Schedule Strategy Session",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "See Custom Development",
                            action: "/ai-automation/services/custom-ai-development",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
