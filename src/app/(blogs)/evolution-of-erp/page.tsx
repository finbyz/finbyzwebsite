'use client'

import BlogHero from '@/components/ai_components/blog/BlogHero';
import BlogSection from '@/components/ai_components/blog/BlogSection';
import BlogSectionWithImage from '@/components/ai_components/blog/BlogSectionWithImage';
import BlogParagraph from '@/components/ai_components/blog/BlogParagraph';
import BlogTableOfContents from '@/components/ai_components/blog/BlogTableOfContents';
import BlogContent from '@/components/ai_components/blog/BlogContent';
import BlogCheckList from '@/components/ai_components/blog/BlogCheckList';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const blogID = "evolution-of-erp";

import React from 'react';
import { Package, Cog, Factory, Building2, Globe, Cloud } from 'lucide-react';

type HexagonCardProps = {
  decade: string;
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  index: number;
};

const HexagonCard: React.FC<HexagonCardProps> = ({ decade, title, icon: Icon, index }) => {
  return (
    <div
      className="flex flex-col items-center group"
      style={{
        animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Hexagon Container */}
      <div className="relative w-40 h-40 mb-4">
        {/* Outer Hexagon - Border */}
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="white"
              stroke={`url(#gradient-${index})`}
              strokeWidth="2"
              className="transition-all duration-300"
            />
          </svg>
        </div>

        {/* Icon and Decade in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <span className="text-lg font-bold text-gray-800">{decade}</span>
        </div>
      </div>

      {/* Title Below Hexagon */}
      <div className="text-center px-2">
        <p className="text-sm font-semibold text-gray-700 leading-snug min-h-[40px] flex items-center justify-center">
          {title}
        </p>
      </div>
    </div>
  );
};

function ERPTimeline() {
  const timelineData = [
    {
      decade: '1960s',
      title: 'Inventory-Control Packages',
      icon: Package
    },
    {
      decade: '1970s',
      title: 'Material Requirements Planning (MRP)',
      icon: Cog
    },
    {
      decade: '1980s',
      title: 'Manufacturing Resources Planning (MRP II)',
      icon: Factory
    },
    {
      decade: '1990s',
      title: 'Enterprise Resource Planning (ERP)',
      icon: Building2
    },
    {
      decade: '2000s',
      title: 'ERPs as Web Applications',
      icon: Globe
    },
    {
      decade: '2010s',
      title: 'Cloud ERPs',
      icon: Cloud
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Journey through the decades of ERP innovation and transformation
          </p>
        </div>

        {/* Hexagon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {timelineData.map((item, index) => (
            <HexagonCard
              key={item.decade}
              decade={item.decade}
              title={item.title}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}



const heroProps = {
  title: 'Evolution Of ERP Systems',
  description: 'Explore the comprehensive evolution of ERP systems, from early MRP tools to today\'s intelligent, cloud-based applications integrating AI, ML, and IoT technologies. Discover how ERP has transformed business operations and what the future holds.',
  primaryCategory: 'Business',
  author: {
    name: 'mukesh',
    title: 'mukesh',
  },
  publishDate: '2018-12-06',
  readTime: '6 min read',
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'before-erp', title: 'Before ERP System' },
  { id: 'early-erp', title: 'Early Stage ERP Systems' },
  { id: 'timeline', title: 'ERP Evolution Timeline' },
  { id: 'web-erp', title: 'ERPs as Web Application' },
  { id: 'cloud-erp', title: 'Cloud ERPs' },
  { id: 'whats-next', title: 'What’s Next?' },
  { id: 'conclusion', title: 'Conclusion' },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero
        {...heroProps}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 mx-auto w-full bg-muted/30 border-b max-w-screen-xl">
        <BlogTableOfContents items={tocItems} />
        <BlogContent>
          {/* Introduction */}
          <BlogSectionWithImage
            id="introduction"
            title="Introduction"
            image={{
              src: '//files/Evolution_of_ERP.svg',
              alt: 'ERP Evolution',
              title: 'ERP Evolution',
              cover: true
            }}
          >
            <BlogParagraph>
              <a href="/erpnext-certified-partner" className="text-primary underline hover:text-primary/80 transition-colors">ERP systems</a> have been shaping the way businesses operate for over two decades. The ERP system evolution reflects a shift from basic bookkeeping tools like Tally, QuickBooks, and Microsoft Office to more integrated solutions. As computing technology progressed from bulky desktop machines to modern smartphones, business technology also transformed. Innovations such as the internet, web platforms, and cloud computing have driven the evolution of ERP. Today, ERP applications have become indispensable tools for businesses of all sizes, from local shops to multinational organizations.
            </BlogParagraph>
          </BlogSectionWithImage>

          {/* Before ERP System */}
          <BlogSection id="before-erp" title="Before ERP System">
            <BlogParagraph>
              Before the rise of integrated systems, large companies relied on different standalone software to handle various business functions. Legacy systems like Material Requirements Planning (MRP) and Manufacturing Resources Planning (MRP II) focused mainly on inventory and manufacturing processes. However, other departments such as accounting and distribution were still using separate software. The lack of a unified platform led to data duplication and inefficiency. This gap highlighted the need for a unified <a href="/software-development" target="_blank" className="text-primary underline hover:text-primary/80 transition-colors">Software Development</a> approach and centralized database, laying the foundation for the evolution of ERP and the emergence of comprehensive ERP applications.
            </BlogParagraph>
          </BlogSection>

          {/* Early Stage ERP Systems */}
          <BlogSection id="early-erp" title="Early Stage ERP Systems">
            <BlogParagraph>
              By the late 1990s, early ERP applications emerged to bridge the gap between various business departments such as distribution, accounting, and <a href="/human-resource-system" className="text-primary underline hover:text-primary/80 transition-colors" target="_blank">human resource management</a>. These systems enabled real-time data sharing, enhancing coordination across departments. However, in the early stages of the ERP system evolution, such systems were primarily adopted by large enterprises due to two major reasons:
            </BlogParagraph>
            <BlogCheckList
              items={[
                'Cost: Only a few ERP platforms could handle diverse business functions efficiently, and their licensing fees were prohibitively high for small businesses.',
                'Complexity: These systems were originally designed for large corporations, making them overly complex and difficult to implement for smaller organizations, often complicating operations instead of simplifying them.'
              ]}
            />
          </BlogSection>

          {/* ERP Evolution Timeline */}
          <BlogSection id="timeline" title="ERP Evolution Timeline">
            <ERPTimeline />
          </BlogSection>

          {/* ERPs as Web Application */}
          <BlogSection id="web-erp" title="ERPs as Web Application">
            <BlogParagraph>
              The next phase in the ERP system evolution came with the rise of web-based platforms. This allowed new-generation ERP applications to become accessible for small and medium-sized businesses. The <a href="/web-application-development" className="text-primary underline hover:text-primary/80 transition-colors" target="_blank">development of web applications</a> simplified infrastructure and lowered costs by eliminating the need for local installations—users could now just log in via a browser. Despite these improvements, high licensing fees, implementation complexity, and server maintenance costs still posed challenges for companies with limited IT budgets. These factors limited widespread adoption to organizations with over 100 employees.
            </BlogParagraph>
          </BlogSection>

          {/* Cloud ERPs */}
          <BlogSection id="cloud-erp" title="Cloud ERPs">
            <BlogParagraph>
              Cloud computing has opened a new era for <a href="/erp-software" className="text-primary underline hover:text-primary/80 transition-colors" target="_blank">ERP software development</a>. Open-source technologies have enabled vendors to offer scalable and cost-effective ERP applications. With data hosted securely on the cloud, businesses benefit from improved safety, enhanced uptime, and reduced infrastructure maintenance. Furthermore, cloud-based ERPs provide mobile access, empowering users to manage operations anytime, anywhere—perfectly aligning with the needs of today’s always-connected workforce. Cloud solutions are now accelerating the evolution of ERP toward more agile, user-friendly platforms.
            </BlogParagraph>
          </BlogSection>

          {/* What’s Next? */}
          <BlogSection id="whats-next" title="What’s Next?">
            <BlogParagraph>
              Despite the technological advancements and cost benefits, many businesses remain unaware of modern ERP applications. The misconception that ERPs are only for large enterprises still lingers. However, a new wave of tech-savvy entrepreneurs is driving adoption by embracing modern tools early. Legacy systems, once common, are becoming obsolete. Much like websites have become essential, ERP applications are quickly becoming vital for managing internal operations efficiently. As the evolution of ERP continues, businesses of all sizes are beginning to recognize the true value of a well-implemented ERP system!
            </BlogParagraph>
          </BlogSection>

          {/* Conclusion */}
          <BlogSection id="conclusion" title="Conclusion">
            <BlogParagraph>
              The journey of ERP systems from basic inventory control to intelligent, cloud-based platforms highlights the relentless pace of technological innovation in business management. As ERP solutions continue to evolve, organizations that embrace these advancements will be better positioned to thrive in an increasingly digital and connected world.
            </BlogParagraph>
          </BlogSection>
        </BlogContent>
      </div>
    </div>
  );
}
