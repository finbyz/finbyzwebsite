'use client';

import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import Link from 'next/link';

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
                highlightWords={["Accountant Struggles"]}
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
            {/* Introduction Section */}
            <Section className="py-12">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl md:text-2xl font-medium text-[#1A5276] mb-8 leading-relaxed">
                            "Let’s be honest: ERPNext is a powerful tool, but it requires a specific mindset to use correctly."
                        </p>
                        <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                            If you are a business owner in the Gulf, Europe, or the USA, you’ve likely faced a frustrating dilemma. You hire a talented accountant who knows GAAP or IFRS perfectly, but they stumble when faced with "DocTypes," "Submit vs. Save," or "Workflow States."
                        </p>
                        <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                            You end up spending months training them on the software, paying for their learning curve while your books fall behind.
                        </p>
                        <p className="text-slate-700 text-base md:text-lg font-semibold text-justify leading-relaxed">
                            We offer a different approach. When you <Link href="/erpnext/services/start-your-erp-journey" className="text-blue-600 hover:underline">hire from us</Link>, you aren't just getting an accountant; you are getting a professional backed by a company that has lived and breathed ERPNext for over 10 years. We don't need training; we need access.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 2: Techno-Functional Advantage */}
            <Section className="py-16 bg-slate-50">
                <div className="container-custom mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">The "Techno-Functional" Advantage: Why We Are Different</h2>
                    <p className="text-slate-700 text-base md:text-lg mb-12 text-center max-w-3xl mx-auto">
                        Most outsourcing firms offer you a standalone data entry clerk. We offer you an Accountant supported by a Technical Legacy. <br />
                        Because our firm has 10+ years of experience <Link href="/erpnext/services/start-your-erp-journey" className="text-blue-600 hover:underline">implementing ERPNext</Link>, our accountants work within a proven framework of best practices. They understand the machinery behind the numbers because they are trained and supervised by ERPNext veterans.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-3">1. We Speak "Developer" and "CPA"</h3>
                            <p className="text-slate-700 text-base leading-relaxed">
                                When an error pops up, a standard accountant stops working and calls support. Our team knows that a "Negative Stock" error usually means a timestamp issue in a delivery note, or that a "Valuation Rate" error requires checking a Landed Cost Voucher. We solve problems; we don't just report them.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-4xl mb-4">🔗</div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-3">2. We Understand the "Why," Not Just the "What"</h3>
                            <p className="text-slate-700 text-base leading-relaxed">
                                In ERPNext, a Purchase Invoice isn't just a bill—it's the final step in a chain that starts with a Material Request. We respect these links. We ensure that your Purchase Receipts are linked correctly to invoices so your "Received But Not Billed" ledgers actually clear out—a common nightmare for most companies.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-[#1A5276] mb-3">3. Global Compliance, Built-In</h3>
                            <p className="text-slate-700 text-base leading-relaxed">
                                Whether you need to manage VAT filing in Saudi Arabia (ZATCA), handle complex EU reverse-charge mechanisms, or adhere to US accrual standards, our institutional knowledge covers it all. We know how to use the Tax Jar and Tax Rule features to automate compliance, rather than relying on manual calculations.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 3: Deep-Dive Services */}
            <Section className="py-12">
                <div className="container-custom mx-auto">
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
                                    Accurate inventory valuation is the backbone of a trading business. We don't just book bills; we meticulously process Landed Cost Vouchers to ensure freight, customs, and insurance are loaded onto item costs. This ensures your Profit & Loss statement reflects true margins, not just estimated ones.
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
                                    Bank reconciliation in ERPNext can be tricky if you don't understand the difference between a "Payment Entry" and a "Journal Entry" against a bank account. We utilize the Bank Reconciliation Tool effectively, ensuring every penny is accounted for and your cash flow reports are real-time accurate.
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
                                    For our global clients, exchange rates are a constant headache. We handle the Exchange Rate Revaluation entries at month-end, ensuring your unrealized gains and losses are captured correctly in the system—something most general accountants miss completely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 4: Peace of Mind Bonus */}
            <Section className="py-12 bg-gradient-to-r from-[#1A5276] to-[#2874a6] text-white">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The "Peace of Mind" Bonus: Complementary Transaction Audit</h2>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                            Because we are technical experts, we view your data differently. Along with our <Link href="/erpnext/services/resource-augmentation" className="underline decoration-yellow-300 hover:text-yellow-200">outsourcing service</Link>, we provide a <Link href="/erpnext/services/erpnext-accounting-transaction-audit" className="font-bold text-yellow-300 hover:text-yellow-100 hover:underline">Complementary Technical Audit</Link> of your accounting transactions.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-left">
                            <h3 className="text-xl font-bold mb-4 text-center">We act as a safety net, checking for things a normal audit misses:</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-300 font-bold">✓</span>
                                    <div>
                                        <strong>Configuration Health:</strong> Are your "Default Income Accounts" set correctly in the Item Masters?
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
                                        <strong>Data Hygiene:</strong> Are you accumulating "orphaned" transactions that affect stock levels but not the ledger?
                                    </div>
                                </li>
                            </ul>
                            <p className="text-center mt-6 font-semibold">We catch these configuration errors before they turn into financial discrepancies.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 5: Comparison Table */}
            <Section className="py-16">
                <div className="container-custom mx-auto">
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
                                    <td className="p-4 md:p-6 text-red-600">3-6 Months. You pay them while you teach them the software.</td>
                                    <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">Zero. We log in and start working on Day 1.</td>
                                </tr>
                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-6 font-semibold">Support System</td>
                                    <td className="p-4 md:p-6 text-red-600">None. They are on their own when issues arise.</td>
                                    <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">High. Backed by 10+ years of firm-level expertise.</td>
                                </tr>
                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-6 font-semibold">Cost Efficiency</td>
                                    <td className="p-4 md:p-6 text-red-600">High fixed salary, benefits, and recruitment fees.</td>
                                    <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">A predictable, flat monthly fee that scales with you.</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-6 font-semibold">Reliability</td>
                                    <td className="p-4 md:p-6 text-red-600">Vulnerable to sick days, holidays, and turnover.</td>
                                    <td className="p-4 md:p-6 font-semibold text-green-600 bg-blue-50/30">Continuous coverage by a team that never "quits."</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* Final Call to Action Section with Form */}
            <Section id="inquiry-form-section" className="bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container-custom mx-auto py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Column - CTA Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">
                                Let's Get Your <span className="text-orange-500">Books in Order</span>
                            </h2>
                            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                You invested in <Link href="/erpnext" className="text-blue-600 hover:underline">ERPNext</Link> to streamline your business. Don't let the accounting hold you back. Let us handle the ledger so you can focus on growing the business.
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
