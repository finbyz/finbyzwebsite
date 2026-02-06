"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function Page() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Mastering Workflow Automation with n8n"
                    highlightWords={["Workflow Automation"]}
                    description="Unleash the power of fair-code automation. We design, deploy, and manage n8n workflows that connect your apps, data, and AI agents into a seamless operational symphony."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        src: "/images/workflow-transition.png",
                        alt: "n8n Workflow Automation"
                    }}
                    primaryButton={{
                        text: 'Explore Services',
                        action: () => {
                            const el = document.getElementById('n8n-services')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Consult an Expert',
                        action: '/contact',
                    }}
                />
            </Section>

            {/* Why n8n? */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "Why Choose n8n for Automation?",
                        subtitle: "The most powerful workflow automation tool that puts you in control.",
                        benefits: [
                            {
                                label: "Control",
                                header: "Self-Hosted & Secure",
                                description:
                                    "Keep your data on your own servers. n8n offers a self-hosted option that ensures compliance and total data sovereignty compared to cloud-only alternatives.",
                                icon: "Shield",
                                palette: { iconBg: "#E74C3C", iconColor: "#ffffff" },
                            },
                            {
                                label: "Flexibility",
                                header: "Visual + Code",
                                description:
                                    "A user-friendly node-based interface for visual builders, with the power of JavaScript/TypeScript for developers when complex logic is needed.",
                                icon: "Code",
                                palette: { iconBg: "#2980B9", iconColor: "#ffffff" },
                            },
                            {
                                label: "Integration",
                                header: "Universal Connectivity",
                                description:
                                    "Connects to anything with an API. With hundreds of native integrations and a generic HTTP request node, no data silo is unreachable.",
                                icon: "Link",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* Services Grid */}
            <Section id="n8n-services" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Our n8n Expertise",
                        subtitle: "Comprehensive services to automate your business processes",
                        cards: [
                            {
                                id: 1,
                                title: "Custom Workflow Development",
                                description:
                                    "We map out your manual processes and turn them into resilient, automated n8n workflows that run 24/7 without errors.",
                                icon: "Workflow",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "Self-Hosting Setup & Management",
                                description:
                                    "Expert installation of n8n on your infrastructure (AWS, DigitalOcean, Hetzner). We handle updates, scaling, and security hardening.",
                                icon: "Server",
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "AI Agent Orchestration",
                                description:
                                    "Build complex AI chains using n8n's LangChain nodes. Trigger AI agents to analyze emails, process documents, or generate content automatically.",
                                icon: "Brain",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "API Integration & Webhooks",
                                description:
                                    "Connect your ERP, CRM, and marketing tools. We build custom API connectors and webhook listeners to sync data in real-time.",
                                icon: "Globe",
                                iconBg: "#2980B9",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 5,
                                title: "Make/Zapier Migration",
                                description:
                                    "Reduce costs and gain control by migrating your expensive Zapier or Make scenarios to a robust, self-hosted n8n environment.",
                                icon: "ArrowRight",
                                iconBg: "#F39C12",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 6,
                                title: "Consulting & Training",
                                description:
                                    "Empower your team. We provide training sessions and consultation to help your internal developers master n8n studio.",
                                icon: "Users",
                                iconBg: "#16A085",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Comparison Section */}
            <Section className="py-16 bg-slate-50">
                <ResponsiveCardGrid
                    data={{
                        title: "n8n vs The Rest",
                        subtitle: "Why switching to n8n is a smart move for scaling businesses",
                        cards: [
                            {
                                id: 101,
                                title: "Cost Efficiency",
                                description: "Run unlimited workflows for a fixed server cost, unlike per-task pricing models of Zapier or Make that scale aggressively with usage.",
                                icon: "DollarSign",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 102,
                                title: "Complex Execution",
                                description: "Handle long-running processes, wait nodes, and complex branching logic that other platforms struggle to support reliably.",
                                icon: "Activity",
                                iconBg: "#C0392B",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 103,
                                title: "Developer Friendly",
                                description: "Git integration, JSON manipulation, and custom JavaScript functions make it the top choice for technical teams.",
                                icon: "GitCommit",
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
                        subheading: { text: "Automate Everything", icon: "Zap" },
                        title: "Ready to Streamline Your Operations?",
                        description:
                            "Stop wasting time on manual inputs. Let us build the invisible workforce that scales your business.",
                        primaryButton: {
                            text: "Start Automating",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "Read Insights",
                            action: "/n8n/insights",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
