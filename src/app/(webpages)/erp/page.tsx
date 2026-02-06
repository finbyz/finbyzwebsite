"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import ModulesSection from "@/components/sections/modules-erp";
import ErpModulesTabs from "@/components/ai_components/ErpModuleTabs";

export default function ERPPage() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Enterprise Resource Planning Solutions"
                    highlightWords={['Enterprise', 'Resource', 'Planning']}
                    description="Streamline your entire business operation with our comprehensive ERP solutions. From finance to supply chain, gain complete control and visibility over your organization."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        alt: 'ERP Solutions - Comprehensive business management',
                        src: '/erp-solutions-hero.png'
                    }}
                    primaryButton={{
                        text: 'Explore Modules',
                        action: () => {
                            const el = document.getElementById('erp-modules-carousel')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Contact Us',
                        action: '/contact',
                    }}
                />
            </Section>

            {/* Modules Carousel Overview */}
            <Section id="erp-modules-carousel" className="">
                <ModulesSection />
            </Section>

            {/* Introduction - What is ERP? */}
            <Section className="py-16">
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Unified Business Management</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        In today's fast-paced business environment, efficiency and integration are keys to success.
                        <strong> Enterprise Resource Planning (ERP)</strong> software acts as the central nervous system of your company, connecting every department—from finance and HR to manufacturing and sales—into a single, unified source of truth.
                    </p>
                </div>
            </Section>

            {/* Detailed Modules Tabs (replacing simple grid) */}
            <Section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#1A5276]">Deep Dive into Core Modules</h2>
                        <p className="text-slate-600 mt-2">Explore the features that power your business</p>
                    </div>
                    <ErpModulesTabs />
                </div>
            </Section>

            {/* Industries Served */}
            <Section className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Solutions by Industry",
                        subtitle: "Tailored ERP workflows for your specific sector",
                        cards: [
                            {
                                id: 101,
                                title: "Manufacturing",
                                description: "Discrete and process manufacturing solutions with rigorous quality control and material planning.",
                                icon: "Factory",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 102,
                                title: "Retail & Distribution",
                                description: "Omnichannel retail management with POS integration and complex supply chain logistics.",
                                icon: "ShoppingBag",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 103,
                                title: "Education",
                                description: "Comprehensive student information systems (SIS), fee management, and LMS integration.",
                                icon: "GraduationCap",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 104,
                                title: "Healthcare",
                                description: "Patient management, appointment scheduling, and laboratory information systems compliant with standards.",
                                icon: "Activity",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Why Choose Finbyz */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "Why Partner with Finbyz?",
                        subtitle: "We delivery more than software; we deliver transformation.",
                        benefits: [
                            {
                                label: "Holistic Approach",
                                header: "Integrated Ecosystems",
                                description:
                                    "We ensure your ERP doesn't stand alone. We integrate it with your website, mobile apps, and AI agents for a seamless digital ecosystem.",
                                icon: "Globe",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Deep Expertise",
                                header: "Certified Experts",
                                description:
                                    "Our team comprises certified ERP implementers and developers with deep domain knowledge across various industries.",
                                icon: "Award",
                                palette: { iconBg: "#FF8C00", iconColor: "#ffffff" },
                            },
                            {
                                label: "Global Presence",
                                header: "Worldwide Support",
                                description:
                                    "Serving clients from India to the USA, UK, and UAE. We understand global compliance and diverse business cultures.",
                                icon: "Map",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* Final CTA */}
            <Section className="py-16">
                <CTA
                    data={{
                        subheading: { text: "Start Your Transformation", icon: "Rocket" },
                        title: "Ready to Streamline Your Business?",
                        description:
                            "Contact us today for a free consultation and discover how the right ERP solution can drive your growth.",
                        primaryButton: {
                            text: "Schedule Consultation",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "Request Demo",
                            action: "/contact",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
