'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Workflow, GitBranch, Repeat, Database, MessageSquare, Share2, Mail, Users, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function N8nWorkflowsPage() {
    const handleGetStarted = () => {
        const element = document.getElementById('workflows-content');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleContact = () => {
        window.location.href = '/contact';
    };

    const workflows = [
        { name: 'Connect ERPNext with WhatsApp', icon: MessageSquare, href: '/ai-automation/n8n/workflows/how-to-connect-erpnext-with-whatsapp-using-n8n', description: 'Automate WhatsApp notifications from ERPNext events' },
        { name: 'Automate Invoice Integration', icon: FileCheck, href: '/ai-automation/n8n/workflows/automate-invoice-integration-between-erpnext-and-tally-prime', description: 'Sync invoices seamlessly between ERPNext and Tally Prime' },
        { name: 'Social Media Automation', icon: Share2, href: '/ai-automation/n8n/workflows/social-media-automation', description: 'Auto-post content to multiple social platforms' },
        { name: 'Lead Nurturing Workflow', icon: Users, href: '/ai-automation/n8n/workflows/lead-nurturing', description: 'Automated email sequences for new leads' },
        { name: 'Data Synchronization', icon: Database, href: '/ai-automation/n8n/workflows/data-sync', description: 'Keep data in sync across multiple business apps' },
        { name: 'Email Parser', icon: Mail, href: '/ai-automation/n8n/workflows/email-parser', description: 'Extract data from emails and update your CRM automatically' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                headline="n8n Workflows: Ready-to-Use Automation"
                highlightWords={['Workflows', 'Ready-to-Use', 'Automation']}
                description="Jumpstart your automation journey with our library of pre-built n8n workflows. Save time and reduce effort by implementing proven automation patterns for common business tasks."
                primaryButton={{
                    text: 'Browse Workflows',
                    action: handleGetStarted
                }}
                secondaryButton={{
                    text: 'Request Workflow',
                    action: handleContact
                }}
                heroImage={{
                    alt: 'n8n Workflows - Library of automation templates',
                    // src: '/n8n-workflows-hero.jpg'
                    src:"/n8n-workflows.png"
                }}
            />

            <main id="workflows-content" className="container-custom mx-auto px-4 py-16">
                <Section className="py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Accelerate Your Automation</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
                            Don't reinvent the wheel. Our workflow library covers a wide range of use cases, from simple notifications to complex data integration. Each workflow is designed to be easily customizable to fit your specific requirements.
                        </p>
                    </div>
                </Section>

                {/* Workflows Grid */}
                <Section className="py-12">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Featured Workflows</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workflows.map((workflow) => {
                            const Icon = workflow.icon;
                            return (
                                <Link
                                    key={workflow.name}
                                    href={workflow.href}
                                    className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-[#1A5276] bg-white"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                            <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1A5276] mb-2 group-hover:text-orange-600 transition-colors">
                                        {workflow.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {workflow.description}
                                    </p>
                                    <div className="text-[#1A5276] text-sm font-semibold group-hover:underline flex items-center gap-1">
                                        Get Workflow <span>→</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Section>

                <Section useGradient>
                    <div className="container-custom py-12">
                        <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Workflow Benefits</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                                    <GitBranch className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-[#1A5276]">Customizable</h3>
                                <p className="text-sm text-gray-600">Modify any workflow to match your exact business logic</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Repeat className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-[#1A5276]">Scalable</h3>
                                <p className="text-sm text-gray-600">Handle increasing data volumes and complexity seamlessly</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                                    <Workflow className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-[#1A5276]">Reliable</h3>
                                <p className="text-sm text-gray-600">Built on proven patterns to ensure consistent execution</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <div className="py-12">
                        <CTA
                            data={{
                                subheading: { text: "Need Special Logic?", icon: "workflow" },
                                title: "Custom Workflow Development",
                                description: "Have a unique automation challenge? Our certified n8n experts can build custom workflows tailored to your specific needs.",
                                primaryButton: { text: 'Contact Us', action: '/contact' },
                                secondaryButton: { text: 'Learn N8n', action: '/ai-automation/n8n' }
                            }}
                        />
                    </div>
                </Section>
            </main>
        </div>
    );
}
