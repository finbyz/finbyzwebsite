import { Building, Store, Server } from "lucide-react";
import DynamicHero from "@/components/sections/dynamic-hero";
import Section from "@/components/sections/Section";
import { List } from "@/components/sections/list";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import BusinessSlider from "@/components/sections/business-slider";

export default function SmoorCaseStudyPage() {
  return (
    <>
      <DynamicHero
        headline="ERPNext Performance Optimization Case Study: SMOOR Chocolates"
        highlightWords={["30x", "Performance Optimization"]}
        description="From 15 Minutes to Under 30 Seconds: Transforming ERPNext Performance at SMOOR Chocolates"
        backgroundColor="bg-gradient-to-br from-slate-900 via-[#1A5276] to-slate-900"
        heroImage={{
          src: "/images/case-study-smoor-chocolates.svg",
          alt: "ERPNext Performance Optimization Case Study - SMOOR Chocolates",
        }}
        primaryButton={{
          text: "Read Full Case Study",
          action: "#content",
        }}
        secondaryButton={{
          text: "Talk to an Expert",
          action: "/contact",
        }}
        features={[
          {
            icon: Building,
            title: "CLIENT",
            description: "SMOOR Chocolates, Bengaluru",
          },
          {
            icon: Store,
            title: "INDUSTRY",
            description: "Premium F&B  Retail  E-commerce",
          },
          {
            icon: Server,
            title: "PLATFORM",
            description: "ERPNext v13 on AWS",
          },
        ]}
      />

      <section id="content">
        <div className="container-custom mx-auto py-12 md:py-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12">
            FinByz Tech, a Certified ERPNext Partner specializing in Performance Engineering, partnered with SMOOR Chocolates to address critical performance bottlenecks within their ERPNext v13 instance. This case study details how a focused, one-month optimization effort delivered a 30x improvement in transaction speed, deep SQL-level optimization, and production-grade infrastructure tuning, ensuring SMOOR&apos;s operational backbone could support their rapid growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">The Client</h3>
              <p className="text-gray-800 font-medium">SMOOR Chocolates, Bengaluru</p>
              <p className="text-sm text-gray-600 mt-2">Founded in 2015, SMOOR Chocolates has rapidly ascended to become India&apos;s premier premium couverture chocolate brand, serving clients ranging from individual consumers to large corporations including a significant Rs 2.5 Cr order from Titan.</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h3 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-2">The Engagement</h3>
              <p className="text-gray-800 font-medium">Duration: 1 Month</p>
              <p className="text-sm text-gray-600 mt-2">Focus: Performance Optimization for a scaling chocolatier&apos;s ERPNext v13 instance following their acquisition by Rebel Foods in 2022.</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-2">Why Not Upgrade?</h3>
              <p className="text-sm text-gray-600 mt-2">SMOOR&apos;s ERPNext v13 was heavily customized by their previous partner. A direct upgrade to v14 or v15 risked breaking essential workflows. The strategic decision: optimize the existing instance to peak performance first.</p>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-gray-50 py-16">
        <div className="container-custom mx-auto">
          <List
            title="The Problem"
            items={[
              "<strong>Crippling Transaction Latency:</strong> Saving a single Purchase Order with 30-35 line items took approximately 15 minutes. Similar delays plagued Sales Orders, Purchase Receipts, and Sales Invoices.",
              "<strong>Productivity Loss:</strong> Procurement, dispatch, and accounts teams lost valuable productive hours daily due to system slowdowns.",
              "<strong>Operational Risk:</strong> A critical disk-full incident on the AWS instance threatened a complete operational shutdown.",
              "<strong>Database Inefficiency:</strong> Unoptimized SQL queries consumed excessive CPU resources, leaving insufficient headroom for concurrent users.",
              "<strong>Code Vulnerabilities:</strong> Custom code with nested loop patterns caused thousands of inefficient database calls per transaction.",
            ]}
            iconColor="text-red-500"
          />
        </div>
      </Section>

      <Section className="py-16">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-8">Measured Impact</h2>
          <p className="text-gray-600 mb-8">FinByz Tech implemented a rigorous performance optimization process, resulting in dramatic improvements across key transaction types:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A5276] text-white">
                  <th className="p-4 text-left font-semibold">Transaction</th>
                  <th className="p-4 text-left font-semibold">Before</th>
                  <th className="p-4 text-left font-semibold">After</th>
                  <th className="p-4 text-left font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purchase Order (30-35 items)", "~15 min", "< 25 sec", "36x faster"],
                  ["Sales Order", "~8 min", "< 20 sec", "24x faster"],
                  ["Purchase Receipt / GRN", "~10 min", "< 20 sec", "30x faster"],
                  ["Sales Invoice", "~6 min", "< 15 sec", "24x faster"],
                  ["Purchase Invoice", "~7 min", "< 15 sec", "28x faster"],
                  ["Stock Entry", "~5 min", "< 10 sec", "30x faster"],
                ].map(([transaction, before, after, improvement], i) => (
                  <tr key={transaction} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium text-gray-800">{transaction}</td>
                    <td className="p-4 text-red-600 font-semibold">{before}</td>
                    <td className="p-4 text-green-600 font-semibold">{after}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                        {improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 py-16">
        <div className="container-custom mx-auto">
          <ResponsiveCardGrid
            data={{
              title: "Our Optimization Approach",
              subtitle: "Over a concentrated one-month period, FinByz Tech employed a systematic, six-step performance engineering methodology addressing every layer of the technology stack:",
              variant: "iconCard",
              cards: [
                {
                  id: 1,
                  title: "CPU & Query Profiling",
                  description: "In-depth analysis of CPU utilization attributed to individual SQL queries. A comprehensive report detailing high-CPU queries was provided to SMOOR's IT team.",
                  icon: "Activity",
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: "SQL Indexing & Partitioning",
                  description: "Optimized slow-performing queries through the strategic implementation of SQL indexing and table partitioning for the large, complex database.",
                  icon: "Database",
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: "Custom Code Optimization",
                  description: "Identified and refactored custom code exhibiting inefficient loop-within-loop patterns, achieving the same business logic with vastly improved execution times.",
                  icon: "Code",
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: "Query Caching",
                  description: "Implemented caching mechanisms for frequently executed queries called multiple times within short intervals, eliminating redundant database calls during single transactions.",
                  icon: "Zap",
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: "SQL Configuration Tuning",
                  description: "Fine-tuned MariaDB/MySQL configurations to maximize utilization of available RAM, optimizing buffer pools, query cache settings, and connection limits.",
                  icon: "Settings",
                  iconColor: "#ffffff",
                  iconBg: "#E67E22",
                },
                {
                  id: 6,
                  title: "Gunicorn Worker Optimization",
                  description: "Rebalanced Gunicorn worker processes to efficiently leverage all available CPU cores, significantly enhancing handling of concurrent requests and overall system throughput.",
                  icon: "Server",
                  iconColor: "#ffffff",
                  iconBg: "#C0392B",
                },
              ],
            }}
          />
        </div>
      </Section>

      <Section className="py-16">
        <div className="container-custom mx-auto">
          <Benefits
            data={{
              title: "Results at a Glance",
              subtitle: "The numbers speak for themselves",
              benefits: [
                {
                  number: 30,
                  suffix: "x",
                  label: "Average Improvement",
                  header: "Transaction Speed",
                  description: "Average transaction speed improvement across all document types, restoring productive hours for every team.",
                  icon: "Zap",
                  palette: { iconBg: "#1A5276", iconColor: "#fff" },
                },
                {
                  number: 30,
                  suffix: "s",
                  label: "Max Save Time",
                  header: "All Transactions Under",
                  description: "Every critical business transaction now completes in under 30 seconds, from purchase orders to sales invoices.",
                  icon: "Clock",
                  palette: { iconBg: "#FF8C00", iconColor: "#fff" },
                },
                {
                  number: 0,
                  suffix: "",
                  label: "Operational Downtime",
                  header: "Zero Downtime",
                  description: "Rapid crisis response ensured zero operational downtime during the critical disk-full emergency incident.",
                  icon: "Shield",
                  palette: { iconBg: "#27AE60", iconColor: "#fff" },
                },
                {
                  number: 1,
                  suffix: " Month",
                  label: "Project Timeline",
                  header: "Delivered In",
                  description: "Complete end-to-end performance engineering engagement delivered within a single month.",
                  icon: "Target",
                  palette: { iconBg: "#8E44AD", iconColor: "#fff" },
                },
              ],
            }}
          />
        </div>
      </Section>

      <Section className="bg-gray-50 py-16">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">Crisis Response: Disk-Full Emergency</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When SMOOR&apos;s AWS server disk became full, halting all operations, FinByz Tech responded immediately. Without adhering to standard ticket SLAs, our team proactively cleared unnecessary activity logs and non-critical data, restoring system functionality. This rapid intervention ensured <strong>zero operational downtime</strong> while SMOOR arranged for an AWS database storage upgrade.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This swift and decisive action exemplifies the level of commitment FinByz Tech brings to every client engagement.
          </p>
        </div>
      </Section>

      <Section className="py-16">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            For a premium brand like SMOOR Chocolates, where timely dispatches and efficient order processing are paramount, system downtime translates directly to lost business. FinByz Tech&apos;s performance engineering initiative did more than just fix a slow ERP system; it restored valuable operational hours for SMOOR&apos;s teams and established a robust performance baseline capable of scaling with their continued business growth.
          </p>
          <div className="border-t pt-6 text-center">
            <p className="font-bold text-gray-800">Team FinByz Tech</p>
            <p className="text-sm text-gray-500 italic">ERPNext Performance Engineering  Custom Development  24x7 Support</p>
            <p className="font-bold text-[#1A5276] mt-4">FINBYZ TECH PVT LTD</p>
            <p className="text-sm text-gray-500 italic">Certified ERPNext Partner  10+ Years  200+ Projects  12+ Countries</p>
            <p className="text-sm text-blue-600 mt-2">www.finbyz.tech</p>
            <p className="text-sm text-gray-500">ERPNext  Frappe  AI Automation  Custom Dev</p>
          </div>
        </div>
      </Section>

      <CTA
        data={{
          title: "Ready to Scale with Smart Tech? Let's Talk.",
          description: "Transform your business processes with AI-powered automation and expert implementation.",
          subheading: { text: "Talk to our Experts", icon: "CalendarCheck" },
          primaryButton: { text: "Book Demo", icon: "CalendarCheck", action: "/contact" },
          secondaryButton: { text: "Get Proposal", icon: "FileText", action: "/contact" },
          trustIndicator: { text: "Trusted by 100+ businesses", icon: "CalendarCheck" },
        }}
      />

      <BusinessSlider />
    </>
  );
}
