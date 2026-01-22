'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Package, FileCheck, Receipt, DollarSign, Lock, TrendingUp, BarChart3, Calendar, ClipboardCheck, Repeat } from 'lucide-react';
import Link from 'next/link';

export default function ERPNextAppsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('apps-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const apps = [
    { title: 'Advanced Authorisation Licence', icon: FileCheck, href: '/erpnext/apps/advanced-authorisation-licence-erpnext', description: 'Manage advance authorisation licences efficiently' },
    { title: 'Argentina E-Invoicing', icon: Receipt, href: '/erpnext/apps/argentina-electronic-invoicing-erpnext-afip-compliance-automation', description: 'AFIP compliance automation for Argentina' },
    { title: 'EMD Management', icon: DollarSign, href: '/erpnext/apps/emd-management-erpnext', description: 'Track Earnest Money Deposits' },
    { title: 'FD Management', icon: Lock, href: '/erpnext/apps/fd-management-erpnext', description: 'Manage Fixed Deposits within ERPNext' },
    { title: 'Forward Contract', icon: TrendingUp, href: '/erpnext/apps/forward-contract-erpnext', description: 'Handle forward contracts and hedging' },
    { title: 'Investment Portfolio', icon: BarChart3, href: '/erpnext/apps/investment-portfolio-erpnext', description: 'Track and manage investment portfolios' },
    { title: 'Meeting Management', icon: Calendar, href: '/erpnext/apps/meeting-management-erpnext', description: 'Schedule and manage meetings efficiently' },
    { title: 'RODTEP Claim', icon: ClipboardCheck, href: '/erpnext/apps/rodtep-claim-erpnext', description: 'Automate RODTEP claim processes' },
    { title: 'Workflow Transitions', icon: Repeat, href: '/erpnext/apps/workflow-transition', description: 'Advanced workflow automation tools' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="Specialized ERPNext Apps"
        highlightWords={['Specialized', 'ERPNext', 'Apps']}
        description="Extend the functionality of your ERP with our range of specialized apps tailored for specific business needs and regional compliance."
        primaryButton={{
          text: 'Browse Apps',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Request Custom App',
          action: handleContact
        }}
        heroImage={{
          alt: 'ERPNext Apps - Extensions and Plugins',
          src: '/erpnext-apps-hero.jpg'
        }}
      />

      <main id="apps-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Extend Your Capabilities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              Our curated collection of ERPNext apps adds powerful features to your system. Whether you need specific compliance tools or advanced management features, we have an app for that.
            </p>
          </div>
        </Section>

        {/* Apps Grid */}
        <Section className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => {
              const Icon = app.icon;
              return (
                <Link
                  key={app.title}
                  href={app.href}
                  className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-[#1A5276] bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#EAF1F8] rounded-lg flex items-center justify-center group-hover:bg-[#1A5276] transition-colors">
                      <Icon className="w-6 h-6 text-[#1A5276] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A5276] mb-2 group-hover:text-[#1A5276] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {app.description}
                  </p>
                  <div className="text-[#1A5276] font-semibold group-hover:underline flex items-center gap-1">
                    View Details <span>→</span>
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
                subheading: { text: "Need Customization?", icon: "settings" },
                title: "Build Your Own App",
                description: "Require a specific feature not listed here? Our team can develop custom ERPNext apps tailored to your requirements.",
                primaryButton: { text: 'Contact Developers', action: '/contact' },
                secondaryButton: { text: 'View Services', action: '/erpnext/services' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
