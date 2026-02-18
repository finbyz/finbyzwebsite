"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import Link from "next/link";
import List from "@/components/sections/list";
import { FaUserPlus, FaSearch, FaHandshake, FaRocket } from "react-icons/fa";

export default function StaffAugmentationContent() {
    return (
        <div className="bg-white">
            {/* Hero Section - Full Width Background Fix */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <DynamicHero
                    headline="Scale Your Development Team On Demand"
                    highlightWords={["On Demand"]}
                    description="Access top-tier pre-vetted developers, designers, and AI experts. Flexible engagement models to suit your project needs without the hiring overhead."
                    backgroundColor="bg-transparent"
                    heroImage={{
                        alt: 'Staff Augmentation',
                        // src: '/staff_augmentation.jpeg',
                        src:"/staff-augmentation.png"
                    }}
                    primaryButton={{
                        text: 'View Available Roles',
                        action: () => {
                            const el = document.getElementById('roles')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Hire Now',
                        action: '/contact',
                    }}
                />
            </div>

            {/* Roles Grid */}
            <Section id="roles" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Expert Talent Ready to Join You",
                        subtitle: "Select from our pool of qualified professionals across various domains",
                        cards: [
                            {
                                id: 1,
                                title: "Frontend Developers",
                                description:
                                    "Experts in React.js, Next.js, Vue.js, and modern UI frameworks to build stunning user interfaces.",
                                icon: "Code",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "Backend Developers",
                                description:
                                    "Robust API development using Python (Django/FastAPI), Node.js, and Golang for scalable backends.",
                                icon: "Server",
                                iconBg: "#d97706", // Fixed orange
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "Frappe/ERPNext Experts",
                                description:
                                    "Certified Frappe Framework developers to customize and extend your ERPNext implementation.",
                                icon: "Database",
                                iconBg: "#16a34a", // Fixed green
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "AI/ML Engineers",
                                description:
                                    "Specialists in LLM integration, LangChain, and predictive modeling to add intelligence to your apps.",
                                icon: "Bot",
                                iconBg: "#9333ea", // Fixed purple
                                iconColor: "#ffffff"
                            },
                            {
                                id: 5,
                                title: "Mobile App Developers",
                                description:
                                    "Build native-quality iOS and Android apps using React Native and Flutter.",
                                icon: "Smartphone",
                                iconBg: "#dc2626", // Fixed red
                                iconColor: "#ffffff"
                            },
                            {
                                id: 6,
                                title: "QA Engineers",
                                description:
                                    "Ensure software quality with manual and automated testing strategies using Selenium and Playwright.",
                                icon: "CheckCircle",
                                iconBg: "#f59e0b", // Fixed amber
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* New Section: Hiring Process */}
            <Section className="py-8 bg-muted/20">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#1A5276]">Simple 4-Step Hiring Process</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We have streamlined our onboarding process to get you the right talent in record time.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: FaSearch, title: "Requirement Analysis", desc: "We understand your project needs, tech stack, and team culture." },
                            { icon: FaUserPlus, title: "Candidate Shortlisting", desc: "We screen and present the top 3% matches from our talent pool." },
                            { icon: FaHandshake, title: "Interview & Selection", desc: "You interview candidates and select the best fit for your team." },
                            { icon: FaRocket, title: "Onboarding", desc: "We handle contracts and setup. Your new developer starts in < 48 hours." }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-card p-6 rounded-xl border shadow-sm flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                    <step.icon />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Sub-pages Navigation */}
            <Section className="py-16 border-t border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        {/* Removed gradient text, used consistent primary color */}
                        <h2 className="text-3xl font-bold text-[#1A5276]">
                            Explore Our Specialized Staffing Solutions
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Dive deeper into our specialized staffing solutions tailored for specific technologies and roles.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Hire Python Developers", href: "/staff-augmentation/hire-python-developers" },
                            { title: "Hire Django Developers", href: "/staff-augmentation/django-developer" },
                            { title: "Hire JavaScript Developers", href: "/staff-augmentation/hire-javascript-developers" },
                            { title: "Hire Web App Developers", href: "/staff-augmentation/web-application-developers" },
                            { title: "Frappe/ERPNext Experts", href: "/staff-augmentation/experts" },
                            { title: "How to Hire Python Developers", href: "/staff-augmentation/how-to-hire-python-developers" },
                        ].map((page, index) => (
                            <Link
                                key={index}
                                href={page.href}
                                className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 flex items-center justify-between"
                            >
                                <span className="font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                                    {page.title}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-orange-600 transition-colors"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Benefits Section */}
            <Section className="py-8 bg-gray-50">
                <Benefits
                    data={{
                        title: "Why Augment with Finbyz?",
                        subtitle: "We take the friction out of hiring",
                        benefits: [
                            {
                                label: "Quality Assured",
                                header: "Top 1% Vetted Talent",
                                description:
                                    "Our rigorous screening process ensures you get developers with proven technical skills and strong communication abilities.",
                                icon: "Award",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Immediate Start",
                                header: "Onboard in 48 Hours",
                                description:
                                    "Skip the months-long hiring process. Select your team and get them started on your project within days.",
                                icon: "Clock",
                                palette: { iconBg: "#d97706", iconColor: "#ffffff" },
                            },
                            {
                                label: "Zero Overhead",
                                header: "Flexible Scaling",
                                description:
                                    "Scale your team up or down based on project needs. No long-term contracts or payroll headaches.",
                                icon: "TrendingUp",
                                palette: { iconBg: "#16a34a", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* CTA Section */}
            <Section className="py-16">
                <CTA
                    data={{
                        subheading: { text: "Build Your Dream Team", icon: "Users" },
                        title: "Ready to Scale Your Development Capacity?",
                        description:
                            "Get access to the specialized skills you need to deliver your project on time and within budget.",
                        primaryButton: {
                            text: "Request Talent",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "Schedule Call",
                            action: "/contact",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
