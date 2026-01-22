'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Users, UserPlus, FileCheck, DollarSign, Lock, TrendingUp, BarChart3, Calendar, ClipboardCheck, Repeat } from 'lucide-react';
import Link from 'next/link';

export default function ERPNextModulesPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('modules-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const modules = [
    { title: 'CRM Software', icon: Users, href: '/erpnext/modules/crm-software', description: 'Comprehensive Customer Relationship Management' },
    { title: 'Human Resource System', icon: UserPlus, href: '/erpnext/modules/human-resource-system', description: 'Complete HR Management Solution' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="ERPNext Modules"
        highlightWords={['ERPNext', 'Modules']}
        description="Explore the comprehensive suite of ERPNext modules designed to streamline every aspect of your business operations."
        primaryButton={{
          text: 'Explore Modules',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Contact Sales',
          action: handleContact
        }}
        heroImage={{
          alt: 'ERPNext Modules - Integrated business solutions',
          src: '/erpnext-modules-hero.jpg'
        }}
      />

      <main id="modules-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Integrated Business Modules</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              ERPNext's modular approach allows you to implement exactly what you need. From CRM to HR, each module connects seamlessly to create a unified business operating system.
            </p>
          </div>
        </Section>

        {/* Modules Grid */}
        <Section className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-[#1A5276] bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#EAF1F8] rounded-lg flex items-center justify-center group-hover:bg-[#1A5276] transition-colors">
                      <Icon className="w-6 h-6 text-[#1A5276] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A5276] mb-2 group-hover:text-[#1A5276] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {module.description}
                  </p>
                  <div className="text-[#1A5276] font-semibold group-hover:underline flex items-center gap-1">
                    Learn More <span>→</span>
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
                subheading: { text: "Complete Suite", icon: "box" },
                title: "Ready to Scale?",
                description: "Discover how ERPNext modules can be customized to fit your unique business processes.",
                primaryButton: { text: 'Schedule Demo', action: '/contact' },
                secondaryButton: { text: 'View All Features', action: '/erpnext' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
