'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Package, TrendingUp, DollarSign, Database, Settings, ShieldCheck, PieChart, Users, Repeat, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ERPSolutionsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('erp-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        headline="Enterprise Resource Planning Solutions"
        highlightWords={['Enterprise', 'Resource', 'Planning']}
        description="Streamline your entire business operation with our comprehensive ERP solutions. From finance to supply chain, gain complete control and visibility over your organization."
        primaryButton={{
          text: 'Explore Solutions',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: handleContact
        }}
        heroImage={{
          alt: 'ERP Solutions - Comprehensive business management',
          src: '/erp-solutions-hero.png'
        }}
      />

      <main id="erp-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Unified Business Management</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A modern ERP system connects every department in your organization, providing a single source of truth. Eliminate data silos, automate manual processes, and make data-driven decisions with confidence.
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            Our ERP solutions are designed to be flexible, scalable, and user-friendly. Whether you're a small business looking to organize operations or an enterprise needing complex resource planning, we have the expertise to deliver the right solution.
          </p>
        </Section>

        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Financial Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive accounting, invoicing, budgeting, and financial reporting.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Supply Chain & Inventory</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Real-time inventory tracking, procurement, and warehouse management.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">HR & Payroll</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Manage employee lifecycle, attendance, leaves, and automated payroll.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Sales & CRM</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Track leads, manage opportunities, and improve customer relationships.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Manufacturing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Production planning, BOM management, and shop floor control.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <Repeat className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Automate repetitive tasks and streamline workflows across departments.
              </p>
            </div>
          </div>
        </Section>

        <Section className="py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">ERP Insights & Resources</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive library of articles, guides, and resources to understand how ERP can transform your business.
            </p>
            <Link
              href="/solutions/erp/insights"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Explore ERP Insights
            </Link>
          </div>
        </Section>

        <CTA
          data={{
            subheading: { text: "Ready for ERP?", icon: "CheckCircle" },
            title: "Get a Free Consultation",
            description: "Speak with our ERP experts to analyze your needs and find the perfect solution for your business.",
            primaryButton: { text: 'Schedule Call', action: '/contact' },
            secondaryButton: { text: 'View ERPNext', action: '/erpnext' }
          }}
        />
      </main>
    </div>
  );
}
