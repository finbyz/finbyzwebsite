'use client';

import React from 'react';
import Section from '@/components/sections/Section';
import DynamicHero from '@/components/sections/dynamic-hero';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';

import Benefits from '@/components/sections/benefits';
import ProcessWorkflow from '@/components/sections/process-workflow';
import FAQ from '@/components/ai_components/FAQ';

export default function ERPServicesPage() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Our ERP Services"
                    highlightWords={['ERP', 'Services']}
                    description="Comprehensive Enterprise Resource Planning services tailored to streamline your operations and drive growth. From implementation to custom development, we have you covered."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        alt: 'ERP Services Overview',
                        // src: '/images/erpnext-dashboard-mockup.png'
                        src:"/erp-services.png"
                    }}
                    primaryButton={{
                        text: 'Explore Services',
                        action: () => {
                            const el = document.getElementById('services-grid');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    secondaryButton={{
                        text: 'Contact Us',
                        action: '/contact'
                    }}
                />
            </Section>

            {/* Why Choose Finbyz */}
            <Section className="py-12 bg-white">
                <Benefits
                    data={{
                        title: "Why Partner with Finbyz?",
                        subtitle: "We deliver more than software; we deliver transformation.",
                        benefits: [
                            {
                                label: "Expertise",
                                header: "Deep Domain Knowledge",
                                description: "Our team comprises certified ERP experts with extensive experience across manufacturing, retail, and service industries.",
                                icon: "Award",
                                palette: { iconBg: "#1A5276", iconColor: "#ffffff" },
                            },
                            {
                                label: "Integration",
                                header: "Seamless Connectivity",
                                description: "We ensure your ERP integrates perfectly with your existing CRM, eCommerce, and banking systems.",
                                icon: "Globe",
                                palette: { iconBg: "#FF8C00", iconColor: "#ffffff" },
                            },
                            {
                                label: "Scalability",
                                header: "Future-Ready Solutions",
                                description: "Our solutions are architected to grow with your business, supporting increased transaction volumes and new modules.",
                                icon: "TrendingUp",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                            {
                                label: "Support",
                                header: "24/7 Reliability",
                                description: "We provide round-the-clock support to ensure your business operations never face downtime.",
                                icon: "Clock",
                                palette: { iconBg: "#8E44AD", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* Services Grid */}
            <Section id="services-grid" className="py-16 bg-slate-50">
                <ResponsiveCardGrid
                    data={{
                        title: "Expert ERP Solutions",
                        subtitle: "Tailored services to meet your unique business needs",
                        cards: [
                            {
                                id: 1,
                                title: "Custom ERP Development",
                                description: "Build a fully tailored ERP system designed to streamline specific operations and scale with your business.",
                                icon: "Code",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff",
                                link: "/erp/services/erp-software-development",
                                showArrow: true
                            },
                            {
                                id: 2,
                                title: "ERP Implementation",
                                description: "Full lifecycle implementation services ensuring a smooth transition and rapid time-to-value.",
                                icon: "Layers",
                                iconBg: "#2980B9",
                                iconColor: "#ffffff",
                                link: "/erpnext/services/erpnext-implementation-service",
                                showArrow: true
                            },
                            {
                                id: 3,
                                title: "Process Consulting",
                                description: "Optimize your business workflows before automation. We align your processes with industry best practices.",
                                icon: "BarChart",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff",
                                link: "/erpnext/services/process-consulting",
                                showArrow: true
                            },
                            {
                                id: 4,
                                title: "Mobile App Development",
                                description: "Extend your ERP to mobile devices with custom apps for field teams, sales, and warehouse management.",
                                icon: "Smartphone",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff",
                                link: "/erpnext/services/mobile-app-development",
                                showArrow: true
                            },
                            {
                                id: 5,
                                title: "Support & AMC",
                                description: "Ensure your ERP runs smoothly 24/7 with our dedicated support and Annual Maintenance Contracts.",
                                icon: "Headphones",
                                iconBg: "#D35400",
                                iconColor: "#ffffff",
                                link: "/erpnext/services/support",
                                showArrow: true
                            },
                            {
                                id: 6,
                                title: "Data Analytics & BI",
                                description: "Transform raw data into actionable insights with integrated Business Intelligence dashboards.",
                                icon: "PieChart",
                                iconBg: "#C0392B",
                                iconColor: "#ffffff",
                                link: "/ai-automation/services/data-analytics",
                                showArrow: true
                            }
                        ],
                        variant: "iconCard"
                    }}
                />
            </Section>

            {/* Process Workflow */}
            <Section className="py-16 bg-white">
                <ProcessWorkflow
                    data={{
                        title: "Our Implementation Methodology",
                        subtitle: "A proven, agile approach to ensuring successful ERP delivery.",
                        processSteps: [
                            {
                                step: "01",
                                title: "Discovery & Analysis",
                                description: "We analyze your current workflows and identify gaps to design a solution that fits.",
                                icon: "Search",
                                details: ["Gap Analysis", "Requirement Gathering", "Project Roadmap"],
                                duration: "1-2 Weeks",
                                iconColor: "#1A5276",
                                iconBg: "#EAF1F8"
                            },
                            {
                                step: "02",
                                title: "Solution Design",
                                description: "Creating a blueprint of your ERP architecture including custom modules and integrations.",
                                icon: "Lightbulb",
                                details: ["Architecture Design", "Prototype Review", "Tech Stack Selection"],
                                duration: "2-3 Weeks",
                                iconColor: "#FF8C00",
                                iconBg: "#FFF4E5"
                            },
                            {
                                step: "03",
                                title: "Development & Config",
                                description: "Configuring the system and building custom features to match your requirements.",
                                icon: "Code",
                                details: ["Module Configuration", "Custom Coding", "Integration Setup"],
                                duration: "4-8 Weeks",
                                iconColor: "#27AE60",
                                iconBg: "#E8F8F2"
                            },
                            {
                                step: "04",
                                title: "UAT & Training",
                                description: "User Acceptance Testing and comprehensive training to ensure team adoption.",
                                icon: "CheckCircle",
                                details: ["User Training", "Bug Fixes", "UAT Sign-off"],
                                duration: "2 Weeks",
                                iconColor: "#8E44AD",
                                iconBg: "#F3EAF8"
                            },
                            {
                                step: "05",
                                title: "Go-Live & Support",
                                description: "Smooth transition to the new system with dedicated hyper-care support.",
                                icon: "Rocket",
                                details: ["Data Migration", "Live Deployment", "Post-Go-Live Support"],
                                duration: "Ongoing",
                                iconColor: "#1A5276",
                                iconBg: "#EAF1F8"
                            }
                        ]
                    }}
                />
            </Section>

            {/* FAQ Section */}
            <Section className="py-12 bg-slate-50">
                <FAQ
                    title="Frequently Asked Questions"
                    subtitle="Common questions about our ERP services"
                    faqs={[
                        {
                            question: "How long does a typical ERP implementation take?",
                            answer: "Timelines vary based on complexity. Standard implementations typically take 2-3 months, while large-scale custom ERP projects may take 6 months or more."
                        },
                        {
                            question: "Can you migrate data from my legacy system?",
                            answer: "Yes, we have specialized tools and methodologies to securely migrate your master data and historical transactions from systems like Tally, SAP, or QuickBooks."
                        },
                        {
                            question: "Do you offer post-implementation support?",
                            answer: "Absolutely. We offer various AMC (Annual Maintenance Contract) packages that include priority support, bug fixes, and regular system updates."
                        },
                        {
                            question: "Is the ERP solution scalable?",
                            answer: "Yes, our ERP solutions are built on modern architectures that allow for easy scalability. You can add more users, modules, or integrations as your business grows without major re-platforming."
                        }
                    ]}
                />
            </Section>
        </div>
    );
}
