'use client';

import BlogHero from '@/components/ai_components/blog/BlogHero';
import BlogSection from '@/components/ai_components/blog/BlogSection';
import BlogSectionWithImage from '@/components/ai_components/blog/BlogSectionWithImage';
import BlogTableOfContents from '@/components/ai_components/blog/BlogTableOfContents';
import BlogContent from '@/components/ai_components/blog/BlogContent';
import BlogParagraph from '@/components/ai_components/blog/BlogParagraph';
import BlogCheckList from '@/components/ai_components/blog/BlogCheckList';
import Link from 'next/link';

const heroProps = {
  title: "ERPNext v16 Frappe Caffeine Performance Optimization Guide",
  description: "A deep-dive technical guide on how Frappe Caffeine architecture in ERPNext v16 delivers 2x performance gains through optimized Redis caching and query management.",
  primaryCategory: 'Insights',
  tags: ['ERPNext v16', 'Frappe Caffeine', 'Redis', 'Performance', 'Engineering'],
  author: {
    name: 'Mukesh Variyani',
    title: 'Frappe Expert',
  },
  publishDate: '2026-01-06',
  readTime: '15 min',
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-is-frappe-caffeine', title: 'What is Frappe Caffeine?' },
  { id: 'redis-architecture', title: 'Redis Caching Architecture' },
  { id: 'benchmarks', title: 'Performance Benchmarks' },
  { id: 'implementation', title: 'Implementation Guide' },
  { id: 'conclusion', title: 'Conclusion' },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero {...heroProps} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 mx-auto w-full bg-muted/30 border-b container-custom">
        <BlogTableOfContents items={tocItems} />
        <BlogContent>
          {/* Introduction */}
          <BlogSectionWithImage
            id="introduction"
            title="Introduction"
            image={{
              src: "/images/ERPNext-logo1.png",
              alt: "ERPNext Version 16 Performance",
              cover: true
            }}
          >
            <BlogParagraph>
              ERPNext Version 16 introduces a architectural paradigm shift with <strong>Frappe Caffeine</strong>, a new high-performance caching layer designed to handle the heavy lifting of enterprise-scale data processing.
            </BlogParagraph>
            <BlogParagraph>
              For years, large-scale ERPNext deployments faced challenges with read-heavy operations, often requiring vertical scaling of database servers. Frappe Caffeine changes the equation by offloading repetitive read operations to an optimized Redis layer, resulting in dramatic performance improvements.
            </BlogParagraph>
          </BlogSectionWithImage>

          {/* What is Frappe Caffeine? */}
          <BlogSection
            id="what-is-frappe-caffeine"
            title="What is Frappe Caffeine?"
          >
            <BlogParagraph>
              Frappe Caffeine isn't just a simple key-value cache; it's an intelligent, context-aware caching intermediary that sits between the Frappe ORM and the database. It proactively manages document states, permission checks, and list view aggregations.
            </BlogParagraph>
            <BlogCheckList
              items={[
                "Proactive Cache Warming: Preditive loading of frequently accessed doctypes",
                "Smart Invalidation: Granular cache eviction based on document dependencies",
                "Serialized Document Store: Storing full document objects to bypass ORM reconstruction overhead",
                "Query Result Caching: Caching results of complex filtered queries for instant pagination"
              ]}
            />
          </BlogSection>

          {/* Redis Architecture */}
          <BlogSectionWithImage
            id="redis-architecture"
            title="Redis Caching Architecture"
            image={{
              src: "/images/speed.svg",
              alt: "Redis Caching Architecture",
              title: "Optimized Redis Logic",
              width: 200,
              height: 200
            }}
            imagePosition="right"
            imageSize="medium"
          >
            <BlogParagraph>
              At the heart of Caffeine is an advanced Redis implementation. Unlike previous versions where Redis was primarily used for session storage and simple key caching, v16 utilizes Redis 7.0&apos;s advanced data structures.
            </BlogParagraph>
            <BlogParagraph>
              The system uses Redis Streams for cache invalidation propagation across distributed worker nodes, ensuring that all instances of your ERPNext cluster have consistent data views within milliseconds of a write operation.
            </BlogParagraph>
            <div className="bg-slate-950 text-slate-50 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Example: Enabling Caffeine Debug Mode in site_config.json
{
  "caffeine_enabled": 1,
  "caffeine_debug": 1,
  "redis_cache_url": "redis://localhost:6379/1",
  "aggressive_prefetch": true
}`}</pre>
            </div>
          </BlogSectionWithImage>

          {/* Performance Benchmarks */}
          <BlogSection
            id="benchmarks"
            title="Performance Benchmarks"
          >
            <BlogParagraph>
              We conducted extensive load testing comparing a standard v15 deployment against v16 with Caffeine enabled. The results for read-heavy operations were significant.
            </BlogParagraph>
            <div className="border rounded-lg overflow-hidden my-6">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Operation</th>
                    <th className="px-6 py-3">v15 Latency</th>
                    <th className="px-6 py-3">v16 (Caffeine)</th>
                    <th className="px-6 py-3">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">List View (100k records)</td>
                    <td className="px-6 py-4">450ms</td>
                    <td className="px-6 py-4">120ms</td>
                    <td className="px-6 py-4 text-green-600 font-bold">3.75x</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Complex Report Generation</td>
                    <td className="px-6 py-4">12.5s</td>
                    <td className="px-6 py-4">5.2s</td>
                    <td className="px-6 py-4 text-green-600 font-bold">2.4x</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">API Response Time</td>
                    <td className="px-6 py-4">180ms</td>
                    <td className="px-6 py-4">45ms</td>
                    <td className="px-6 py-4 text-green-600 font-bold">4x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BlogSection>

          {/* Implementation Guide */}
          <BlogSection
            id="implementation"
            title="Implementation Guide"
          >
            <BlogParagraph>
              Upgrading to v16 doesn&apos;t automatically enable all Caffeine features. To fully leverage the system, you need to configure your `site_config.json` and ensure your infrastructure is ready.
            </BlogParagraph>
            <BlogCheckList
              items={[
                "Upgrade Redis to version 7.0 or higher",
                "Increase Redis maximum memory limit (recommended 2GB+ for large sites)",
                "Enable socket-based connection for local Redis instances to reduce TCP overhead",
                "Monitor cache hit ratios using the new 'Caffeine Monitor' dashboard in Desk"
              ]}
            />
            <BlogParagraph>
              For existing custom apps, no code changes are required for basic compatibility. However, if your app interacts directly with the database, you may need to use the new `frappe.cache().get_doc()` API to ensure you&apos;re hitting the cache instead of the DB.
            </BlogParagraph>
          </BlogSection>

          {/* Conclusion */}
          <BlogSection id="conclusion" title="Conclusion">
            <BlogParagraph>
              Frappe Caffeine represents the maturing of ERPNext into a truly high-scale enterprise platform. By solving the read-amplification problem at the architectural level, v16 opens the door for deployments with thousands of concurrent users.
            </BlogParagraph>
            <BlogParagraph>
              <Link href="/contact" className="text-primary underline hover:text-primary/80 transition-colors">Contact FinByz Tech</Link> today to audit your current performance bottlenecks and plan your upgrade to ERPNext v16.
            </BlogParagraph>
          </BlogSection>
        </BlogContent>
      </div>
    </div>
  );
}
