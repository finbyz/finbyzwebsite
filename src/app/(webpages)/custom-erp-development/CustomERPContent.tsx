'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import List from '@/components/sections/list';

import Image from 'next/image';
import { FaCode, FaCogs, FaRocket, FaUserCheck, FaLayerGroup } from 'react-icons/fa';

export default function CustomERPContent() {
    return (
        <>
            {/* 1. Hero Section */}
            <HeroSection
                headline="Tailor-Made ERP Solutions"
                highlightWords={["Custom", "ERP"]}
                description="Don't force your business into a box. We build bespoke ERP software designed specifically for your unique workflows, ensuring 100% operational fit."
                primaryButton={{
                    text: 'Start Building',
                    action: "#contact"
                }}
                secondaryButton={{
                    text: 'Our Approach',
                    action: "#approach"
                }}
                heroImage={{
                    alt: 'Custom Software Development',
                    src: '/images/erpnext-services.svg', // Reusing relevant existing asset
                }}
                accentColor="purple"
            />

            {/* 2. The Need (Why Custom vs Off-the-shelf) */}
            <Section>
                <div className="container-custom py-8">
                    <QuoteBlock text="Why Settle for Standard?" isHeading={true} />
                    <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                        <div className="space-y-6">
                            <div className="p-6 border rounded-xl bg-red-50/50">
                                <h3 className="text-xl font-bold mb-2 text-red-800">Off-the-Shelf ERP</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Bloated with unused features</li>
                                    <li>Rigid workflows</li>
                                    <li>High recurring license fees</li>
                                    <li>Expensive customization</li>
                                </ul>
                            </div>
                            <div className="p-6 border rounded-xl bg-green-50/50 border-green-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2 text-green-800">Custom FinByz ERP</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Built *exactly* for your process</li>
                                    <li>Scalable architecture</li>
                                    <li>One-time development cost</li>
                                    <li>Full IP ownership options</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Generic software often solves 80% of your problems but creates 20% new ones relative to workarounds.
                                <br /><br />
                                At FinByz, we act as your technology architects. We analyze your SOPs and digitize them into a seamless, web-based ERP platform that your employees will actually love to use.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Tech Stack */}
            <Section useGradient>
                <div className="container-custom py-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#1A5276]">Our Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                            <FaCode className="text-4xl text-orange-600 mb-4" />
                            <h3 className="font-bold">Python & Frappe</h3>
                            <p className="text-sm text-gray-500 mt-2">Rapid backend development framework</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                            <FaLayerGroup className="text-4xl text-cyan-600 mb-4" />
                            <h3 className="font-bold">React & Next.js</h3>
                            <p className="text-sm text-gray-500 mt-2">Modern, fast user interfaces</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                            <FaServer className="text-4xl text-indigo-600 mb-4" />
                            <h3 className="font-bold">PostgreSQL</h3>
                            <p className="text-sm text-gray-500 mt-2">Robust enterprise database</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                            <FaRocket className="text-4xl text-orange-600 mb-4" />
                            <h3 className="font-bold">Docker & Kubernetes</h3>
                            <p className="text-sm text-gray-500 mt-2">Scalable cloud deployment</p>
                        </div>
                    </div>
                </div>
            </Section>


            {/* 4. Development Process */}
            <Section id="approach">
                <div className="container-custom py-8">
                    <h2 className="text-2xl font-bold text-center mb-10 text-[#1A5276]">Agile Development Lifecycle</h2>
                    <div className="relative border-l-4 border-blue-200 ml-6 md:ml-12 space-y-12">
                        {[
                            { title: "Discovery", desc: "We sit with your team to map out every process, form, and report needed." },
                            { title: "Prototyping", desc: "We create wireframes and UI mockups to validate the user experience." },
                            { title: "Development", desc: "Our engineers build the core logic using modular sprint cycles." },
                            { title: "UAT & QA", desc: "Rigorous testing and User Acceptance Testing to squash bugs." },
                            { title: "Go-Live", desc: "Seamless deployment with data migration and user training." }
                        ].map((step, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-12">
                                <span className="absolute -left-[14px] top-0 bg-orange-600 text-white w-6 h-6 rounded-full text-center text-sm font-bold leading-6">
                                    {idx + 1}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                <p className="text-gray-600 mt-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. CTA */}
            <Section id="contact">
                <div className=" py-8">
                </div>
            </Section>
        </>
    );
}

// Helper icons needed import
import { FaCalendar, FaArrowRight, FaServer } from "react-icons/fa";
