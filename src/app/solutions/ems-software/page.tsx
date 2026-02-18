'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { MessageCircle, TreeDeciduous, Siren, Radio, MapPin, Users, Activity } from 'lucide-react';
import Link from 'next/link';

export default function EMSSoftwarePage() {
  const handleGetStarted = () => {
    const element = document.getElementById('ems-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const features = [
    {
      title: 'Two-Way Communication',
      icon: MessageCircle,
      href: '/two-way-communication-in-ems',
      description: 'Robust communication channels enabling real-time information flow between command centers and field units.',
      highlight: 'Real-time Alerts'
    },
    {
      title: 'Volunteer Tree Structure',
      icon: TreeDeciduous,
      href: '/volunteer-tree-structure-in-ems',
      description: 'Hierarchical management of volunteers ensuring efficient mobilization and clear chain of command during emergencies.',
      highlight: 'Efficient Mobilization'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        headline="EMS Software: Emergency Management Solutions"
        highlightWords={['Emergency', 'Management', 'Solutions']}
        description="Advanced software solutions for emergency response coordination. Empowering organizations to manage crises effectively with real-time communication and resource mobilization."
        primaryButton={{
          text: 'Explore Features',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: handleContact
        }}
        heroImage={{
          alt: 'EMS Software - Emergency management and response coordination',
          src: '/images/ems-software-hero.jpg'
        }}
      />

      <main id="ems-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Coordinate. Communicate. Respond.</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              In emergencies, every second counts. Our EMS software provides the tools needed for rapid response, effective coordination, and reliable communication when it matters most.
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            Designed for emergency response teams, NGOs, and government agencies, our platform ensures that critical information reaches the right people instantly, and resources are deployed efficiently.
          </p>
        </Section>

        {/* Features Grid */}
        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-red-500 dark:hover:border-red-500 bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center group-hover:bg-red-500 dark:group-hover:bg-red-600 transition-colors">
                      <Icon className="w-7 h-7 text-red-600 dark:text-red-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                    {feature.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
                    {feature.highlight}
                  </div>
                  <div className="text-red-600 dark:text-red-400 font-bold group-hover:underline text-lg block">
                    Learn More →
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section className="py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Why Choose Our EMS?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Siren className="w-8 h-8 text-orange-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Rapid Response</h3>
              <p className="text-gray-600 dark:text-gray-400">Minimize response times with automated workflows and alerts</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Radio className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Reliable Comms</h3>
              <p className="text-gray-600 dark:text-gray-400">Maintain connectivity with redundant communication channels</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Scalable</h3>
              <p className="text-gray-600 dark:text-gray-400">Manage hundreds of volunteers and units seamlessly</p>
            </div>
          </div>
        </Section>

        <CTA
          data={{
            subheading: { text: "Enhance Your Response", icon: "Activity" },
            title: "See EMS in Action",
            description: "Schedule a demo to see how our Emergency Management System can improve your organization's readiness and response capabilities.",
            primaryButton: { text: 'Request Demo', action: '/contact' },
            secondaryButton: { text: 'Contact Support', action: '/contact' }
          }}
        />
      </main>
    </div>
  );
}
