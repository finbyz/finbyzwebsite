'use client';

import Section from '@/components/sections/Section';
import DynamicHero from '@/components/sections/dynamic-hero';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Monitor, TrendingUp, AlertCircle, BarChart3, ChevronRight, Code } from 'lucide-react';
import CTA from '@/components/sections/cta';

const FEATURED_INSIGHTS = [
    {
        title: "Website Design Tips for Small Businesses",
        description: "Discover essential website design tips to enhance your small business's online presence and build credibility.",
        image: "/images/website-design-tips-for-a-small-business.svg",
        link: "/insights/website-design-tips-for-small-business",
        category: "Digital Growth",
        icon: Monitor,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Why Invest in IT for Business?",
        description: "Understand the strategic value of IT investments and how technology drives efficiency and growth.",
        image: "/images/it-consulting-value-analysis.svg",
        link: "/insights/why-invest-in-it-for-business",
        category: "Strategy",
        icon: TrendingUp,
        color: "text-green-600",
        bg: "bg-green-50"
    },
    {
        title: "Challenges When Going Online",
        description: "Explore the biggest challenges businesses face when moving online and how to overcome them effectively.",
        image: "/images/challenges.svg",
        link: "/insights/whats-the-biggest-challenge-for-most-businesses-when-going-online",
        category: "Transformation",
        icon: AlertCircle,
        color: "text-red-600",
        bg: "bg-red-50"
    },
    {
        title: "Benefits of ERP Software",
        description: "Learn how Enterprise Resource Planning software can streamline your operations and improve decision-making.",
        image: "/images/Benefits-of-ERP.svg",
        link: "/erp/insights/benefits-of-erp",
        category: "ERP",
        icon: BarChart3,
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
];

export default function InsightsPage() {
    return (
        <div className="bg-white">
            <DynamicHero
                headline="Business Insights & Strategic Knowledge"
                highlightWords={['Insights', 'Knowledge']}
                description="Expert perspectives on technology, growth, and digital transformation to help you steer your vision."
                heroImage={{
                    alt: "Business Insights",
                    // src: "/images/hero_section_image_for_website_hero_section.jpeg"
                    src:"/insights.png"
                }}
            />

            {/* Strategic Value Section */}
            <Section className="py-16 bg-slate-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Market Trends</h3>
                            <p className="text-slate-600">Stay ahead with analysis of emerging market shifts and opportunities.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Tech Innovation</h3>
                            <p className="text-slate-600">Understand how new technologies can drive your business transformation.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                {/* <Users className="w-6 h-6" /> */}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Strategies</h3>
                            <p className="text-slate-600">Actionable advice on scaling operations and optimizing performance.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Featured Articles Grid */}
            <Section className="py-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Thinking</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {FEATURED_INSIGHTS.map((insight, idx) => (
                            <Link
                                key={idx}
                                href={insight.link}
                                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="aspect-video relative overflow-hidden bg-slate-50 flex items-center justify-center p-6">
                                    {insight.image ? (
                                        <Image
                                            src={insight.image}
                                            alt={insight.title}
                                            fill
                                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                                            <insight.icon className="w-16 h-16 opacity-20" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm z-10">
                                        {insight.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${insight.bg} ${insight.color} mb-6 group-hover:scale-110 transition-transform`}>
                                        <insight.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        {insight.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                        {insight.description}
                                    </p>
                                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Explore More Categories */}
            <Section className="bg-slate-50 py-20">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore More Topics</h2>
                            <p className="text-slate-600">Deep dive into specific areas of expertise.</p>
                        </div>
                        <Link href="/blogs" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700">
                            View All Posts <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "ERP Implementation", count: "12+ Articles", link: "/erp/insights" },
                            { name: "Digital Transformation", count: "8+ Articles", link: "/insights" },
                            { name: "Technolgy Consulting", count: "5+ Articles", link: "/services/technology-consulting" },
                            { name: "Business Growth", count: "10+ Articles", link: "/blogs" }
                        ].map((cat, idx) => (
                            <Link
                                key={idx}
                                href={cat.link}
                                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                            >
                                <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{cat.name}</h4>
                                <p className="text-sm text-slate-500">{cat.count}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/blogs" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                            View All Posts <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Expertise Section */}
            <Section className="py-20 bg-slate-50" >
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We combine deep industry knowledge with technical excellence to deliver actionable insights.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "ERP Systems", desc: "optimizing workflows with ERPNext" },
                            { title: "AI Automation", desc: "Smart agents & process automation" },
                            { title: "Cloud Strategy", desc: "Scalable infrastructure solutions" },
                            { title: "Digital Security", desc: "Protecting business assets" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <Code className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Subscribe Section */}
            <Section className="py-20 bg-slate-900 text-white" >
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get the latest business insights, tech trends, and strategic advice delivered directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </Section>

            <CTA
                data={{
                    title: "Ready to implement these insights?",
                    description: "Talk to our experts about applying these strategies to your business.",
                    primaryButton: {
                        text: "Start a Conversation",
                        action: "/contact"
                    }
                }}
            />
        </div>
    );
}
