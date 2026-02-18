"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function SolutionsPageContent() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Transform Your Business with Smart Solutions"
                    highlightWords={["Smart Solutions"]}
                    description="Finbyz Tech delivers comprehensive technology solutions to drive growth, efficiency, and innovation. From ERP implementation to AI automation, we are your partner in digital transformation."
                    // Assuming a generic hero image is available or using a colored background as fallback
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        // src: "/images/Home Hero Image ERP AI Automation.png",
                        src:"/solutions.png",
                        alt: "Finbyz Solutions"
                    }}
                    primaryButton={{
                        text: 'Explore Offerings',
                        action: () => {
                            const el = document.getElementById('offerings')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Contact Us',
                        action: '/contact',
                    }}
                />
            </Section>

            {/* Solutions Grid */}
            <Section id="offerings" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Our Core Solutions",
                        subtitle: "End-to-end technology services tailored for your enterprise",
                        cards: [
                            {
                                id: 1,
                                title: "ERPNext Implementation",
                                description:
                                    "Full-lifecycle ERPNext services including consultation, implementation, customization, data migration, and training to streamline your operations.",
                                icon: "Layers",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "AI Automation",
                                description:
                                    "Intelligent automation agents to handle repetitive tasks, customer support (Moltbot), and workflow optimization, integrated directly with your ERP.",
                                icon: "Bot",
                                iconBg: "#FF8C00",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "Staff Augmentation",
                                description:
                                    "Scale your team instantly with our pool of pre-vetted developers (Python, React, Node.js) and domain experts ready to join your projects.",
                                icon: "Users",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "Custom Software Development",
                                description:
                                    "Bespoke software solutions built on modern stacks (Next.js, Python, Frappe) to address unique business challenges not covered by standard software.",
                                icon: "Code",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff"
                            },
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Benefits Section */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "Why Choose Finbyz Solutions?",
                        subtitle: "We deliver measurable value through technology",
                        benefits: [
                            {
                                label: "Holistic Approach",
                                header: "Integrated Ecosystem",
                                description:
                                    "We don't just solve isolated problems. We build integrated systems where ERP, AI, and custom apps talk to each other for seamless data flow.",
                                icon: "Globe",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Expert Team",
                                header: "Top-Tier Talent",
                                description:
                                    "Our team consists of certified ERPNext experts, senior full-stack developers, and AI specialists with years of industry experience.",
                                icon: "Award",
                                palette: { iconBg: "#FF8C00", iconColor: "#ffffff" },
                            },
                            {
                                label: "Speed to Value",
                                header: "Rapid Deployment",
                                description:
                                    "Using agile methodologies and proven frameworks, we reduce development time and accelerate your time-to-market.",
                                icon: "Zap",
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
                        subheading: { text: "Start Your Journey", icon: "Rocket" },
                        title: "Ready to Upgrade Your Business?",
                        description:
                            "Whether you need a robust ERP system, smart AI agents, or a dedicated development team, Finbyz Tech has the solution.",
                        primaryButton: {
                            text: "Get a Free Consultation",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "View Case Studies",
                            action: "/case-studies", // Assuming this exists or redirects to home
                        },
                    }}
                />
            </Section>
        </div>
    );
}
