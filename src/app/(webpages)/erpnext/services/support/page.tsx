'use client';

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import { CheckCircle, Headphones, Shield, Clock, Users, Zap, Award} from 'lucide-react';
import { Phone, Mail, MessageCircle, Monitor } from "lucide-react";
import Link from 'next/link';
import { color } from 'echarts';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Support Services"
        highlightWords={["Support", "Services"]}
        description="Round-the-clock expert assistance for your ERPNext system. Get technical support, troubleshooting, and guidance from certified ERPNext specialists to keep your business running smoothly."
        primaryButton={{
          text: 'Get Support Now',
          action: () => {
            window.location.href = '/contact';
          }
        }}
        secondaryButton={{
          text: 'View Support Plans',
          action: () => {
            const element = document.getElementById('support-plans');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        heroImage={{
          alt: 'ERPNext Support Services',
          src: '/images/erpnext-support.jpeg',
        }}
      />

      <Section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none"></div>

        <div className="container-custom py-12 md:py-16 relative z-10">
          
          {/* Introduction */}
          <div className="mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A5276] mb-6">
              Why Choose Finbyz ERPNext Support?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At <span className="font-semibold text-gray-900">Finbyz Tech</span>, we understand that your ERPNext system is the backbone of your business operations. Our dedicated support team provides <span className="font-semibold text-primary">24/7 technical assistance</span>, proactive monitoring, and expert guidance to ensure your ERP system runs flawlessly. Whether you need help with troubleshooting, user training, or system optimization, our certified ERPNext specialists are here to help.
            </p>
          </div>

         {/* Support Benefits */}
         
          {/* Support Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: Clock,
            title: "24/7 Availability",
            description: "Round-the-clock support for critical issues and emergencies",
            color: "#1A5276", // Blue
          },
          {
            icon: Users,
            title: "Expert Team",
            description: "Certified ERPNext professionals with 10+ years experience",
            color: "#E67E22", // Orange
          },
          {
            icon: Shield,
            title: "Guaranteed SLA",
            description: "Committed response times based on issue priority",
            color: "#27AE60", // Green
          },
          {
            icon: Zap,
            title: "Quick Resolution",
            description: "Fast troubleshooting and problem-solving approach",
            color: "#8E44AD", // Purple
          },
          {
            icon: Award,
            title: "Certified Partner",
            description: "Official Frappe and ERPNext certified partner",
            color: "#D35400", // Dark Orange
          },
          {
            icon: Headphones,
            title: "Multiple Channels",
            description: "Phone, email, chat, and remote support options",
            color: "#3498DB", // Light Blue
          },
        ].map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/40 group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: benefit.color }}
            >
              <benefit.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
</div>
</div>
      </Section>
      {/* Support Services Section */}
      <Section useGradient>
        <div className="py-8"> 
          <ResponsiveCardGrid 
            data={{
              title:'Our ERPNext Support Services',  
              variant: "iconCard",
              layout: "standard",
              showImage: false,
              cards: [
                {
                  id: 1,
                  title: "Technical Support",
                  description: "Expert assistance for technical issues, bug fixes, error resolution, and system troubleshooting.",
                  icon: "Wrench",
                  iconBg: "#1A5276",
                  iconColor: "#ffffff"
                },
                {
                  id: 2,
                  title: "User Training",
                  description: "Comprehensive training programs for your team to maximize ERPNext efficiency and productivity.",
                  icon: "BookOpen",
                  iconBg: "#FF8C00",
                  iconColor: "#ffffff"
                },
                {
                  id: 3,
                  title: "Performance Optimization",
                  description: "System tuning, database optimization, and performance enhancements for faster response times.",
                  icon: "TrendingUp",
                  iconBg: "#27AE60",
                  iconColor: "#ffffff"
                },
                {
                  id: 4,
                  title: "Version Upgrades",
                  description: "Seamless ERPNext version upgrades with testing, validation, and rollback support.",
                  icon: "RefreshCw",
                  iconBg: "#8E44AD",
                  iconColor: "#ffffff"
                },
                {
                  id: 5,
                  title: "Custom Development",
                  description: "Tailored ERPNext customizations including custom scripts, doctypes, and workflow automation.",
                  icon: "Code",
                  iconBg: "#E74C3C",
                  iconColor: "#ffffff"
                },
                {
                  id: 6,
                  title: "24/7 Monitoring",
                  description: "Proactive system monitoring with real-time alerts and performance tracking.",
                  icon: "Activity",
                  iconBg: "#3498DB",
                  iconColor: "#ffffff"
                }
              ]
            }}
          />
        </div>
      </Section>

      {/* Support Plans Section */}
      <Section id="support-plans">
  <div className="container-custom py-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#1A5276] mb-6 text-center">
      Choose Your Support Plan
    </h2>
    <p className="text-center text-gray-900 mb-12 text-lg max-w-3xl mx-auto">
      Flexible support plans designed to meet your business needs and budget. All plans include dedicated support managers and knowledge base access.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      {/* Basic Support */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Basic Support</h3>
          <p className="text-gray-900 mb-4">For small businesses</p>
          <div className="text-4xl font-bold text-[#1A5276] mb-2">₹15,000</div>
          <div className="text-gray-900">/month</div>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {[
            "Email support (24-48 hrs response)",
            "5 support tickets per month",
            "Monthly system health check",
            "Knowledge base access",
            "Bug fixes & patches",
            "Business hours support (9 AM - 6 PM)",
            "Quarterly training sessions"
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#1A5276] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button
  onClick={() => {
    const consultationSection = document.getElementById('erpnext-support');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
  className="mt-auto w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
>
  Get Started
</button>
      </div>

      {/* Professional Support */}
      <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            Most Popular
          </span>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Professional Support</h3>
          <p className="text-gray-900 mb-4">For growing businesses</p>
          <div className="text-4xl font-bold text-[#1A5276] mb-2">₹30,000</div>
          <div className="text-gray-900">/month</div>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {[
            "Priority email & phone support (4-8 hrs)",
            "15 support tickets per month",
            "Weekly system monitoring",
            "Dedicated support manager",
            "Custom report assistance",
            "Extended hours support (8 AM - 8 PM)",
            "Monthly training & consultation",
            "Performance optimization",
            "Version upgrades included"
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#1A5276] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button
  onClick={() => {
    const consultationSection = document.getElementById('erpnext-support');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
  className="mt-auto w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
>
  Get Started
</button>

      </div>

      {/* Enterprise Support */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#1A5276] mb-2">Enterprise Support</h3>
          <p className="text-gray-900 mb-4">For large organizations</p>
          <div className="text-4xl font-bold text-[#1A5276] mb-2">₹60,000</div>
          <div className="text-gray-900">/month</div>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {[
            "24/7 phone, email & chat support",
            "Unlimited support tickets",
            "Real-time system monitoring",
            "Dedicated technical team",
            "Custom development hours (10 hrs/mo)",
            "Priority bug fixes & features",
            "Weekly health reports",
            "Bi-weekly training sessions",
            "Disaster recovery support",
            "On-site support (as needed)",
            "Version upgrades & migrations"
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#1A5276] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button
  onClick={() => {
    const consultationSection = document.getElementById('erpnext-support');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
  className="mt-auto w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
>
  Get Started
</button>
      </div>
    </div>
  </div>
</Section>


      {/* Support Features List */}
      <Section useGradient>
        <div className="container-custom py-8">
        <div className="grid grid-cols-1 gap-12">
            <div className="animate-fade-up">
            <h3 className="text-3xl lg:text-3xl font-bold text-[#1A5276] mb-6">What's Included in Our Support ?</h3>
              <List
                title=""
                items={[
                  "Technical Troubleshooting: Quick resolution of system errors, bugs, and technical issues",
                  "User Assistance: Help with navigation, feature usage, and workflow optimization",
                  "Performance Tuning: Database optimization, query tuning, and system speed improvements",
                  "Security Updates: Regular security patches and vulnerability fixes",
                  "Backup Management: Automated backups and disaster recovery planning",
                  "Integration Support: Assistance with third-party integrations and API connections",
                  "Custom Development: Tailored solutions for unique business requirements",
                  "Documentation: Comprehensive guides and best practices documentation"
                ]}
              />
            </div>

            <div className="animate-fade-up">
            <h3 className="text-3xl lg:text-3xl font-bold text-[#1A5276] mb-6">Support Response Times :</h3>
              <List
                title=""
                items={[
                  "Critical Issues (P1): 1-2 hours response time - Business-critical systems down",
                  "High Priority (P2): 4-8 hours response time - Major functionality impaired",
                  "Medium Priority (P3): 24 hours response time - Minor issues affecting few users",
                  "Low Priority (P4): 48 hours response time - General questions and enhancements",
                  "After-Hours Support: Available for Enterprise plans with 24/7 coverage",
                  "Emergency Escalation: Direct line to senior technical team for critical issues"
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Support Channels */}
      

<Section>
  <div className="container-custom py-16">
    <h2 className="text-center font-bold text-3xl mb-4 animate-fade-in-up text-[#1A5276]">
      Multiple Ways to Reach Us
    </h2>
    <p className="text-center text-gray-700 mb-12 text-lg">
      Choose the support channel that works best for you
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: <Phone className="w-10 h-10 text-[#1A5276]" />,
          title: "Phone Support",
          description: "Speak directly with our support team",
          contact: "+91 90999 68890",
          // availability: "24/7 for Enterprise",
          bg: "#E3F2FD",
        },
        {
          icon: <Mail className="w-10 h-10 text-[#1A5276]" />,
          title: "Email Support",
          description: "Detailed support with documentation",
          contact: "support@finbyz.tech",
          // availability: "24-hour response",
          bg: "#E8F5E9",
        },
        {
          icon: <MessageCircle className="w-10 h-10 text-[#1A5276]" />,
          title: "Live Chat",
          description: "Quick assistance for immediate questions",
          contact: "Available on website",
          // availability: "9 AM - 6 PM IST",
          bg: "#FFF3E0",
        },
        {
          icon: <Monitor className="w-10 h-10 text-[#1A5276]" />,
          title: "Remote Support",
          description: "Direct system access for faster resolution",
          contact: "Schedule via portal",
          // availability: "By appointment",
          bg: "#F3E5F5",
        },
      ].map((channel, idx) => (
        <div
          key={idx}
          className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1A5276]/40 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-inner">
              {channel.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {channel.title}
          </h3>
          <p className="text-gray-900 text-sm mb-3">
            {channel.description}
          </p>
          <p className="text-[#1A5276] font-semibold text-sm mb-2">
            {channel.contact}
          </p>
          <p className="text-gray-500 text-xs">
            {/* {channel.availability} */}
          </p>
        </div>
      ))}
    </div>
  </div>
</Section>


      {/* Why Choose Finbyz */}
      <Section useGradient>
        <div className="container-custom py-8 text-justify">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A5276] mb-8 text-center">
            Why Choose Finbyz for ERPNext Support?
          </h2>
          <div className="space-y-4 animate-fade-in-up">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
              When you choose <span className="font-semibold text-gray-900">Finbyz Tech</span> for ERPNext support, you're partnering with certified ERPNext specialists who have successfully supported <span className="font-semibold text-primary">200+ implementations</span> across diverse industries. Our team doesn't just fix issues—we help you optimize your ERP system for maximum efficiency and ROI.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              As an <Link href="/erpnext-certified-partner" className="text-primary underline hover:text-primary/80">official Frappe certified partner</Link>, we have direct access to the ERPNext development team, ensuring faster resolution of complex issues and early access to new features. Our support engineers are trained on the latest ERPNext versions and best practices.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              We understand that downtime costs money. That's why our support model focuses on <span className="font-semibold text-primary">proactive monitoring and preventive maintenance</span> rather than reactive troubleshooting. We identify potential issues before they impact your business operations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our support extends beyond technical assistance. We provide strategic guidance on <Link href="/erp-software" className="text-primary underline hover:text-primary/80">ERP best practices</Link>, help with <Link href="/human-resource-system" className="text-primary underline hover:text-primary/80">HR system optimization</Link>, and ensure your ERP investment delivers continuous value to your organization.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Whether you're running ERPNext for <Link href="/erp-for-manufacturing-industry" className="text-primary underline hover:text-primary/80">manufacturing</Link>, <Link href="/erp-for-trading-industry" className="text-primary underline hover:text-primary/80">trading</Link>, <Link href="/erp-for-logistics-industry" className="text-primary underline hover:text-primary/80">logistics</Link>, or any other industry, our specialized support team understands your unique business processes and challenges.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="py-6">
          <CTA
            data={{
              subheading: {
                text: 'Need Expert Support?',
                icon: 'Headphones',
              },
              title: 'Get Professional ERPNext Support Today',
              highlightText: 'ERPNext Support',
              description: 'Contact our support team to discuss your requirements and find the perfect support plan for your business.',
              primaryButton: {
                text: 'Contact Support',
                icon: 'Phone',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'View All Services',
                icon: 'ArrowRight',
                action: () => {
                  window.location.href = '/services';
                },
              },
              trustIndicator: {
                text: 'Supporting 200+ businesses globally',
                icon: 'Award',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}