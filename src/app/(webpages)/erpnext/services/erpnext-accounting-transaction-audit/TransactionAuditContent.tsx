'use client';

import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Link from 'next/link';
import Section from '@/components/sections/Section';
import {
    Lock,
    AlertCircle,
    Shield,
    AlertTriangle,
    TrendingDown,
    Eye
} from 'lucide-react';

export default function TransactionAuditContent() {
    const handleGetStarted = () => {
        const element = document.getElementById('inquiry-form-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-700">
            {/* 
               HACK: Hide the global InquiryForm injected by the parent layout.
               The user requested to "remove the last one" (the duplicate form).
               Since we cannot modify the global layout or use a new route group,
               we hide the specific class .inquiry-form on this page only.
            */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .inquiry-form { display: none !important; }
            `}} />

            {/* SECTION 1: Hero Section */}
            <HeroSection
                headline="ERPNext Transaction Audit & Accounting Effectiveness Review"
                highlightWords={["Transaction Audit", "Accounting"]}
                description="Don't let data entry errors derail your ERP success. We validate your transactions, correct COGS, ensure compliance, and train your team for accurate financial reporting."
                primaryButton={{
                    text: "Get Started",
                    action: handleGetStarted
                }}
                secondaryButton={{
                    text: "Contact Us",
                    action: "/contact"
                }}
                heroImage={{
                    alt: "ERPNext Transaction Audit Service",
                    src: "/images/erp-transaction-audit-hero.jpg",
                    videoSrc: undefined
                }}
            />

            {/* SECTION 2: Problem Statement */}
            <Section id="problem" className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">Don't Let Data Entry Errors Derail Your ERP Success</h2>

                <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                    You successfully <Link href="/erpnext/services/start-your-erp-journey" className="text-orange-600 hover:underline">implemented ERPNext</Link>. Your team has started entering transactions. But as the months roll by, you start noticing things aren't quite adding up.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-base md:text-lg mb-6">
                    <li>The management reports don't match your gut feeling</li>
                    <li>Gross Profit margins seem distorted</li>
                    <li>The system-generated GST returns don't align with your manual calculations</li>
                </ul>

                <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                    This is what we call the <strong>'Go-Live Paradox.'</strong>
                </p>

                <p className="text-slate-700 text-base md:text-lg text-justify leading-relaxed">
                    New users, unfamiliar with the strict logic of an ERP, make small, seemingly harmless mistakes. Managers, also new to the system, don't know exactly what to check. By the time you review the P&L and Balance Sheet, the data is riddled with errors buried under months of transactions.
                </p>
            </Section>

            {/* SECTION 3: Cost of Errors Section */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">The High Cost of Invisible Errors</h2>
                <p className="text-slate-700 text-base md:text-lg mb-10 text-center max-w-3xl mx-auto">
                    In an integrated system like ERPNext, a mistake is never just an isolated event. It creates a ripple effect:
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Card 1 (Red theme) */}
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">The 'Locked Data' Nightmare</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            Finding a wrong Purchase Invoice from three months ago isn't a quick fix. You might have to cancel Manufacturing Entries (where goods were used) and Sales Invoices (where goods were delivered) just to fix one rate. It's a logistical headache.
                        </p>
                    </div>

                    {/* Card 2 (Orange theme) */}
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">Financial & Compliance Risk</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            Bad data means bad government reporting. Incorrect GSTR-1, GSTR-3B, or TDS filings can lead to penalties and unnecessary scrutiny.
                        </p>
                    </div>

                    {/* Card 3 (Yellow theme) */}
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                            <TrendingDown className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">Flying Blind</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            If your COGS (Cost of Goods Sold) is wrong due to negative stock or valuation errors, your profit ratios are fiction. You might be selling at a loss without even knowing it.
                        </p>
                    </div>
                </div>

                <p className="text-center text-xl font-bold text-[#1A5276]">
                    Stop trying to fix the past manually. Let us secure your future transactions.
                </p>
            </Section>

            {/* SECTION 4: Solution Overview */}
            <Section className="container-custom py-12 bg-slate-50 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">The Solution: Continuous Accounting Audit & Effectiveness Review</h2>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                        Finbyz offers a specialized ERPNext Transaction Audit Service. We act as the bridge between your operational team's data entry and your management's need for accurate reports.
                    </p>
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                        We don't just look for bugs; we look for human behaviors that distort your financial reality. We catch errors before they become permanent problems.
                    </p>
                </div>
            </Section>

            {/* SECTION 5: How We Work */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">How We Work Together</h2>
                <p className="text-slate-700 text-base md:text-lg mb-10 text-center max-w-3xl mx-auto">
                    We believe in empowering your team, not making you dependent on us. Whether you need a short-term cleanup or a long-term guardian for your accounts, our model adapts to you.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
                        <div className="h-2 w-12 bg-orange-600 rounded mb-4"></div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">1. The Framework</h3>
                        <p className="text-slate-700 leading-relaxed">
                            We bring a robust audit framework and specific validation checklists tailored to your industry.
                        </p>
                    </div>

                    <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
                        <div className="h-2 w-12 bg-green-600 rounded mb-4"></div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">2. The Partnership</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Your internal team keeps handling daily accounting and operations. We don't replace them; we supervise the system they work on to ensure they are doing it right.
                        </p>
                    </div>

                    <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
                        <div className="h-2 w-12 bg-purple-600 rounded mb-4"></div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">3. Flexible Engagement</h3>
                        <ul className="text-slate-700 space-y-2 mt-2">
                            <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> <span><strong>Ongoing Guardianship:</strong> We continuously monitor your system month-on-month to ensure long-term data integrity</span></li>
                            <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> <span><strong>Effectiveness Review:</strong> We identify skill gaps in your team and provide feedback so they stop making the same mistakes</span></li>
                            <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> <span><strong>Long-Term Governance:</strong> Our goal is to stabilize your system so that accurate reporting becomes "business as usual," not a monthly struggle</span></li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SECTION 6: Detailed Audit Coverage */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-2 text-center">Detailed Audit Coverage</h2>
                <p className="text-xl font-medium text-slate-600 mb-10 text-center">
                    We dive deep into your ledgers and transaction logs. Here is exactly what we check to ensure every rupee is accounted for:
                </p>

                <div className="space-y-6">
                    {/* Area 1: Sales & Revenue Cycle (Green) */}
                    <div className="border border-green-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                            <h3 className="text-xl font-bold text-[#1A5276]">Sales & Revenue Cycle</h3>
                            <p className="text-green-700 text-sm">Ensuring your top line is accurate and compliant</p>
                        </div>
                        <div className="p-6 bg-white">
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> GST Validation: Tax rules for local, inter-state, and export sales</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> E-Compliance: E-Invoice and E-Way Bill generation verification</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> GSTR-1 Reconciliation: System data vs GST returns matching</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Export Controls: Currency exchange rates, export invoice tagging, GL mapping</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Revenue Leakage: Identifying pending delivery notes where goods left but weren't billed</li>
                            </ul>
                        </div>
                    </div>

                    {/* Area 2: Purchase & Asset Management (Blue) */}
                    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-orange-50 px-6 py-4 border-b border-blue-200">
                            <h3 className="text-xl font-bold text-[#1A5276]">Purchase & Asset Management</h3>
                            <p className="text-blue-700 text-sm">Verifying that your costs and assets are truly represented</p>
                        </div>
                        <div className="p-6 bg-white">
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Invoice Completeness: Missing purchase invoices and draft vs submitted status</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Classification Logic: Assets vs expenses (e.g., capitalizing laptop vs expensing)</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> COGS Validation: Purchase rates flowing into valuation rates</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Input Tax Credit (ITC): GST purchase register vs GSTR-2B review</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> TDS Compliance: TDS deduction logic based on supplier categories</li>
                            </ul>
                        </div>
                    </div>

                    {/* Area 3: Inventory, Stock & COGS (Orange) */}
                    <div className="border border-orange-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
                            <h3 className="text-xl font-bold text-[#1A5276]">Inventory, Stock & COGS</h3>
                            <p className="text-orange-700 text-sm">The heart of ERPNext—ensuring physical stock matches financial stock</p>
                        </div>
                        <div className="p-6 bg-white">
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span> Valuation Integrity: Stock Valuation Reports vs Balance Sheet GL matching</li>
                                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span> Negative Stock Analysis: Identifying and correcting negative stock scenarios</li>
                                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span> COGS Postings: Identifying incorrect Cost of Goods Sold entries from unauthorized adjustments</li>
                            </ul>
                        </div>
                    </div>

                    {/* Area 4: Payment & Banking (Purple) */}
                    <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
                            <h3 className="text-xl font-bold text-[#1A5276]">Payment & Banking</h3>
                            <p className="text-purple-700 text-sm">Cash is king—we ensure your treasury data is clean</p>
                        </div>
                        <div className="p-6 bg-white">
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Reconciliation: Verifying weekly bank reconciliation statements</li>
                                <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Suspense Clearance: Identifying and clearing entries in temporary/suspense accounts</li>
                                <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Payment Linking: Reviewing unreconciled payments for accurate vendor aging reports</li>
                            </ul>
                        </div>
                    </div>

                    {/* Area 5: Expenses & Statutory Compliance (Teal) */}
                    <div className="border border-teal-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-teal-50 px-6 py-4 border-b border-teal-200">
                            <h3 className="text-xl font-bold text-[#1A5276]">Expenses & Statutory Compliance</h3>
                            <p className="text-teal-700 text-sm">Ensuring compliance and accurate period reporting</p>
                        </div>
                        <div className="p-6 bg-white">
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Accrual Validation: Expenses booked in correct period (accrual vs cash basis)</li>
                                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Pending Journals: Identifying unposted Journal Entries distorting reports</li>
                                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Payroll Compliance: Professional Tax (PT) and payroll-related statutory postings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 7: Governance & Reporting */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-2 text-center">Governance & Monthly Reporting</h2>
                <p className="text-xl font-medium text-slate-600 mb-10 text-center">
                    We don't just fix errors; we report on them so you have full visibility
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📊</div>
                        <h3 className="font-bold text-[#1A5276] mb-2">Monthly Management Review</h3>
                        <p className="text-sm text-slate-600">A sit-down (or virtual) review of the month's health</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">💰</div>
                        <h3 className="font-bold text-[#1A5276] mb-2">Financial Health Check</h3>
                        <p className="text-sm text-slate-600">Analysis of Profit, Gross Margin, and expense trends</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🔒</div>
                        <h3 className="font-bold text-[#1A5276] mb-2">Period Closing</h3>
                        <p className="text-sm text-slate-600">We help you "Freeze" accounts to prevent back-dated alterations</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📝</div>
                        <h3 className="font-bold text-[#1A5276] mb-2">Recommendation Reports</h3>
                        <p className="text-sm text-slate-600">A periodic guide on which users are making mistakes and how to train them better</p>
                    </div>
                </div>
            </Section>

            {/* SECTION 8: Important Distinction */}
            <Section className="container-custom py-12">
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                    <h2 className="text-3xl font-bold text-[#1A5276] mb-4 text-center">Important Distinction: Operational vs. Statutory Audit</h2>

                    <p className="text-center text-slate-700 mb-10">
                        <strong>Note:</strong> This service is not a substitute for the Statutory Audit performed by your Chartered Accountant (CA).
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 lg:divide-x lg:divide-amber-200">
                        <div className="lg:pr-8">
                            <h3 className="text-xl font-bold text-[#1A5276] mb-4 flex items-center">
                                <span className="bg-[#1A5276] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">1</span>
                                We are ERPNext Experts with Accounting DNA
                            </h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start"><span className="text-[#1A5276] mr-2">•</span> We check if your ERPNext transactions comply with accounting logic</li>
                                <li className="flex items-start"><span className="text-[#1A5276] mr-2">•</span> We speak the language of "Doctypes," "GL Entries," and "Stock Reconciliation"</li>
                                <li className="flex items-start"><span className="text-[#1A5276] mr-2">•</span> We capture operational mistakes users make inside the software</li>
                            </ul>
                        </div>

                        <div className="lg:pl-8">
                            <h3 className="text-xl font-bold text-[#1A5276] mb-4 flex items-center">
                                <span className="bg-amber-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">2</span>
                                Your CA's Role
                            </h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start"><span className="text-amber-600 mr-2">•</span> Your CA checks if your final numbers comply with the law</li>
                                <li className="flex items-start"><span className="text-amber-600 mr-2">•</span> Traditional CAs may not be familiar with ERPNext internals</li>
                                <li className="flex items-start"><span className="text-amber-600 mr-2">•</span> Your CA needs clean reports (which we help create)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 9: Merged CTA + Form Section */}
            <Section id="inquiry-form-section" className="bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container-custom py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Column - CTA Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">
                                Stop Fixing Yesterday's Mistakes. <span className="text-orange-500">Start Building Tomorrow's Growth.</span>
                            </h2>
                            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                Data inaccuracy is the silent killer of ERP ROI. Don't waste your management's time hunting for variances in spreadsheets. Let Finbyz secure your transaction integrity.
                            </p>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 text-slate-600 font-medium mt-8 text-sm">
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">✓</span>
                                    500+ Accounts Audited
                                </span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">✓</span>
                                    GSTR/TDS Compliance Experts
                                </span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">✓</span>
                                    Month-on-Month Governance
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Inquiry Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Get Started Today</h3>
                            <p className="text-slate-600 mb-6">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            <form className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Organization Field */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Organization Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your organization name"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Mobile No *
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#1A5276] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#153d5e] transition-colors duration-200"
                                >
                                    SUBMIT
                                </button>

                                <p className="text-xs text-slate-500 text-center mt-3">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
