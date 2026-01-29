'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import { FileText, Star, BarChart3, Factory, AlertTriangle, Info, Workflow, ListChecks, TrendingUp, Rocket, LineChart, Settings, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ERPInsightsPage() {
  const handleGetStarted = () => {
    const element = document.getElementById('erp-insights-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const insights = [
    { title: 'What is ERP Software?', icon: FileText, href: '/erp/insights/What-is-ERP-software', description: 'Introduction to ERP software and its core concepts', category: 'Basics' },
    { title: 'Benefits of ERP', icon: Star, href: '/erp/insights/benefits-of-erp', description: 'Key benefits of implementing ERP systems', category: 'Benefits' },
    { title: 'ERP & CRM Integration', icon: BarChart3, href: '/erp/insights/benefits-of-erp-and-crm-integration', description: 'Why integrate ERP and CRM for better growth', category: 'Integration' },
    { title: 'ERP for Manufacturing', icon: Factory, href: '/erp/insights/benefits-of-erp-for-manufacturing', description: 'How ERP benefits manufacturing businesses', category: 'Industry' },
    { title: 'Implementation Challenges', icon: AlertTriangle, href: '/erp/insights/challenges-of-erp-implementation', description: 'Major challenges faced during ERP implementation', category: 'Implementation' },
    { title: 'Common Myths of ERP', icon: Info, href: '/erp/insights/common-myths-of-erp', description: 'Debunking common misconceptions about ERP systems', category: 'Myths' },
    { title: 'Implementation Methodology', icon: Workflow, href: '/erp/insights/erp-implementation-methodology', description: 'Proven methodologies for successful implementation', category: 'Implementation' },
    { title: 'Implementation Steps', icon: ListChecks, href: '/erp/insights/erp-implementation-steps', description: 'Step-by-step guide to ERP implementation', category: 'Guide' },
    { title: 'Evolution of ERP', icon: TrendingUp, href: '/erp/insights/evolution-of-erp', description: 'The history and future growth of ERP systems', category: 'History' },
    { title: 'Business Transformation', icon: Rocket, href: '/erp/insights/how-erp-software-can-change-your-business', description: 'How ERP software transforms business operations', category: 'Strategy' },
    { title: 'Improving Performance', icon: LineChart, href: '/erp/insights/how-erp-improves-business-performance', description: 'Measuring ERP impact on business performance', category: 'Strategy' },
    { title: 'Systems & Processes', icon: Settings, href: '/erp/insights/significance-of-system-and-process', description: 'Why robust systems are critical for growth', category: 'Process' },
    { title: 'Master Production Schedule', icon: Calendar, href: '/erp/insights/what-is-a-master-production-schedule', description: 'Understanding MPS in manufacturing ERP', category: 'Manufacturing' }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        headline="ERP Insights: Master Your Systems"
        highlightWords={['ERP', 'Insights', 'Master']}
        description="Deep dive into the world of Enterprise Resource Planning. From basics to advanced implementation strategies, access our comprehensive knowledge base."
        primaryButton={{
          text: 'Read Articles',
          action: handleGetStarted
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: handleContact
        }}
        heroImage={{
          alt: 'ERP Insights - comprehensive guide to enterprise resource planning',
          src: '/erp-insights-hero.png'
        }}
      />

      <main id="erp-insights-content" className="container-custom mx-auto px-4 py-16">
        <Section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Essential ERP Knowledge</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're new to ERP or looking to optimize an existing system, our insights cover everything you need to know. Make informed decisions for your business with our expert guides.
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            We break down complex topics into clear, actionable articles. Learn about selection criteria, implementation best practices, industry-specific benefits, and future trends in enterprise software.
          </p>
        </Section>

        {/* Insights Grid */}
        <Section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <Link
                  key={insight.title}
                  href={insight.href}
                  className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-500 bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 dark:group-hover:bg-indigo-600 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded mb-1">
                        {insight.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                        {insight.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {insight.description}
                  </p>
                  <div className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold group-hover:underline flex items-center gap-1">
                    Read Article <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <CTA
          data={{
            subheading: { text: "Need Expert Advice?", icon: "BookOpen" },
            title: "Consult with ERP Specialists",
            description: "Our team has guided hundreds of businesses through successful ERP implementations. Let us help you navigate your journey.",
            primaryButton: { text: 'Book Consultation', action: '/contact' },
            secondaryButton: { text: 'View Solutions', action: '/solutions/erp' }
          }}
        />
      </main>
    </div>
  );
}
