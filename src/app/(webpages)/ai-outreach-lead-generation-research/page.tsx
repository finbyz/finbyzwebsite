'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import ProcessWorkflow from '@/components/sections/process-workflow';
import Points from '@/components/sections/points';
import Image from 'next/image';
import { Rocket, Target, Zap, Search, Mail, Users, BarChart } from 'lucide-react';

export default function Page() {
    const handleContact = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/contact';
        }
    };

    return (
        <main className="animate-in fade-in-50">
            {/* Section 1: Hero Section */}
            <HeroSection
                headline="AI Outreach & Lead Generation Research"
                highlightWords={["AI Outreach", "Lead Generation"]}
                description="Transform your sales pipeline with AI-driven intelligence. From deep lead sourcing to personalized outreach, we automate the manual research so you can focus on closing."
                primaryButton={{ text: 'Get Started', action: handleContact }}
                secondaryButton={{
                    text: 'Explore Workflow', action: "#workflow"
                }}
                heroImage={{
                    alt: 'AI Outreach Intelligence',
                    src: '/images/Lead Intelligence.gif',
                }}
            />

            {/* Section 2: Overview */}
            <Section id="overview">
                <div className="container-custom py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl text-[#1A5276] font-bold mb-8">The Future of Intelligent Outreach</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-10">
                            Generic outreach is dead. High-conversion sales require context, personalization, and relentless follow-up. Our AI Outreach & Lead Generation Research workflow combines the accuracy of deep research with the scalability of automation, delivering localized and personalized messaging at an unprecedented pace.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Zap, title: "70% Faster", desc: "Reduce time spent on lead research and email drafting." },
                                { icon: Target, title: "Higher Replies", desc: "Context-aware messaging leads to better engagement." },
                                { icon: BarChart, title: "Scalable Growth", desc: "Handle thousands of leads without losing a personal touch." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-orange-50/50 rounded-2xl">
                                    <item.icon className="w-8 h-8 text-[#1A5276] mx-auto mb-4" />
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 3: Double-Sourcing Strategy */}
            <Section id="sourcing" useGradient>
                <div className="container-custom py-16">
                    <h2 className="text-3xl text-[#1A5276] font-bold text-center mb-12">Precision Lead Sourcing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Approach A: Strategic Company Lists</h3>
                            <p className="text-gray-600 mb-6">
                                Upload your target company lists (XLS/CSV) and let our AI automatically identify key decision-makers across relevant departments.
                            </p>
                            <div className="flex items-center gap-2 text-[#1A5276] font-medium">
                                <span>Sheet-to-Lead Automation</span>
                                <Rocket className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                <Search className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Approach B: Apollo AI Search</h3>
                            <p className="text-gray-600 mb-6">
                                Simply paste your Apollo search URL. Our engine extracts all filtered leads and builds a qualified, high-intent database in minutes.
                            </p>
                            <div className="flex items-center gap-2 text-emerald-600 font-medium">
                                <span>Direct Integration Sourcing</span>
                                <Rocket className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 4: The Research Engine */}
            <Section id="workflow">
                <div className="py-16">
                    <ProcessWorkflow
                        data={{
                            component_type: 'Timeline',
                            title: 'The AI Research Engine',
                            subtitle: 'How we turn a name into a warm relationship.',
                            processSteps: [
                                {
                                    step: '01',
                                    title: 'Data Ingestion',
                                    description: 'Sourcing leads from Apollo or internal databases with full metadata.',
                                    icon: 'Search',
                                    details: [
                                        'Apollo Search URL extraction',
                                        'CSV/XLS Company list upload',
                                        'Target persona mapping'
                                    ],
                                    duration: 'Instant',
                                    iconColor: '#1A5276',
                                    iconBg: '#EAF1F8'
                                },
                                {
                                    step: '02',
                                    title: 'Semantic Enrichment',
                                    description: 'AI researches company background, recent news, and individual LinkedIn activity.',
                                    icon: 'Lightbulb',
                                    details: [
                                        'Company news & updates',
                                        'Contact professional background',
                                        'Pain point identification'
                                    ],
                                    duration: 'Automated',
                                    iconColor: '#FF8C00',
                                    iconBg: '#FFF4E5'
                                },
                                {
                                    step: '03',
                                    title: 'Lead Tiering',
                                    description: 'Scoring leads based on intent and firmographic fit for prioritized outreach.',
                                    icon: 'Rocket',
                                    details: [
                                        'Intent scoring',
                                        'Firmographic validation',
                                        'Priority list generation'
                                    ],
                                    duration: 'Real-time',
                                    iconColor: '#27AE60',
                                    iconBg: '#E8F8F2'
                                }
                            ]
                        }}
                    />
                </div>
            </Section>

            {/* Section 5: AI-Driven Drafting */}
            <Section useGradient>
                <div className="container-custom py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000"
                                alt="AI Content Drafting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl text-[#1A5276] font-bold mb-6">Automated Personalization at Scale</h2>
                            <p className="text-gray-700 text-lg mb-8">
                                Our workflow doesn't just stop at data. We generate three distinct email variations (Intro, Value-Prop, and Soft-Followup) tailored to the specific pain points identified during the research phase.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { icon: Mail, title: "Contextual Catchlines", desc: "Subject lines that reference recent company wins or news." },
                                    { icon: Zap, title: "Dynamic Scheduling", desc: "Emails are sent when leads are most likely to engage." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm h-fit">
                                            <item.icon className="w-6 h-6 text-[#1A5276]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 6: Holistic Benefits */}
            <Section className="container-custom py-16">
                <Points
                    data={{
                        component_type: 'Text',
                        title: 'Strategic Advantages',
                        points: [
                            'Eliminate the "Cold Call" feel with context-aware introductions.',
                            'Increase SDR productivity by 4x by automating outbound research.',
                            'Maintain 100% CRM hygiene with automated lead enrichment.',
                            'Global reach with localized research across diverse industries.',
                            'Seamless transition from prospect to qualified meeting.'
                        ]
                    }}
                />
            </Section>

            {/* Section 7: Final CTA */}
            <Section>
                <div className="py-16">
                    <CTA
                        data={{
                            subheading: {
                                text: 'Launch your campaign',
                                icon: 'Rocket',
                            },
                            title: 'Start Your AI Outreach Journey',
                            highlightText: "AI Outreach",
                            description: 'Stop guessing and start engaging. Request a demo to see how our AI Outreach & Lead Generation workflow can transform your pipeline.',
                            primaryButton: {
                                text: 'Request Live Demo',
                                icon: 'CalendarCheck',
                                action: handleContact,
                            },
                            secondaryButton: {
                                text: 'See It in Action',
                                icon: 'FileText',
                                action: handleContact
                            },
                            trustIndicator: {
                                text: 'Trusted by High-Growth Sales Teams',
                                icon: 'CalendarCheck',
                            },
                        }}
                    />
                </div>
            </Section>
        </main>
    );
}
