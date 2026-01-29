'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Sparkles, Zap, FileText, Globe, BarChart3, Factory, Rocket, ListChecks } from 'lucide-react';
import Link from 'next/link';

export default function ERPNextInsightsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('insights-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const insights = [
    { title: "What's New in ERPNext v16", icon: Sparkles, href: '/erpnext/insights/whats-new-erpnext-version-16', description: 'Deep dive into the latest features and updates.' },
    { title: "Performance Guide", icon: Zap, href: '/erpnext/insights/erpnext-v16-frappe-caffeine-performance-guide', description: 'Optimizing ERPNext with Frappe Caffeine.' },
    { title: "Choosing ERP Software", icon: FileText, href: '/erpnext/insights/how-to-choose-the-right-erp-software-for-your-company', description: 'Guide to selecting the best ERP for your business.' },
    { title: "Website Benefits", icon: Globe, href: '/erpnext/insights/how-website-benefits-a-business', description: 'Why integrating your website with ERP matters.' },
    { title: "Industry vs Generic ERP", icon: BarChart3, href: '/erpnext/insights/industry-specific-vs-generic-erp', description: 'Comparing specialized and general-purpose solutions.' },
    { title: "Manufacturing Software", icon: Factory, href: '/erpnext/insights/tips-for-selecting-the-right-manufacturing-software', description: 'Tips for manufacturing businesses.' },
    { title: "Go-Live Plan", icon: Rocket, href: '/erpnext/insights/ultimate-erp-go-live-plan', description: 'The ultimate checklist for a successful launch.' },
    { title: "BOM Without Operations", icon: ListChecks, href: '/how-to-create-bill-of-materials-without-operations-in-erpnext', description: 'Technical tutorial for manufacturing setup.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="ERPNext Insights & Resources"
        highlightWords={['Insights', 'Resources']}
        description="Stay updated with the latest trends, guides, and performance tips for ERPNext. Expert knowledge to help you get the most out of your system."
        primaryButton={{
          text: 'Read Latest',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Subscribe',
          action: handleContact
        }}
        heroImage={{
          alt: 'ERPNext Insights - News and Tutorials',
          src: '/erpnext-insights-hero.jpg'
        }}
      />
      

      <main id="insights-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Expert Knowledge Base</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              From version updates to implementation strategies, our insights section covers everything you need to know about navigating the ERPNext ecosystem.
            </p>
          </div>
        </Section>

        {/* Insights Grid */}
        <Section className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <Link
                  key={insight.title}
                  href={insight.href}
                  className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-[#1A5276] bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#EAF1F8] rounded-lg flex items-center justify-center group-hover:bg-[#1A5276] transition-colors">
                      <Icon className="w-6 h-6 text-[#1A5276] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A5276] mb-2 group-hover:text-[#1A5276] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insight.description}
                  </p>
                  <div className="text-[#1A5276] font-semibold group-hover:underline flex items-center gap-1">
                    Read Article <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section useGradient>
          <div className="container-custom py-12">
            <CTA
              data={{
                subheading: { text: "Stay Informed", icon: "bell" },
                title: "Join Our Newsletter",
                description: "Get the latest ERPNext tips, updates, and insights delivered directly to your inbox.",
                primaryButton: { text: 'Subscribe Now', action: '#newsletter' },
                secondaryButton: { text: 'View All Docs', action: '/docs' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
