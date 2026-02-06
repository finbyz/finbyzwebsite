'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Factory, ShoppingCart, TestTube, Truck, Briefcase } from 'lucide-react';

const featuredLinks = [
    {
        title: "All ERPNext Modules",
        description: "Explore the comprehensive suite of modules available in ERPNext, from Accounting to HR.",
        icon: Layers,
        link: "/erpnext/modules/all-modules-of-erpnext",
        iconColor: "text-orange-600"
    },
    {
        title: "Manufacturing ERP",
        description: "Streamline production, manage BOMs, and optimize shop floor operations.",
        icon: Factory,
        link: "/erpnext/manufacturing",
        iconColor: "text-amber-600"
    },
    {
        title: "Retail & POS",
        description: "Unified retail management with integrated Point of Sale and inventory control.",
        icon: ShoppingCart,
        link: "/erpnext/retail",
        iconColor: "text-green-600"
    },
    {
        title: "Chemical Industry",
        description: "Specialized ERP solutions for chemical manufacturing and compliance.",
        icon: TestTube,
        link: "/erpnext/chemical",
        iconColor: "text-purple-600"
    },
    {
        title: "Logistics & Supply Chain",
        description: "End-to-end visibility and control over your supply chain and fleet.",
        icon: Truck,
        link: "/erpnext/logistics",
        iconColor: "text-red-600"
    },
    {
        title: "Service Industry",
        description: "Manage projects, timesheets, and billing for service-based businesses.",
        icon: Briefcase,
        link: "/erpnext/services/erpnext-service-provider",
        iconColor: "text-indigo-600"
    }
];

export default function Page() {
    return (
        <>
            <HeroSection
                headline="ERP Insights & Strategies"
                highlightWords={["Insights", "Strategies"]}
                description="Unlock the full potential of your business with our deep dives into ERPNext modules, industry-specific solutions, and implementation best practices."
                primaryButton={{
                    text: 'View All Modules',
                    action: '/erpnext/modules/all-modules-of-erpnext'
                }}
                heroImage={{
                    alt: 'ERP Insights',
                    src: '/erp_insights.png',
                }}
                accentColor="orange"
            />

            {/* Featured Industries/Modules Grid */}
            <section className="py-20 bg-muted/20">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl text-[#1A5276] md:text-4xl font-bold mb-4">Industries & Solutions</h2>
                        <p className="text-muted-foreground text-lg">
                            Tailored strategies for every sector. Discover how ERPNext adapts to your specific needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="group flex flex-col bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <item.icon className="w-24 h-24" />
                                </div>

                                <div className={`w-12 h-12 bg-background rounded-lg flex items-center justify-center mb-6 shadow-sm ${item.iconColor}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {item.description}
                                </p>

                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why ERPNext / Finbyz Section */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/erpnext-services.svg"
                                alt="Finbyz ERP Team"
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/Frappe-Certified-parnter-Page Design-SVG.svg';
                                }}
                            />
                        </div>

                        <div>
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Choose Finbyz?</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Expertise That Drives Transformation</h2>
                            <p className="text-muted-foreground mb-6">
                                We go beyond basic implementation. As a Certified ERPNext Partner, we architect solutions that scale with your business, integrating AI and automation for a competitive edge.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Certified ERPNext Partner",
                                    "Deep Industry Expertise (Manufacturing, Retail, etc.)",
                                    "Custom AI & Automation Integrations",
                                    "Global Support & Training"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                            <ArrowRight className="w-3 h-3 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center"
                            >
                                Start Your Transformation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Strategic ERP Insights Section */}
            <section className="py-20 bg-muted/20">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Pillars of Modern ERP Innovation</h2>
                        <p className="text-muted-foreground text-lg">
                            Move beyond basic record-keeping. Modern ERP is the nervous system of your digital enterprise.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl border shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-[#1A5276]">Cloud-Native Agility</h3>
                            <p className="text-muted-foreground">
                                Deploy on-premise or in the cloud with zero lock-in. Scale resources dynamically as your transaction volumes grow.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-[#1A5276]">AI-Driven Intelligence</h3>
                            <p className="text-muted-foreground">
                                Predictive analytics for inventory, automated reconciliation, and AI assistants that turn data into actionable insights.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-[#1A5276]">Open API Ecosystem</h3>
                            <p className="text-muted-foreground">
                                Seamlessly connect with your existing tech stack—ecommerce, CRM, standard banking protocols, and IoT devices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
