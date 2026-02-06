'use client'

import React, { useState } from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from "@/components/sections/Section";
import CTA from "@/components/sections/cta";
import Link from "next/link";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import PricingComparisonTable from "@/components/sections/pricing-comparison";

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: "Starter",
            description: "Essential tools for small businesses getting started.",
            monthlyPrice: 49,
            yearlyPrice: 490, // approx 2 months free
            features: [
                "Basic ERPNext Modules",
                "Up to 5 Users",
                "Standard Support (Email)",
                "Basic Reporting",
                "Shared Cloud Hosting"
            ],
            notIncluded: [
                "Custom AI Automations",
                "Dedicated Account Manager",
                "API Access",
                "Advanced Security Features"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Professional",
            description: "Advanced features for growing companies needing scale.",
            monthlyPrice: 149,
            yearlyPrice: 1490,
            features: [
                "All ERPNext Modules",
                "Up to 20 Users",
                "Priority Support (Chat & Email)",
                "Advanced Analytics & Reporting",
                "Dedicated Cloud Environment",
                "3 Custom AI Automations",
                "API Access"
            ],
            notIncluded: [
                "24/7 Dedicated Support",
                "On-premise Deployment Options"
            ],
            cta: "Go Pro",
            popular: true
        },
        {
            name: "Enterprise",
            description: "Full-scale solutions for large organizations.",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            features: [
                "Unlimited Users",
                "24/7 Dedicated Support",
                "Custom Development Hours",
                "White-label Options",
                "On-premise or Cloud",
                "Unlimited AI Automations",
                "SLA Guarantees"
            ],
            notIncluded: [],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <>
            <HeroSection
                headline="Transparent Pricing for Your Growth"
                highlightWords={["Transparent", "Growth"]}
                description="Choose the perfect plan for your business. No hidden fees, just value-driven solutions for ERPNext and Automation."
                primaryButton={{
                    text: "View Plans",
                    action: () => {
                        const el = document.getElementById('pricing-plans');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                secondaryButton={{
                    text: "Contact Sales",
                    action: () => {
                        window.location.href = '/contact';
                    }
                }}
                heroImage={{
                    alt: "Pricing Plans",
                    src: "/images/consult-finbyz.svg",
                }}
            />

            <Section>
                <div id="pricing-plans" className="container-custom py-12">
                    <div className="text-center mb-12">
                        <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Plans & Pricing</span>
                        <h2 className="text-3xl font-bold text-[#1A5276] mt-2 mb-6">Choose Your Plan</h2>

                        {/* Toggle Switch */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className={cn("text-sm font-medium transition-colors", !isYearly ? "text-[#1A5276]" : "text-gray-500")}>Monthly</span>
                            <button
                                onClick={() => setIsYearly(!isYearly)}
                                className={cn(
                                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                    isYearly ? "bg-orange-600" : "bg-gray-200"
                                )}
                            >
                                <span
                                    className={cn(
                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                        isYearly ? "translate-x-6" : "translate-x-1"
                                    )}
                                />
                            </button>
                            <span className={cn("text-sm font-medium transition-colors", isYearly ? "text-[#1A5276]" : "text-gray-500")}>
                                Yearly <span className="text-green-600 text-xs font-bold ml-1">(Save 20%)</span>
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={plan.name}
                                className={cn(
                                    "relative rounded-2xl bg-white p-8 shadow-lg border transition-all duration-300 hover:shadow-xl flex flex-col",
                                    plan.popular ? "border-blue-500 shadow-blue-100 scale-105 z-10" : "border-gray-100"
                                )}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-[#1A5276]">{plan.name}</h3>
                                    <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{plan.description}</p>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        {plan.monthlyPrice === "Custom" ? (
                                            <span className="text-4xl font-bold text-[#1A5276]">Custom</span>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-bold text-[#1A5276]">$</span>
                                                <span className="text-4xl font-bold text-[#1A5276]">
                                                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                                </span>
                                                <span className="text-gray-500 ml-2">/{isYearly ? 'year' : 'mo'}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature, i) => (
                                        <div key={i} className="flex items-start opacity-50">
                                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-500 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className={cn(
                                        "w-full py-3 px-6 rounded-lg text-center font-semibold transition-colors flex items-center justify-center",
                                        plan.popular
                                            ? "bg-orange-600 text-white hover:bg-orange-700"
                                            : "bg-gray-100 text-[#1A5276] hover:bg-gray-200"
                                    )}
                                >
                                    {plan.cta} <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Comparison Table Section */}
            <Section className="bg-gray-50">
                <div className="container-custom py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Detailed Feature Comparison</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Compare our plans side-by-side to find the perfect fit for your business.
                        </p>
                    </div>
                    <PricingComparisonTable />

                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
                            Need a custom configuration? We offer tailored enterprise solutions for large-scale deployments.
                        </p>
                        <Link href="/contact" className="inline-flex items-center text-orange-600 font-semibold hover:text-blue-700">
                            Contact Sales for Custom Quote <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </Section>

            <CTA
                data={{
                    subheading: {
                        text: "Still have questions?",
                        icon: "HelpCircle"
                    },
                    title: "We're Here to Help",
                    highlightText: "Help",
                    description: "Our team is ready to answer any questions you have about our pricing and services.",
                    primaryButton: {
                        text: "Contact Support",
                        icon: "MessageCircle",
                        action: () => {
                            window.location.href = '/contact';
                        }
                    },
                    secondaryButton: {
                        text: "FAQ",
                        icon: "HelpCircle", // Correct icon name
                        action: () => {
                            const el = document.getElementById('faq');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                    },
                    trustIndicator: {
                        text: "No commitment required for initial consultation",
                        icon: "Check"
                    }
                }}
            />
        </>
    );
}
