'use client';

import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

export default function HireAccountantContent() {
    const handleGetStarted = () => {
        const element = document.getElementById('inquiry-form-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-700">
            {/* 
               HACK: Hide the global InquiryForm injected by the parent layout if it duplicates.
               Consistent with previous service pages.
            */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .inquiry-form { display: none !important; }
            `}} />

            {/* Hero Section */}
            <HeroSection
                headline="You Love ERPNext. Your Accountant Struggles With It. Let's Fix That."
                highlightWords={["Accountant Struggles", "Let's Fix That"]}
                description="Stop training your accountant on software they don't understand. Hire expert ERPNext accountants backed by a firm with 10+ years of implementation experience."
                primaryButton={{
                    text: "Schedule a Discovery Call",
                    action: handleGetStarted
                }}
                heroImage={{
                    alt: "Hire ERPNext Accountant",
                    src: "/images/hire-erpnext-accountant.jpg",
                    videoSrc: undefined
                }}
            />

            {/* Introduction Section */}
            <Section className="container-custom py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl md:text-2xl font-medium text-[#1A5276] mb-8 leading-relaxed">
                        "Let's be honest: ERPNext is a powerful tool, but it requires a specific mindset to use correctly."
                    </p>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                        Business owners in the Gulf, Europe, and USA often hire talented accountants who know GAAP or IFRS perfectly, but they struggle with ERPNext concepts like DocTypes, Submit vs Save, and Workflow States. The owner ends up spending months training them, paying for their learning curve while books fall behind.
                    </p>
                    <p className="text-slate-700 text-base md:text-lg font-semibold text-justify leading-relaxed">
                        When you hire from us, you get an accountant backed by a company with 10+ years of ERPNext experience. We don't need training, just access to your system.
                    </p>
                </div>
            </Section>

            {/* Section 2: Techno-Functional Advantage */}
            <Section className="container-custom py-12 bg-slate-50 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">The "Techno-Functional" Advantage: Why We Are Different</h2>
                <p className="text-slate-700 text-base md:text-lg mb-12 text-center max-w-3xl mx-auto">
                    Most outsourcing firms give you a data entry clerk. We give you an accountant supported by a technical legacy. Our firm has 10+ years implementing ERPNext, so our accountants work within a proven best practices framework. They understand the machinery behind the numbers.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="text-4xl mb-4">💻</div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">We Speak "Developer" and "CPA"</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            When errors pop up, regular accountants stop and call support. Our team knows a "Negative Stock" error usually means a timestamp issue in a delivery note, or a "Valuation Rate" error needs checking the Landed Cost Voucher. We solve problems, not just report them.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="text-4xl mb-4">🔗</div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">We Understand the "Why," Not Just the "What"</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            In ERPNext, a Purchase Invoice isn't just a bill—it's the final step in a chain starting with a Material Request. We respect these links. We ensure Purchase Receipts link correctly to invoices so "Received But Not Billed" ledgers actually clear out—a common nightmare.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="text-4xl mb-4">🌍</div>
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">Global Compliance, Built-In</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            Whether managing VAT filing in Saudi Arabia (ZATCA), complex EU reverse-charge, or US accrual standards, our knowledge covers it. We know how to use Tax Jar and Tax Rule features to automate compliance instead of manual calculations.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 3: Deep-Dive Services */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">Deep-Dive Services: Beyond Basic Bookkeeping</h2>
                <p className="text-slate-700 text-base md:text-lg mb-12 text-center max-w-3xl mx-auto">
                    We don't just "keep the books." We maintain the integrity of your ERP system.
                </p>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                            <span className="text-2xl">📦</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Purchase Cycle & Landed Costs</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Accurate inventory valuation is the backbone of a trading business. We process Landed Cost Vouchers meticulously to ensure freight, customs, and insurance are loaded onto item costs. This ensures your P&L reflects true margins, not estimated ones.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                            <span className="text-2xl">🏦</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Complex Bank Reconciliation</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Bank reconciliation in ERPNext is tricky if you don't understand the difference between a Payment Entry and a Journal Entry against a bank account. We use the Bank Reconciliation Tool effectively, ensuring every penny is accounted for and cash flow reports are real-time accurate.
                            </p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-purple-100 p-4 rounded-full flex-shrink-0">
                            <span className="text-2xl">💱</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Multi-Currency Management</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                For global clients, exchange rates are a constant headache. We handle Exchange Rate Revaluation entries at month-end, ensuring unrealized gains and losses are captured correctly—something most general accountants miss completely.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 4: Peace of Mind Bonus */}
            <Section className="container-custom py-12 bg-gradient-to-r from-[#1A5276] to-[#2874a6] text-white rounded-2xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">The "Peace of Mind" Bonus: Complementary Transaction Audit</h2>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                        Because we're technical experts, we view your data differently. Along with our outsourcing service, we provide a <span className="font-bold text-yellow-300">Complementary Technical Audit</span> of your accounting transactions.
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-left">
                        <h3 className="text-xl font-bold mb-4 text-center">We act as your safety net, catching configuration errors before they become financial discrepancies:</h3>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 font-bold">✓</span>
                                <div>
                                    <strong>Configuration Health:</strong> Are "Default Income Accounts" set correctly in Item Masters?
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 font-bold">✓</span>
                                <div>
                                    <strong>Process Integrity:</strong> Are users bypassing approval workflows?
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 font-bold">✓</span>
                                <div>
                                    <strong>Data Hygiene:</strong> Are you accumulating "orphaned" transactions affecting stock levels but not the ledger?
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Section 5: Comparison Table */}
            <Section className="container-custom py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-10 text-center">The Reality of Hiring vs. Outsourcing to Experts</h2>

                <div className="overflow-x-auto shadow-lg rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 text-[#1A5276]">
                                <th className="p-4 md:p-6 font-bold text-lg border-b border-slate-200 w-1/4">Feature</th>
                                <th className="p-4 md:p-6 font-bold text-lg border-b border-slate-200 w-1/3">The "Generalist" Accountant</th>
                                <th className="p-4 md:p-6 font-bold text-lg border-b border-slate-200 bg-blue-50 w-1/3 text-blue-800">Our ERPNext Expert Team</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="p-4 md:p-6 font-semibold">Onboarding Time</td>
                                <td className="p-4 md:p-6 text-red-600">3-6 Months (you pay while teaching software)</td>
                                <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">Zero (we start Day 1)</td>
                            </tr>
                            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="p-4 md:p-6 font-semibold">Support System</td>
                                <td className="p-4 md:p-6 text-red-600">None (they're on their own)</td>
                                <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">High (backed by 10+ years firm expertise)</td>
                            </tr>
                            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="p-4 md:p-6 font-semibold">Cost Efficiency</td>
                                <td className="p-4 md:p-6 text-red-600">High fixed salary, benefits, recruitment fees</td>
                                <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">Predictable flat monthly fee that scales</td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 md:p-6 font-semibold">Reliability</td>
                                <td className="p-4 md:p-6 text-red-600">Vulnerable to sick days, holidays, turnover</td>
                                <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">Continuous coverage by team that never quits</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Final Call to Action Section with Form */}
            <Section id="inquiry-form-section" className="bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container-custom py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Column - CTA Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">
                                Let's Get Your <span className="text-orange-500">Books in Order</span>
                            </h2>
                            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                You invested in ERPNext to streamline your business. Don't let accounting hold you back. Let us handle the ledger so you can focus on growing the business.
                            </p>
                            <p className="text-slate-600 text-base mb-6 font-medium">
                                Tell us about your current setup, and let's see if we're a good fit.
                            </p>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 text-slate-600 font-medium mt-8 text-sm">
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">✓</span>
                                    Technical Expertise
                                </span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">✓</span>
                                    Process Oriented
                                </span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">✓</span>
                                    Scalable Solution
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Inquiry Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Schedule a Free Discovery Call</h3>
                            <p className="text-slate-600 mb-6">
                                Fill out the form below and we'll get back to you within 24 hours.
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
                                    className="w-full bg-[#1A5276] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#153d5e] transition-colors duration-200 uppercase tracking-wide"
                                >
                                    Schedule Call
                                </button>

                                <p className="text-xs text-slate-500 text-center mt-3">
                                    By submitting this form, you agree to our privacy policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
