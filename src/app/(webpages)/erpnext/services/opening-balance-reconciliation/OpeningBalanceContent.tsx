'use client';

import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';


export default function OpeningBalanceContent() {
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
               The user requested to remove the duplicate form without changing the layout structure.
            */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .inquiry-form { display: none !important; }
            `}} />

            {/* Hero Section */}
            <HeroSection
                headline="Start ERPNext Accounting: Opening Balance Reconciliation"
                highlightWords={["Opening Balance", "Reconciliation"]}
                description="Start your ERP journey with a clean slate. We take the complex burden of historical data matching off your shoulders so you can focus on day-to-day growth."
                primaryButton={{
                    text: "Get Started",
                    action: handleGetStarted
                }}
                secondaryButton={{
                    text: "Contact Us",
                    action: "https://finbyz.tech/contact"
                }}
                heroImage={{
                    alt: "ERPNext Opening Balance Reconciliation Service",
                    src: "/images/opening-balance-reconciliation-hero.jpg",
                    videoSrc: undefined
                }}
            />

            {/* Challenge Section */}
            <Section id="challenge" className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">The Critical Challenge of Opening Balances</h2>
                <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                    Implementing ERPNext is a transformative step for your business, but the transition often hits a critical roadblock: <span className="font-semibold text-gray-900">The Opening Balance</span>.
                </p>
                <p className="text-slate-700 text-base md:text-lg mb-6 text-justify leading-relaxed">
                    Your financial reports are only as good as the data you start with. If the opening Balance Sheet in ERPNext doesn't match your legacy system down to the last cent, every subsequent report—from P&L to Balance Sheet—will be inaccurate.
                </p>
                <p className="text-slate-700 text-base md:text-lg text-justify leading-relaxed">
                    Many businesses underestimate this phase, assuming it is a simple data entry task. However, accurate reconciliation requires a deep understanding of both accounting principles and ERPNext's specific architecture.
                </p>
            </Section>

            {/* Scenarios Section */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">Which Scenario Fits You?</h2>
                <p className="text-slate-700 text-base md:text-lg mb-10 text-center max-w-3xl mx-auto">
                    We understand that not every implementation is the same. Our service is tailored to handle the two most common implementation scenarios:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card A (Green theme) */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                        <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg inline-block mb-4">Scenario A</span>
                        <h3 className="text-2xl font-bold text-[#1A5276] mb-4">The Clean Start (Greenfield)</h3>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            You are going live on the Accounts module for the first time with no prior financial transactions in ERPNext.
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            Although Scenario A is the ideal starting point, it is not just data entry—it is data validation. A simple mistake here causes permanent discrepancies in your financial reports.
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            We execute a precise, three-step standard migration protocol:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-slate-700 mt-4">
                            <li className="text-slate-700 text-base leading-relaxed">
                                <strong>General Ledger (GL) Balances:</strong> We use Opening Journal Vouchers to bring in your Assets, Liabilities, and Equity, ensuring your Trial Balance matches your previous system's closing report exactly.
                            </li>
                            <li className="text-slate-700 text-base leading-relaxed">
                                <strong>Sub-Ledger Accuracy:</strong> Using the Opening Invoice Creation Tool, we import individual outstanding invoices for your Customers (Debtors) and Suppliers (Creditors). This ensures your aging reports are accurate and bill-wise mapping is preserved from Day 1.
                            </li>
                            <li className="text-slate-700 text-base leading-relaxed">
                                <strong>Inventory Valuation:</strong> We perform a meticulous Stock Reconciliation to map items, quantities, and specific valuation rates, ensuring your Stock Ledger aligns perfectly with your General Ledger.
                            </li>
                        </ol>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            This structured approach ensures that when you hit 'Submit,' your Balance Sheet is audit-ready.
                        </p>
                    </div>

                    {/* Card B (Orange/Red theme) */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
                        <span className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-lg inline-block mb-4">Scenario B</span>
                        <h3 className="text-2xl font-bold text-[#1A5276] mb-4">The Complex Transition (Brownfield)</h3>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            You want to go live on a specific future date, but you have pre-existing transactions you cannot delete, or you are already live but your opening balances are mismatched.
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed font-semibold mb-4 mt-4">
                            This is where most implementations fail.
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            If you have pre-existing transactions (Sales, Purchase, Stock Entries), they have already impacted your General Ledger and Stock Ledger. Simply using the 'Opening Tool' is not feasible because it creates duplication or conflicts with existing data.
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed mt-4">
                            To fix this, one must:
                        </p>
                        <ul className="space-y-2 text-slate-700 mt-4">
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Isolate the difference per account</li>
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Reverse calculate the impact of existing transactions</li>
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Adjust opening entry strategies for the "Gap"</li>
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Reconcile stock valuation rates on past dates (a highly technical task)</li>
                        </ul>
                        <p className="text-slate-700 text-base leading-relaxed font-semibold mt-4">
                            We specialize in solving Scenario B.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Why Outsource Section */}
            <Section className="container-custom py-12 bg-slate-50 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">Why You Should Outsource This (And Not Learn It)</h2>
                <p className="text-slate-700 text-base md:text-lg mb-10 text-center max-w-3xl mx-auto">
                    You might be tempted to train your internal team to handle this reconciliation. Here's why that's often a strategic mistake:
                </p>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">1. Zero Long-Term Utility</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            Opening Balance Reconciliation is a <span className="font-semibold">one-time activity</span>. Once it's done correctly, you never have to do it again. Spending weeks training your staff on complex migration strategies is an inefficient use of resources because they will never use that skill again.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">2. The Steep Learning Curve</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            Matching stock valuation on past dates and reconciling legacy transactions requires expert-level knowledge of ERPNext's backend. It's challenging for users to grasp these nuances while simultaneously trying to learn how to use the system for daily work.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-[#1A5276] mb-3">3. Focus on the Future, Not the Past</h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                            Your team should focus on mastering day-to-day transactions—Sales Orders, Invoices, and Buying cycles—to ensure future data is accurate. Let us take responsibility for the past. We hand you a balanced system so your team can hit the ground running.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Service Scope Section */}
            <Section className="container-custom py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center">Scope of Service: How We Deliver Accuracy</h2>
                <p className="text-slate-700 text-base md:text-lg mb-10 text-center max-w-3xl mx-auto">
                    Our Opening Balance Reconciliation Service is a comprehensive audit and correction process. We don't just import data; we validate it.
                </p>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {/* Phase 1 (Blue theme) */}
                    <div className="relative pl-8 border-l-4 border-blue-500">
                        <div className="absolute -left-4 top-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                        <h3 className="text-2xl font-bold text-[#1A5276] mb-3">Phase 1: Structure & Mapping</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> <span className="mr-1"><strong>Chart of Accounts (CoA) Correction:</strong></span> We review your ERPNext CoA structure to ensure it mirrors your legacy system effectively.</li>
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> <span className="mr-1"><strong>Gap Analysis:</strong></span> We identify and add missing accounts in ERPNext that exist in your previous software.</li>
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> <span className="mr-1"><strong>Account Mapping:</strong></span> We work with your finance team to map old system account names against ERPNext accounts to prevent misclassification.</li>
                        </ul>
                    </div>

                    {/* Phase 2 (Green theme) */}
                    <div className="relative pl-8 border-l-4 border-green-500">
                        <div className="absolute -left-4 top-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                        <h3 className="text-2xl font-bold text-[#1A5276] mb-3">Phase 2: Analysis & Matching</h3>
                        <p className="text-slate-700 mb-3">We perform account-wise analysis for the four pillars of your Balance Sheet:</p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <span className="mr-1"><strong>Ledger Balances:</strong></span> Cash, Bank, Expenses, and Liabilities.</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <span className="mr-1"><strong>Debtors & Creditors:</strong></span> Reconciling sub-ledgers with the General Ledger.</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <span className="mr-1"><strong>Stock Values:</strong></span> Matching Quantity and Valuation rates (FIFO/Moving Average).</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <span className="mr-1"><strong>Statutory Balances:</strong></span> Ensuring Tax assets and liabilities match for audit purposes.</li>
                        </ul>
                    </div>

                    {/* Phase 3 (Orange theme) */}
                    <div className="relative pl-8 border-l-4 border-orange-500">
                        <div className="absolute -left-4 top-0 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                        <h3 className="text-2xl font-bold text-[#1A5276] mb-3">Phase 3: Execution & Strategy</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> <span className="mr-1"><strong>Variance Detection:</strong></span> We check the current balance of every ERPNext account against your legacy system.</li>
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> <span className="mr-1"><strong>Strategic Adjustment:</strong></span> We analyze the cause of the difference (e.g., a pre-existing transaction) and create a strategy to bridge the gap.</li>
                            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> <span className="mr-1"><strong>Correction Entries:</strong></span> We pass the necessary Journal Entries, Stock Adjustments, and Correction entries to force-match the systems.</li>
                        </ul>
                    </div>

                    {/* Phase 4 (Purple theme) */}
                    <div className="relative pl-8 border-l-4 border-purple-500">
                        <div className="absolute -left-4 top-0 bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                        <h3 className="text-2xl font-bold text-[#1A5276] mb-3">Phase 4: Sign-Off</h3>
                        <p className="text-slate-700">
                            We don't leave until the job is done. The project concludes when we present a comparative report showing a <strong>100% match</strong> between your Legacy Balance Sheet and ERPNext, requiring a formal sign-off from your users.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Merged CTA + Form Section */}
            <Section id="inquiry-form-section" className="bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container-custom py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Column - CTA Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">
                                Ready for a <span className="text-orange-500">Balanced Start</span>?
                            </h2>
                            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                Don't let historical data discrepancies hold back your ERP implementation.
                                Let the experts at FinByz Tech handle the heavy lifting of reconciliation.
                            </p>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 text-slate-600 font-medium mt-8 text-sm">
                                <span className="flex items-center gap-2">
                                    <span className="text-orange-500">📅</span>
                                    100+ Successful Migrations
                                </span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span>Zero Data Loss</span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span>Certified Experts</span>
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
