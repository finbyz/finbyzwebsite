'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Code2, BookOpen, UserCheck, Briefcase, Laptop, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function CareerInsightsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('career-insights-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/careers';
  };

  const insights = [
    {
      title: 'How to Become a Software Engineer',
      icon: Code2,
      href: '/careers/insights/how-to-become-a-software-engineer-the-path-to-success',
      description: 'A comprehensive roadmap to becoming a successful software engineer. Learn about skills, technologies, and career progression.',
      category: 'Career Guide'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        headline="Career Insights: Shape Your Future"
        highlightWords={['Career', 'Future', 'Shape']}
        description="Navigate your professional journey with our expert career advice. From skill development to job search strategies, find the guidance you need to succeed in tech."
        primaryButton={{
          text: 'Read Insights',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'View Openings',
          action: handleContact
        }}
        heroImage={{
          alt: 'Career Insights - Professional growth and development',
          // src: '/career-insights-hero.png'
          src:"/careers-insights.png"
        }}
      />

      <main id="career-insights-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Grow Your Tech Career</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Technology careers are dynamic and challenging. Our insights share practical advice from industry professionals to help you navigate your path, whether you're starting out or looking to advance.
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            We believe in continuous learning and growth. These resources are designed to empower developers, engineers, and tech professionals to reach their full potential.
          </p>
        </Section>

        {/* Insights Grid */}
        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Featured Guides</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <Link
                  key={insight.title}
                  href={insight.href}
                  className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-pink-500 dark:hover:border-pink-500 bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center group-hover:bg-pink-500 dark:group-hover:bg-pink-600 transition-colors">
                      <Icon className="w-7 h-7 text-pink-600 dark:text-pink-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 rounded">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    {insight.description}
                  </p>
                  <div className="text-pink-600 dark:text-pink-400 font-bold group-hover:underline text-lg flex items-center gap-1">
                    Read Guide <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section className="py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Career Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Laptop className="w-8 h-8 text-orange-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Technical Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">Master the technologies that power the future</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Interview Prep</h3>
              <p className="text-gray-600 dark:text-gray-400">Tips and strategies to ace your technical interviews</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Career Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">Navigating promotions, leadership, and specialization</p>
            </div>
          </div>
        </Section>

        <CTA
          data={{
            subheading: { text: "Join Our Team", icon: "Rocket" },
            title: "See Career Opportunities",
            description: "Ready to apply your skills? Check out our current job openings and find your place at Finbyz.",
            primaryButton: { text: 'View Job Openings', action: '/careers/job-openings' },
            secondaryButton: { text: 'Life at Finbyz', action: '/about-us/life-at-finbyz' }
          }}
        />
      </main>
    </div>
  );
}
