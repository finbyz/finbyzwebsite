'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import CTA from '@/components/sections/cta';

export default function Page() {
    return (
        <>
            {/* 1️⃣ HERO SECTION */}
            <DynamicHero
                headline="ERPNext Performance Optimization for Speed & Efficiency"
                highlightWords={["Performance", "Optimization", "Speed", "Efficiency"]}
                description="Enhance your ERPNext system's speed, efficiency, and reliability with expert performance optimization. Finbyz Tec ensures scalable, high-performing ERP solutions for your business success."
                heroImage={{
                    alt: "ERPNext Performance Optimization for Speed & Efficiency",
                    // src: "/web-api/fb/n/files/placeholder.jpg"
                    src: "/images/erpnext-performance-optimization.png",
                }}
                primaryButton={{ text: 'Get Started', action: 'https://finbyz.tech/contact' }}
                secondaryButton={{
                    text: 'Learn More', action: () => {
                        const el = document.getElementById('performance');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    },
                }}
                accentColor="orange"
            />

            {/* 2️⃣ OVERVIEW SECTION */}
            <section>
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Overview</h2>
                    <p className="text-black text-lg mb-6" id="performance">
                        Is your ERPNext system struggling with speed or scalability? Finbyz Tec offers specialized performance optimization services designed to enhance your ERP's efficiency, reliability, and responsiveness. Our experts diagnose bottlenecks, implement robust solutions, and ensure your system supports your business growth seamlessly. Trust us to transform your ERPNext into a high-performing asset ready for modern business demands.
                    </p>
                </div>
            </section>

            {/* 3️⃣ MAIN CONTENT SECTIONS */}
            {/* Introduction Section */}
            <TextSection
                data={{
                    title: "Unleash Peak Performance: ERPNext Optimization for Unrivaled Efficiency",
                    paragraphs: [
                        "In today's fast-paced business environment, a slow or unresponsive ERP system isn't just an inconvenience—it's a critical bottleneck that stifles productivity, frustrates users, and directly impacts your bottom line.",
                        "At Finbyz Tec, we understand that optimal ERPNext performance is non-negotiable. With over a decade of specialized experience in ERPNext implementation and consulting, we offer comprehensive performance optimization services designed to transform your system into a high-speed, highly efficient, and reliably scalable asset. Ensure your ERPNext truly supports your business growth, rather than hindering it."
                    ]
                }}
            />

            {/* Why ERPNext Performance is Critical for Your Business */}
            <ResponsiveCardGrid
                data={{
                    title: "Why ERPNext Performance is Critical for Your Business",
                    cards: [
                        {
                            id: 1,
                            title: "Reduced Productivity",
                            description: "Every second spent waiting for reports or transactions diminishes your team's output.",
                            icon: "Timer",
                            iconColor: "#ffffff",
                            iconBg: "#1A5276",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 2,
                            title: "Frustrated Users",
                            description: "A slow system lowers morale and can lead to resistance in ERP adoption.",
                            icon: "Frown",
                            iconColor: "#ffffff",
                            iconBg: "#FF8C00",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 3,
                            title: "Delayed Decision-Making",
                            description: "Real-time business insights become inaccessible, impacting responsiveness.",
                            icon: "PieChart",
                            iconColor: "#ffffff",
                            iconBg: "#27AE60",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 4,
                            title: "Lost Opportunities",
                            description: "Slow processes can result in missed sales and damaged client relationships.",
                            icon: "TrendingDown",
                            iconColor: "#ffffff",
                            iconBg: "#8E44AD",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 5,
                            title: "Scalability Challenges",
                            description: "Unoptimized systems struggle with growth, leading to downtime.",
                            icon: "Activity",
                            iconColor: "#ffffff",
                            iconBg: "#FF3333",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 6,
                            title: "Increased Operational Costs",
                            description: "Inefficiencies require more server resources or manual workarounds.",
                            icon: "DollarSign",
                            iconColor: "#ffffff",
                            iconBg: "#FFB347",
                            className: "border-none hover:shadow-xl transition-all"
                        }
                    ],
                    variant: "iconCard"
                }}
            />

            {/* Common Symptoms Section */}
            <section>
                <div className="container-custom py-8">
                    <List
                        title="Common Symptoms of a Suboptimal ERPNext System"
                        items={[
                            "Slow Page Load Times: Web pages within ERPNext take an unusually long time to render.",
                            "Delayed Report Generation: Financial, inventory, or production reports take minutes or even hours to compile.",
                            "Frequent System Freezes or Crashes: The system becomes unresponsive, requiring restarts.",
                            "Laggy Data Entry: Inputting information feels slow and unresponsive.",
                            "Database Query Timeouts: Operations fail due to excessively long database queries.",
                            "High Server Resource Usage: Your server constantly runs at peak CPU or memory capacity.",
                            "Unsatisfactory User Experience: Employees complain about the system's speed and responsiveness."
                        ]}
                    />
                </div>
            </section>

            {/* Approach Section: Steps/Workflow (as Card Grid) */}
            <ResponsiveCardGrid
                data={{
                    title: "Our Comprehensive ERPNext Performance Optimization Approach",
                    subtitle: "A proven methodology to drive lasting efficiency.",
                    cards: [
                        {
                            id: 1,
                            title: "System Assessment & Diagnosis",
                            description: "Full ecosystem audit: server, database, code review, and user behavior analysis.",
                            icon: "Search",
                            iconColor: "#ffffff",
                            iconBg: "#1A5276",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 2,
                            title: "Strategic Database Optimization",
                            description: "Indexing, SQL query tuning, historic data archiving, and server configuration.",
                            icon: "Database",
                            iconColor: "#ffffff",
                            iconBg: "#FF8C00",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 3,
                            title: "Server & Infrastructure Tuning",
                            description: "Hardware/cloud optimization, caching, load balancing, and latency reduction.",
                            icon: "Server",
                            iconColor: "#ffffff",
                            iconBg: "#27AE60",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 4,
                            title: "Code & Customization Review",
                            description: "Refactoring scripts, optimizing reports & workflows, analyzing integrations.",
                            icon: "Code",
                            iconColor: "#ffffff",
                            iconBg: "#8E44AD",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 5,
                            title: "Proactive Monitoring & Maintenance",
                            description: "Real-time monitoring, regular cleanups, scalability planning & expert support.",
                            icon: "Monitor",
                            iconColor: "#ffffff",
                            iconBg: "#FF3333",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 6,
                            title: "Expert Support",
                            description: "Dedicated ERPNext professionals ready to address ongoing performance concerns.",
                            icon: "UserCheck",
                            iconColor: "#ffffff",
                            iconBg: "#FFB347",
                            className: "border-none hover:shadow-xl transition-all"
                        }
                    ],
                    variant: "iconCard"
                }}
            />

            {/* Benefits Section: Tangible Benefits */}
            <Benefits
                data={{
                    title: "The Tangible Benefits of a High-Performing ERPNext System",
                    benefits: [
                        {
                            number: 2,
                            suffix: "x",
                            label: "Productivity",
                            header: "Elevated User Productivity",
                            description: "Give teams the responsive tools they need to perform at their best.",
                            icon: "TrendingUp",
                            palette: { iconBg: "#fff7ed", iconColor: "#fb923c" }
                        },
                        {
                            number: 1,
                            suffix: "s",
                            label: "Real-Time Insights",
                            header: "Accelerated Decision-Making",
                            description: "Access crucial business data instantly to make agile choices.",
                            icon: "BarChart",
                            palette: { iconBg: "#fff7ed", iconColor: "#fb923c" }
                        },
                        {
                            number: 100,
                            suffix: "%",
                            label: "Scalability",
                            header: "Seamless Scalability",
                            description: "Effortlessly handle business growth without compromise.",
                            icon: "Expand",
                            palette: { iconBg: "#fff7ed", iconColor: "#fb923c" }
                        },
                        {
                            number: 99.9,
                            suffix: "%",
                            label: "Uptime",
                            header: "Enhanced Reliability & Uptime",
                            description: "Minimize downtime and safeguard operations.",
                            icon: "ShieldCheck",
                            palette: { iconBg: "#fff7ed", iconColor: "#fb923c" }
                        },
                        {
                            number: 3,
                            suffix: "x",
                            label: "ROI",
                            header: "Maximized ROI",
                            description: "Get the best ongoing value from your ERPNext investment.",
                            icon: "Gift",
                            palette: { iconBg: "#fff7ed", iconColor: "#fb923c" }
                        },
                        {
                            number: 5,
                            suffix: "/5",
                            label: "User Exp",
                            header: "Superior User Experience",
                            description: "Drive employee satisfaction and system adoption with a joyfully fast ERP.",
                            icon: "Smile",
                            palette: { iconBg: "#fff7ed", iconColor: "#fb923c" }
                        }
                    ]
                }}
            />

            {/* Why Partner with Finbyz Tec Section */}
            <ResponsiveCardGrid
                data={{
                    title: "Why Partner with Finbyz Tech for ERPNext Performance?",
                    cards: [
                        {
                            id: 1,
                            title: "Certified ERPNext Partner",
                            description: "Officially recognized expertise for best-in-class solutions.",
                            icon: "Award",
                            iconColor: "#ffffff",
                            iconBg: "#1A5276",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 2,
                            title: "Proven Track Record",
                            description: "10+ years and 200+ projects across industries.",
                            icon: "CheckCircle2",
                            iconColor: "#ffffff",
                            iconBg: "#FF8C00",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 3,
                            title: "Skilled Resource Pool",
                            description: "30+ ERP experts adept at tackling complex performance issues.",
                            icon: "Users",
                            iconColor: "#ffffff",
                            iconBg: "#27AE60",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 4,
                            title: "Industry-Specific Acumen",
                            description: "Sector expertise in chemical, pharma, EXIM, logistics, and more.",
                            icon: "Layers",
                            iconColor: "#ffffff",
                            iconBg: "#8E44AD",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 5,
                            title: "Data-Driven Methodology",
                            description: "Approach rooted in precise diagnostics and measurable results.",
                            icon: "BarChart3",
                            iconColor: "#ffffff",
                            iconBg: "#FF3333",
                            className: "border-none hover:shadow-xl transition-all"
                        },
                        {
                            id: 6,
                            title: "Commitment to Excellence",
                            description: "ISO 27001:2013 certified with the highest standards of quality and security.",
                            icon: "Star",
                            iconColor: "#ffffff",
                            iconBg: "#FFB347",
                            className: "border-none hover:shadow-xl transition-all"
                        }
                    ],
                    variant: "iconCard"
                }}
            />

            {/* 4️⃣ CTA SECTION */}
            <section>
                <div className="py-8">
                    <CTA
                        data={{
                            subheading: { text: "Ready to Transform?", icon: "Zap" },
                            title: "Request Your ERPNext Performance Audit Today",
                            highlightText: 'ERPNext',
                            description: "Take the first step to unlock unmatched speed, reliability, and efficiency for your business.",
                            primaryButton: { text: "Contact Us", action: 'https://finbyz.tech/contact', icon: "Mail" },
                            secondaryButton: { text: "Learn About Our Approach", action: "#overview", icon: "ArrowRight" },
                            trustIndicator: { text: "10+ Years of ERPNext Success", icon: "Smile" }
                        }}
                    />
                </div>
            </section>
        </>
    );
}
