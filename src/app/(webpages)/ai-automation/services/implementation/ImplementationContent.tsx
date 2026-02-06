"use client";

import React from "react";
import Section from "@/components/sections/Section";
import DynamicHero from "@/components/sections/dynamic-hero";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function ImplementationContent() {
    return (
        <div className="bg-white text-slate-800">
            {/* Hero Section */}
            <Section>
                <DynamicHero
                    headline="Holistic Application Implementation: From Logic to Launch"
                    highlightWords={["Application Implementation"]}
                    description="We don't just deploy scripts; we build entire ecosystems. From robust backend architectures and integrated databases to intuitive user interfaces and seamless ERP connections, we deliver the complete application lifecycle."
                    backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
                    heroImage={{
                        src: "/images/ERP_Implement.svg",
                        alt: "AI Implementation"
                    }}
                    primaryButton={{
                        text: 'Explore Full Services',
                        action: () => {
                            const el = document.getElementById('full-stack-services')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        },
                    }}
                    secondaryButton={{
                        text: 'Consult an Architect',
                        action: '/contact',
                    }}
                />
            </Section>

            {/* Why "Entire Application" Matters - New Section */}
            <Section className="py-16 bg-slate-50">
                <Benefits
                    data={{
                        title: "Why 'Entire Application' Implementation?",
                        subtitle: "An AI model is only as good as the application that wraps it. We ensure every layer is optimized for performance and user experience.",
                        benefits: [
                            {
                                label: "Frontend",
                                header: "Intuitive User Interfaces",
                                description:
                                    "We build responsive, modern frontends (React, Next.js, Vue) that make interacting with complex AI/ERP systems simple and engaging for end-users.",
                                icon: "Layout",
                                palette: { iconBg: "#E67E22", iconColor: "#ffffff" },
                            },
                            {
                                label: "Backend",
                                header: "Robust Logic & API Layer",
                                description:
                                    "Secure, scalable backend systems (Python, Node.js, Go) that handle business logic, data processing, and third-party integrations with sub-second latency.",
                                icon: "Server",
                                palette: { iconBg: "#2980B9", iconColor: "#ffffff" },
                            },
                            {
                                label: "Integration",
                                header: "Deep ERP Ecosystems",
                                description:
                                    "Seamless bidirectional sync with ERPNext, SAP, Salesforce, or Hubspot. Your application doesn't live in a silo; it lives in your workflow.",
                                icon: "GitMerge",
                                palette: { iconBg: "#27AE60", iconColor: "#ffffff" },
                            },
                        ],
                    }}
                />
            </Section>

            {/* Full Stack Implementation Services Grid */}
            <Section id="full-stack-services" className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "End-to-End Application Engineering",
                        subtitle: "A complete suite of services to take your idea from whiteboard to production",
                        cards: [
                            {
                                id: 1,
                                title: "Full-Stack Web Apps",
                                description:
                                    "Custom web applications built on modern stacks (Next.js, Frappe, FastAPI) tailored to your specific business logic and UI requirements.",
                                icon: "Layout",
                                iconBg: "#1A5276",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 2,
                                title: "AI Model Integration",
                                description:
                                    "Embedding LLMs and ML models directly into your application flow, ensuring they have access to real-time data and business context.",
                                icon: "Cpu",
                                iconBg: "#FF8C00",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 3,
                                title: "Database Architecture",
                                description:
                                    "Schema design and optimization for PostgreSQL, MariaDB, and Vector Databases (Pinecone/Weaviate) to handle structured and unstructured data.",
                                icon: "Database",
                                iconBg: "#27AE60",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 4,
                                title: "API & Microservices",
                                description:
                                    "Design and development of RESTful and GraphQL APIs that serve as the connective tissue between your mobile apps, web dashboard, and ERP.",
                                icon: "Globe",
                                iconBg: "#8E44AD",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 5,
                                title: "DevOps & CI/CD",
                                description:
                                    "Automated deployment pipelines using Docker and Kubernetes to ensure your entire application stack is reliable, testable, and scalable.",
                                icon: "Settings",
                                iconBg: "#E74C3C",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 6,
                                title: "Workflow Orchestration",
                                description:
                                    "Using tools like n8n and Airflow to manage complex background tasks and data pipelines that power your application's logic.",
                                icon: "Workflow", // Note: Ensure 'Workflow' isn't a custom icon not in map; usually 'GitBranch' or 'Share2' if generic. Using 'GitBranch' safe alternative if needed, but keeping original assumption.
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>


            {/* Implementation Lifecycle - Refined for Entire App */}
            <Section className="py-16 bg-slate-50">
                <ResponsiveCardGrid
                    data={{
                        title: "The Application Development Lifecycle",
                        subtitle: "How we build enterprise-grade software solutions",
                        cards: [
                            {
                                id: 201,
                                title: "1. Architect & Design",
                                description: "We define the full data schema, UI/UX wireframes, and system architecture before writing code.",
                                icon: "PenTool",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 202,
                                title: "2. Develop Modules",
                                description: "Parallel development of frontend interfaces, backend APIs, and AI agents in iterative sprints.",
                                icon: "Code",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 203,
                                title: "3. Integrate & Test",
                                description: "connecting the pieces: ERP syncing, API handshakes, and rigorous end-to-end testing.",
                                icon: "RefreshCw",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 204,
                                title: "4. Deploy & Scale",
                                description: "Production rollout on scalable cloud infrastructure with monitoring and auto-scaling configuration.",
                                icon: "Cloud",
                                iconBg: "#34495E",
                                iconColor: "#ffffff"
                            }
                        ],
                        variant: "iconCard",
                    }}
                />
            </Section>

            {/* Expanded Tech Stack Section */}
            <Section className="py-16">
                <ResponsiveCardGrid
                    data={{
                        title: "Our Comprehensive Tech Stack",
                        subtitle: "Best-in-class tools for every layer of your application",
                        cards: [
                            {
                                id: 301,
                                title: "Application Frameworks",
                                description: "Next.js (React), Vue.js, Frappe, FastAPI, Django, Express.js",
                                icon: "AppWindow",
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 302,
                                title: "Data & Storage",
                                description: "PostgreSQL, MariaDB, Redis, MongoDB, Pinecone, Weaviate",
                                icon: "Database",
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 303,
                                title: "AI & ML",
                                description: "OpenAI, Anthropic, Llama 3, LangChain, PyTorch, Scikit-learn",
                                icon: "Brain",
                                iconBg: "#2C3E50",
                                iconColor: "#ffffff"
                            },
                            {
                                id: 304,
                                title: "Infrastructure",
                                description: "AWS, Google Cloud, Docker, Kubernetes, Nginx, Terraform",
                                icon: "Server",
                                iconBg: "#2C3E50",
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
                        subheading: { text: "Lets Build Together", icon: "Code" },
                        title: "Need an Entire Application Built?",
                        description:
                            "From the database to the dashboard, we engineer complete, scalable software solutions that drive real business value.",
                        primaryButton: {
                            text: "Start Application Project",
                            action: "/contact",
                        },
                        secondaryButton: {
                            text: "View Tech Stack",
                            action: "#",
                        },
                    }}
                />
            </Section>
        </div>
    );
}
