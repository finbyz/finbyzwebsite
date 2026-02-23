'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';

import QuoteBlock from '@/components/ai_components/QuoteBlock';
import AgricultureFeatureGrid from '@/components/ai_components/AgricultureFeatureGrid';
import Image from 'next/image';
import { Leaf, BarChart3, Factory, ShieldCheck, TrendingUp, Settings } from 'lucide-react';

export default function Page() {
    const handleContact = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/contact';
        }
    };

    return (
        <>
            {/* Section 1: Hero Section */}
            <HeroSection
                headline="ERPNext for Agriculture Industry"
                highlightWords={["for", "Agriculture"]}
                description="Revolutionize your agribusiness with Finbyz Tech's specialized ERPNext solutions. Enhance operational efficiency, ensure compliance, and drive sustainable growth."
                primaryButton={{ text: 'Get a Demo', action: handleContact }}
                secondaryButton={{
                    text: 'Learn More', action: "#content"
                }}
                heroImage={{
                    alt: 'ERPNext for Agriculture',
                    videoSrc: '/images/Agro_Slide_for_Site.mp4',
                }}
            />

            {/* Section 2: Industry Overview */}
            <Section id="content">
                <div className="container-custom py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl text-[#1A5276] font-bold mb-6">Empowering the Future of Farming</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In today's rapidly evolving agricultural landscape, technology is no longer optional—it's the foundation of modern agribusiness. ERPNext for agriculture provides a unified platform to manage every aspect of your operations, from crop cycles to global distribution.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By organizing complex data into actionable insights, our solutions empower farmers and commodity traders to make informed decisions that optimize yields, reduce waste, and enhance long-term sustainability.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000"
                                alt="Modern Agriculture"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Quote Section */}
            <Section>
                <div className="container-custom py-12">
                    <QuoteBlock
                        text="Agriculture is the foundation of civilization and any stable economy. Without it, it is not possible to have a city, stock market, banks, or university."
                        isHeading={false}
                    />
                </div>
            </Section>

            {/* Section 3: Key Features (Grid) */}
            <Section useGradient>
                <div className="container-custom py-16">
                    <h2 className="text-3xl text-[#1A5276] font-bold text-center mb-12">Comprehensive Features for Modern Agribusiness</h2>
                    <AgricultureFeatureGrid
                        features={[
                            {
                                title: 'Agricultural Data Management',
                                description:
                                    'Seamlessly integrate data from IoT equipment, weather sensors, and soil analysis into a unified Cloud platform for real-time visibility across your entire farm.'
                            },
                            {
                                title: 'Commodity Sales & Distribution',
                                description:
                                    'Streamline your sales process with automated order management, dynamic pricing, and insightful sales analytics to maximize profitability and market reach.'
                            },
                            {
                                title: 'Process Automation',
                                description:
                                    'Automate routine tasks like procurement, dispatch scheduling, and inventory tracking, allowing your team to focus on strategic growth and production.'
                            },
                            {
                                title: 'Government & Quality Compliance',
                                description:
                                    'Stay ahead of regulatory requirements with automated documentation and audit trails. Ensure your operations meet local and international standards effortlessly.'
                            }
                        ]}
                    />
                </div>
            </Section>

            {/* Section 4: Advanced Capabilities */}
            <Section>
                <div className="container-custom py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl text-[#1A5276] font-bold mb-8 text-center lg:text-left">Operational Excellence</h2>
                            <List
                                title=""
                                items={[
                                    'Crop and Land Management: Full traceability of crop cycles from seed to harvest, including land usage and soil health monitoring.',
                                    'Smart Inventory: Real-time tracking of seeds, fertilizers, pesticides, and equipment to eliminate stockouts and reduce waste.',
                                    'Supply Chain Integration: Unified view of the entire chain from procurement to the final consumer for better predictability.',
                                    'Financial Oversight: Robust budgeting, cost analysis, and expense tracking tailored to the volatile nature of agro commodities.',
                                    'Regulatory Compliance: Built-in tools for maintaining certifications and ensuring food safety standards across all processes.'
                                ]}
                            />
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl text-[#1A5276] font-bold mb-8 text-center lg:text-left">Strategic Benefits</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: TrendingUp, title: "Data-Driven Growth", desc: "Use advanced analytics to predict yields and optimize market timing." },
                                    { icon: ShieldCheck, title: "Risk Mitigation", desc: "Comprehensive audit trails and compliance management to reduce legal exposure." },
                                    { icon: Settings, title: "Scalable Operations", desc: "Easily expand to new lands or commodities with a flexible ERP structure." },
                                    { icon: Factory, title: "Production Efficiency", desc: "Minimize manual errors and maximize resource utilization through automation." }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="p-3 bg-orange-50 rounded-xl">
                                            <benefit.icon className="w-6 h-6 text-[#1A5276]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 5: Why Partner with Finbyz? */}
            <Section useGradient className="bg-[#1A5276]/5">
                <div className="container-custom py-16 text-center">
                    <h2 className="text-3xl text-[#1A5276] font-bold mb-8">Your Journey to Digital Transformation</h2>
                    <p className="max-w-3xl mx-auto text-gray-700 mb-10 text-lg">
                        At Finbyz Tech, we don't just provide software; we provide full "hand-holding" throughout your entire transformation journey. Our experts help you analyze specific requirements and suggest tailored solutions that drive profit and productivity.
                    </p>
                    <QuoteBlock
                        text="Without change, performance would never improve. Adopting the latest technology is the only road to sustainable growth."
                        isHeading={false}
                    />
                </div>
            </Section>
        </>
    );
}
