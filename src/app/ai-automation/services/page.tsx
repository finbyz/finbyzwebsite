'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Cog, ClipboardList, MonitorPlay, Users, Zap, Search, BarChart3, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function AIServicesPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('services-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const services = [
    { title: 'AI Consulting', icon: Users, href: '/ai-automation/services/ai-consulting', description: 'Expert guidance to help you identify high-impact AI opportunities' },
    { title: 'Workflow Automation', icon: Zap, href: '/ai-automation/services/workflow-automation', description: 'Streamline repetitive tasks with custom automated workflows' },
    { title: 'Custom AI Development', icon: Cog, href: '/ai-automation/services/custom-ai-development', description: 'Tailor-made AI solutions designed for your specific business needs' },
    { title: 'Data Analytics & Insights', icon: BarChart3, href: '/ai-automation/services/data-analytics', description: 'Turn raw data into actionable intelligence with AI-powered analytics' },
    { title: 'AI Implementation', icon: Wrench, href: '/ai-automation/services/implementation', description: 'End-to-end deployment and integration of AI systems' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="AI Services: Empowering Your Business"
        highlightWords={['AI', 'Services', 'Empowering']}
        description="Comprehensive AI and automation services to drive digital transformation. From strategy to implementation, we partner with you to unlock the full potential of artificial intelligence."
        primaryButton={{
          text: 'Explore Services',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Get Consultation',
          action: handleContact
        }}
        heroImage={{
          alt: 'AI Services - Professional AI consulting and development',
          src: '/ai-services-hero.jpg'
        }}
      />

      <main id="services-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">End-to-End AI Solutions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              We don't just build technology; we build solutions that solve real business problems. Our holistic approach covers everything from initial strategy and roadmap planning to development, deployment, and ongoing support.
            </p>
          </div>
        </Section>

        {/* Services Grid */}
        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Our Service Offerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-[#1A5276] bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-[#1A5276] transition-colors">
                      <Icon className="w-6 h-6 text-[#1A5276] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A5276] mb-2 group-hover:text-[#1A5276] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-[#1A5276] text-sm font-semibold group-hover:underline flex items-center gap-1">
                    View Details <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section useGradient>
          <div className="container-custom py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-[#1A5276]">Discovery</h3>
                <p className="text-sm text-gray-600">Understanding your business goals and identifying AI opportunities</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <MonitorPlay className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-[#1A5276]">Development</h3>
                <p className="text-sm text-gray-600">Agile development of custom AI models and automation workflows</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-[#1A5276]">Deployment</h3>
                <p className="text-sm text-gray-600">Seamless integration and ongoing optimization of your AI solution</p>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="py-12">
            <CTA
              data={{
                subheading: { text: "Solve Business Problems", icon: "zap" },
                title: "Partner with AI Experts",
                description: "Ready to leverage AI for your business? Connect with our team of experts to discuss your project and get a custom strategy.",
                primaryButton: { text: 'Schedule Call', action: '/contact' },
                secondaryButton: { text: 'See Case Studies', action: '/case-studies' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
