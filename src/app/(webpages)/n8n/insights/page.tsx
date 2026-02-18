'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Shield, Code, Brain } from 'lucide-react';

const articles = [
    {
        title: "Self-Hosting n8n: The Complete Enterprise Guide",
        description: "Everything you need to know about self-hosting n8n for data sovereignty, compliance (GDPR/HIPAA), and cost control.",
        image: "/images/n8n-self-hosting.jpg",
        link: "/ai-automation/insights/self-hosting-n8n-enterprise-guide",
        date: "Jan 12, 2026",
        readTime: "15 min read",
        category: "Enterprise Guide"
    },
    {
        title: "n8n vs Zapier vs Make: 2026 Showdown",
        description: "A comprehensive comparison of the top 3 automation platforms. Why n8n is winning for AI and complex enterprise workflows.",
        image: "/images/AI_ERP.jpg",
        link: "/ai-automation/insights/n8n-vs-zapier-vs-make-comparison",
        date: "Jan 06, 2026",
        readTime: "12 min read",
        category: "Comparison"
    },
    {
        title: "Building Agentic Workflows with n8n 2.0 & LangChain",
        description: "Deep dive into n8n's new AI capabilities. How to build autonomous agents using the new Tool Node and LangChain integration.",
        image: "/images/n8n-langchain.png",
        link: "/n8n/insights/n8n-2-0-langchain-agentic-workflows",
        date: "Dec 15, 2025",
        readTime: "10 min read",
        category: "Tutorial"
    }
];

export default function Page() {
    return (
        <>
            <HeroSection
                headline="n8n Insights & Resources"
                highlightWords={["Insights", "Resources"]}
                description="Expert tutorials, deep-dive guides, and strategic comparisons to help you master n8n workflow automation and AI orchestration."
                primaryButton={{
                    text: 'Explore Services',
                    action: '/ai-automation/services/n8n-ai-agent-orchestration'
                }}
                heroImage={{
                    alt: 'n8n Insights',
                    // src: '/images/n8n-insights-hero.jpg',
                    src:"/n8n-insights.png"
                }}
                accentColor="orange"
            />

            {/* Articles Grid */}
            <section className="py-16 bg-muted/20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <Link
                                key={index}
                                href={article.link}
                                className="group flex flex-col bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 h-full"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/images/placeholder-blog.jpg';
                                        }}
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-semibold text-white bg-primary/90 rounded-full backdrop-blur-sm">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                        {article.description}
                                    </p>

                                    <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why n8n Section */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Platform Advantages</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why Leading Enterprises Choose n8n?</h2>
                        <p className="text-muted-foreground text-lg">
                            n8n combines the power of code with the ease of no-code, offering unparalleled flexibility and control.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-muted/10 p-8 rounded-2xl border hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-orange-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Data Sovereignty</h3>
                            <p className="text-muted-foreground">
                                Self-host n8n on your own infrastructure to ensure 100% data privacy and compliance with localized regulations like GDPRNo data leaves your servers.
                            </p>
                        </div>

                        <div className="bg-muted/10 p-8 rounded-2xl border hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                                <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">AI-Native Automation</h3>
                            <p className="text-muted-foreground">
                                n8n 2.0 features advanced AI nodes that natively integrate with LangChain, OpenAI, and other LLMs, enabling complex autonomous agentic workflows.
                            </p>
                        </div>

                        <div className="bg-muted/10 p-8 rounded-2xl border hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
                                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fair-Code Flexibility</h3>
                            <p className="text-muted-foreground">
                                Enjoy the visual builder when you want speed, but drop into JavaScript or Python nodes whenever you need custom logic. No ceilings, no black boxes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary/5 border-t">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Automation?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Whether you need a custom n8n implementation or expert consultation on AI agents, our team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                        >
                            Book a Consultation
                        </Link>
                        <Link
                            href="/ai-automation/services/n8n-ai-agent-orchestration"
                            className="px-8 py-3 bg-background border border-input rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center justify-center"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
