'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Workflow, Zap, Network, Shield, Code, Server } from 'lucide-react';
import Link from 'next/link';

export default function N8nPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('n8n-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const features = [
    { title: 'Visual Workflow Editor', icon: Workflow, description: 'Design complex automations with an intuitive node-based interface.' },
    { title: '200+ Integrations', icon: Network, description: 'Connect seamlessly with your favorite apps and services out of the box.' },
    { title: 'Custom Code Support', icon: Code, description: 'Extend functionality with JavaScript when pre-built nodes aren\'t enough.' },
    { title: 'Self-Hosted Options', icon: Server, description: 'Keep your data secure with on-premise or private cloud deployment.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="n8n Automation: Workflow Automation for Everyone"
        highlightWords={['n8n', 'Automation', 'Workflow']}
        description="Streamline your operations with n8n, the extendable workflow automation tool. Connect your apps, automate processes, and save time with powerful, custom workflows."
        primaryButton={{
          text: 'Explore n8n',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Contact Experts',
          action: handleContact
        }}
        heroImage={{
          alt: 'n8n Automation - Visual workflow automation platform',
          src: '/n8n-hero.jpg'
        }}
      // Keeping default background/accent for n8n as it might benefit from variety, but fixing text colors in the page body
      />

      <main id="n8n-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Why Choose n8n?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              n8n offers a unique approach to automation. Unlike other tools, it's fair-code, self-hostable, and developer-friendly. It gives you the power to automate simple tasks or build complex enterprise workflows without limitations.
            </p>
          </div>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto text-center">
            With n8n, you own your data. Its node-based approach allows for granular control over every step of your automation, making it the ideal choice for businesses that need flexibility, security, and power.
          </p>
        </Section>

        {/* Features Grid */}
        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg bg-white text-center hover:shadow-lg hover:border-[#1A5276] transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-50 rounded-full flex items-center justify-center">
                <Workflow className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A5276]">Visual Builder</h3>
              <p className="text-sm text-gray-600">Drag-and-drop interface to design your workflows visually.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white text-center hover:shadow-lg hover:border-[#1A5276] transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Network className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A5276]">Any App Integration</h3>
              <p className="text-sm text-gray-600">Connect to any API or service with HTTP Request nodes.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white text-center hover:shadow-lg hover:border-[#1A5276] transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A5276]">Complex Logic</h3>
              <p className="text-sm text-gray-600">Use loops, conditionals, and merging to build smart flows.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white text-center hover:shadow-lg hover:border-[#1A5276] transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A5276]">Secure</h3>
              <p className="text-sm text-gray-600">Run on your own infrastructure for maximum data privacy.</p>
            </div>
          </div>
        </Section>

        <Section useGradient>
          <div className="container-custom py-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276]">Explore n8n Workflows</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Browse our library of pre-built workflows to get started quickly. From social media automation to data synchronization, find templates that fit your needs.
            </p>
            <Link href="/ai-automation/n8n/workflows" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
              View Workflow Library
            </Link>
          </div>
        </Section>

        <Section>
          <div className="py-12">
            <CTA
              data={{
                subheading: { text: "Start Automating", icon: "rocket" },
                title: "Unlock Efficiency with n8n",
                description: "Let us help you design, build, and deploy custom automation workflows that save you time and money.",
                primaryButton: { text: 'Book Consultation', action: '/contact' },
                secondaryButton: { text: 'View Services', action: '/ai-automation/services' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
