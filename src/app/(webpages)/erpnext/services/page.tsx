'use client';

import React from 'react';
import Hero from '@/components/sections/hero';
import Link from 'next/link';
import {
    CheckCircle, Globe, Users, Settings, Database, Code,
    Monitor, Zap, Search, ShieldCheck, Clock, HelpCircle,
    ArrowRight, Layers, BarChart, Truck, Cpu, Briefcase,
    Smartphone, BarChart3
} from 'lucide-react';
import FAQ from '@/components/ai_components/FAQ';
import CTA from '@/components/sections/cta';

// Data for the page
const heroData = {
    title: "Comprehensive ERPNext Services Implementation Development & Global Support",
    subtitle: "Transform your business operations with Finbyz Tech—Your Certified Frappe Partner",
    primaryButton: "Book Free Consultation",
    secondaryButton: "Contact Us",
    image: {
        // src: "/images/erpnext-dashboard-mockup.png", // Fallback or generic image
        src:"/erpnext-services.png",
        alt: "ERPNext Implementation Services"
    }
};

const stats = [
    { label: "Years of Specialized ERPNext Experience", value: "10+" },
    { label: "Successful Projects Delivered Globally", value: "200+" },
    { label: "Custom Applications Built on Frappe", value: "150+" },
    { label: "Countries Served Across Multiple Timezones", value: "12+" },
];

const ServiceCard = ({ title, link, icon: Icon, description }: { title: string, link: string, icon: React.ElementType, description?: string }) => (
    <Link href={link} className="group block h-full">
        <div className="h-full border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1A5276] flex flex-col">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-50 text-[#1A5276] group-hover:bg-[#1A5276] group-hover:text-white transition-colors">
                    <Icon size={24} />
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-[#1A5276] transform group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#1A5276] transition-colors mb-2">
                {title}
            </h3>
            {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}
        </div>
    </Link>
);

const faqs = [
    {
        question: "How long does a typical ERPNext implementation take?",
        answer: "Timelines vary by complexity. A standard implementation for SMEs typically takes 4-8 weeks, while complex enterprise solutions with custom development may take 3-6 months."
    },
    {
        question: "Can you migrate my data from Tally or SAP?",
        answer: "Yes. We have specialized migration tools and scripts to securely transfer your Masters and Historical Transactions from legacy systems like Tally, SAP, and QuickBooks."
    },
    {
        question: "Do you provide support after the project goes live?",
        answer: "Absolutely. We offer flexible Annual Maintenance Contracts (AMC) and on-demand support packages."
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden">
            <Hero data={heroData} />

            {/* Section 1: Introduction (Overview) */}
            <section id="overview" className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">
                            Empowering Enterprises with Intelligent ERP Solutions
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At Finbyz Tech, we believe that an ERP is not just software; it is the central nervous system of your enterprise. As a Certified Frappe Partner, we move beyond basic installation to deliver intelligent, scalable, and fully integrated ERPNext solutions tailored to your unique operational DNA.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Whether you are a startup migrating from spreadsheets, a growing SME moving away from legacy systems like Tally or SAP, or an enterprise seeking a custom manufacturing module, our end-to-end service suite ensures your digital transformation is seamless, secure, and successful.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section: Proven Excellence By The Numbers */}
            <section className="py-16 bg-[#1A5276] text-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Excellence By The Numbers</h2>
                        <p className="text-xl opacity-90">Leverage a decade of expertise to de-risk your ERP investment</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">{stat.value}</div>
                                <div className="text-sm md:text-base font-medium opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: Strategic Implementation & Consulting */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">1. Strategic Implementation & Consulting</h2>
                        <h3 className="text-xl text-orange-600 font-semibold mb-6">Building the Foundation for Success</h3>
                        <p className="text-gray-700 mb-8 max-w-4xl">
                            Implementation is where many ERP projects fail—not because of the software, but because of the strategy. We adopt a &quot;Process-First&quot; approach. Before writing a single line of code, we analyze your workflows, identify bottlenecks, and map your business logic to ERPNext best practices. Our goal is 100% user adoption and zero operational disruption.
                        </p>

                        <div className="bg-white p-8 rounded-xl shadow-sm mb-10 border-l-4 border-orange-500">
                            <h4 className="text-lg font-bold text-[#1A5276] mb-4">Our Agile Implementation Approach</h4>
                            <p className="text-gray-600 mb-6 font-medium">Unlike traditional &quot;Waterfall&quot; methods that wait months for a big reveal, we use an Agile methodology that delivers value from Day 1.</p>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">1. Day One Access & Module Sprints</h5>
                                    <p className="text-gray-600 text-sm">We provide access to the standard (Vanilla) ERPNext system on Day 1. We then tackle implementation module-by-module (Sales, Buying, Inventory, Manufacturing, Accounts) to ensure focus and precision.</p>
                                    <ul className="grid md:grid-cols-2 gap-2 mt-3 text-sm text-gray-600 pl-4">
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500 flex-shrink-0" /> Demo & Gap Analysis</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500 flex-shrink-0" /> Tailored Configuration</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500 flex-shrink-0" /> Iterative Sign-off</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500 flex-shrink-0" /> Hands-on Validation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">2. The Go-Live Protocol</h5>
                                    <p className="text-gray-600 text-sm">Once all modules are signed off, we execute a precise cutover plan: System Sanitization, Master Data Validation, Opening Balance Migration, and Live Switch.</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">3. Post Go-Live Assurance</h5>
                                    <p className="text-gray-600 text-sm">To ensure financial data integrity, we highly recommend our Transaction Audit Service for a minimum of 3 months post-Go-Live.</p>
                                </div>

                                <p className="text-gray-700 mt-4 font-medium italic">
                                    For a deeper dive into our strategy, read our <Link href="/erp/insights/erp-implementation-steps" className="text-[#1A5276] underline hover:text-orange-600">Step-by-Step Guide to ERP Implementation</Link> and <Link href="/erpnext/insights/ultimate-erp-go-live-plan" className="text-[#1A5276] underline hover:text-orange-600">The Ultimate ERP Go-Live Plan</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <ServiceCard title="ERPNext Certified Partner" link="/erpnext/certified-partner" icon={CheckCircle} />
                            <ServiceCard title="ERPNext Service Provider" link="/erpnext/services/erpnext-service-provider" icon={Settings} />
                            <ServiceCard title="Full Lifecycle Implementation" link="/erpnext/services/erpnext-implementation-service" icon={Layers} description="A structured roadmap taking you from Requirement Analysis and CRP to Go-Live and Hyper-care support." />
                            <ServiceCard title="Business Process Consulting" link="/erpnext/services/process-consulting" icon={BarChart} />
                            <ServiceCard title="Strategic IT Consulting" link="/erpnext/services/it-consulting" icon={Cpu} />
                            <ServiceCard title="Start Your Digital Journey" link="/erpnext/services/start-your-erp-journey" icon={ArrowRight} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Custom Development & Frappe Engineering */}
            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">2. Custom Development & Frappe Engineering</h2>
                    <h3 className="text-xl text-orange-600 font-semibold mb-6">When &quot;Out-of-the-Box&quot; Isn&apos;t Enough</h3>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Every business is unique. We leverage the power of the Frappe Framework (Python/JS) to build robust customizations that fit your business like a glove. We don&apos;t just &quot;tweak&quot; the system; we engineer enterprise-grade applications on top of it.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <ServiceCard title="Custom ERP Development" link="/erpnext/services/develop-custom-erp-software" icon={Code} />
                        <ServiceCard title="ERP Software Solutions" link="/erpnext/services/erp-software-development" icon={Database} />
                        <ServiceCard title="API & Integration Services" link="/erpnext/services/api-development-services" icon={Layers} />
                        <ServiceCard title="Mobile App Development" link="/erpnext/services/mobile-app-development" icon={Smartphone} />
                        <ServiceCard title="Data Analytics & BI" link="/erpnext/services/data-analytics" icon={BarChart3} />
                        <ServiceCard title="Website Development" link="/erpnext/services/website-development-on-erpnext" icon={Monitor} />
                        <ServiceCard title="Performance Optimization" link="/erpnext/services/performance-optimization" icon={Zap} />
                        <ServiceCard title="ERPNext SEO Optimization" link="/erpnext/services/erpnext-seo-optimization" icon={Search} />
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="text-center mb-10">
                            <h4 className="text-2xl font-bold text-[#1A5276] mb-2">Our Technology Stack</h4>
                            <p className="text-gray-600">We build on robust, open-source foundations</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <span className="block text-sm font-semibold text-gray-500 uppercase mb-3">Backend</span>
                                <span className="font-bold text-[#1A5276] text-lg">Python, Frappe Framework</span>
                            </div>
                            <div>
                                <span className="block text-sm font-semibold text-gray-500 uppercase mb-3">Frontend</span>
                                <span className="font-bold text-[#1A5276] text-lg">JavaScript, Vue.js, React</span>
                            </div>
                            <div>
                                <span className="block text-sm font-semibold text-gray-500 uppercase mb-3">Database</span>
                                <span className="font-bold text-[#1A5276] text-lg">MariaDB, PostgreSQL</span>
                            </div>
                            <div>
                                <span className="block text-sm font-semibold text-gray-500 uppercase mb-3">Infrastructure</span>
                                <span className="font-bold text-[#1A5276] text-lg">Redis, Nginx, Docker, Kubernetes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Resource Augmentation */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">3. Resource Augmentation</h2>
                    <h3 className="text-xl text-orange-600 font-semibold mb-6">Scale Your Team, Not Your Overhead</h3>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Finding skilled Frappe developers is difficult. We make it easy. Hire pre-vetted, expert developers and functional consultants who work as an extension of your team, dedicated to your project&apos;s success.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <ServiceCard title="Hire Expert Developers" link="/erpnext/services/resource-augmentation" icon={Users} />
                        <ServiceCard title="Hire ERPNext Implementer" link="/erpnext/services/hire-erpnext-implementer" icon={Briefcase} />
                        <ServiceCard title="Hire ERPNext Accountant" link="/erpnext/services/hire-erpnext-accountant" icon={Users} />
                    </div>
                </div>
            </section>

            {/* Section 4: Specialized Accounting & Migration Services */}
            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">4. Specialized Accounting & Migration Services</h2>
                    <h3 className="text-xl text-orange-600 font-semibold mb-6">Securing Your Financial Backbone</h3>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Moving financial data is the most critical part of any ERP project. We specialize in complex data migration and auditing to ensure your Balance Sheet, P&L, and Ledger match your legacy system down to the last cent.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <ServiceCard title="Legacy Migration Services" link="/erpnext/services/erp-migration" icon={Database} />
                        <ServiceCard title="Opening Balance Reconciliation" link="/erpnext/services/opening-balance-reconciliation" icon={CheckCircle} />
                        <ServiceCard title="Transaction Audit Service" link="/erpnext/services/erpnext-accounting-transaction-audit" icon={ShieldCheck} />
                    </div>
                </div>
            </section>

            {/* Section 5: Maintenance & Support (AMC) */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">5. Maintenance & Support (AMC)</h2>
                    <h3 className="text-xl text-orange-600 font-semibold mb-6">Stability You Can Count On</h3>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Your business operates 24/7, and your ERP must keep up. We provide proactive support to ensure your system is secure, updated, and bug-free.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <ServiceCard title="Annual Maintenance Contracts (AMC)" link="/erpnext/services/support-amc" icon={Clock} />
                        <ServiceCard title="System Maintenance" link="/erpnext/services/system-maintenance-amc" icon={Settings} />
                        <ServiceCard title="Helpdesk Support" link="/erpnext/services/support-amc" icon={HelpCircle} />
                    </div>
                </div>
            </section>

            {/* Section 6: Global Reach, Local Compliance */}
            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">6. Global Reach, Local Compliance</h2>
                    <h3 className="text-xl text-orange-600 font-semibold mb-6">International Standards, Regional Expertise</h3>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        We deliver ERPNext solutions globally, ensuring compliance with local taxation and business regulations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                        <ServiceCard title="ERPNext in Canada" link="/erpnext/services/implementation-partner-in-canada" icon={Globe} />
                        <ServiceCard title="ERPNext in UAE" link="/erpnext/services/ERPNext-impelementation-in-uae" icon={Globe} />
                    </div>
                </div>
            </section>

            {/* Section 7: Industry Expertise */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4">7. Industry Expertise</h2>
                    <h3 className="text-xl text-orange-600 font-semibold mb-8">We Speak Your Language</h3>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        We don&apos;t just understand code; we understand your shop floor, your warehouse, and your boardroom. Our team has deep implementation experience across diverse sectors.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-3 text-xl font-bold text-[#1A5276] mb-6 pb-4 border-b">
                                <Truck className="text-orange-500" /> Manufacturing & Engineering
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Heavy Engineering", "Chemical & Pharma", "FMCG", "Textiles",
                                    "Ceramics & Plastics", "Electronics & Solar", "Furniture"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-3 text-xl font-bold text-[#1A5276] mb-6 pb-4 border-b">
                                <Briefcase className="text-orange-500" /> Service & Operations
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Technology & IT", "Hospitality", "Healthcare", "Education"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: FAQ */}
            <section id="faqs" className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    {/* Title is rendered inside FAQ component */}
                    <FAQ faqs={faqs} />
                </div>
            </section>

            {/* Section: The Finbyz Edge */}
            <section id="edge" className="py-16 bg-[#1A5276] text-white">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">The Finbyz Edge: Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                            <Zap size={40} className="text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">AI-Driven Innovation</h3>
                            <p className="opacity-90 leading-relaxed">We are pioneering the integration of AI into ERPNext, automating routine tasks like follow-ups and lead generation.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                            <Database size={40} className="text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Migration Mastery</h3>
                            <p className="opacity-90 leading-relaxed">Our specialized team ensures that moving from legacy systems like Tally or SAP is a smooth evolution, not a painful disruption.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                            <ShieldCheck size={40} className="text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Certified Trust</h3>
                            <p className="opacity-90 leading-relaxed">As a Certified Partner, we guarantee that your implementation follows the highest standards of code quality and security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <div id="get-started">
                <CTA
                    data={{
                        title: "Ready to Future-Proof Your Business?",
                        description: "Partner with a Certified ERPNext expert to streamline your operations and drive growth.",
                        highlightText: "Future-Proof",
                        primaryButton: {
                            text: "Contact Us Today for a Free Discovery Call",
                            action: "/contact"
                        },
                        secondaryButton: {
                            text: "Explore Our Services",
                            action: "/erpnext/services"
                        }
                    }}
                />
            </div>
        </div>
    );
}
