'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { MailPlus, Sparkles, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function AIAutomationAppsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('ai-apps-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const apps = [
    { title: 'AI-powered Lead Generation', icon: MailPlus, href: '/ai-automation/apps/ai-powered-lead-generation-and-email-outreach', description: 'Automate your outreach and qualify leads with AI.' },
    { title: 'Content Spark Marketing', icon: Sparkles, href: '/ai-automation/apps/content-spark-marketing-automation', description: 'Generate high-converting marketing content instantly.' },
    { title: 'Sales Call Analysis', icon: PhoneCall, href: '/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext', description: 'Record and analyze sales calls for training and insights.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="AI Automation Apps"
        highlightWords={['AI', 'Automation', 'Apps']}
        description="Supercharge your workflow with our suite of AI-powered applications. From marketing to sales, automate complex tasks and drive growth."
        primaryButton={{
          text: 'Explore Apps',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Request Demo',
          action: handleContact
        }}
        heroImage={{
          alt: 'AI Automation Apps - Smart Business Tools',
          src: '/ai-apps-hero.jpg'
        }}
      />

      <main id="ai-apps-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Smart Tools for Modern Business</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              Leverage the power of artificial intelligence to automate manual processes. Our apps are integrated directly with ERPNext to provide a seamless experience.
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
                    Try it Now <span>→</span>
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
                subheading: { text: "Go Custom", icon: "cpu" },
                title: "Need a Custom AI Solution?",
                description: "Our AI engineers can build bespoke automation tools tailored to your specific business challenges.",
                primaryButton: { text: 'Talk to Experts', action: '/contact' },
                secondaryButton: { text: 'Explore Pricing', action: '/pricing' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
