'use client'

import { useState } from "react"
import Link from "next/link"
import { Check, X, ArrowRight, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { contactUrl } from '@/lib/contact'
import PricingComparisonTable from "@/components/sections/pricing-comparison"

const plans = [
  {
    name: "Starter",
    description: "Essential tools for small businesses getting started.",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: ["Basic ERPNext Modules", "Up to 5 Users", "Standard Support (Email)", "Basic Reporting", "Shared Cloud Hosting"],
    notIncluded: ["Custom AI Automations", "Dedicated Account Manager", "API Access", "Advanced Security Features"],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    description: "Advanced features for growing companies needing scale.",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    features: ["All Starter Features", "Up to 25 Users", "Priority Support (Chat & Email)", "Advanced Reporting & Dashboards", "Dedicated Cloud Hosting", "API Access", "Custom Workflows"],
    notIncluded: ["AI Automation Agents", "Dedicated Account Manager"],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Full power with AI, dedicated support, and maximum scale.",
    monthlyPrice: 349,
    yearlyPrice: 3490,
    features: ["All Professional Features", "Unlimited Users", "24/7 Dedicated Support", "Custom AI Automation Agents", "Dedicated Account Manager", "On-Premise Deployment Option", "Advanced Security & Compliance", "Custom Integrations"],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false
  }
]

export default function PricingClient() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="container-custom py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
          <button onClick={() => setIsYearly(false)} className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all", !isYearly ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700")}>
            Monthly
          </button>
          <button onClick={() => setIsYearly(true)} className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all", isYearly ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700")}>
            Yearly <span className="text-green-500 font-semibold">Save ~17%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={cn("relative rounded-2xl border p-8 flex flex-col", plan.popular ? "border-orange-400 shadow-xl ring-1 ring-orange-400" : "border-gray-200 shadow-sm")}>
            {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
            <h3 className="text-xl font-bold text-[#1A5276]">{plan.name}</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
              <span className="text-gray-400 text-sm ml-1">{isYearly ? "/year" : "/month"}</span>
            </div>
            <Link href={contactUrl({ notes: 'We are interested in your pricing plans', referer: '/pricing' })} className={cn("text-center py-3 rounded-xl font-semibold text-sm transition-all", plan.popular ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-gray-100 text-gray-800 hover:bg-gray-200")}>
              {plan.cta} <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
            <ul className="mt-6 space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{f}</li>
              ))}
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-400"><X className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-[#1A5276] mb-8">Compare Plans Side by Side</h2>
        <PricingComparisonTable />
      </div>
    </section>
  )
}
