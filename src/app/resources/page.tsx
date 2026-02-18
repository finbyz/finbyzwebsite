'use client'

import React from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from "@/components/sections/Section";
import CTA from "@/components/sections/cta";
import Link from "next/link";
import { FileText, BookOpen, Video, ArrowRight } from "lucide-react";

export default function Page() {
    return (
        <>
            <HeroSection
                headline="Resources & Knowledge Hub"
                highlightWords={["Resources", "Knowledge"]}
                description="Access our comprehensive library of brochures, guides, case studies, and insights to empower your business transformation journey."
                primaryButton={{
                    text: "Explore Brochures",
                    action: () => {
                        const el = document.getElementById('brochures');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                secondaryButton={{
                    text: "Contact Us",
                    action: () => {
                        window.location.href = '/contact';
                    }
                }}
                heroImage={{
                    alt: "Resources",
                    // src: "/images/hero_section_image_for_website_hero_section.png",
                    src:"/resources.png"
                }}
            />

            <Section>
                <div className="container-custom py-12" id="brochures">
                    <div className="text-center mb-12">
                        <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Downloads</span>
                        <h2 className="text-3xl font-bold text-[#1A5276] mt-2 mb-4">Featured Brochures</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Get detailed insights into our services and products. Download our latest brochures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Brochure 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/our-mission.jpeg"
                                    alt="Company Profile"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-2">Company Profile</h3>
                            <p className="text-muted-foreground mb-4 flex-grow">
                                comprehensive overview of Finbyz Tech, our mission, vision, and the wide range of services we offer.
                            </p>
                            <Link href="/resources/brochure" className="inline-flex items-center text-orange-600 font-semibold hover:text-blue-700 transition-colors mt-auto">
                                Download PDF <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        {/* Brochure 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/softwarevalue.png"
                                    alt="Productify Brochure"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-2">Productify Brochure</h3>
                            <p className="text-muted-foreground mb-4 flex-grow">
                                Discover how Productify can streamline your operations and boost productivity with our SaaS solution.
                            </p>
                            <Link href="/resources/brochure" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors mt-auto">
                                Download PDF <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        {/* Brochure 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/hiring-process.png"
                                    alt="Outsourcing Services"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-2">Outsourcing Services</h3>
                            <p className="text-muted-foreground mb-4 flex-grow">
                                Learn about our dedicated resource plans and how outsourcing can help scale your business efficiently.
                            </p>
                            <Link href="/resources/brochure" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors mt-auto">
                                Download PDF <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/resources/brochure" className="inline-flex items-center px-6 py-3 bg-[#1A5276] text-white rounded-lg hover:bg-[#154360] transition-colors font-medium">
                            View All Brochures <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Why Choose Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Why Choose Finbyz Tech?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We combine deeper technical expertise with business acumen to deliver solutions that drive real growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1A5276] mb-2">Certified Experts</h3>
                            <p className="text-sm text-gray-600">Our team consists of certified ERPNext developers and AI specialists with years of experience.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1A5276] mb-2">Rapid Implementation</h3>
                            <p className="text-sm text-gray-600">We use proven methodologies to ensure quick turnaround times without compromising quality.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1A5276] mb-2">24/7 Support</h3>
                            <p className="text-sm text-gray-600">Our dedicated support team is always available to assist you with any issues or queries.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1A5276] mb-2">Secure Solutions</h3>
                            <p className="text-sm text-gray-600">We prioritize security in all our implementations, ensuring your data is always protected.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Insights Section */}
            <Section>
                <div className="container-custom py-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div className="text-left">
                            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Blog</span>
                            <h2 className="text-3xl font-bold text-[#1A5276] mt-2">Latest Insights</h2>
                        </div>
                        <Link href="/blogs" className="hidden md:inline-flex items-center text-[#1A5276] font-semibold hover:text-orange-600 transition-colors">
                            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Insight 1 */}
                        <div className="group cursor-pointer">
                            <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse">
                                    {/* Placeholder for image - using standard Next.js Image would be better but keeping it simple for now */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/erpnext-dashboard-mockup.png" alt="ERPNext 15" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-0 onload-opacity-100" onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} onError={(e) => e.currentTarget.style.display = 'none'} />
                                </div>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="bg-orange-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">ERPNext</span>
                                <span className="text-gray-500 text-xs py-1">5 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">Exploring ERPNext 15: New Features and Improvements</h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4">
                                Dive into the latest update of the world's best open-source ERP and see what's new.
                            </p>
                            <Link href="/blogs" className="inline-flex items-center text-sm font-semibold text-[#1A5276] group-hover:text-orange-600">
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        {/* Insight 2 */}
                        <div className="group cursor-pointer">
                            <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
                                <div className="absolute inset-0 bg-gray-200">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/proactive-ai-assistant-hero.jpg" alt="AI in Business" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium">AI Automation</span>
                                <span className="text-gray-500 text-xs py-1">4 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">How AI is Transforming Small Business Operations</h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4">
                                Learn practical ways to implement AI automation in your daily workflows to save time.
                            </p>
                            <Link href="/blogs" className="inline-flex items-center text-sm font-semibold text-[#1A5276] group-hover:text-purple-600">
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        {/* Insight 3 */}
                        <div className="group cursor-pointer">
                            <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
                                <div className="absolute inset-0 bg-gray-200">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/resource-augmentation.png" alt="Outsourcing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">Outsourcing</span>
                                <span className="text-gray-500 text-xs py-1">6 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-2 group-hover:text-green-600 transition-colors line-clamp-2">Strategic Outsourcing: More Than Just Cost Saving</h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4">
                                Discover how strategic outsourcing can provide access to global talent and specialized skills.
                            </p>
                            <Link href="/blogs" className="inline-flex items-center text-sm font-semibold text-[#1A5276] group-hover:text-green-600">
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/blogs" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-[#1A5276] font-medium hover:bg-gray-50 transition-colors">
                            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </Section>


            <CTA
                data={{
                    subheading: {
                        text: "Stay Informed",
                        icon: "Bell"
                    },
                    title: "Ready to Start Your Transformation?",
                    highlightText: 'Transformation?',
                    description: "Get in touch with our experts to discuss how we can help your business grow.",
                    primaryButton: {
                        text: "Contact Us",
                        icon: "MessageCircle",
                        action: () => {
                            window.location.href = '/contact';
                        }
                    },
                    secondaryButton: {
                        text: "Schedule Demo",
                        icon: "Calendar",
                        action: () => {
                            window.location.href = '/contact#schedule-demo';
                        }
                    },
                    trustIndicator: {
                        text: "Expert team available 24/7",
                        icon: "ShieldCheck"
                    }
                }}
            />
        </>
    );
}
