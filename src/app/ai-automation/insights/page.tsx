'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { Lightbulb, TrendingUp, Monitor, Laptop, Code2, BrainCircuit, Rss, BookOpen, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AIInsightsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('ai-insights-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const insights = [
    { title: 'Website Design Tips for Small Business', icon: Monitor, href: '/insights/website-design-tips-for-small-business', description: 'Essential design principles for growing businesses', category: 'Design' },
    { title: 'Biggest Challenge in Going Online', icon: Globe, href: '/insights/whats-the-biggest-challenge-for-most-businesses-when-going-online', description: 'Overcoming common hurdles in digital transformation', category: 'Strategy' },
    { title: 'Why Invest in IT?', icon: TrendingUp, href: '/insights/why-invest-in-it-for-business', description: 'The ROI of technology investment for modern businesses', category: 'Business' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        headline="AI & IT Insights: Future-Proof Your Business"
        highlightWords={['AI', 'IT', 'Future-Proof']}
        description="Stay ahead of the curve with our expert insights on Artificial Intelligence, IT strategy, and digital transformation. Read articles that help you navigate the rapidly evolving tech landscape."
        primaryButton={{
          text: 'Read Articles',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Subscribe',
          action: handleContact
        }}
        heroImage={{
          alt: 'AI Insights - Expert articles on technology and business',
          src: '/ai-insights-hero.jpg'
        }}
      />

      <main id="ai-insights-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fadeInUp">Technology Decoded</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
              Technology shouldn't be a mystery. We break down complex concepts into clear, actionable insights that you can apply to your business today. From AI adoption to IT infrastructure, we cover it all.
            </p>
          </div>
        </Section>

        {/* Insights Grid */}
        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <Link
                  key={insight.title}
                  href={insight.href}
                  className="group block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-[#1A5276] bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-[#1A5276] transition-colors">
                      <Icon className="w-6 h-6 text-[#1A5276] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-[#1A5276] bg-orange-50 rounded mb-2">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A5276] mb-2 group-hover:text-[#1A5276] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {insight.description}
                  </p>
                  <div className="text-[#1A5276] text-sm font-semibold group-hover:underline flex items-center gap-1">
                    Read Article <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section useGradient>
          <div className="container-custom py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Topics We Cover</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Artificial Intelligence', 'Machine Learning', 'Automation', 'Cloud Computing', 'Cybersecurity', 'Digital Strategy', 'Web Development', 'Future Tech'].map((topic) => (
                <span key={topic} className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 font-medium border border-gray-100">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="py-12">
            <CTA
              data={{
                subheading: { text: "Stay Informed", icon: "rss" },
                title: "Get Insights Delivered to Your Inbox",
                description: "Don't miss out on the latest technology trends and expert advice. Subscribe to our newsletter today.",
                primaryButton: { text: 'Subscribe Now', action: '#newsletter' },
                secondaryButton: { text: 'View All Posts', action: '/blog' }
              }}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
