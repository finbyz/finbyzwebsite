"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function CaseStudiesPageContent() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Real Impact, Real Results"
                    highlightWords={["Real Results"]}
                    description="See how Finbyz Tech empowers businesses to overcome challenges and achieve exponential growth through technology."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        src: "/images/success-story.jpeg",
                        alt: "Client Success Stories"
                    }}
                    primaryButton={{
                        text: 'View Success Stories',
                        action: () => {
                            const el = document.getElementById('stories')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                />
            </Section>

            {/* Case Studies Grid */}
            <Section id="stories" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Success Stories",
                        subtitle: "Transforming industries one project at a time",
                        cards: [
                            {
                                id: 1,
                                title: "Manufacturing Efficiency",
                                description:
                                    "Implemented a full-scale ERPNext solution for a chemical manufacturer, reducing waste by 25% and streamlining supply chain operations.",
                                icon: "Factory",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "E-commerce AI Automation",
                                description:
                                    "Deployed an AI-powered customer support agent (Moltbot) for a retail giant, handling 70% of inquiries automatically.",
                                icon: "Bot",
                                iconBg: "#FF8C00",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "Global HRM Solution",
                                description:
                                    "Developed a custom HR management system for an MNC, unifying employee data across 12 countries with real-time analytics.",
                                icon: "Globe",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "Logistics Optimization",
                                description:
                                    "Built a custom fleet management dashboard integrated with ERPNext to track shipments and optimize delivery routes.",
                                icon: "Truck",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 5,
                                title: "Fintech Reporting Tool",
                                description:
                                    "Created a high-performance financial reporting engine capable of processing millions of transactions for instant insights.",
                                icon: "TrendingUp",
                                iconBg: "#E74C3C",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 6,
                                title: "Healthcare Patient Portal",
                                description:
                                    "Designed and built a secure, HIPAA-compliant patient portal improving patient engagement and reducing administrative burden.",
                                icon: "HeartPulse",
                                iconBg: "#1ABC9C",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Benefits Section */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "The Finbyz Difference",
                        subtitle: "Why clients trust us with their critical systems",
                        benefits: [
                            {
                                label: "Deep Expertise",
                                header: "Industry Knowledge",
                                description:
                                    "We understand the specific challenges of your industry, from compliance to operational bottlenecks.",
                                icon: "Briefcase",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Agile Delivery",
                                header: "Fast Turnaround",
                                description:
                                    "Our agile processes ensure you get value faster, with frequent updates and a focus on shipping working software.",
                                icon: "Zap",
                                palette: { iconBg: "#FF8C00", iconColor: "#ffffff" },
                            },
                            {
                                label: "Long-term Partnership",
                                header: "Ongoing Support",
                                description:
                                    "We don't just build and leave. We provide continuous support and evolution for your technology stack.",
                                icon: "Users",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* CTA Section */}
            <Section className="py-16">
                <CTA
                    data={{
                        subheading: { text: "Join Our Success Stories", icon: "Star" },
                        title: "Ready to Write Your Success Story?",
                        description:
                            "Contact us today to discuss how we can help you achieve similar results.",
                        primaryButton: {
                            text: "Get Started",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "Explore Services",
                            action: "/solutions",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
